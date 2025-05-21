import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { cadastrar, editar, excluir, login } from "./controller/usuario";
// import Usuario from "./controller/class/Usuario";
import { addPrato, editarPrato, excluirPrato } from "./controller/pratos";
import { addDia, adicionarPratoAoDia, editarDia, excluirDia, removerPratoDoDia } from "./controller/dias";

async function controllerFunctionSeParamPratoOuDia(
    params: { objeto: string }, 
    callback: {
        pratoFunction: Function,
        diaFunction: Function
    },
    route: {
        request: FastifyRequest,
        reply: FastifyReply
    }
){
    let returnFunction: Function; 
    switch(params.objeto){
        case 'prato':
            returnFunction = callback.pratoFunction;
            break;
        case 'dia':
            returnFunction = callback.diaFunction;
            break;
        default:
            returnFunction = async (_request: FastifyRequest, _reply: FastifyReply) => {
                return 'erro';
            }
    }
    return await returnFunction(route.request, route.reply);
}

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

    fastify.post('/novo/:objeto', async (request: FastifyRequest, reply: FastifyReply) => {
        const reqParams = request.params as { objeto: string };
        return await controllerFunctionSeParamPratoOuDia(reqParams, {
            pratoFunction: addPrato,
            diaFunction: addDia
        }, {
            request: request,
            reply: reply
        });
    });

    fastify.delete('/excluir/:objeto', async (request: FastifyRequest, reply: FastifyReply) => {
        const reqParams = request.params as { objeto: string };
        return await controllerFunctionSeParamPratoOuDia(reqParams, {
            pratoFunction: excluirPrato,
            diaFunction: excluirDia
        }, {
            request: request,
            reply: reply
        });
    });

    fastify.put('/editar/:objeto', async (request: FastifyRequest, reply: FastifyReply) => {
        const reqParams = request.params as { objeto: string };
        return await controllerFunctionSeParamPratoOuDia(reqParams, {
            pratoFunction: editarPrato,
            diaFunction: editarDia
        }, {
            request: request,
            reply: reply
        });
    });

    fastify.post('/adicionarPratoAoDia', async (request: FastifyRequest, reply: FastifyReply) => {
        return await adicionarPratoAoDia(request, reply);
    });

    fastify.put('/removerPratoDoDia', async (request: FastifyRequest, reply: FastifyReply) => {
        return await removerPratoDoDia(request, reply);
    });

    // fastify.post('/teste', async (_request: FastifyRequest, _reply: FastifyReply) => {
    //     const res = await fetch('http://localhost:3000/adicionarPratoAoDia', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             idPrato: 2,
    //             idDia: 4
    //         })
    //     });
    //     return res;
    // });
};