import Prato from "./Prato";

export default class Dia{
    pratos: Prato[];

    constructor(public nome: string){
        this.pratos = [];
    }
}