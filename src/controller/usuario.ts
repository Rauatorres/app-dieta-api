import { FastifyReply, FastifyRequest } from "fastify";
import Usuario from "./class/Usuario";
// import type { QueryReturn } from "../types";

const cadastrar = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { nome: string, senha: string };

    if(!('nome' in reqBody)){
        // return { success: false,  result: { msg: 'Nome de usuário não reconhecido!' } };
        return { error: "Nome de usuário não reconhecido!" };
    }
    if(!('senha' in reqBody)){
        // return { success: false,  result: { msg: 'Senha não reconhecida!' } };
        return { error: "Senha não reconhecida!" };
    }

    const usuario = await Usuario.create(reqBody.nome);

    return await usuario.cadastrar(reqBody.senha);
}

const login = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { nome: string, senha: string };

    const usuario = await Usuario.create(reqBody.nome);
    const login = await usuario.login(reqBody.senha)

    return login;
}

const excluir = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { nome: string };

    const usuario = await Usuario.create(reqBody.nome);

    return await usuario.deletar();
}

const editar = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { nome: string, campos: object };

    const usuario = await Usuario.create(reqBody.nome);

    return await usuario.editar(reqBody.campos);
}

export { cadastrar, login, excluir, editar };