import { FastifyReply, FastifyRequest } from "fastify";
import Dia from "./class/Dia";
import Usuario from "./class/Usuario";

const addDia = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { nome: string, usuario: string };
    
    const usuario = await Usuario.create(reqBody.usuario);
    const dia = await Dia.create(reqBody.nome);

    return await dia.criar(usuario);
};

const excluirDia = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { id: number, usuario: string };

    const usuario = await Usuario.create(reqBody.usuario);
    const dia = usuario.dias.find((dia, _index, _array) => {
        return dia.id == reqBody.id;
    });

    return await dia!.excluir();
};

const editarDia = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { id: number, usuario: string , dados: object };

    const usuario = await Usuario.create(reqBody.usuario);
    const dia = usuario.dias.find((dia, _index, _array) => {
        return dia.id == reqBody.id;
    });

    return dia!.editar(reqBody.dados);
};

const adicionarPratoAoDia = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { idPrato: number, idDia: number };

    const dia = await Dia.create(reqBody.idDia);

    return dia.adicionarPrato(reqBody.idPrato);
};

const removerPratoDoDia = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { idPratoDia: number, idDia: number };

    const dia = await Dia.create(reqBody.idDia);

    return dia.removerPrato(reqBody.idPratoDia);
};

export { addDia, excluirDia, editarDia, adicionarPratoAoDia, removerPratoDoDia };