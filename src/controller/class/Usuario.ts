import { createHash } from "crypto";
import Dia from "./Dia";
import Prato from "./Prato";
import type { PratoQueryResult, DiaQueryResult } from "../../types";
import prisma from "./prismaConnection";

export default class Usuario{
    pratos: Prato[];
    dias: Dia[];

    private constructor(public nome: string){
        this.pratos = [];
        this.dias = [];
    }

    static async create(nome: string){
        const usuario = new Usuario(nome);
        await usuario.init();
        return usuario;
    }

    private async usuarioExiste(){
        const usuario = await prisma.usuario.findFirst({
            where: {
                nome: this.nome
            }
        });

        if(usuario){
            return usuario;
        }else{
            return false;
        }
    }

    private async init(): Promise<void>{
        if(await this.usuarioExiste()){
            const usuario = await prisma.usuario.findUnique(
                {
                    where: {
                        nome: this.nome
                    },
                    include: {
                        pratos: true,
                        dias: true
                    }
                }
            );

            if(usuario){
                let pratos: PratoQueryResult[] = usuario.pratos;
                let dias: DiaQueryResult[] = usuario.dias;
                
                pratos.forEach(pratoObj => {
                    const { id, nome, categoria, ingredientes, preparo } = pratoObj;
    
                    const prato = new Prato(nome, categoria, ingredientes || undefined, preparo || undefined);
                    prato.id = id;
    
                    this.pratos.push(prato);
                });

                dias.forEach(async diaObj => {
                    const { id, nome } = diaObj;
    
                    const dia = await Dia.create(nome);
                    dia.id = id;
    
                    this.dias.push(dia);
                });

            }
            
        }
    }

    async login(senha: string){
        const senhaHash = createHash('md5').update(senha).digest('hex');
        let result: object;
        // let success: boolean = false;

        if(await this.usuarioExiste()){
            const usuario = await prisma.usuario.findUnique(
                {
                    where: {
                        nome: this.nome,
                        senha: senhaHash
                    }
                }
            );
            if(usuario){
                result = usuario;
            }else{
                result = { error: 'Senha incorreta' };
            }
        }else{
            result = { error: 'Usuário não encontrado' };
        }

        // return { success: success, result: result };
        return result;
    }

    async cadastrar(senha: string){
        const senhaHash = createHash('md5').update(senha).digest('hex');
        // let success: boolean = false;
        let result: object = { error: 'O usuário já existe' };

        const usuarioVerificado = await this.usuarioExiste();

        if(!usuarioVerificado){
            if(this.nome != '' && senha != ''){
                const usuarioCadastrado = await prisma.usuario.create({
                    data: {
                        nome: this.nome,
                        senha: senhaHash,
                    }
                });
                if (usuarioCadastrado){
                    result = usuarioCadastrado;
                }else{
                    result = { error: 'O usuário não pode ser cadastrado' };
                }
                // success = true;
            }else{
                result = { error: 'O nome de usuário e a senha não podem ser vazios' };
            }
        }

        return result;
    }

    async deletar(){
        // let success: boolean = false;
        let result: object;

        if(await this.usuarioExiste()){
            const deletarUsuario = await prisma.usuario.delete({
                where: { nome: this.nome }
            });
            if(deletarUsuario){
                result = deletarUsuario;
            }else{
                result = { error: 'O usuário não pode ser excluído' };
            }
        }else{
            result = { error: 'Usuário não encontrado' };
        }

        // return { success: success, result: result };
        return result;
    }

    async editar(campos: object){
        // let success: boolean = false;
        let result: object = { error: 'Não foi possível atualizar o usuário' };
        
        if('nome' in campos && typeof campos.nome == 'string'){
            const usuarioExiste = await prisma.usuario.findFirst({
                where: { nome: campos.nome }
            });
            if(usuarioExiste){
                result = { error: `Já existe um usuário de nome '${campos.nome}'` };
            }
        }

        const editarUsuario = await prisma.usuario.update({
            where: { nome: this.nome },
            data: campos
        })

        if(editarUsuario){
            // success = true;
            // result = { msg: 'Usuário atualizado com sucesso' };
            result = editarUsuario;
        }

        // return { success: success, result: result };
        return result;
    }
}
