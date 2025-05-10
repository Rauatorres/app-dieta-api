import { FastifyReply, FastifyRequest } from "fastify";
import Usuario from "./class/Usuario";
import type { ApiReturn } from "../types";


const cadastrar = async (request: FastifyRequest, _reply: FastifyReply): Promise<ApiReturn> => {
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

export { cadastrar };