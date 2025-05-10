import { PrismaClient } from "../../../generated/prisma";
import { createHash } from "crypto";
import Dia from "./Dia";
import Prato from "./Prato";
import type { UsuarioQueryResult, QueryReturn, ErrorMsgObj } from "../../types";

export default class Usuario{
    senha: string;
    pratos: Prato[];
    dias: Dia[];
    prisma: PrismaClient;

    constructor(public nome: string){
        this.senha = '';
        this.pratos = [];
        this.dias = [];

        this.prisma = new PrismaClient();
    }

    async usuarioExiste(){
        const usuarioExiste = await this.prisma.usuario.findFirst({
            where: {
                nome: this.nome
            }
        });

        if(usuarioExiste){
            return true;
        }else{
            return false;
        }
    }

    async login(senha: string): Promise<QueryReturn>{
        const senhaHash = createHash('md5').update(senha).digest('hex');
        let result: ErrorMsgObj | UsuarioQueryResult;
        let success: boolean = false;

        if(await this.usuarioExiste()){
            const usuario = await this.prisma.usuario.findUnique(
                {
                    where: {
                        nome: this.nome,
                        senha: senhaHash
                    }
                }
            );
            if(usuario){
                result = usuario;
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
                result = await this.prisma.usuario.create({
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
            const deletarUsuario = await this.prisma.usuario.delete({
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
            const usuarioExiste = await this.prisma.usuario.findFirst({
                where: { nome: campos.nome }
            });
            if(usuarioExiste){
                result = { msg: `Já existe um usuário de nome '${campos.nome}'` };
            }
        }

        const editarUsuario = await this.prisma.usuario.update({
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