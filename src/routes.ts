import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { cadastrar, editar, excluir, login } from "./controller/usuario";

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

    fastify.post('/excluir', async (request: FastifyRequest, reply: FastifyReply) => {
        return await excluir(request, reply);
    });

    fastify.post('/editar', async (request: FastifyRequest, reply: FastifyReply) => {
        return await editar(request, reply);
    });
};