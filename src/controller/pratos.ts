import { FastifyReply, FastifyRequest } from "fastify";
import Usuario from "./class/Usuario";
import Prato from "./class/Prato";
import { Ingrediente } from "../../generated/prisma";
import { PratoDB } from "./database/PratoDB";
import { IngredienteDB } from "./database/IngredienteDB";

const excluirPrato = async (request: FastifyRequest, _reply: FastifyReply) => {
    // const reqBody = request.body as { usuario: string, id: number };

    // // console.log(reqBody);
    
    // if('usuario' in reqBody || 'id' in reqBody){

    //     if(typeof reqBody.usuario == 'string' && typeof reqBody.id == 'number'){
    //         const usuario = await Usuario.create(reqBody.usuario);

    //         const pratos = usuario.pratos
    //         for(let i = 0; i < pratos.length; i++){
    //             if(pratos[i].id == reqBody.id){
    //                 await usuario.pratos[i].excluir();
    //                 usuario.pratos.splice(i, 1);
    //                 break;
    //             }
    //         }
    //         return usuario;
    //     }

    //     return { error: 'Algum campo possui valor inválido' }
    // }

    // return { error: 'Está faltando algum campo' };

    const reqParams = request.params as { objeto: string, id: number };    
    reqParams.id = +reqParams.id;

    const Pratos = new PratoDB();

    return await Pratos.deletar(reqParams.id);
};

const addPrato = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqBody = request.body as { 
        usuario: string,
        nome: string, 
        categoria: string, 
        ingredientes: Ingrediente[], 
        preparo?: string
    };

    const { nome, categoria, preparo, usuario } = reqBody;
    
    const prato = new Prato(nome, categoria, preparo);
    const usuarioLogado = await Usuario.create(usuario);
    
    // console.log(usuarioLogado);
    const novoPrato = await prato.criar(usuarioLogado);

    return novoPrato;
}

const editarPrato = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqParams = request.params as { id: string | number };
    const reqBody = request.body as { usuario: string, campos: object };

    // console.log(reqBody);

    reqParams.id = +reqParams.id;
    
    if ('usuario' in reqBody && 'campos' in reqBody
        && typeof reqBody.usuario == 'string' && typeof reqBody.campos == 'object'
    ){
        const usuario = await Usuario.create(reqBody.usuario);
        
        const prato = usuario.pratos.find(pratoElement => pratoElement.id == reqParams.id )!;

        const editarPrato = await prato.editar(reqBody.campos);

        return editarPrato;
    }

    // console.log('teste');


    return { error: 'Campo inválido!' }
}

const adicionarIngrediente = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqParams = request.params as { idprato: string | number };
    reqParams.idprato = +reqParams.idprato;
    const reqBody = request.body as { nome: string };

    const pratoDB = new PratoDB();

    const pratoRes = await pratoDB.procurar(reqParams.idprato);

    if(pratoRes){
        const prato = new Prato(pratoRes.nome, pratoRes.categoria, pratoRes.preparo || undefined );
        prato.id = reqParams.idprato;

        return await prato.adicionarIngrediente(reqBody.nome);
    }

    return { msg: 'prato não encontrado' };
}

const excluirIngrediente = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqParams = request.params as { id: string | number };
    reqParams.id = +reqParams.id;

    const ingredientes = new IngredienteDB();
    
    const res = await ingredientes.deletar(reqParams.id);

    return res;
}

const editarIngrediente = async (request: FastifyRequest, _reply: FastifyReply) => {
    const reqParams = request.params as { id: string | number};
    const reqBody = request.body as { nome: string };

    reqParams.id = +reqParams.id;

    const ingredientes = new IngredienteDB();
    
    const res = await ingredientes.editar(reqParams.id, reqBody);

    return res;

}

export { addPrato, excluirPrato, editarPrato, adicionarIngrediente, excluirIngrediente, editarIngrediente };