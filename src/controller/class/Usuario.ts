import { PrismaClient } from "../../../generated/prisma";
import { createHash } from "crypto";
import Dia from "./Dia";
import Prato from "./Prato";
import { UsuarioQueryResult } from "../../types";

export default class Usuario{
    pratos: Prato[];
    dias: Dia[];
    logado: boolean;
    prisma: PrismaClient;

    constructor(public nome: string, public senha: string){
        this.logado = false;
        this.pratos = [];
        this.dias = [];

        this.prisma = new PrismaClient();
    }

    async login(){
        const senhaHash = createHash('md5').update(this.senha).digest('hex');

        if(!this.logado){
            const usuario = await this.prisma.usuario.findUnique(
                {
                    where: {
                        nome: this.nome,
                        senha: senhaHash
                    }
                }
            );
            this.logado = true;
            return usuario;
        }else{
            return false;
        }
    }

    async cadastrar(){
        const senhaHash = createHash('md5').update(this.senha).digest('hex');
        let success: boolean = false;
        let result: { msg: string } | UsuarioQueryResult = { msg: 'O usuário já existe' };

        const usuarioVerificado = await this.prisma.usuario.findFirst({
            where: {
                nome: this.nome
            }
        });

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