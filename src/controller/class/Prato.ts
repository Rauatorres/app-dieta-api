import prisma from "./prismaConnection";
import Usuario from "./Usuario";

export default class Prato{
    id: number | undefined;

    constructor(
        public nome: string, 
        public categoria: string, 
        public ingredientes?: string, 
        public preparo?: string
    ){
        this.id = undefined;
    }

    async criar(usuario: Usuario){
        const newPrato = await prisma.prato.create({
            data:{
                nome: this.nome,
                categoria: this.categoria,
                ingredientes: this.ingredientes,
                preparo: this.preparo,
                usuario: {
                    connect: { nome: usuario.nome }
                }
            }
        });
        if (newPrato){
            this.id = newPrato.id;

            usuario.pratos.push(this);
            return true;
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
                return { success: true, result: prato};
            }else{
                return { success: false, result: { msg: 'Campo inválido' }} 
            }
        }else{
            return { success: false, result: { msg: 'Prato não definido' }};
        }
        
    }
}