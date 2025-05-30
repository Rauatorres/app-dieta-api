import { FastifyReply, FastifyRequest } from "fastify";
import Usuario from "./class/Usuario";
import Prato from "./class/Prato";

const excluirPrato = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { usuario: string, id: number };

    console.log(reqBody);
    
    if('usuario' in reqBody || 'id' in reqBody){

        if(typeof reqBody.usuario == 'string' && typeof reqBody.id == 'number'){
            const usuario = await Usuario.create(reqBody.usuario);

            const pratos = usuario.pratos
            for(let i = 0; i < pratos.length; i++){
                if(pratos[i].id == reqBody.id){
                    await usuario.pratos[i].excluir();
                    usuario.pratos.splice(i, 1);
                    break;
                }
            }
            return usuario;
        }

        return { error: 'Algum campo possui valor inválido' }
    }

    return { error: 'Está faltando algum campo' };
};

const addPrato = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { 
        usuario: string,
        nome: string, 
        categoria: string, 
        ingredientes?: string, 
        preparo?: string
    };

    const { nome, categoria, ingredientes, preparo, usuario } = reqBody;
    
    const prato = new Prato(nome, categoria, ingredientes, preparo);
    const usuarioLogado = await Usuario.create(usuario);

    await prato.criar(usuarioLogado);

    return usuarioLogado;
}

const editarPrato = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { usuario: string, prato: number, campos: object };

    if ('usuario' in reqBody && 'prato' in reqBody && 'campos' in reqBody
        && typeof reqBody.usuario == 'string' && typeof reqBody.prato == 'number' && typeof reqBody.campos == 'object'
    ){
        const usuario = await Usuario.create(reqBody.usuario);
        
        const prato = usuario.pratos[reqBody.prato];

        const editarPrato = await prato.editar(reqBody.campos);

        return editarPrato;
    }

    return { error: 'Campo inválido!' }
}

export { addPrato, excluirPrato, editarPrato };