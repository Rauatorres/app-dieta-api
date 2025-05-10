interface UsuarioQueryResult{
    nome: string;
    senha: string;
    id: number;
}

type QueryResult = UsuarioQueryResult;
type ApiReturn = { success: boolean, result: QueryResult | { msg: string } };

export type { QueryResult, UsuarioQueryResult, ApiReturn };