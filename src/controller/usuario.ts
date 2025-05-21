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

    const usuario = await Usuario.create(reqBody.nome);

    return await usuario.cadastrar(reqBody.senha);
}

const login = async (request: FastifyRequest, _reply: FastifyReply): Promise<QueryReturn> => {
    const reqBody = request.body as { nome: string, senha: string };

    const usuario = await Usuario.create(reqBody.nome);
    const login = await usuario.login(reqBody.senha)

    let result: QueryReturn;

    if(login.success){
        result = { ...login, usuario: usuario };
    }else{
        result = login;
    }

    return result;
}

const excluir = async (request: FastifyRequest, _reply: FastifyReply): Promise<QueryReturn> => {
    const reqBody = request.body as { nome: string };

    const usuario = await Usuario.create(reqBody.nome);

    return await usuario.deletar();
}

const editar = async (request: FastifyRequest, _reply: FastifyReply): Promise<QueryReturn> => {
    const reqBody = request.body as { nome: string, campos: object };

    const usuario = await Usuario.create(reqBody.nome);

    return await usuario.editar(reqBody.campos);
}

export { cadastrar, login, excluir, editar };