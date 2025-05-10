interface UsuarioQueryResult{
    nome: string;
    senha: string;
    id: number;
}

type QueryResult = UsuarioQueryResult;
type ErrorMsgObj = { msg: string };
type QueryReturn = { success: boolean, result: QueryResult | ErrorMsgObj};

export type { QueryResult, UsuarioQueryResult, QueryReturn };