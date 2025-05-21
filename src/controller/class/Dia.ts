import Prato from "./Prato";
import prisma from "./prismaConnection";
import Usuario from "./Usuario";

export default class Dia{
    id: number | undefined;
    pratos: Prato[];

    private constructor(public nome: string){
        this.pratos = [];
        this.id = undefined;
    }

    static async create(identifier: string | number){
        let dia: Dia;
        if(typeof identifier == 'string'){
            dia = new Dia(identifier);
            await dia.init();

        }else if(typeof identifier == 'number'){
            const result = await prisma.dia.findFirst({
                where: {
                    id: identifier
                }
            });
            if(result){
                dia = new Dia(result.nome);
                dia.id = identifier;
                await dia.init();
            }else{
                dia = new Dia('failed');
            }
        }else{
            dia = new Dia('failed');
        }

        return dia;
    }

    async criar(usuario: Usuario){
        const novoDia = await prisma.dia.create({
            data: {
                nome: this.nome,
                usuario: {
                    connect: { nome: usuario.nome }
                }
            }
        });
        if(novoDia){
            this.id = novoDia.id
        }
        return novoDia;
    }

    private async verifDia(callback: Function){
        if(typeof this.id == 'undefined'){
            return await callback();
        }else{
            return { error: 'Dia não encontrado' };
        }
    }

    async excluir(){
        return await this.verifDia(async ()=>{
            const diaDeletado = await prisma.dia.delete({
                where: {
                    id: this.id
                }
            });
            this.id = undefined;
            return diaDeletado;
        });
    }

    async editar(novosDados: object){
        return await this.verifDia(async ()=>{
            const diaEditado = await prisma.dia.update({
                where: { id: this.id },
                data: novosDados
            });
            this.id = diaEditado.id;
            this.nome = diaEditado.nome;
            return diaEditado;
        });
    }
    
    async adicionarPrato(idPrato: number){
        if(typeof this.id == 'number'){
            let id: number = this.id;

            const novoPratoDia = await prisma.pratoDia.create({
                data: {
                    idDia: id,
                    idPrato: idPrato
                }
            });
            return novoPratoDia;
        }else{
            return { error: 'Dia inválido' };
        }

    }
    
    async removerPrato(idPratoDia: number){
        const pratoDiaRemovido = await prisma.pratoDia.delete({
            where: {
                id: idPratoDia
            }
        });

        return pratoDiaRemovido;
    }

    private async init(){
        if(this.id != undefined){
            const pratoDiaQuery = await prisma.pratoDia.findMany({
                where: {
                    idDia: this.id
                }
            });
            for(let pratoDia of pratoDiaQuery){
                const prato = await prisma.prato.findFirst({
                    where: { id: pratoDia.idPrato }
                });
                if(prato){
                    this.pratos.push(new Prato(prato.nome, prato.categoria, prato.ingredientes || undefined, prato.preparo || undefined));
                }
            }
        }else{
            console.log('Dia não definido');
        }
    }
}