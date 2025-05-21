import { createHash } from "crypto";
import Dia from "./Dia";
import Prato from "./Prato";
import type { UsuarioQueryResult, QueryReturn, ErrorMsgObj, PratoQueryResult, DiaQueryResult } from "../../types";
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

    async login(senha: string): Promise<QueryReturn>{
        const senhaHash = createHash('md5').update(senha).digest('hex');
        let result: ErrorMsgObj | UsuarioQueryResult;
        let success: boolean = false;

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
                result = { msg: 'Usuário logado com sucesso' };
                success = true;
            }else{
                result = { msg: 'Senha incorreta' };
            }
        }else{
            result = { msg: 'Usuário não encontrado' };
        }

        return { success: success, result: result };
    }

    async cadastrar(senha: string): Promise<QueryReturn>{
        const senhaHash = createHash('md5').update(senha).digest('hex');
        let success: boolean = false;
        let result: ErrorMsgObj | UsuarioQueryResult = { msg: 'O usuário já existe' };

        const usuarioVerificado = await this.usuarioExiste();

        if(!usuarioVerificado){
            if(this.nome != '' && senha != ''){
                result = await prisma.usuario.create({
                    data: {
                        nome: this.nome,
                        senha: senhaHash,
                    }
                });
                success = true;
            }else{
                result = { msg: 'O nome de usuário e a senha não podem ser vazios' };
            }
        }

        return { success: success, result: result};
    }

    async deletar(): Promise<QueryReturn>{
        let success: boolean = false;
        let result: { msg: string };

        if(await this.usuarioExiste()){
            const deletarUsuario = await prisma.usuario.delete({
                where: { nome: this.nome }
            });
            if(deletarUsuario){
                result = { msg: 'Usuário excluido com sucesso' };
                success = true;
            }else{
                result = { msg: 'O usuário não pode ser excluído' };
            }
        }else{
            result = { msg: 'Usuário não encontrado' };
        }

        return { success: success, result: result };
    }

    async editar(campos: object): Promise<QueryReturn>{
        let success: boolean = false;
        let result: { msg: string } = { msg: 'Não foi possível atualizar o usuário' };
        
        if('nome' in campos && typeof campos.nome == 'string'){
            const usuarioExiste = await prisma.usuario.findFirst({
                where: { nome: campos.nome }
            });
            if(usuarioExiste){
                result = { msg: `Já existe um usuário de nome '${campos.nome}'` };
            }
        }

        const editarUsuario = await prisma.usuario.update({
            where: { nome: this.nome },
            data: campos
        })

        if(editarUsuario){
            success = true;
            result = { msg: 'Usuário atualizado com sucesso' };
        }

        return { success: success, result: result };
    }
}