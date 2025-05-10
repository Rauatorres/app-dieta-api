export default class Prato{
    constructor(
        public nome: string, 
        public categoria: string, 
        public ingredientes?: string, 
        public preparo?: string
    ){
    }
}