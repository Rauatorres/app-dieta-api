import Dia from "./Dia";
import Prato from "./Prato";

export default class Usuario{
    pratos: Prato[];
    dias: Dia[];

    constructor(public nome: string, public senha: string){
        this.pratos = [];
        this.dias = [];
    }
}