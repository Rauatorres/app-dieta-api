import prisma from "../class/prismaConnection";

export class PratoDB{
    constructor() {}

    async procurar(id: number){
        // console.log(id);

        return await prisma.prato.findFirst({
            where: { id: id }
        });
    }

    async deletar(id: number){
        return await prisma.prato.delete({
            where: {
                id: id
            }
        });
    }
}