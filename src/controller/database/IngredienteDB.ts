import prisma from "../class/prismaConnection";

export class IngredienteDB{
    constructor() {}

    async deletar(id: number){
        try{
            return await prisma.ingrediente.delete({
                where: {
                    id: id
                }
            });
        }catch (e){
            return e;
        }
    }

    async editar(id: number, data: { nome: string }){
        console.log(data.nome);
        return await prisma.ingrediente.update({
            where: {
                id: id
            },
            data: data
        });
    }
}