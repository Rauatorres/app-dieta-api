import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { cadastrar } from "./controller/usuario";

export default (fastify: FastifyInstance) => {
    fastify.get('/', (_request: FastifyRequest, _reply: FastifyReply) => {
        return 'Funcionando';
    });

    fastify.post('/cadastrar', async (request: FastifyRequest, reply: FastifyReply) => {
        return await cadastrar(request, reply);
    });
};