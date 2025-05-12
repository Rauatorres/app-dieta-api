import Usuario from "./controller/class/Usuario";

interface UsuarioQueryResult{
    nome: string;
    senha: string;
    id: number;
    pratos?: object[];
    dias?: object[];
}

interface PratoQueryResult{
    id: number;
    nome: string; 
    categoria: string; 
    ingredientes: string | null; 
    preparo: string | null;
    idUsuario: number;
}

interface DiaQueryResult{
    id: number;
    nome: string;
    idUsuario: number;
}

type ErrorMsgObj = { msg: string };
type QueryResult = UsuarioQueryResult | Usuario | ErrorMsgObj;
type QueryReturn = { success: boolean, result: QueryResult} | { success: boolean, result: QueryResult, usuario: Usuario};

export type { QueryResult, UsuarioQueryResult, QueryReturn, ErrorMsgObj, PratoQueryResult, DiaQueryResult};