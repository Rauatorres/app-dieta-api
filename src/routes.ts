import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { cadastrar, editar, excluir, login } from "./controller/usuario";
import Usuario from "./controller/class/Usuario";
import { addPrato, editarPrato, excluirPrato } from "./controller/pratos";

export default (fastify: FastifyInstance) => {
    fastify.get('/', (_request: FastifyRequest, _reply: FastifyReply) => {
        return 'Funcionando';
    });

    fastify.post('/cadastrar', async (request: FastifyRequest, reply: FastifyReply) => {
        return await cadastrar(request, reply);
    });

    fastify.post('/login', async (request: FastifyRequest, reply: FastifyReply) => {
        return await login(request, reply);
    });

    fastify.delete('/excluir', async (request: FastifyRequest, reply: FastifyReply) => {
        return await excluir(request, reply);
    });

    fastify.put('/editar', async (request: FastifyRequest, reply: FastifyReply) => {
        return await editar(request, reply);
    });

    fastify.post('/novo/prato', async (request: FastifyRequest, reply: FastifyReply) => {
        return await addPrato(request, reply);
    });

    fastify.delete('/excluir/prato', async (request: FastifyRequest, reply: FastifyReply) => {
        return await excluirPrato(request, reply);
    });

    fastify.put('/editar/prato', async (request: FastifyRequest, reply: FastifyReply) => {
        return await editarPrato(request, reply);
    });

    fastify.post('/teste', async (_request: FastifyRequest, _reply: FastifyReply) => {
        const usuario = new Usuario('teste');
        await usuario.login('123');
        console.log(usuario);

        const res = await fetch('http://localhost:3000/editar/prato', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario: usuario.nome,
                prato: 0,
                campos: {
                    nome: 'prato editado'
                }
            })
        });
        return res;
    });

};