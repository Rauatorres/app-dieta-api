import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default (fastify: FastifyInstance) => {
    fastify.get('/', (_request: FastifyRequest, _reply: FastifyReply) => {
        return 'Funcionando';
    });
};