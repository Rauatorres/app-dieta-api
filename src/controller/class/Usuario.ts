import { PrismaClient } from "../../../generated/prisma";
import { createHash } from "crypto";
import Dia from "./Dia";
import Prato from "./Prato";
import { UsuarioQueryResult, QueryReturn } from "../../types";

export default class Usuario{
    pratos: Prato[];
    dias: Dia[];
    prisma: PrismaClient;

    constructor(public nome: string, public senha: string){
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

    async login(): Promise<QueryReturn>{
        const senhaHash = createHash('md5').update(this.senha).digest('hex');
        let result: { msg: string } | UsuarioQueryResult;
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

    async cadastrar(): Promise<QueryReturn>{
        const senhaHash = createHash('md5').update(this.senha).digest('hex');
        let success: boolean = false;
        let result: { msg: string } | UsuarioQueryResult = { msg: 'O usuário já existe' };

        const usuarioVerificado = await this.usuarioExiste();

        if(!usuarioVerificado){
            if(this.nome != '' && this.senha != ''){
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
}