import { Ingrediente } from "../../../generated/prisma";
import prisma from "./prismaConnection";
import Usuario from "./Usuario";

export default class Prato{
    id: number | undefined;
    ingredientes: Ingrediente[];

    constructor(
        public nome: string, 
        public categoria: string, 
        public preparo?: string
    ){
        this.id = undefined;
        this.ingredientes = [];
    }

    async criar(usuario: Usuario){
        const newPrato = await prisma.prato.create({
            data:{
                nome: this.nome,
                categoria: this.categoria,
                preparo: this.preparo,
                usuario: {
                    connect: { nome: usuario.nome }
                }
            }
        });
        if (newPrato){
            this.id = newPrato.id;

            usuario.pratos.push(this);
            return newPrato;
        }else{
            return false;
        }
    }

    async excluir(){
        const deletarPrato = await prisma.prato.delete({
            where: {
                id: this.id
            }
        });
        return deletarPrato;
    }

    async editar(campos: object){
        if (this.id != undefined){
            const prato = await prisma.prato.update({
                where: {
                    id: this.id
                },
                data: campos
            });
            if (prato){
                return prato;
            }else{
                return { error: 'Campo inválido' }; 
            }
        }else{
            return { error: 'Prato não definido' };
        }
    }

    async adicionarIngrediente(nome: string){

        if(this.id){
            const res = await prisma.ingrediente.create({
                data: {
                    nome: nome,
                    idPrato: this.id
                }
            });
    
            if(res){
                this.ingredientes.push(res);
            }
    
            return res;
        }else{
            return { msg: 'id do prato não reconhecido' };
        }
    }
}