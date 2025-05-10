import { FastifyReply, FastifyRequest } from "fastify";
import Usuario from "./class/Usuario";
import type { QueryReturn } from "../types";


const cadastrar = async (request: FastifyRequest, _reply: FastifyReply): Promise<QueryReturn> => {
    const reqBody = request.body as { nome: string, senha: string };

    if(!('nome' in reqBody)){
        return { success: false,  result: { msg: 'Nome de usuário não reconhecido!' } };
    }
    if(!('senha' in reqBody)){
        return { success: false,  result: { msg: 'Senha não reconhecida!' } };
    }


    const usuario = new Usuario(reqBody.nome, reqBody.senha);

    return await usuario.cadastrar();
}

const login = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { nome: string, senha: string };

    const usuario = new Usuario(reqBody.nome, reqBody.senha);

    return await usuario.login();
}

export { cadastrar, login };