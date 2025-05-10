
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Prato
 * 
 */
export type Prato = $Result.DefaultSelection<Prisma.$PratoPayload>
/**
 * Model Dia
 * 
 */
export type Dia = $Result.DefaultSelection<Prisma.$DiaPayload>
/**
 * Model PratoDia
 * 
 */
export type PratoDia = $Result.DefaultSelection<Prisma.$PratoDiaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prato`: Exposes CRUD operations for the **Prato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pratoes
    * const pratoes = await prisma.prato.findMany()
    * ```
    */
  get prato(): Prisma.PratoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dia`: Exposes CRUD operations for the **Dia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dias
    * const dias = await prisma.dia.findMany()
    * ```
    */
  get dia(): Prisma.DiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pratoDia`: Exposes CRUD operations for the **PratoDia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PratoDias
    * const pratoDias = await prisma.pratoDia.findMany()
    * ```
    */
  get pratoDia(): Prisma.PratoDiaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Prato: 'Prato',
    Dia: 'Dia',
    PratoDia: 'PratoDia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "prato" | "dia" | "pratoDia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Prato: {
        payload: Prisma.$PratoPayload<ExtArgs>
        fields: Prisma.PratoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PratoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PratoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          findFirst: {
            args: Prisma.PratoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PratoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          findMany: {
            args: Prisma.PratoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>[]
          }
          create: {
            args: Prisma.PratoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          createMany: {
            args: Prisma.PratoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PratoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>[]
          }
          delete: {
            args: Prisma.PratoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          update: {
            args: Prisma.PratoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          deleteMany: {
            args: Prisma.PratoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PratoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PratoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>[]
          }
          upsert: {
            args: Prisma.PratoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          aggregate: {
            args: Prisma.PratoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrato>
          }
          groupBy: {
            args: Prisma.PratoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PratoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PratoCountArgs<ExtArgs>
            result: $Utils.Optional<PratoCountAggregateOutputType> | number
          }
        }
      }
      Dia: {
        payload: Prisma.$DiaPayload<ExtArgs>
        fields: Prisma.DiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>
          }
          findFirst: {
            args: Prisma.DiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>
          }
          findMany: {
            args: Prisma.DiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>[]
          }
          create: {
            args: Prisma.DiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>
          }
          createMany: {
            args: Prisma.DiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>[]
          }
          delete: {
            args: Prisma.DiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>
          }
          update: {
            args: Prisma.DiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>
          }
          deleteMany: {
            args: Prisma.DiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>[]
          }
          upsert: {
            args: Prisma.DiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaPayload>
          }
          aggregate: {
            args: Prisma.DiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDia>
          }
          groupBy: {
            args: Prisma.DiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiaCountArgs<ExtArgs>
            result: $Utils.Optional<DiaCountAggregateOutputType> | number
          }
        }
      }
      PratoDia: {
        payload: Prisma.$PratoDiaPayload<ExtArgs>
        fields: Prisma.PratoDiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PratoDiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PratoDiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>
          }
          findFirst: {
            args: Prisma.PratoDiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PratoDiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>
          }
          findMany: {
            args: Prisma.PratoDiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>[]
          }
          create: {
            args: Prisma.PratoDiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>
          }
          createMany: {
            args: Prisma.PratoDiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PratoDiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>[]
          }
          delete: {
            args: Prisma.PratoDiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>
          }
          update: {
            args: Prisma.PratoDiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>
          }
          deleteMany: {
            args: Prisma.PratoDiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PratoDiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PratoDiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>[]
          }
          upsert: {
            args: Prisma.PratoDiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoDiaPayload>
          }
          aggregate: {
            args: Prisma.PratoDiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePratoDia>
          }
          groupBy: {
            args: Prisma.PratoDiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PratoDiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PratoDiaCountArgs<ExtArgs>
            result: $Utils.Optional<PratoDiaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    prato?: PratoOmit
    dia?: DiaOmit
    pratoDia?: PratoDiaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    Prato: number
    Dia: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prato?: boolean | UsuarioCountOutputTypeCountPratoArgs
    Dia?: boolean | UsuarioCountOutputTypeCountDiaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPratoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PratoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaWhereInput
  }


  /**
   * Count Type PratoCountOutputType
   */

  export type PratoCountOutputType = {
    PratoDia: number
  }

  export type PratoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PratoDia?: boolean | PratoCountOutputTypeCountPratoDiaArgs
  }

  // Custom InputTypes
  /**
   * PratoCountOutputType without action
   */
  export type PratoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoCountOutputType
     */
    select?: PratoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PratoCountOutputType without action
   */
  export type PratoCountOutputTypeCountPratoDiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PratoDiaWhereInput
  }


  /**
   * Count Type DiaCountOutputType
   */

  export type DiaCountOutputType = {
    PratoDia: number
  }

  export type DiaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PratoDia?: boolean | DiaCountOutputTypeCountPratoDiaArgs
  }

  // Custom InputTypes
  /**
   * DiaCountOutputType without action
   */
  export type DiaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaCountOutputType
     */
    select?: DiaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiaCountOutputType without action
   */
  export type DiaCountOutputTypeCountPratoDiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PratoDiaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    senha: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    senha: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    senha: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    senha: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha?: boolean
    Prato?: boolean | Usuario$PratoArgs<ExtArgs>
    Dia?: boolean | Usuario$DiaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    senha?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "senha", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Prato?: boolean | Usuario$PratoArgs<ExtArgs>
    Dia?: boolean | Usuario$DiaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Prato: Prisma.$PratoPayload<ExtArgs>[]
      Dia: Prisma.$DiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      senha: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Prato<T extends Usuario$PratoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$PratoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Dia<T extends Usuario$DiaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$DiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Prato
   */
  export type Usuario$PratoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    where?: PratoWhereInput
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    cursor?: PratoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Usuario.Dia
   */
  export type Usuario$DiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    where?: DiaWhereInput
    orderBy?: DiaOrderByWithRelationInput | DiaOrderByWithRelationInput[]
    cursor?: DiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiaScalarFieldEnum | DiaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Prato
   */

  export type AggregatePrato = {
    _count: PratoCountAggregateOutputType | null
    _avg: PratoAvgAggregateOutputType | null
    _sum: PratoSumAggregateOutputType | null
    _min: PratoMinAggregateOutputType | null
    _max: PratoMaxAggregateOutputType | null
  }

  export type PratoAvgAggregateOutputType = {
    id: number | null
    idUsuario: number | null
  }

  export type PratoSumAggregateOutputType = {
    id: number | null
    idUsuario: number | null
  }

  export type PratoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
    ingredientes: string | null
    preparo: string | null
    idUsuario: number | null
  }

  export type PratoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
    ingredientes: string | null
    preparo: string | null
    idUsuario: number | null
  }

  export type PratoCountAggregateOutputType = {
    id: number
    nome: number
    categoria: number
    ingredientes: number
    preparo: number
    idUsuario: number
    _all: number
  }


  export type PratoAvgAggregateInputType = {
    id?: true
    idUsuario?: true
  }

  export type PratoSumAggregateInputType = {
    id?: true
    idUsuario?: true
  }

  export type PratoMinAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    ingredientes?: true
    preparo?: true
    idUsuario?: true
  }

  export type PratoMaxAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    ingredientes?: true
    preparo?: true
    idUsuario?: true
  }

  export type PratoCountAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    ingredientes?: true
    preparo?: true
    idUsuario?: true
    _all?: true
  }

  export type PratoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prato to aggregate.
     */
    where?: PratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pratoes to fetch.
     */
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pratoes
    **/
    _count?: true | PratoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PratoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PratoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PratoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PratoMaxAggregateInputType
  }

  export type GetPratoAggregateType<T extends PratoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrato[P]>
      : GetScalarType<T[P], AggregatePrato[P]>
  }




  export type PratoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PratoWhereInput
    orderBy?: PratoOrderByWithAggregationInput | PratoOrderByWithAggregationInput[]
    by: PratoScalarFieldEnum[] | PratoScalarFieldEnum
    having?: PratoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PratoCountAggregateInputType | true
    _avg?: PratoAvgAggregateInputType
    _sum?: PratoSumAggregateInputType
    _min?: PratoMinAggregateInputType
    _max?: PratoMaxAggregateInputType
  }

  export type PratoGroupByOutputType = {
    id: number
    nome: string
    categoria: string
    ingredientes: string | null
    preparo: string | null
    idUsuario: number
    _count: PratoCountAggregateOutputType | null
    _avg: PratoAvgAggregateOutputType | null
    _sum: PratoSumAggregateOutputType | null
    _min: PratoMinAggregateOutputType | null
    _max: PratoMaxAggregateOutputType | null
  }

  type GetPratoGroupByPayload<T extends PratoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PratoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PratoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PratoGroupByOutputType[P]>
            : GetScalarType<T[P], PratoGroupByOutputType[P]>
        }
      >
    >


  export type PratoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    ingredientes?: boolean
    preparo?: boolean
    idUsuario?: boolean
    PratoDia?: boolean | Prato$PratoDiaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | PratoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prato"]>

  export type PratoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    ingredientes?: boolean
    preparo?: boolean
    idUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prato"]>

  export type PratoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    ingredientes?: boolean
    preparo?: boolean
    idUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prato"]>

  export type PratoSelectScalar = {
    id?: boolean
    nome?: boolean
    categoria?: boolean
    ingredientes?: boolean
    preparo?: boolean
    idUsuario?: boolean
  }

  export type PratoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "categoria" | "ingredientes" | "preparo" | "idUsuario", ExtArgs["result"]["prato"]>
  export type PratoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PratoDia?: boolean | Prato$PratoDiaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | PratoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PratoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PratoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PratoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prato"
    objects: {
      PratoDia: Prisma.$PratoDiaPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      categoria: string
      ingredientes: string | null
      preparo: string | null
      idUsuario: number
    }, ExtArgs["result"]["prato"]>
    composites: {}
  }

  type PratoGetPayload<S extends boolean | null | undefined | PratoDefaultArgs> = $Result.GetResult<Prisma.$PratoPayload, S>

  type PratoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PratoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PratoCountAggregateInputType | true
    }

  export interface PratoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prato'], meta: { name: 'Prato' } }
    /**
     * Find zero or one Prato that matches the filter.
     * @param {PratoFindUniqueArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PratoFindUniqueArgs>(args: SelectSubset<T, PratoFindUniqueArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PratoFindUniqueOrThrowArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PratoFindUniqueOrThrowArgs>(args: SelectSubset<T, PratoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoFindFirstArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PratoFindFirstArgs>(args?: SelectSubset<T, PratoFindFirstArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoFindFirstOrThrowArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PratoFindFirstOrThrowArgs>(args?: SelectSubset<T, PratoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pratoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pratoes
     * const pratoes = await prisma.prato.findMany()
     * 
     * // Get first 10 Pratoes
     * const pratoes = await prisma.prato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pratoWithIdOnly = await prisma.prato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PratoFindManyArgs>(args?: SelectSubset<T, PratoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prato.
     * @param {PratoCreateArgs} args - Arguments to create a Prato.
     * @example
     * // Create one Prato
     * const Prato = await prisma.prato.create({
     *   data: {
     *     // ... data to create a Prato
     *   }
     * })
     * 
     */
    create<T extends PratoCreateArgs>(args: SelectSubset<T, PratoCreateArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pratoes.
     * @param {PratoCreateManyArgs} args - Arguments to create many Pratoes.
     * @example
     * // Create many Pratoes
     * const prato = await prisma.prato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PratoCreateManyArgs>(args?: SelectSubset<T, PratoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pratoes and returns the data saved in the database.
     * @param {PratoCreateManyAndReturnArgs} args - Arguments to create many Pratoes.
     * @example
     * // Create many Pratoes
     * const prato = await prisma.prato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pratoes and only return the `id`
     * const pratoWithIdOnly = await prisma.prato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PratoCreateManyAndReturnArgs>(args?: SelectSubset<T, PratoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prato.
     * @param {PratoDeleteArgs} args - Arguments to delete one Prato.
     * @example
     * // Delete one Prato
     * const Prato = await prisma.prato.delete({
     *   where: {
     *     // ... filter to delete one Prato
     *   }
     * })
     * 
     */
    delete<T extends PratoDeleteArgs>(args: SelectSubset<T, PratoDeleteArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prato.
     * @param {PratoUpdateArgs} args - Arguments to update one Prato.
     * @example
     * // Update one Prato
     * const prato = await prisma.prato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PratoUpdateArgs>(args: SelectSubset<T, PratoUpdateArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pratoes.
     * @param {PratoDeleteManyArgs} args - Arguments to filter Pratoes to delete.
     * @example
     * // Delete a few Pratoes
     * const { count } = await prisma.prato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PratoDeleteManyArgs>(args?: SelectSubset<T, PratoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pratoes
     * const prato = await prisma.prato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PratoUpdateManyArgs>(args: SelectSubset<T, PratoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pratoes and returns the data updated in the database.
     * @param {PratoUpdateManyAndReturnArgs} args - Arguments to update many Pratoes.
     * @example
     * // Update many Pratoes
     * const prato = await prisma.prato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pratoes and only return the `id`
     * const pratoWithIdOnly = await prisma.prato.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PratoUpdateManyAndReturnArgs>(args: SelectSubset<T, PratoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prato.
     * @param {PratoUpsertArgs} args - Arguments to update or create a Prato.
     * @example
     * // Update or create a Prato
     * const prato = await prisma.prato.upsert({
     *   create: {
     *     // ... data to create a Prato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prato we want to update
     *   }
     * })
     */
    upsert<T extends PratoUpsertArgs>(args: SelectSubset<T, PratoUpsertArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoCountArgs} args - Arguments to filter Pratoes to count.
     * @example
     * // Count the number of Pratoes
     * const count = await prisma.prato.count({
     *   where: {
     *     // ... the filter for the Pratoes we want to count
     *   }
     * })
    **/
    count<T extends PratoCountArgs>(
      args?: Subset<T, PratoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PratoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PratoAggregateArgs>(args: Subset<T, PratoAggregateArgs>): Prisma.PrismaPromise<GetPratoAggregateType<T>>

    /**
     * Group by Prato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PratoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PratoGroupByArgs['orderBy'] }
        : { orderBy?: PratoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PratoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPratoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prato model
   */
  readonly fields: PratoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PratoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PratoDia<T extends Prato$PratoDiaArgs<ExtArgs> = {}>(args?: Subset<T, Prato$PratoDiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prato model
   */
  interface PratoFieldRefs {
    readonly id: FieldRef<"Prato", 'Int'>
    readonly nome: FieldRef<"Prato", 'String'>
    readonly categoria: FieldRef<"Prato", 'String'>
    readonly ingredientes: FieldRef<"Prato", 'String'>
    readonly preparo: FieldRef<"Prato", 'String'>
    readonly idUsuario: FieldRef<"Prato", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prato findUnique
   */
  export type PratoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Prato to fetch.
     */
    where: PratoWhereUniqueInput
  }

  /**
   * Prato findUniqueOrThrow
   */
  export type PratoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Prato to fetch.
     */
    where: PratoWhereUniqueInput
  }

  /**
   * Prato findFirst
   */
  export type PratoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Prato to fetch.
     */
    where?: PratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pratoes to fetch.
     */
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pratoes.
     */
    cursor?: PratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pratoes.
     */
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Prato findFirstOrThrow
   */
  export type PratoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Prato to fetch.
     */
    where?: PratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pratoes to fetch.
     */
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pratoes.
     */
    cursor?: PratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pratoes.
     */
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Prato findMany
   */
  export type PratoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Pratoes to fetch.
     */
    where?: PratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pratoes to fetch.
     */
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pratoes.
     */
    cursor?: PratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pratoes.
     */
    skip?: number
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Prato create
   */
  export type PratoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * The data needed to create a Prato.
     */
    data: XOR<PratoCreateInput, PratoUncheckedCreateInput>
  }

  /**
   * Prato createMany
   */
  export type PratoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pratoes.
     */
    data: PratoCreateManyInput | PratoCreateManyInput[]
  }

  /**
   * Prato createManyAndReturn
   */
  export type PratoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * The data used to create many Pratoes.
     */
    data: PratoCreateManyInput | PratoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prato update
   */
  export type PratoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * The data needed to update a Prato.
     */
    data: XOR<PratoUpdateInput, PratoUncheckedUpdateInput>
    /**
     * Choose, which Prato to update.
     */
    where: PratoWhereUniqueInput
  }

  /**
   * Prato updateMany
   */
  export type PratoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pratoes.
     */
    data: XOR<PratoUpdateManyMutationInput, PratoUncheckedUpdateManyInput>
    /**
     * Filter which Pratoes to update
     */
    where?: PratoWhereInput
    /**
     * Limit how many Pratoes to update.
     */
    limit?: number
  }

  /**
   * Prato updateManyAndReturn
   */
  export type PratoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * The data used to update Pratoes.
     */
    data: XOR<PratoUpdateManyMutationInput, PratoUncheckedUpdateManyInput>
    /**
     * Filter which Pratoes to update
     */
    where?: PratoWhereInput
    /**
     * Limit how many Pratoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prato upsert
   */
  export type PratoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * The filter to search for the Prato to update in case it exists.
     */
    where: PratoWhereUniqueInput
    /**
     * In case the Prato found by the `where` argument doesn't exist, create a new Prato with this data.
     */
    create: XOR<PratoCreateInput, PratoUncheckedCreateInput>
    /**
     * In case the Prato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PratoUpdateInput, PratoUncheckedUpdateInput>
  }

  /**
   * Prato delete
   */
  export type PratoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter which Prato to delete.
     */
    where: PratoWhereUniqueInput
  }

  /**
   * Prato deleteMany
   */
  export type PratoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pratoes to delete
     */
    where?: PratoWhereInput
    /**
     * Limit how many Pratoes to delete.
     */
    limit?: number
  }

  /**
   * Prato.PratoDia
   */
  export type Prato$PratoDiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    where?: PratoDiaWhereInput
    orderBy?: PratoDiaOrderByWithRelationInput | PratoDiaOrderByWithRelationInput[]
    cursor?: PratoDiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PratoDiaScalarFieldEnum | PratoDiaScalarFieldEnum[]
  }

  /**
   * Prato without action
   */
  export type PratoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
  }


  /**
   * Model Dia
   */

  export type AggregateDia = {
    _count: DiaCountAggregateOutputType | null
    _avg: DiaAvgAggregateOutputType | null
    _sum: DiaSumAggregateOutputType | null
    _min: DiaMinAggregateOutputType | null
    _max: DiaMaxAggregateOutputType | null
  }

  export type DiaAvgAggregateOutputType = {
    id: number | null
    idUsuario: number | null
  }

  export type DiaSumAggregateOutputType = {
    id: number | null
    idUsuario: number | null
  }

  export type DiaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    idUsuario: number | null
  }

  export type DiaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    idUsuario: number | null
  }

  export type DiaCountAggregateOutputType = {
    id: number
    nome: number
    idUsuario: number
    _all: number
  }


  export type DiaAvgAggregateInputType = {
    id?: true
    idUsuario?: true
  }

  export type DiaSumAggregateInputType = {
    id?: true
    idUsuario?: true
  }

  export type DiaMinAggregateInputType = {
    id?: true
    nome?: true
    idUsuario?: true
  }

  export type DiaMaxAggregateInputType = {
    id?: true
    nome?: true
    idUsuario?: true
  }

  export type DiaCountAggregateInputType = {
    id?: true
    nome?: true
    idUsuario?: true
    _all?: true
  }

  export type DiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dia to aggregate.
     */
    where?: DiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dias to fetch.
     */
    orderBy?: DiaOrderByWithRelationInput | DiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dias
    **/
    _count?: true | DiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiaMaxAggregateInputType
  }

  export type GetDiaAggregateType<T extends DiaAggregateArgs> = {
        [P in keyof T & keyof AggregateDia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDia[P]>
      : GetScalarType<T[P], AggregateDia[P]>
  }




  export type DiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaWhereInput
    orderBy?: DiaOrderByWithAggregationInput | DiaOrderByWithAggregationInput[]
    by: DiaScalarFieldEnum[] | DiaScalarFieldEnum
    having?: DiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiaCountAggregateInputType | true
    _avg?: DiaAvgAggregateInputType
    _sum?: DiaSumAggregateInputType
    _min?: DiaMinAggregateInputType
    _max?: DiaMaxAggregateInputType
  }

  export type DiaGroupByOutputType = {
    id: number
    nome: string
    idUsuario: number
    _count: DiaCountAggregateOutputType | null
    _avg: DiaAvgAggregateOutputType | null
    _sum: DiaSumAggregateOutputType | null
    _min: DiaMinAggregateOutputType | null
    _max: DiaMaxAggregateOutputType | null
  }

  type GetDiaGroupByPayload<T extends DiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiaGroupByOutputType[P]>
            : GetScalarType<T[P], DiaGroupByOutputType[P]>
        }
      >
    >


  export type DiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idUsuario?: boolean
    PratoDia?: boolean | Dia$PratoDiaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | DiaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dia"]>

  export type DiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dia"]>

  export type DiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dia"]>

  export type DiaSelectScalar = {
    id?: boolean
    nome?: boolean
    idUsuario?: boolean
  }

  export type DiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "idUsuario", ExtArgs["result"]["dia"]>
  export type DiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PratoDia?: boolean | Dia$PratoDiaArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | DiaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type DiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $DiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dia"
    objects: {
      PratoDia: Prisma.$PratoDiaPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      idUsuario: number
    }, ExtArgs["result"]["dia"]>
    composites: {}
  }

  type DiaGetPayload<S extends boolean | null | undefined | DiaDefaultArgs> = $Result.GetResult<Prisma.$DiaPayload, S>

  type DiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiaCountAggregateInputType | true
    }

  export interface DiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dia'], meta: { name: 'Dia' } }
    /**
     * Find zero or one Dia that matches the filter.
     * @param {DiaFindUniqueArgs} args - Arguments to find a Dia
     * @example
     * // Get one Dia
     * const dia = await prisma.dia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiaFindUniqueArgs>(args: SelectSubset<T, DiaFindUniqueArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiaFindUniqueOrThrowArgs} args - Arguments to find a Dia
     * @example
     * // Get one Dia
     * const dia = await prisma.dia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiaFindUniqueOrThrowArgs>(args: SelectSubset<T, DiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaFindFirstArgs} args - Arguments to find a Dia
     * @example
     * // Get one Dia
     * const dia = await prisma.dia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiaFindFirstArgs>(args?: SelectSubset<T, DiaFindFirstArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaFindFirstOrThrowArgs} args - Arguments to find a Dia
     * @example
     * // Get one Dia
     * const dia = await prisma.dia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiaFindFirstOrThrowArgs>(args?: SelectSubset<T, DiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dias
     * const dias = await prisma.dia.findMany()
     * 
     * // Get first 10 Dias
     * const dias = await prisma.dia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diaWithIdOnly = await prisma.dia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiaFindManyArgs>(args?: SelectSubset<T, DiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dia.
     * @param {DiaCreateArgs} args - Arguments to create a Dia.
     * @example
     * // Create one Dia
     * const Dia = await prisma.dia.create({
     *   data: {
     *     // ... data to create a Dia
     *   }
     * })
     * 
     */
    create<T extends DiaCreateArgs>(args: SelectSubset<T, DiaCreateArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dias.
     * @param {DiaCreateManyArgs} args - Arguments to create many Dias.
     * @example
     * // Create many Dias
     * const dia = await prisma.dia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiaCreateManyArgs>(args?: SelectSubset<T, DiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dias and returns the data saved in the database.
     * @param {DiaCreateManyAndReturnArgs} args - Arguments to create many Dias.
     * @example
     * // Create many Dias
     * const dia = await prisma.dia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dias and only return the `id`
     * const diaWithIdOnly = await prisma.dia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiaCreateManyAndReturnArgs>(args?: SelectSubset<T, DiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dia.
     * @param {DiaDeleteArgs} args - Arguments to delete one Dia.
     * @example
     * // Delete one Dia
     * const Dia = await prisma.dia.delete({
     *   where: {
     *     // ... filter to delete one Dia
     *   }
     * })
     * 
     */
    delete<T extends DiaDeleteArgs>(args: SelectSubset<T, DiaDeleteArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dia.
     * @param {DiaUpdateArgs} args - Arguments to update one Dia.
     * @example
     * // Update one Dia
     * const dia = await prisma.dia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiaUpdateArgs>(args: SelectSubset<T, DiaUpdateArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dias.
     * @param {DiaDeleteManyArgs} args - Arguments to filter Dias to delete.
     * @example
     * // Delete a few Dias
     * const { count } = await prisma.dia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiaDeleteManyArgs>(args?: SelectSubset<T, DiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dias
     * const dia = await prisma.dia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiaUpdateManyArgs>(args: SelectSubset<T, DiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dias and returns the data updated in the database.
     * @param {DiaUpdateManyAndReturnArgs} args - Arguments to update many Dias.
     * @example
     * // Update many Dias
     * const dia = await prisma.dia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dias and only return the `id`
     * const diaWithIdOnly = await prisma.dia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiaUpdateManyAndReturnArgs>(args: SelectSubset<T, DiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dia.
     * @param {DiaUpsertArgs} args - Arguments to update or create a Dia.
     * @example
     * // Update or create a Dia
     * const dia = await prisma.dia.upsert({
     *   create: {
     *     // ... data to create a Dia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dia we want to update
     *   }
     * })
     */
    upsert<T extends DiaUpsertArgs>(args: SelectSubset<T, DiaUpsertArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaCountArgs} args - Arguments to filter Dias to count.
     * @example
     * // Count the number of Dias
     * const count = await prisma.dia.count({
     *   where: {
     *     // ... the filter for the Dias we want to count
     *   }
     * })
    **/
    count<T extends DiaCountArgs>(
      args?: Subset<T, DiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiaAggregateArgs>(args: Subset<T, DiaAggregateArgs>): Prisma.PrismaPromise<GetDiaAggregateType<T>>

    /**
     * Group by Dia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiaGroupByArgs['orderBy'] }
        : { orderBy?: DiaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dia model
   */
  readonly fields: DiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PratoDia<T extends Dia$PratoDiaArgs<ExtArgs> = {}>(args?: Subset<T, Dia$PratoDiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dia model
   */
  interface DiaFieldRefs {
    readonly id: FieldRef<"Dia", 'Int'>
    readonly nome: FieldRef<"Dia", 'String'>
    readonly idUsuario: FieldRef<"Dia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dia findUnique
   */
  export type DiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * Filter, which Dia to fetch.
     */
    where: DiaWhereUniqueInput
  }

  /**
   * Dia findUniqueOrThrow
   */
  export type DiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * Filter, which Dia to fetch.
     */
    where: DiaWhereUniqueInput
  }

  /**
   * Dia findFirst
   */
  export type DiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * Filter, which Dia to fetch.
     */
    where?: DiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dias to fetch.
     */
    orderBy?: DiaOrderByWithRelationInput | DiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dias.
     */
    cursor?: DiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dias.
     */
    distinct?: DiaScalarFieldEnum | DiaScalarFieldEnum[]
  }

  /**
   * Dia findFirstOrThrow
   */
  export type DiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * Filter, which Dia to fetch.
     */
    where?: DiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dias to fetch.
     */
    orderBy?: DiaOrderByWithRelationInput | DiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dias.
     */
    cursor?: DiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dias.
     */
    distinct?: DiaScalarFieldEnum | DiaScalarFieldEnum[]
  }

  /**
   * Dia findMany
   */
  export type DiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * Filter, which Dias to fetch.
     */
    where?: DiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dias to fetch.
     */
    orderBy?: DiaOrderByWithRelationInput | DiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dias.
     */
    cursor?: DiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dias.
     */
    skip?: number
    distinct?: DiaScalarFieldEnum | DiaScalarFieldEnum[]
  }

  /**
   * Dia create
   */
  export type DiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * The data needed to create a Dia.
     */
    data: XOR<DiaCreateInput, DiaUncheckedCreateInput>
  }

  /**
   * Dia createMany
   */
  export type DiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dias.
     */
    data: DiaCreateManyInput | DiaCreateManyInput[]
  }

  /**
   * Dia createManyAndReturn
   */
  export type DiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * The data used to create many Dias.
     */
    data: DiaCreateManyInput | DiaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dia update
   */
  export type DiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * The data needed to update a Dia.
     */
    data: XOR<DiaUpdateInput, DiaUncheckedUpdateInput>
    /**
     * Choose, which Dia to update.
     */
    where: DiaWhereUniqueInput
  }

  /**
   * Dia updateMany
   */
  export type DiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dias.
     */
    data: XOR<DiaUpdateManyMutationInput, DiaUncheckedUpdateManyInput>
    /**
     * Filter which Dias to update
     */
    where?: DiaWhereInput
    /**
     * Limit how many Dias to update.
     */
    limit?: number
  }

  /**
   * Dia updateManyAndReturn
   */
  export type DiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * The data used to update Dias.
     */
    data: XOR<DiaUpdateManyMutationInput, DiaUncheckedUpdateManyInput>
    /**
     * Filter which Dias to update
     */
    where?: DiaWhereInput
    /**
     * Limit how many Dias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dia upsert
   */
  export type DiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * The filter to search for the Dia to update in case it exists.
     */
    where: DiaWhereUniqueInput
    /**
     * In case the Dia found by the `where` argument doesn't exist, create a new Dia with this data.
     */
    create: XOR<DiaCreateInput, DiaUncheckedCreateInput>
    /**
     * In case the Dia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiaUpdateInput, DiaUncheckedUpdateInput>
  }

  /**
   * Dia delete
   */
  export type DiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
    /**
     * Filter which Dia to delete.
     */
    where: DiaWhereUniqueInput
  }

  /**
   * Dia deleteMany
   */
  export type DiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dias to delete
     */
    where?: DiaWhereInput
    /**
     * Limit how many Dias to delete.
     */
    limit?: number
  }

  /**
   * Dia.PratoDia
   */
  export type Dia$PratoDiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    where?: PratoDiaWhereInput
    orderBy?: PratoDiaOrderByWithRelationInput | PratoDiaOrderByWithRelationInput[]
    cursor?: PratoDiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PratoDiaScalarFieldEnum | PratoDiaScalarFieldEnum[]
  }

  /**
   * Dia without action
   */
  export type DiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dia
     */
    select?: DiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dia
     */
    omit?: DiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaInclude<ExtArgs> | null
  }


  /**
   * Model PratoDia
   */

  export type AggregatePratoDia = {
    _count: PratoDiaCountAggregateOutputType | null
    _avg: PratoDiaAvgAggregateOutputType | null
    _sum: PratoDiaSumAggregateOutputType | null
    _min: PratoDiaMinAggregateOutputType | null
    _max: PratoDiaMaxAggregateOutputType | null
  }

  export type PratoDiaAvgAggregateOutputType = {
    id: number | null
    idDia: number | null
    idPrato: number | null
  }

  export type PratoDiaSumAggregateOutputType = {
    id: number | null
    idDia: number | null
    idPrato: number | null
  }

  export type PratoDiaMinAggregateOutputType = {
    id: number | null
    idDia: number | null
    idPrato: number | null
  }

  export type PratoDiaMaxAggregateOutputType = {
    id: number | null
    idDia: number | null
    idPrato: number | null
  }

  export type PratoDiaCountAggregateOutputType = {
    id: number
    idDia: number
    idPrato: number
    _all: number
  }


  export type PratoDiaAvgAggregateInputType = {
    id?: true
    idDia?: true
    idPrato?: true
  }

  export type PratoDiaSumAggregateInputType = {
    id?: true
    idDia?: true
    idPrato?: true
  }

  export type PratoDiaMinAggregateInputType = {
    id?: true
    idDia?: true
    idPrato?: true
  }

  export type PratoDiaMaxAggregateInputType = {
    id?: true
    idDia?: true
    idPrato?: true
  }

  export type PratoDiaCountAggregateInputType = {
    id?: true
    idDia?: true
    idPrato?: true
    _all?: true
  }

  export type PratoDiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PratoDia to aggregate.
     */
    where?: PratoDiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PratoDias to fetch.
     */
    orderBy?: PratoDiaOrderByWithRelationInput | PratoDiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PratoDiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PratoDias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PratoDias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PratoDias
    **/
    _count?: true | PratoDiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PratoDiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PratoDiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PratoDiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PratoDiaMaxAggregateInputType
  }

  export type GetPratoDiaAggregateType<T extends PratoDiaAggregateArgs> = {
        [P in keyof T & keyof AggregatePratoDia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePratoDia[P]>
      : GetScalarType<T[P], AggregatePratoDia[P]>
  }




  export type PratoDiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PratoDiaWhereInput
    orderBy?: PratoDiaOrderByWithAggregationInput | PratoDiaOrderByWithAggregationInput[]
    by: PratoDiaScalarFieldEnum[] | PratoDiaScalarFieldEnum
    having?: PratoDiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PratoDiaCountAggregateInputType | true
    _avg?: PratoDiaAvgAggregateInputType
    _sum?: PratoDiaSumAggregateInputType
    _min?: PratoDiaMinAggregateInputType
    _max?: PratoDiaMaxAggregateInputType
  }

  export type PratoDiaGroupByOutputType = {
    id: number
    idDia: number
    idPrato: number
    _count: PratoDiaCountAggregateOutputType | null
    _avg: PratoDiaAvgAggregateOutputType | null
    _sum: PratoDiaSumAggregateOutputType | null
    _min: PratoDiaMinAggregateOutputType | null
    _max: PratoDiaMaxAggregateOutputType | null
  }

  type GetPratoDiaGroupByPayload<T extends PratoDiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PratoDiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PratoDiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PratoDiaGroupByOutputType[P]>
            : GetScalarType<T[P], PratoDiaGroupByOutputType[P]>
        }
      >
    >


  export type PratoDiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDia?: boolean
    idPrato?: boolean
    dia?: boolean | DiaDefaultArgs<ExtArgs>
    prato?: boolean | PratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pratoDia"]>

  export type PratoDiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDia?: boolean
    idPrato?: boolean
    dia?: boolean | DiaDefaultArgs<ExtArgs>
    prato?: boolean | PratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pratoDia"]>

  export type PratoDiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDia?: boolean
    idPrato?: boolean
    dia?: boolean | DiaDefaultArgs<ExtArgs>
    prato?: boolean | PratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pratoDia"]>

  export type PratoDiaSelectScalar = {
    id?: boolean
    idDia?: boolean
    idPrato?: boolean
  }

  export type PratoDiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idDia" | "idPrato", ExtArgs["result"]["pratoDia"]>
  export type PratoDiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dia?: boolean | DiaDefaultArgs<ExtArgs>
    prato?: boolean | PratoDefaultArgs<ExtArgs>
  }
  export type PratoDiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dia?: boolean | DiaDefaultArgs<ExtArgs>
    prato?: boolean | PratoDefaultArgs<ExtArgs>
  }
  export type PratoDiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dia?: boolean | DiaDefaultArgs<ExtArgs>
    prato?: boolean | PratoDefaultArgs<ExtArgs>
  }

  export type $PratoDiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PratoDia"
    objects: {
      dia: Prisma.$DiaPayload<ExtArgs>
      prato: Prisma.$PratoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idDia: number
      idPrato: number
    }, ExtArgs["result"]["pratoDia"]>
    composites: {}
  }

  type PratoDiaGetPayload<S extends boolean | null | undefined | PratoDiaDefaultArgs> = $Result.GetResult<Prisma.$PratoDiaPayload, S>

  type PratoDiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PratoDiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PratoDiaCountAggregateInputType | true
    }

  export interface PratoDiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PratoDia'], meta: { name: 'PratoDia' } }
    /**
     * Find zero or one PratoDia that matches the filter.
     * @param {PratoDiaFindUniqueArgs} args - Arguments to find a PratoDia
     * @example
     * // Get one PratoDia
     * const pratoDia = await prisma.pratoDia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PratoDiaFindUniqueArgs>(args: SelectSubset<T, PratoDiaFindUniqueArgs<ExtArgs>>): Prisma__PratoDiaClient<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PratoDia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PratoDiaFindUniqueOrThrowArgs} args - Arguments to find a PratoDia
     * @example
     * // Get one PratoDia
     * const pratoDia = await prisma.pratoDia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PratoDiaFindUniqueOrThrowArgs>(args: SelectSubset<T, PratoDiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PratoDiaClient<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PratoDia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoDiaFindFirstArgs} args - Arguments to find a PratoDia
     * @example
     * // Get one PratoDia
     * const pratoDia = await prisma.pratoDia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PratoDiaFindFirstArgs>(args?: SelectSubset<T, PratoDiaFindFirstArgs<ExtArgs>>): Prisma__PratoDiaClient<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PratoDia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoDiaFindFirstOrThrowArgs} args - Arguments to find a PratoDia
     * @example
     * // Get one PratoDia
     * const pratoDia = await prisma.pratoDia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PratoDiaFindFirstOrThrowArgs>(args?: SelectSubset<T, PratoDiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PratoDiaClient<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PratoDias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoDiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PratoDias
     * const pratoDias = await prisma.pratoDia.findMany()
     * 
     * // Get first 10 PratoDias
     * const pratoDias = await prisma.pratoDia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pratoDiaWithIdOnly = await prisma.pratoDia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PratoDiaFindManyArgs>(args?: SelectSubset<T, PratoDiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PratoDia.
     * @param {PratoDiaCreateArgs} args - Arguments to create a PratoDia.
     * @example
     * // Create one PratoDia
     * const PratoDia = await prisma.pratoDia.create({
     *   data: {
     *     // ... data to create a PratoDia
     *   }
     * })
     * 
     */
    create<T extends PratoDiaCreateArgs>(args: SelectSubset<T, PratoDiaCreateArgs<ExtArgs>>): Prisma__PratoDiaClient<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PratoDias.
     * @param {PratoDiaCreateManyArgs} args - Arguments to create many PratoDias.
     * @example
     * // Create many PratoDias
     * const pratoDia = await prisma.pratoDia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PratoDiaCreateManyArgs>(args?: SelectSubset<T, PratoDiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PratoDias and returns the data saved in the database.
     * @param {PratoDiaCreateManyAndReturnArgs} args - Arguments to create many PratoDias.
     * @example
     * // Create many PratoDias
     * const pratoDia = await prisma.pratoDia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PratoDias and only return the `id`
     * const pratoDiaWithIdOnly = await prisma.pratoDia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PratoDiaCreateManyAndReturnArgs>(args?: SelectSubset<T, PratoDiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PratoDia.
     * @param {PratoDiaDeleteArgs} args - Arguments to delete one PratoDia.
     * @example
     * // Delete one PratoDia
     * const PratoDia = await prisma.pratoDia.delete({
     *   where: {
     *     // ... filter to delete one PratoDia
     *   }
     * })
     * 
     */
    delete<T extends PratoDiaDeleteArgs>(args: SelectSubset<T, PratoDiaDeleteArgs<ExtArgs>>): Prisma__PratoDiaClient<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PratoDia.
     * @param {PratoDiaUpdateArgs} args - Arguments to update one PratoDia.
     * @example
     * // Update one PratoDia
     * const pratoDia = await prisma.pratoDia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PratoDiaUpdateArgs>(args: SelectSubset<T, PratoDiaUpdateArgs<ExtArgs>>): Prisma__PratoDiaClient<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PratoDias.
     * @param {PratoDiaDeleteManyArgs} args - Arguments to filter PratoDias to delete.
     * @example
     * // Delete a few PratoDias
     * const { count } = await prisma.pratoDia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PratoDiaDeleteManyArgs>(args?: SelectSubset<T, PratoDiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PratoDias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoDiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PratoDias
     * const pratoDia = await prisma.pratoDia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PratoDiaUpdateManyArgs>(args: SelectSubset<T, PratoDiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PratoDias and returns the data updated in the database.
     * @param {PratoDiaUpdateManyAndReturnArgs} args - Arguments to update many PratoDias.
     * @example
     * // Update many PratoDias
     * const pratoDia = await prisma.pratoDia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PratoDias and only return the `id`
     * const pratoDiaWithIdOnly = await prisma.pratoDia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PratoDiaUpdateManyAndReturnArgs>(args: SelectSubset<T, PratoDiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PratoDia.
     * @param {PratoDiaUpsertArgs} args - Arguments to update or create a PratoDia.
     * @example
     * // Update or create a PratoDia
     * const pratoDia = await prisma.pratoDia.upsert({
     *   create: {
     *     // ... data to create a PratoDia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PratoDia we want to update
     *   }
     * })
     */
    upsert<T extends PratoDiaUpsertArgs>(args: SelectSubset<T, PratoDiaUpsertArgs<ExtArgs>>): Prisma__PratoDiaClient<$Result.GetResult<Prisma.$PratoDiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PratoDias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoDiaCountArgs} args - Arguments to filter PratoDias to count.
     * @example
     * // Count the number of PratoDias
     * const count = await prisma.pratoDia.count({
     *   where: {
     *     // ... the filter for the PratoDias we want to count
     *   }
     * })
    **/
    count<T extends PratoDiaCountArgs>(
      args?: Subset<T, PratoDiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PratoDiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PratoDia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoDiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PratoDiaAggregateArgs>(args: Subset<T, PratoDiaAggregateArgs>): Prisma.PrismaPromise<GetPratoDiaAggregateType<T>>

    /**
     * Group by PratoDia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoDiaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PratoDiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PratoDiaGroupByArgs['orderBy'] }
        : { orderBy?: PratoDiaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PratoDiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPratoDiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PratoDia model
   */
  readonly fields: PratoDiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PratoDia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PratoDiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dia<T extends DiaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaDefaultArgs<ExtArgs>>): Prisma__DiaClient<$Result.GetResult<Prisma.$DiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prato<T extends PratoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PratoDefaultArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PratoDia model
   */
  interface PratoDiaFieldRefs {
    readonly id: FieldRef<"PratoDia", 'Int'>
    readonly idDia: FieldRef<"PratoDia", 'Int'>
    readonly idPrato: FieldRef<"PratoDia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PratoDia findUnique
   */
  export type PratoDiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * Filter, which PratoDia to fetch.
     */
    where: PratoDiaWhereUniqueInput
  }

  /**
   * PratoDia findUniqueOrThrow
   */
  export type PratoDiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * Filter, which PratoDia to fetch.
     */
    where: PratoDiaWhereUniqueInput
  }

  /**
   * PratoDia findFirst
   */
  export type PratoDiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * Filter, which PratoDia to fetch.
     */
    where?: PratoDiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PratoDias to fetch.
     */
    orderBy?: PratoDiaOrderByWithRelationInput | PratoDiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PratoDias.
     */
    cursor?: PratoDiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PratoDias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PratoDias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PratoDias.
     */
    distinct?: PratoDiaScalarFieldEnum | PratoDiaScalarFieldEnum[]
  }

  /**
   * PratoDia findFirstOrThrow
   */
  export type PratoDiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * Filter, which PratoDia to fetch.
     */
    where?: PratoDiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PratoDias to fetch.
     */
    orderBy?: PratoDiaOrderByWithRelationInput | PratoDiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PratoDias.
     */
    cursor?: PratoDiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PratoDias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PratoDias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PratoDias.
     */
    distinct?: PratoDiaScalarFieldEnum | PratoDiaScalarFieldEnum[]
  }

  /**
   * PratoDia findMany
   */
  export type PratoDiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * Filter, which PratoDias to fetch.
     */
    where?: PratoDiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PratoDias to fetch.
     */
    orderBy?: PratoDiaOrderByWithRelationInput | PratoDiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PratoDias.
     */
    cursor?: PratoDiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PratoDias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PratoDias.
     */
    skip?: number
    distinct?: PratoDiaScalarFieldEnum | PratoDiaScalarFieldEnum[]
  }

  /**
   * PratoDia create
   */
  export type PratoDiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * The data needed to create a PratoDia.
     */
    data: XOR<PratoDiaCreateInput, PratoDiaUncheckedCreateInput>
  }

  /**
   * PratoDia createMany
   */
  export type PratoDiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PratoDias.
     */
    data: PratoDiaCreateManyInput | PratoDiaCreateManyInput[]
  }

  /**
   * PratoDia createManyAndReturn
   */
  export type PratoDiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * The data used to create many PratoDias.
     */
    data: PratoDiaCreateManyInput | PratoDiaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PratoDia update
   */
  export type PratoDiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * The data needed to update a PratoDia.
     */
    data: XOR<PratoDiaUpdateInput, PratoDiaUncheckedUpdateInput>
    /**
     * Choose, which PratoDia to update.
     */
    where: PratoDiaWhereUniqueInput
  }

  /**
   * PratoDia updateMany
   */
  export type PratoDiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PratoDias.
     */
    data: XOR<PratoDiaUpdateManyMutationInput, PratoDiaUncheckedUpdateManyInput>
    /**
     * Filter which PratoDias to update
     */
    where?: PratoDiaWhereInput
    /**
     * Limit how many PratoDias to update.
     */
    limit?: number
  }

  /**
   * PratoDia updateManyAndReturn
   */
  export type PratoDiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * The data used to update PratoDias.
     */
    data: XOR<PratoDiaUpdateManyMutationInput, PratoDiaUncheckedUpdateManyInput>
    /**
     * Filter which PratoDias to update
     */
    where?: PratoDiaWhereInput
    /**
     * Limit how many PratoDias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PratoDia upsert
   */
  export type PratoDiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * The filter to search for the PratoDia to update in case it exists.
     */
    where: PratoDiaWhereUniqueInput
    /**
     * In case the PratoDia found by the `where` argument doesn't exist, create a new PratoDia with this data.
     */
    create: XOR<PratoDiaCreateInput, PratoDiaUncheckedCreateInput>
    /**
     * In case the PratoDia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PratoDiaUpdateInput, PratoDiaUncheckedUpdateInput>
  }

  /**
   * PratoDia delete
   */
  export type PratoDiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
    /**
     * Filter which PratoDia to delete.
     */
    where: PratoDiaWhereUniqueInput
  }

  /**
   * PratoDia deleteMany
   */
  export type PratoDiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PratoDias to delete
     */
    where?: PratoDiaWhereInput
    /**
     * Limit how many PratoDias to delete.
     */
    limit?: number
  }

  /**
   * PratoDia without action
   */
  export type PratoDiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PratoDia
     */
    select?: PratoDiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PratoDia
     */
    omit?: PratoDiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoDiaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    senha: 'senha'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PratoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria',
    ingredientes: 'ingredientes',
    preparo: 'preparo',
    idUsuario: 'idUsuario'
  };

  export type PratoScalarFieldEnum = (typeof PratoScalarFieldEnum)[keyof typeof PratoScalarFieldEnum]


  export const DiaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    idUsuario: 'idUsuario'
  };

  export type DiaScalarFieldEnum = (typeof DiaScalarFieldEnum)[keyof typeof DiaScalarFieldEnum]


  export const PratoDiaScalarFieldEnum: {
    id: 'id',
    idDia: 'idDia',
    idPrato: 'idPrato'
  };

  export type PratoDiaScalarFieldEnum = (typeof PratoDiaScalarFieldEnum)[keyof typeof PratoDiaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    Prato?: PratoListRelationFilter
    Dia?: DiaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    Prato?: PratoOrderByRelationAggregateInput
    Dia?: DiaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    Prato?: PratoListRelationFilter
    Dia?: DiaListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type PratoWhereInput = {
    AND?: PratoWhereInput | PratoWhereInput[]
    OR?: PratoWhereInput[]
    NOT?: PratoWhereInput | PratoWhereInput[]
    id?: IntFilter<"Prato"> | number
    nome?: StringFilter<"Prato"> | string
    categoria?: StringFilter<"Prato"> | string
    ingredientes?: StringNullableFilter<"Prato"> | string | null
    preparo?: StringNullableFilter<"Prato"> | string | null
    idUsuario?: IntFilter<"Prato"> | number
    PratoDia?: PratoDiaListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PratoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    ingredientes?: SortOrderInput | SortOrder
    preparo?: SortOrderInput | SortOrder
    idUsuario?: SortOrder
    PratoDia?: PratoDiaOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PratoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PratoWhereInput | PratoWhereInput[]
    OR?: PratoWhereInput[]
    NOT?: PratoWhereInput | PratoWhereInput[]
    nome?: StringFilter<"Prato"> | string
    categoria?: StringFilter<"Prato"> | string
    ingredientes?: StringNullableFilter<"Prato"> | string | null
    preparo?: StringNullableFilter<"Prato"> | string | null
    idUsuario?: IntFilter<"Prato"> | number
    PratoDia?: PratoDiaListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type PratoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    ingredientes?: SortOrderInput | SortOrder
    preparo?: SortOrderInput | SortOrder
    idUsuario?: SortOrder
    _count?: PratoCountOrderByAggregateInput
    _avg?: PratoAvgOrderByAggregateInput
    _max?: PratoMaxOrderByAggregateInput
    _min?: PratoMinOrderByAggregateInput
    _sum?: PratoSumOrderByAggregateInput
  }

  export type PratoScalarWhereWithAggregatesInput = {
    AND?: PratoScalarWhereWithAggregatesInput | PratoScalarWhereWithAggregatesInput[]
    OR?: PratoScalarWhereWithAggregatesInput[]
    NOT?: PratoScalarWhereWithAggregatesInput | PratoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prato"> | number
    nome?: StringWithAggregatesFilter<"Prato"> | string
    categoria?: StringWithAggregatesFilter<"Prato"> | string
    ingredientes?: StringNullableWithAggregatesFilter<"Prato"> | string | null
    preparo?: StringNullableWithAggregatesFilter<"Prato"> | string | null
    idUsuario?: IntWithAggregatesFilter<"Prato"> | number
  }

  export type DiaWhereInput = {
    AND?: DiaWhereInput | DiaWhereInput[]
    OR?: DiaWhereInput[]
    NOT?: DiaWhereInput | DiaWhereInput[]
    id?: IntFilter<"Dia"> | number
    nome?: StringFilter<"Dia"> | string
    idUsuario?: IntFilter<"Dia"> | number
    PratoDia?: PratoDiaListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type DiaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idUsuario?: SortOrder
    PratoDia?: PratoDiaOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type DiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiaWhereInput | DiaWhereInput[]
    OR?: DiaWhereInput[]
    NOT?: DiaWhereInput | DiaWhereInput[]
    nome?: StringFilter<"Dia"> | string
    idUsuario?: IntFilter<"Dia"> | number
    PratoDia?: PratoDiaListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type DiaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idUsuario?: SortOrder
    _count?: DiaCountOrderByAggregateInput
    _avg?: DiaAvgOrderByAggregateInput
    _max?: DiaMaxOrderByAggregateInput
    _min?: DiaMinOrderByAggregateInput
    _sum?: DiaSumOrderByAggregateInput
  }

  export type DiaScalarWhereWithAggregatesInput = {
    AND?: DiaScalarWhereWithAggregatesInput | DiaScalarWhereWithAggregatesInput[]
    OR?: DiaScalarWhereWithAggregatesInput[]
    NOT?: DiaScalarWhereWithAggregatesInput | DiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dia"> | number
    nome?: StringWithAggregatesFilter<"Dia"> | string
    idUsuario?: IntWithAggregatesFilter<"Dia"> | number
  }

  export type PratoDiaWhereInput = {
    AND?: PratoDiaWhereInput | PratoDiaWhereInput[]
    OR?: PratoDiaWhereInput[]
    NOT?: PratoDiaWhereInput | PratoDiaWhereInput[]
    id?: IntFilter<"PratoDia"> | number
    idDia?: IntFilter<"PratoDia"> | number
    idPrato?: IntFilter<"PratoDia"> | number
    dia?: XOR<DiaScalarRelationFilter, DiaWhereInput>
    prato?: XOR<PratoScalarRelationFilter, PratoWhereInput>
  }

  export type PratoDiaOrderByWithRelationInput = {
    id?: SortOrder
    idDia?: SortOrder
    idPrato?: SortOrder
    dia?: DiaOrderByWithRelationInput
    prato?: PratoOrderByWithRelationInput
  }

  export type PratoDiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PratoDiaWhereInput | PratoDiaWhereInput[]
    OR?: PratoDiaWhereInput[]
    NOT?: PratoDiaWhereInput | PratoDiaWhereInput[]
    idDia?: IntFilter<"PratoDia"> | number
    idPrato?: IntFilter<"PratoDia"> | number
    dia?: XOR<DiaScalarRelationFilter, DiaWhereInput>
    prato?: XOR<PratoScalarRelationFilter, PratoWhereInput>
  }, "id">

  export type PratoDiaOrderByWithAggregationInput = {
    id?: SortOrder
    idDia?: SortOrder
    idPrato?: SortOrder
    _count?: PratoDiaCountOrderByAggregateInput
    _avg?: PratoDiaAvgOrderByAggregateInput
    _max?: PratoDiaMaxOrderByAggregateInput
    _min?: PratoDiaMinOrderByAggregateInput
    _sum?: PratoDiaSumOrderByAggregateInput
  }

  export type PratoDiaScalarWhereWithAggregatesInput = {
    AND?: PratoDiaScalarWhereWithAggregatesInput | PratoDiaScalarWhereWithAggregatesInput[]
    OR?: PratoDiaScalarWhereWithAggregatesInput[]
    NOT?: PratoDiaScalarWhereWithAggregatesInput | PratoDiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PratoDia"> | number
    idDia?: IntWithAggregatesFilter<"PratoDia"> | number
    idPrato?: IntWithAggregatesFilter<"PratoDia"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    senha: string
    Prato?: PratoCreateNestedManyWithoutUsuarioInput
    Dia?: DiaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    senha: string
    Prato?: PratoUncheckedCreateNestedManyWithoutUsuarioInput
    Dia?: DiaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    Prato?: PratoUpdateManyWithoutUsuarioNestedInput
    Dia?: DiaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    Prato?: PratoUncheckedUpdateManyWithoutUsuarioNestedInput
    Dia?: DiaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    senha: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type PratoCreateInput = {
    nome: string
    categoria: string
    ingredientes?: string | null
    preparo?: string | null
    PratoDia?: PratoDiaCreateNestedManyWithoutPratoInput
    usuario: UsuarioCreateNestedOneWithoutPratoInput
  }

  export type PratoUncheckedCreateInput = {
    id?: number
    nome: string
    categoria: string
    ingredientes?: string | null
    preparo?: string | null
    idUsuario: number
    PratoDia?: PratoDiaUncheckedCreateNestedManyWithoutPratoInput
  }

  export type PratoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
    PratoDia?: PratoDiaUpdateManyWithoutPratoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPratoNestedInput
  }

  export type PratoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
    idUsuario?: IntFieldUpdateOperationsInput | number
    PratoDia?: PratoDiaUncheckedUpdateManyWithoutPratoNestedInput
  }

  export type PratoCreateManyInput = {
    id?: number
    nome: string
    categoria: string
    ingredientes?: string | null
    preparo?: string | null
    idUsuario: number
  }

  export type PratoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PratoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type DiaCreateInput = {
    nome: string
    PratoDia?: PratoDiaCreateNestedManyWithoutDiaInput
    usuario: UsuarioCreateNestedOneWithoutDiaInput
  }

  export type DiaUncheckedCreateInput = {
    id?: number
    nome: string
    idUsuario: number
    PratoDia?: PratoDiaUncheckedCreateNestedManyWithoutDiaInput
  }

  export type DiaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    PratoDia?: PratoDiaUpdateManyWithoutDiaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutDiaNestedInput
  }

  export type DiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idUsuario?: IntFieldUpdateOperationsInput | number
    PratoDia?: PratoDiaUncheckedUpdateManyWithoutDiaNestedInput
  }

  export type DiaCreateManyInput = {
    id?: number
    nome: string
    idUsuario: number
  }

  export type DiaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type PratoDiaCreateInput = {
    dia: DiaCreateNestedOneWithoutPratoDiaInput
    prato: PratoCreateNestedOneWithoutPratoDiaInput
  }

  export type PratoDiaUncheckedCreateInput = {
    id?: number
    idDia: number
    idPrato: number
  }

  export type PratoDiaUpdateInput = {
    dia?: DiaUpdateOneRequiredWithoutPratoDiaNestedInput
    prato?: PratoUpdateOneRequiredWithoutPratoDiaNestedInput
  }

  export type PratoDiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDia?: IntFieldUpdateOperationsInput | number
    idPrato?: IntFieldUpdateOperationsInput | number
  }

  export type PratoDiaCreateManyInput = {
    id?: number
    idDia: number
    idPrato: number
  }

  export type PratoDiaUpdateManyMutationInput = {

  }

  export type PratoDiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDia?: IntFieldUpdateOperationsInput | number
    idPrato?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PratoListRelationFilter = {
    every?: PratoWhereInput
    some?: PratoWhereInput
    none?: PratoWhereInput
  }

  export type DiaListRelationFilter = {
    every?: DiaWhereInput
    some?: DiaWhereInput
    none?: DiaWhereInput
  }

  export type PratoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PratoDiaListRelationFilter = {
    every?: PratoDiaWhereInput
    some?: PratoDiaWhereInput
    none?: PratoDiaWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PratoDiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PratoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    ingredientes?: SortOrder
    preparo?: SortOrder
    idUsuario?: SortOrder
  }

  export type PratoAvgOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
  }

  export type PratoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    ingredientes?: SortOrder
    preparo?: SortOrder
    idUsuario?: SortOrder
  }

  export type PratoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    ingredientes?: SortOrder
    preparo?: SortOrder
    idUsuario?: SortOrder
  }

  export type PratoSumOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DiaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idUsuario?: SortOrder
  }

  export type DiaAvgOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
  }

  export type DiaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idUsuario?: SortOrder
  }

  export type DiaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idUsuario?: SortOrder
  }

  export type DiaSumOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
  }

  export type DiaScalarRelationFilter = {
    is?: DiaWhereInput
    isNot?: DiaWhereInput
  }

  export type PratoScalarRelationFilter = {
    is?: PratoWhereInput
    isNot?: PratoWhereInput
  }

  export type PratoDiaCountOrderByAggregateInput = {
    id?: SortOrder
    idDia?: SortOrder
    idPrato?: SortOrder
  }

  export type PratoDiaAvgOrderByAggregateInput = {
    id?: SortOrder
    idDia?: SortOrder
    idPrato?: SortOrder
  }

  export type PratoDiaMaxOrderByAggregateInput = {
    id?: SortOrder
    idDia?: SortOrder
    idPrato?: SortOrder
  }

  export type PratoDiaMinOrderByAggregateInput = {
    id?: SortOrder
    idDia?: SortOrder
    idPrato?: SortOrder
  }

  export type PratoDiaSumOrderByAggregateInput = {
    id?: SortOrder
    idDia?: SortOrder
    idPrato?: SortOrder
  }

  export type PratoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PratoCreateWithoutUsuarioInput, PratoUncheckedCreateWithoutUsuarioInput> | PratoCreateWithoutUsuarioInput[] | PratoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutUsuarioInput | PratoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PratoCreateManyUsuarioInputEnvelope
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
  }

  export type DiaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DiaCreateWithoutUsuarioInput, DiaUncheckedCreateWithoutUsuarioInput> | DiaCreateWithoutUsuarioInput[] | DiaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DiaCreateOrConnectWithoutUsuarioInput | DiaCreateOrConnectWithoutUsuarioInput[]
    createMany?: DiaCreateManyUsuarioInputEnvelope
    connect?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
  }

  export type PratoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PratoCreateWithoutUsuarioInput, PratoUncheckedCreateWithoutUsuarioInput> | PratoCreateWithoutUsuarioInput[] | PratoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutUsuarioInput | PratoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PratoCreateManyUsuarioInputEnvelope
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
  }

  export type DiaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DiaCreateWithoutUsuarioInput, DiaUncheckedCreateWithoutUsuarioInput> | DiaCreateWithoutUsuarioInput[] | DiaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DiaCreateOrConnectWithoutUsuarioInput | DiaCreateOrConnectWithoutUsuarioInput[]
    createMany?: DiaCreateManyUsuarioInputEnvelope
    connect?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PratoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PratoCreateWithoutUsuarioInput, PratoUncheckedCreateWithoutUsuarioInput> | PratoCreateWithoutUsuarioInput[] | PratoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutUsuarioInput | PratoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PratoUpsertWithWhereUniqueWithoutUsuarioInput | PratoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PratoCreateManyUsuarioInputEnvelope
    set?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    disconnect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    delete?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    update?: PratoUpdateWithWhereUniqueWithoutUsuarioInput | PratoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PratoUpdateManyWithWhereWithoutUsuarioInput | PratoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PratoScalarWhereInput | PratoScalarWhereInput[]
  }

  export type DiaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DiaCreateWithoutUsuarioInput, DiaUncheckedCreateWithoutUsuarioInput> | DiaCreateWithoutUsuarioInput[] | DiaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DiaCreateOrConnectWithoutUsuarioInput | DiaCreateOrConnectWithoutUsuarioInput[]
    upsert?: DiaUpsertWithWhereUniqueWithoutUsuarioInput | DiaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DiaCreateManyUsuarioInputEnvelope
    set?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
    disconnect?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
    delete?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
    connect?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
    update?: DiaUpdateWithWhereUniqueWithoutUsuarioInput | DiaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DiaUpdateManyWithWhereWithoutUsuarioInput | DiaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DiaScalarWhereInput | DiaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PratoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PratoCreateWithoutUsuarioInput, PratoUncheckedCreateWithoutUsuarioInput> | PratoCreateWithoutUsuarioInput[] | PratoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutUsuarioInput | PratoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PratoUpsertWithWhereUniqueWithoutUsuarioInput | PratoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PratoCreateManyUsuarioInputEnvelope
    set?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    disconnect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    delete?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    update?: PratoUpdateWithWhereUniqueWithoutUsuarioInput | PratoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PratoUpdateManyWithWhereWithoutUsuarioInput | PratoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PratoScalarWhereInput | PratoScalarWhereInput[]
  }

  export type DiaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DiaCreateWithoutUsuarioInput, DiaUncheckedCreateWithoutUsuarioInput> | DiaCreateWithoutUsuarioInput[] | DiaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DiaCreateOrConnectWithoutUsuarioInput | DiaCreateOrConnectWithoutUsuarioInput[]
    upsert?: DiaUpsertWithWhereUniqueWithoutUsuarioInput | DiaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DiaCreateManyUsuarioInputEnvelope
    set?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
    disconnect?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
    delete?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
    connect?: DiaWhereUniqueInput | DiaWhereUniqueInput[]
    update?: DiaUpdateWithWhereUniqueWithoutUsuarioInput | DiaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DiaUpdateManyWithWhereWithoutUsuarioInput | DiaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DiaScalarWhereInput | DiaScalarWhereInput[]
  }

  export type PratoDiaCreateNestedManyWithoutPratoInput = {
    create?: XOR<PratoDiaCreateWithoutPratoInput, PratoDiaUncheckedCreateWithoutPratoInput> | PratoDiaCreateWithoutPratoInput[] | PratoDiaUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: PratoDiaCreateOrConnectWithoutPratoInput | PratoDiaCreateOrConnectWithoutPratoInput[]
    createMany?: PratoDiaCreateManyPratoInputEnvelope
    connect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutPratoInput = {
    create?: XOR<UsuarioCreateWithoutPratoInput, UsuarioUncheckedCreateWithoutPratoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPratoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PratoDiaUncheckedCreateNestedManyWithoutPratoInput = {
    create?: XOR<PratoDiaCreateWithoutPratoInput, PratoDiaUncheckedCreateWithoutPratoInput> | PratoDiaCreateWithoutPratoInput[] | PratoDiaUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: PratoDiaCreateOrConnectWithoutPratoInput | PratoDiaCreateOrConnectWithoutPratoInput[]
    createMany?: PratoDiaCreateManyPratoInputEnvelope
    connect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PratoDiaUpdateManyWithoutPratoNestedInput = {
    create?: XOR<PratoDiaCreateWithoutPratoInput, PratoDiaUncheckedCreateWithoutPratoInput> | PratoDiaCreateWithoutPratoInput[] | PratoDiaUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: PratoDiaCreateOrConnectWithoutPratoInput | PratoDiaCreateOrConnectWithoutPratoInput[]
    upsert?: PratoDiaUpsertWithWhereUniqueWithoutPratoInput | PratoDiaUpsertWithWhereUniqueWithoutPratoInput[]
    createMany?: PratoDiaCreateManyPratoInputEnvelope
    set?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    disconnect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    delete?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    connect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    update?: PratoDiaUpdateWithWhereUniqueWithoutPratoInput | PratoDiaUpdateWithWhereUniqueWithoutPratoInput[]
    updateMany?: PratoDiaUpdateManyWithWhereWithoutPratoInput | PratoDiaUpdateManyWithWhereWithoutPratoInput[]
    deleteMany?: PratoDiaScalarWhereInput | PratoDiaScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutPratoNestedInput = {
    create?: XOR<UsuarioCreateWithoutPratoInput, UsuarioUncheckedCreateWithoutPratoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPratoInput
    upsert?: UsuarioUpsertWithoutPratoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPratoInput, UsuarioUpdateWithoutPratoInput>, UsuarioUncheckedUpdateWithoutPratoInput>
  }

  export type PratoDiaUncheckedUpdateManyWithoutPratoNestedInput = {
    create?: XOR<PratoDiaCreateWithoutPratoInput, PratoDiaUncheckedCreateWithoutPratoInput> | PratoDiaCreateWithoutPratoInput[] | PratoDiaUncheckedCreateWithoutPratoInput[]
    connectOrCreate?: PratoDiaCreateOrConnectWithoutPratoInput | PratoDiaCreateOrConnectWithoutPratoInput[]
    upsert?: PratoDiaUpsertWithWhereUniqueWithoutPratoInput | PratoDiaUpsertWithWhereUniqueWithoutPratoInput[]
    createMany?: PratoDiaCreateManyPratoInputEnvelope
    set?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    disconnect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    delete?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    connect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    update?: PratoDiaUpdateWithWhereUniqueWithoutPratoInput | PratoDiaUpdateWithWhereUniqueWithoutPratoInput[]
    updateMany?: PratoDiaUpdateManyWithWhereWithoutPratoInput | PratoDiaUpdateManyWithWhereWithoutPratoInput[]
    deleteMany?: PratoDiaScalarWhereInput | PratoDiaScalarWhereInput[]
  }

  export type PratoDiaCreateNestedManyWithoutDiaInput = {
    create?: XOR<PratoDiaCreateWithoutDiaInput, PratoDiaUncheckedCreateWithoutDiaInput> | PratoDiaCreateWithoutDiaInput[] | PratoDiaUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: PratoDiaCreateOrConnectWithoutDiaInput | PratoDiaCreateOrConnectWithoutDiaInput[]
    createMany?: PratoDiaCreateManyDiaInputEnvelope
    connect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutDiaInput = {
    create?: XOR<UsuarioCreateWithoutDiaInput, UsuarioUncheckedCreateWithoutDiaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDiaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PratoDiaUncheckedCreateNestedManyWithoutDiaInput = {
    create?: XOR<PratoDiaCreateWithoutDiaInput, PratoDiaUncheckedCreateWithoutDiaInput> | PratoDiaCreateWithoutDiaInput[] | PratoDiaUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: PratoDiaCreateOrConnectWithoutDiaInput | PratoDiaCreateOrConnectWithoutDiaInput[]
    createMany?: PratoDiaCreateManyDiaInputEnvelope
    connect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
  }

  export type PratoDiaUpdateManyWithoutDiaNestedInput = {
    create?: XOR<PratoDiaCreateWithoutDiaInput, PratoDiaUncheckedCreateWithoutDiaInput> | PratoDiaCreateWithoutDiaInput[] | PratoDiaUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: PratoDiaCreateOrConnectWithoutDiaInput | PratoDiaCreateOrConnectWithoutDiaInput[]
    upsert?: PratoDiaUpsertWithWhereUniqueWithoutDiaInput | PratoDiaUpsertWithWhereUniqueWithoutDiaInput[]
    createMany?: PratoDiaCreateManyDiaInputEnvelope
    set?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    disconnect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    delete?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    connect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    update?: PratoDiaUpdateWithWhereUniqueWithoutDiaInput | PratoDiaUpdateWithWhereUniqueWithoutDiaInput[]
    updateMany?: PratoDiaUpdateManyWithWhereWithoutDiaInput | PratoDiaUpdateManyWithWhereWithoutDiaInput[]
    deleteMany?: PratoDiaScalarWhereInput | PratoDiaScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutDiaNestedInput = {
    create?: XOR<UsuarioCreateWithoutDiaInput, UsuarioUncheckedCreateWithoutDiaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDiaInput
    upsert?: UsuarioUpsertWithoutDiaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDiaInput, UsuarioUpdateWithoutDiaInput>, UsuarioUncheckedUpdateWithoutDiaInput>
  }

  export type PratoDiaUncheckedUpdateManyWithoutDiaNestedInput = {
    create?: XOR<PratoDiaCreateWithoutDiaInput, PratoDiaUncheckedCreateWithoutDiaInput> | PratoDiaCreateWithoutDiaInput[] | PratoDiaUncheckedCreateWithoutDiaInput[]
    connectOrCreate?: PratoDiaCreateOrConnectWithoutDiaInput | PratoDiaCreateOrConnectWithoutDiaInput[]
    upsert?: PratoDiaUpsertWithWhereUniqueWithoutDiaInput | PratoDiaUpsertWithWhereUniqueWithoutDiaInput[]
    createMany?: PratoDiaCreateManyDiaInputEnvelope
    set?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    disconnect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    delete?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    connect?: PratoDiaWhereUniqueInput | PratoDiaWhereUniqueInput[]
    update?: PratoDiaUpdateWithWhereUniqueWithoutDiaInput | PratoDiaUpdateWithWhereUniqueWithoutDiaInput[]
    updateMany?: PratoDiaUpdateManyWithWhereWithoutDiaInput | PratoDiaUpdateManyWithWhereWithoutDiaInput[]
    deleteMany?: PratoDiaScalarWhereInput | PratoDiaScalarWhereInput[]
  }

  export type DiaCreateNestedOneWithoutPratoDiaInput = {
    create?: XOR<DiaCreateWithoutPratoDiaInput, DiaUncheckedCreateWithoutPratoDiaInput>
    connectOrCreate?: DiaCreateOrConnectWithoutPratoDiaInput
    connect?: DiaWhereUniqueInput
  }

  export type PratoCreateNestedOneWithoutPratoDiaInput = {
    create?: XOR<PratoCreateWithoutPratoDiaInput, PratoUncheckedCreateWithoutPratoDiaInput>
    connectOrCreate?: PratoCreateOrConnectWithoutPratoDiaInput
    connect?: PratoWhereUniqueInput
  }

  export type DiaUpdateOneRequiredWithoutPratoDiaNestedInput = {
    create?: XOR<DiaCreateWithoutPratoDiaInput, DiaUncheckedCreateWithoutPratoDiaInput>
    connectOrCreate?: DiaCreateOrConnectWithoutPratoDiaInput
    upsert?: DiaUpsertWithoutPratoDiaInput
    connect?: DiaWhereUniqueInput
    update?: XOR<XOR<DiaUpdateToOneWithWhereWithoutPratoDiaInput, DiaUpdateWithoutPratoDiaInput>, DiaUncheckedUpdateWithoutPratoDiaInput>
  }

  export type PratoUpdateOneRequiredWithoutPratoDiaNestedInput = {
    create?: XOR<PratoCreateWithoutPratoDiaInput, PratoUncheckedCreateWithoutPratoDiaInput>
    connectOrCreate?: PratoCreateOrConnectWithoutPratoDiaInput
    upsert?: PratoUpsertWithoutPratoDiaInput
    connect?: PratoWhereUniqueInput
    update?: XOR<XOR<PratoUpdateToOneWithWhereWithoutPratoDiaInput, PratoUpdateWithoutPratoDiaInput>, PratoUncheckedUpdateWithoutPratoDiaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PratoCreateWithoutUsuarioInput = {
    nome: string
    categoria: string
    ingredientes?: string | null
    preparo?: string | null
    PratoDia?: PratoDiaCreateNestedManyWithoutPratoInput
  }

  export type PratoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    categoria: string
    ingredientes?: string | null
    preparo?: string | null
    PratoDia?: PratoDiaUncheckedCreateNestedManyWithoutPratoInput
  }

  export type PratoCreateOrConnectWithoutUsuarioInput = {
    where: PratoWhereUniqueInput
    create: XOR<PratoCreateWithoutUsuarioInput, PratoUncheckedCreateWithoutUsuarioInput>
  }

  export type PratoCreateManyUsuarioInputEnvelope = {
    data: PratoCreateManyUsuarioInput | PratoCreateManyUsuarioInput[]
  }

  export type DiaCreateWithoutUsuarioInput = {
    nome: string
    PratoDia?: PratoDiaCreateNestedManyWithoutDiaInput
  }

  export type DiaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    PratoDia?: PratoDiaUncheckedCreateNestedManyWithoutDiaInput
  }

  export type DiaCreateOrConnectWithoutUsuarioInput = {
    where: DiaWhereUniqueInput
    create: XOR<DiaCreateWithoutUsuarioInput, DiaUncheckedCreateWithoutUsuarioInput>
  }

  export type DiaCreateManyUsuarioInputEnvelope = {
    data: DiaCreateManyUsuarioInput | DiaCreateManyUsuarioInput[]
  }

  export type PratoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PratoWhereUniqueInput
    update: XOR<PratoUpdateWithoutUsuarioInput, PratoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PratoCreateWithoutUsuarioInput, PratoUncheckedCreateWithoutUsuarioInput>
  }

  export type PratoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PratoWhereUniqueInput
    data: XOR<PratoUpdateWithoutUsuarioInput, PratoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PratoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PratoScalarWhereInput
    data: XOR<PratoUpdateManyMutationInput, PratoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PratoScalarWhereInput = {
    AND?: PratoScalarWhereInput | PratoScalarWhereInput[]
    OR?: PratoScalarWhereInput[]
    NOT?: PratoScalarWhereInput | PratoScalarWhereInput[]
    id?: IntFilter<"Prato"> | number
    nome?: StringFilter<"Prato"> | string
    categoria?: StringFilter<"Prato"> | string
    ingredientes?: StringNullableFilter<"Prato"> | string | null
    preparo?: StringNullableFilter<"Prato"> | string | null
    idUsuario?: IntFilter<"Prato"> | number
  }

  export type DiaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DiaWhereUniqueInput
    update: XOR<DiaUpdateWithoutUsuarioInput, DiaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DiaCreateWithoutUsuarioInput, DiaUncheckedCreateWithoutUsuarioInput>
  }

  export type DiaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DiaWhereUniqueInput
    data: XOR<DiaUpdateWithoutUsuarioInput, DiaUncheckedUpdateWithoutUsuarioInput>
  }

  export type DiaUpdateManyWithWhereWithoutUsuarioInput = {
    where: DiaScalarWhereInput
    data: XOR<DiaUpdateManyMutationInput, DiaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DiaScalarWhereInput = {
    AND?: DiaScalarWhereInput | DiaScalarWhereInput[]
    OR?: DiaScalarWhereInput[]
    NOT?: DiaScalarWhereInput | DiaScalarWhereInput[]
    id?: IntFilter<"Dia"> | number
    nome?: StringFilter<"Dia"> | string
    idUsuario?: IntFilter<"Dia"> | number
  }

  export type PratoDiaCreateWithoutPratoInput = {
    dia: DiaCreateNestedOneWithoutPratoDiaInput
  }

  export type PratoDiaUncheckedCreateWithoutPratoInput = {
    id?: number
    idDia: number
  }

  export type PratoDiaCreateOrConnectWithoutPratoInput = {
    where: PratoDiaWhereUniqueInput
    create: XOR<PratoDiaCreateWithoutPratoInput, PratoDiaUncheckedCreateWithoutPratoInput>
  }

  export type PratoDiaCreateManyPratoInputEnvelope = {
    data: PratoDiaCreateManyPratoInput | PratoDiaCreateManyPratoInput[]
  }

  export type UsuarioCreateWithoutPratoInput = {
    nome: string
    senha: string
    Dia?: DiaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPratoInput = {
    id?: number
    nome: string
    senha: string
    Dia?: DiaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPratoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPratoInput, UsuarioUncheckedCreateWithoutPratoInput>
  }

  export type PratoDiaUpsertWithWhereUniqueWithoutPratoInput = {
    where: PratoDiaWhereUniqueInput
    update: XOR<PratoDiaUpdateWithoutPratoInput, PratoDiaUncheckedUpdateWithoutPratoInput>
    create: XOR<PratoDiaCreateWithoutPratoInput, PratoDiaUncheckedCreateWithoutPratoInput>
  }

  export type PratoDiaUpdateWithWhereUniqueWithoutPratoInput = {
    where: PratoDiaWhereUniqueInput
    data: XOR<PratoDiaUpdateWithoutPratoInput, PratoDiaUncheckedUpdateWithoutPratoInput>
  }

  export type PratoDiaUpdateManyWithWhereWithoutPratoInput = {
    where: PratoDiaScalarWhereInput
    data: XOR<PratoDiaUpdateManyMutationInput, PratoDiaUncheckedUpdateManyWithoutPratoInput>
  }

  export type PratoDiaScalarWhereInput = {
    AND?: PratoDiaScalarWhereInput | PratoDiaScalarWhereInput[]
    OR?: PratoDiaScalarWhereInput[]
    NOT?: PratoDiaScalarWhereInput | PratoDiaScalarWhereInput[]
    id?: IntFilter<"PratoDia"> | number
    idDia?: IntFilter<"PratoDia"> | number
    idPrato?: IntFilter<"PratoDia"> | number
  }

  export type UsuarioUpsertWithoutPratoInput = {
    update: XOR<UsuarioUpdateWithoutPratoInput, UsuarioUncheckedUpdateWithoutPratoInput>
    create: XOR<UsuarioCreateWithoutPratoInput, UsuarioUncheckedCreateWithoutPratoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPratoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPratoInput, UsuarioUncheckedUpdateWithoutPratoInput>
  }

  export type UsuarioUpdateWithoutPratoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    Dia?: DiaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPratoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    Dia?: DiaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PratoDiaCreateWithoutDiaInput = {
    prato: PratoCreateNestedOneWithoutPratoDiaInput
  }

  export type PratoDiaUncheckedCreateWithoutDiaInput = {
    id?: number
    idPrato: number
  }

  export type PratoDiaCreateOrConnectWithoutDiaInput = {
    where: PratoDiaWhereUniqueInput
    create: XOR<PratoDiaCreateWithoutDiaInput, PratoDiaUncheckedCreateWithoutDiaInput>
  }

  export type PratoDiaCreateManyDiaInputEnvelope = {
    data: PratoDiaCreateManyDiaInput | PratoDiaCreateManyDiaInput[]
  }

  export type UsuarioCreateWithoutDiaInput = {
    nome: string
    senha: string
    Prato?: PratoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDiaInput = {
    id?: number
    nome: string
    senha: string
    Prato?: PratoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDiaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDiaInput, UsuarioUncheckedCreateWithoutDiaInput>
  }

  export type PratoDiaUpsertWithWhereUniqueWithoutDiaInput = {
    where: PratoDiaWhereUniqueInput
    update: XOR<PratoDiaUpdateWithoutDiaInput, PratoDiaUncheckedUpdateWithoutDiaInput>
    create: XOR<PratoDiaCreateWithoutDiaInput, PratoDiaUncheckedCreateWithoutDiaInput>
  }

  export type PratoDiaUpdateWithWhereUniqueWithoutDiaInput = {
    where: PratoDiaWhereUniqueInput
    data: XOR<PratoDiaUpdateWithoutDiaInput, PratoDiaUncheckedUpdateWithoutDiaInput>
  }

  export type PratoDiaUpdateManyWithWhereWithoutDiaInput = {
    where: PratoDiaScalarWhereInput
    data: XOR<PratoDiaUpdateManyMutationInput, PratoDiaUncheckedUpdateManyWithoutDiaInput>
  }

  export type UsuarioUpsertWithoutDiaInput = {
    update: XOR<UsuarioUpdateWithoutDiaInput, UsuarioUncheckedUpdateWithoutDiaInput>
    create: XOR<UsuarioCreateWithoutDiaInput, UsuarioUncheckedCreateWithoutDiaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDiaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDiaInput, UsuarioUncheckedUpdateWithoutDiaInput>
  }

  export type UsuarioUpdateWithoutDiaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    Prato?: PratoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    Prato?: PratoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DiaCreateWithoutPratoDiaInput = {
    nome: string
    usuario: UsuarioCreateNestedOneWithoutDiaInput
  }

  export type DiaUncheckedCreateWithoutPratoDiaInput = {
    id?: number
    nome: string
    idUsuario: number
  }

  export type DiaCreateOrConnectWithoutPratoDiaInput = {
    where: DiaWhereUniqueInput
    create: XOR<DiaCreateWithoutPratoDiaInput, DiaUncheckedCreateWithoutPratoDiaInput>
  }

  export type PratoCreateWithoutPratoDiaInput = {
    nome: string
    categoria: string
    ingredientes?: string | null
    preparo?: string | null
    usuario: UsuarioCreateNestedOneWithoutPratoInput
  }

  export type PratoUncheckedCreateWithoutPratoDiaInput = {
    id?: number
    nome: string
    categoria: string
    ingredientes?: string | null
    preparo?: string | null
    idUsuario: number
  }

  export type PratoCreateOrConnectWithoutPratoDiaInput = {
    where: PratoWhereUniqueInput
    create: XOR<PratoCreateWithoutPratoDiaInput, PratoUncheckedCreateWithoutPratoDiaInput>
  }

  export type DiaUpsertWithoutPratoDiaInput = {
    update: XOR<DiaUpdateWithoutPratoDiaInput, DiaUncheckedUpdateWithoutPratoDiaInput>
    create: XOR<DiaCreateWithoutPratoDiaInput, DiaUncheckedCreateWithoutPratoDiaInput>
    where?: DiaWhereInput
  }

  export type DiaUpdateToOneWithWhereWithoutPratoDiaInput = {
    where?: DiaWhereInput
    data: XOR<DiaUpdateWithoutPratoDiaInput, DiaUncheckedUpdateWithoutPratoDiaInput>
  }

  export type DiaUpdateWithoutPratoDiaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutDiaNestedInput
  }

  export type DiaUncheckedUpdateWithoutPratoDiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type PratoUpsertWithoutPratoDiaInput = {
    update: XOR<PratoUpdateWithoutPratoDiaInput, PratoUncheckedUpdateWithoutPratoDiaInput>
    create: XOR<PratoCreateWithoutPratoDiaInput, PratoUncheckedCreateWithoutPratoDiaInput>
    where?: PratoWhereInput
  }

  export type PratoUpdateToOneWithWhereWithoutPratoDiaInput = {
    where?: PratoWhereInput
    data: XOR<PratoUpdateWithoutPratoDiaInput, PratoUncheckedUpdateWithoutPratoDiaInput>
  }

  export type PratoUpdateWithoutPratoDiaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutPratoNestedInput
  }

  export type PratoUncheckedUpdateWithoutPratoDiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type PratoCreateManyUsuarioInput = {
    id?: number
    nome: string
    categoria: string
    ingredientes?: string | null
    preparo?: string | null
  }

  export type DiaCreateManyUsuarioInput = {
    id?: number
    nome: string
  }

  export type PratoUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
    PratoDia?: PratoDiaUpdateManyWithoutPratoNestedInput
  }

  export type PratoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
    PratoDia?: PratoDiaUncheckedUpdateManyWithoutPratoNestedInput
  }

  export type PratoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    ingredientes?: NullableStringFieldUpdateOperationsInput | string | null
    preparo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiaUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    PratoDia?: PratoDiaUpdateManyWithoutDiaNestedInput
  }

  export type DiaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    PratoDia?: PratoDiaUncheckedUpdateManyWithoutDiaNestedInput
  }

  export type DiaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PratoDiaCreateManyPratoInput = {
    id?: number
    idDia: number
  }

  export type PratoDiaUpdateWithoutPratoInput = {
    dia?: DiaUpdateOneRequiredWithoutPratoDiaNestedInput
  }

  export type PratoDiaUncheckedUpdateWithoutPratoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDia?: IntFieldUpdateOperationsInput | number
  }

  export type PratoDiaUncheckedUpdateManyWithoutPratoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDia?: IntFieldUpdateOperationsInput | number
  }

  export type PratoDiaCreateManyDiaInput = {
    id?: number
    idPrato: number
  }

  export type PratoDiaUpdateWithoutDiaInput = {
    prato?: PratoUpdateOneRequiredWithoutPratoDiaNestedInput
  }

  export type PratoDiaUncheckedUpdateWithoutDiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPrato?: IntFieldUpdateOperationsInput | number
  }

  export type PratoDiaUncheckedUpdateManyWithoutDiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPrato?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}