
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  name: string | null
  platform: string
  uid: string
}

/**
 * Model UserBook
 * 
 */
export type UserBook = {
  id: number
  memberId: number
  bookId: number
}

/**
 * Model Book
 * 
 */
export type Book = {
  id: number
  title: string
}

/**
 * Model RecordUser
 * 
 */
export type RecordUser = {
  id: number
  effectedUserId: number
  recordId: number
}

/**
 * Model Record
 * 
 */
export type Record = {
  id: number
  effectiveDate: Date
  amount: Prisma.Decimal
  authorId: number
  typeId: number
  categoryId: number
  bookId: number
}

/**
 * Model RecordType
 * 
 */
export type RecordType = {
  id: number
  name: string
}

/**
 * Model RecordCatetory
 * 
 */
export type RecordCatetory = {
  id: number
  name: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userBook`: Exposes CRUD operations for the **UserBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBooks
    * const userBooks = await prisma.userBook.findMany()
    * ```
    */
  get userBook(): Prisma.UserBookDelegate<GlobalReject>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<GlobalReject>;

  /**
   * `prisma.recordUser`: Exposes CRUD operations for the **RecordUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecordUsers
    * const recordUsers = await prisma.recordUser.findMany()
    * ```
    */
  get recordUser(): Prisma.RecordUserDelegate<GlobalReject>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.record.findMany()
    * ```
    */
  get record(): Prisma.RecordDelegate<GlobalReject>;

  /**
   * `prisma.recordType`: Exposes CRUD operations for the **RecordType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecordTypes
    * const recordTypes = await prisma.recordType.findMany()
    * ```
    */
  get recordType(): Prisma.RecordTypeDelegate<GlobalReject>;

  /**
   * `prisma.recordCatetory`: Exposes CRUD operations for the **RecordCatetory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecordCatetories
    * const recordCatetories = await prisma.recordCatetory.findMany()
    * ```
    */
  get recordCatetory(): Prisma.RecordCatetoryDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    UserBook: 'UserBook',
    Book: 'Book',
    RecordUser: 'RecordUser',
    Record: 'Record',
    RecordType: 'RecordType',
    RecordCatetory: 'RecordCatetory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    userBooks: number
    records: number
    recordUser: number
  }

  export type UserCountOutputTypeSelect = {
    userBooks?: boolean
    records?: boolean
    recordUser?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type BookCountOutputType
   */


  export type BookCountOutputType = {
    userBooks: number
    records: number
  }

  export type BookCountOutputTypeSelect = {
    userBooks?: boolean
    records?: boolean
  }

  export type BookCountOutputTypeGetPayload<S extends boolean | null | undefined | BookCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BookCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BookCountOutputTypeArgs)
    ? BookCountOutputType 
    : S extends { select: any } & (BookCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BookCountOutputType ? BookCountOutputType[P] : never
  } 
      : BookCountOutputType




  // Custom InputTypes

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     * 
    **/
    select?: BookCountOutputTypeSelect | null
  }



  /**
   * Count Type RecordCountOutputType
   */


  export type RecordCountOutputType = {
    recordUser: number
  }

  export type RecordCountOutputTypeSelect = {
    recordUser?: boolean
  }

  export type RecordCountOutputTypeGetPayload<S extends boolean | null | undefined | RecordCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecordCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RecordCountOutputTypeArgs)
    ? RecordCountOutputType 
    : S extends { select: any } & (RecordCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RecordCountOutputType ? RecordCountOutputType[P] : never
  } 
      : RecordCountOutputType




  // Custom InputTypes

  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RecordCountOutputType
     * 
    **/
    select?: RecordCountOutputTypeSelect | null
  }



  /**
   * Count Type RecordTypeCountOutputType
   */


  export type RecordTypeCountOutputType = {
    record: number
  }

  export type RecordTypeCountOutputTypeSelect = {
    record?: boolean
  }

  export type RecordTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | RecordTypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecordTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RecordTypeCountOutputTypeArgs)
    ? RecordTypeCountOutputType 
    : S extends { select: any } & (RecordTypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RecordTypeCountOutputType ? RecordTypeCountOutputType[P] : never
  } 
      : RecordTypeCountOutputType




  // Custom InputTypes

  /**
   * RecordTypeCountOutputType without action
   */
  export type RecordTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RecordTypeCountOutputType
     * 
    **/
    select?: RecordTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type RecordCatetoryCountOutputType
   */


  export type RecordCatetoryCountOutputType = {
    record: number
  }

  export type RecordCatetoryCountOutputTypeSelect = {
    record?: boolean
  }

  export type RecordCatetoryCountOutputTypeGetPayload<S extends boolean | null | undefined | RecordCatetoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecordCatetoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RecordCatetoryCountOutputTypeArgs)
    ? RecordCatetoryCountOutputType 
    : S extends { select: any } & (RecordCatetoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RecordCatetoryCountOutputType ? RecordCatetoryCountOutputType[P] : never
  } 
      : RecordCatetoryCountOutputType




  // Custom InputTypes

  /**
   * RecordCatetoryCountOutputType without action
   */
  export type RecordCatetoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetoryCountOutputType
     * 
    **/
    select?: RecordCatetoryCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    platform: string | null
    uid: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    platform: string | null
    uid: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    platform: number
    uid: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    platform?: true
    uid?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    platform?: true
    uid?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    platform?: true
    uid?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    platform: string
    uid: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    platform?: boolean
    uid?: boolean
    userBooks?: boolean | User$userBooksArgs
    records?: boolean | User$recordsArgs
    recordUser?: boolean | User$recordUserArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    userBooks?: boolean | User$userBooksArgs
    records?: boolean | User$recordsArgs
    recordUser?: boolean | User$recordUserArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'userBooks' ? Array < UserBookGetPayload<S['include'][P]>>  :
        P extends 'records' ? Array < RecordGetPayload<S['include'][P]>>  :
        P extends 'recordUser' ? Array < RecordUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'userBooks' ? Array < UserBookGetPayload<S['select'][P]>>  :
        P extends 'records' ? Array < RecordGetPayload<S['select'][P]>>  :
        P extends 'recordUser' ? Array < RecordUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    userBooks<T extends User$userBooksArgs= {}>(args?: Subset<T, User$userBooksArgs>): PrismaPromise<Array<UserBookGetPayload<T>>| Null>;

    records<T extends User$recordsArgs= {}>(args?: Subset<T, User$recordsArgs>): PrismaPromise<Array<RecordGetPayload<T>>| Null>;

    recordUser<T extends User$recordUserArgs= {}>(args?: Subset<T, User$recordUserArgs>): PrismaPromise<Array<RecordUserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User.userBooks
   */
  export type User$userBooksArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    where?: UserBookWhereInput
    orderBy?: Enumerable<UserBookOrderByWithRelationInput>
    cursor?: UserBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserBookScalarFieldEnum>
  }


  /**
   * User.records
   */
  export type User$recordsArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    where?: RecordWhereInput
    orderBy?: Enumerable<RecordOrderByWithRelationInput>
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RecordScalarFieldEnum>
  }


  /**
   * User.recordUser
   */
  export type User$recordUserArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    where?: RecordUserWhereInput
    orderBy?: Enumerable<RecordUserOrderByWithRelationInput>
    cursor?: RecordUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RecordUserScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model UserBook
   */


  export type AggregateUserBook = {
    _count: UserBookCountAggregateOutputType | null
    _avg: UserBookAvgAggregateOutputType | null
    _sum: UserBookSumAggregateOutputType | null
    _min: UserBookMinAggregateOutputType | null
    _max: UserBookMaxAggregateOutputType | null
  }

  export type UserBookAvgAggregateOutputType = {
    id: number | null
    memberId: number | null
    bookId: number | null
  }

  export type UserBookSumAggregateOutputType = {
    id: number | null
    memberId: number | null
    bookId: number | null
  }

  export type UserBookMinAggregateOutputType = {
    id: number | null
    memberId: number | null
    bookId: number | null
  }

  export type UserBookMaxAggregateOutputType = {
    id: number | null
    memberId: number | null
    bookId: number | null
  }

  export type UserBookCountAggregateOutputType = {
    id: number
    memberId: number
    bookId: number
    _all: number
  }


  export type UserBookAvgAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
  }

  export type UserBookSumAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
  }

  export type UserBookMinAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
  }

  export type UserBookMaxAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
  }

  export type UserBookCountAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
    _all?: true
  }

  export type UserBookAggregateArgs = {
    /**
     * Filter which UserBook to aggregate.
     * 
    **/
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBooks
    **/
    _count?: true | UserBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBookMaxAggregateInputType
  }

  export type GetUserBookAggregateType<T extends UserBookAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBook[P]>
      : GetScalarType<T[P], AggregateUserBook[P]>
  }




  export type UserBookGroupByArgs = {
    where?: UserBookWhereInput
    orderBy?: Enumerable<UserBookOrderByWithAggregationInput>
    by: Array<UserBookScalarFieldEnum>
    having?: UserBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBookCountAggregateInputType | true
    _avg?: UserBookAvgAggregateInputType
    _sum?: UserBookSumAggregateInputType
    _min?: UserBookMinAggregateInputType
    _max?: UserBookMaxAggregateInputType
  }


  export type UserBookGroupByOutputType = {
    id: number
    memberId: number
    bookId: number
    _count: UserBookCountAggregateOutputType | null
    _avg: UserBookAvgAggregateOutputType | null
    _sum: UserBookSumAggregateOutputType | null
    _min: UserBookMinAggregateOutputType | null
    _max: UserBookMaxAggregateOutputType | null
  }

  type GetUserBookGroupByPayload<T extends UserBookGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBookGroupByOutputType[P]>
            : GetScalarType<T[P], UserBookGroupByOutputType[P]>
        }
      >
    >


  export type UserBookSelect = {
    id?: boolean
    member?: boolean | UserArgs
    memberId?: boolean
    book?: boolean | BookArgs
    bookId?: boolean
  }


  export type UserBookInclude = {
    member?: boolean | UserArgs
    book?: boolean | BookArgs
  } 

  export type UserBookGetPayload<S extends boolean | null | undefined | UserBookArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserBook :
    S extends undefined ? never :
    S extends { include: any } & (UserBookArgs | UserBookFindManyArgs)
    ? UserBook  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'member' ? UserGetPayload<S['include'][P]> :
        P extends 'book' ? BookGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserBookArgs | UserBookFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'member' ? UserGetPayload<S['select'][P]> :
        P extends 'book' ? BookGetPayload<S['select'][P]> :  P extends keyof UserBook ? UserBook[P] : never
  } 
      : UserBook


  type UserBookCountArgs = Merge<
    Omit<UserBookFindManyArgs, 'select' | 'include'> & {
      select?: UserBookCountAggregateInputType | true
    }
  >

  export interface UserBookDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserBook that matches the filter.
     * @param {UserBookFindUniqueArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserBookFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserBookFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserBook'> extends True ? Prisma__UserBookClient<UserBookGetPayload<T>> : Prisma__UserBookClient<UserBookGetPayload<T> | null, null>

    /**
     * Find one UserBook that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserBookFindUniqueOrThrowArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserBookFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserBookFindUniqueOrThrowArgs>
    ): Prisma__UserBookClient<UserBookGetPayload<T>>

    /**
     * Find the first UserBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindFirstArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserBookFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserBookFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserBook'> extends True ? Prisma__UserBookClient<UserBookGetPayload<T>> : Prisma__UserBookClient<UserBookGetPayload<T> | null, null>

    /**
     * Find the first UserBook that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindFirstOrThrowArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserBookFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserBookFindFirstOrThrowArgs>
    ): Prisma__UserBookClient<UserBookGetPayload<T>>

    /**
     * Find zero or more UserBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBooks
     * const userBooks = await prisma.userBook.findMany()
     * 
     * // Get first 10 UserBooks
     * const userBooks = await prisma.userBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBookWithIdOnly = await prisma.userBook.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserBookFindManyArgs>(
      args?: SelectSubset<T, UserBookFindManyArgs>
    ): PrismaPromise<Array<UserBookGetPayload<T>>>

    /**
     * Create a UserBook.
     * @param {UserBookCreateArgs} args - Arguments to create a UserBook.
     * @example
     * // Create one UserBook
     * const UserBook = await prisma.userBook.create({
     *   data: {
     *     // ... data to create a UserBook
     *   }
     * })
     * 
    **/
    create<T extends UserBookCreateArgs>(
      args: SelectSubset<T, UserBookCreateArgs>
    ): Prisma__UserBookClient<UserBookGetPayload<T>>

    /**
     * Create many UserBooks.
     *     @param {UserBookCreateManyArgs} args - Arguments to create many UserBooks.
     *     @example
     *     // Create many UserBooks
     *     const userBook = await prisma.userBook.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserBookCreateManyArgs>(
      args?: SelectSubset<T, UserBookCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserBook.
     * @param {UserBookDeleteArgs} args - Arguments to delete one UserBook.
     * @example
     * // Delete one UserBook
     * const UserBook = await prisma.userBook.delete({
     *   where: {
     *     // ... filter to delete one UserBook
     *   }
     * })
     * 
    **/
    delete<T extends UserBookDeleteArgs>(
      args: SelectSubset<T, UserBookDeleteArgs>
    ): Prisma__UserBookClient<UserBookGetPayload<T>>

    /**
     * Update one UserBook.
     * @param {UserBookUpdateArgs} args - Arguments to update one UserBook.
     * @example
     * // Update one UserBook
     * const userBook = await prisma.userBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserBookUpdateArgs>(
      args: SelectSubset<T, UserBookUpdateArgs>
    ): Prisma__UserBookClient<UserBookGetPayload<T>>

    /**
     * Delete zero or more UserBooks.
     * @param {UserBookDeleteManyArgs} args - Arguments to filter UserBooks to delete.
     * @example
     * // Delete a few UserBooks
     * const { count } = await prisma.userBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserBookDeleteManyArgs>(
      args?: SelectSubset<T, UserBookDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBooks
     * const userBook = await prisma.userBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserBookUpdateManyArgs>(
      args: SelectSubset<T, UserBookUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBook.
     * @param {UserBookUpsertArgs} args - Arguments to update or create a UserBook.
     * @example
     * // Update or create a UserBook
     * const userBook = await prisma.userBook.upsert({
     *   create: {
     *     // ... data to create a UserBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBook we want to update
     *   }
     * })
    **/
    upsert<T extends UserBookUpsertArgs>(
      args: SelectSubset<T, UserBookUpsertArgs>
    ): Prisma__UserBookClient<UserBookGetPayload<T>>

    /**
     * Count the number of UserBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookCountArgs} args - Arguments to filter UserBooks to count.
     * @example
     * // Count the number of UserBooks
     * const count = await prisma.userBook.count({
     *   where: {
     *     // ... the filter for the UserBooks we want to count
     *   }
     * })
    **/
    count<T extends UserBookCountArgs>(
      args?: Subset<T, UserBookCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBookAggregateArgs>(args: Subset<T, UserBookAggregateArgs>): PrismaPromise<GetUserBookAggregateType<T>>

    /**
     * Group by UserBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookGroupByArgs} args - Group by arguments.
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
      T extends UserBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBookGroupByArgs['orderBy'] }
        : { orderBy?: UserBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBookGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserBookClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    member<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    book<T extends BookArgs= {}>(args?: Subset<T, BookArgs>): Prisma__BookClient<BookGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserBook base type for findUnique actions
   */
  export type UserBookFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * Filter, which UserBook to fetch.
     * 
    **/
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook findUnique
   */
  export interface UserBookFindUniqueArgs extends UserBookFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserBook findUniqueOrThrow
   */
  export type UserBookFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * Filter, which UserBook to fetch.
     * 
    **/
    where: UserBookWhereUniqueInput
  }


  /**
   * UserBook base type for findFirst actions
   */
  export type UserBookFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * Filter, which UserBook to fetch.
     * 
    **/
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBooks.
     * 
    **/
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBooks.
     * 
    **/
    distinct?: Enumerable<UserBookScalarFieldEnum>
  }

  /**
   * UserBook findFirst
   */
  export interface UserBookFindFirstArgs extends UserBookFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserBook findFirstOrThrow
   */
  export type UserBookFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * Filter, which UserBook to fetch.
     * 
    **/
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBooks.
     * 
    **/
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBooks.
     * 
    **/
    distinct?: Enumerable<UserBookScalarFieldEnum>
  }


  /**
   * UserBook findMany
   */
  export type UserBookFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * Filter, which UserBooks to fetch.
     * 
    **/
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     * 
    **/
    orderBy?: Enumerable<UserBookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBooks.
     * 
    **/
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserBookScalarFieldEnum>
  }


  /**
   * UserBook create
   */
  export type UserBookCreateArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * The data needed to create a UserBook.
     * 
    **/
    data: XOR<UserBookCreateInput, UserBookUncheckedCreateInput>
  }


  /**
   * UserBook createMany
   */
  export type UserBookCreateManyArgs = {
    /**
     * The data used to create many UserBooks.
     * 
    **/
    data: Enumerable<UserBookCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserBook update
   */
  export type UserBookUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * The data needed to update a UserBook.
     * 
    **/
    data: XOR<UserBookUpdateInput, UserBookUncheckedUpdateInput>
    /**
     * Choose, which UserBook to update.
     * 
    **/
    where: UserBookWhereUniqueInput
  }


  /**
   * UserBook updateMany
   */
  export type UserBookUpdateManyArgs = {
    /**
     * The data used to update UserBooks.
     * 
    **/
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyInput>
    /**
     * Filter which UserBooks to update
     * 
    **/
    where?: UserBookWhereInput
  }


  /**
   * UserBook upsert
   */
  export type UserBookUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * The filter to search for the UserBook to update in case it exists.
     * 
    **/
    where: UserBookWhereUniqueInput
    /**
     * In case the UserBook found by the `where` argument doesn't exist, create a new UserBook with this data.
     * 
    **/
    create: XOR<UserBookCreateInput, UserBookUncheckedCreateInput>
    /**
     * In case the UserBook was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserBookUpdateInput, UserBookUncheckedUpdateInput>
  }


  /**
   * UserBook delete
   */
  export type UserBookDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    /**
     * Filter which UserBook to delete.
     * 
    **/
    where: UserBookWhereUniqueInput
  }


  /**
   * UserBook deleteMany
   */
  export type UserBookDeleteManyArgs = {
    /**
     * Filter which UserBooks to delete
     * 
    **/
    where?: UserBookWhereInput
  }


  /**
   * UserBook without action
   */
  export type UserBookArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
  }



  /**
   * Model Book
   */


  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type BookAggregateArgs = {
    /**
     * Filter which Book to aggregate.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs = {
    where?: BookWhereInput
    orderBy?: Enumerable<BookOrderByWithAggregationInput>
    by: Array<BookScalarFieldEnum>
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }


  export type BookGroupByOutputType = {
    id: number
    title: string
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect = {
    id?: boolean
    title?: boolean
    userBooks?: boolean | Book$userBooksArgs
    records?: boolean | Book$recordsArgs
    _count?: boolean | BookCountOutputTypeArgs
  }


  export type BookInclude = {
    userBooks?: boolean | Book$userBooksArgs
    records?: boolean | Book$recordsArgs
    _count?: boolean | BookCountOutputTypeArgs
  } 

  export type BookGetPayload<S extends boolean | null | undefined | BookArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Book :
    S extends undefined ? never :
    S extends { include: any } & (BookArgs | BookFindManyArgs)
    ? Book  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'userBooks' ? Array < UserBookGetPayload<S['include'][P]>>  :
        P extends 'records' ? Array < RecordGetPayload<S['include'][P]>>  :
        P extends '_count' ? BookCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BookArgs | BookFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'userBooks' ? Array < UserBookGetPayload<S['select'][P]>>  :
        P extends 'records' ? Array < RecordGetPayload<S['select'][P]>>  :
        P extends '_count' ? BookCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Book ? Book[P] : never
  } 
      : Book


  type BookCountArgs = Merge<
    Omit<BookFindManyArgs, 'select' | 'include'> & {
      select?: BookCountAggregateInputType | true
    }
  >

  export interface BookDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Book'> extends True ? Prisma__BookClient<BookGetPayload<T>> : Prisma__BookClient<BookGetPayload<T> | null, null>

    /**
     * Find one Book that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BookFindUniqueOrThrowArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Book'> extends True ? Prisma__BookClient<BookGetPayload<T>> : Prisma__BookClient<BookGetPayload<T> | null, null>

    /**
     * Find the first Book that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookFindFirstOrThrowArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookFindManyArgs>(
      args?: SelectSubset<T, BookFindManyArgs>
    ): PrismaPromise<Array<BookGetPayload<T>>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
    **/
    create<T extends BookCreateArgs>(
      args: SelectSubset<T, BookCreateArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Create many Books.
     *     @param {BookCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const book = await prisma.book.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookCreateManyArgs>(
      args?: SelectSubset<T, BookCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
    **/
    delete<T extends BookDeleteArgs>(
      args: SelectSubset<T, BookDeleteArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookUpdateArgs>(
      args: SelectSubset<T, BookUpdateArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookDeleteManyArgs>(
      args?: SelectSubset<T, BookDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookUpdateManyArgs>(
      args: SelectSubset<T, BookUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
    **/
    upsert<T extends BookUpsertArgs>(
      args: SelectSubset<T, BookUpsertArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    userBooks<T extends Book$userBooksArgs= {}>(args?: Subset<T, Book$userBooksArgs>): PrismaPromise<Array<UserBookGetPayload<T>>| Null>;

    records<T extends Book$recordsArgs= {}>(args?: Subset<T, Book$recordsArgs>): PrismaPromise<Array<RecordGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Book base type for findUnique actions
   */
  export type BookFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where: BookWhereUniqueInput
  }

  /**
   * Book findUnique
   */
  export interface BookFindUniqueArgs extends BookFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book base type for findFirst actions
   */
  export type BookFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BookScalarFieldEnum>
  }

  /**
   * Book findFirst
   */
  export interface BookFindFirstArgs extends BookFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book findMany
   */
  export type BookFindManyArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book create
   */
  export type BookCreateArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The data needed to create a Book.
     * 
    **/
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }


  /**
   * Book createMany
   */
  export type BookCreateManyArgs = {
    /**
     * The data used to create many Books.
     * 
    **/
    data: Enumerable<BookCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Book update
   */
  export type BookUpdateArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The data needed to update a Book.
     * 
    **/
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs = {
    /**
     * The data used to update Books.
     * 
    **/
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     * 
    **/
    where?: BookWhereInput
  }


  /**
   * Book upsert
   */
  export type BookUpsertArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The filter to search for the Book to update in case it exists.
     * 
    **/
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     * 
    **/
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }


  /**
   * Book delete
   */
  export type BookDeleteArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter which Book to delete.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs = {
    /**
     * Filter which Books to delete
     * 
    **/
    where?: BookWhereInput
  }


  /**
   * Book.userBooks
   */
  export type Book$userBooksArgs = {
    /**
     * Select specific fields to fetch from the UserBook
     * 
    **/
    select?: UserBookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserBookInclude | null
    where?: UserBookWhereInput
    orderBy?: Enumerable<UserBookOrderByWithRelationInput>
    cursor?: UserBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserBookScalarFieldEnum>
  }


  /**
   * Book.records
   */
  export type Book$recordsArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    where?: RecordWhereInput
    orderBy?: Enumerable<RecordOrderByWithRelationInput>
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RecordScalarFieldEnum>
  }


  /**
   * Book without action
   */
  export type BookArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
  }



  /**
   * Model RecordUser
   */


  export type AggregateRecordUser = {
    _count: RecordUserCountAggregateOutputType | null
    _avg: RecordUserAvgAggregateOutputType | null
    _sum: RecordUserSumAggregateOutputType | null
    _min: RecordUserMinAggregateOutputType | null
    _max: RecordUserMaxAggregateOutputType | null
  }

  export type RecordUserAvgAggregateOutputType = {
    id: number | null
    effectedUserId: number | null
    recordId: number | null
  }

  export type RecordUserSumAggregateOutputType = {
    id: number | null
    effectedUserId: number | null
    recordId: number | null
  }

  export type RecordUserMinAggregateOutputType = {
    id: number | null
    effectedUserId: number | null
    recordId: number | null
  }

  export type RecordUserMaxAggregateOutputType = {
    id: number | null
    effectedUserId: number | null
    recordId: number | null
  }

  export type RecordUserCountAggregateOutputType = {
    id: number
    effectedUserId: number
    recordId: number
    _all: number
  }


  export type RecordUserAvgAggregateInputType = {
    id?: true
    effectedUserId?: true
    recordId?: true
  }

  export type RecordUserSumAggregateInputType = {
    id?: true
    effectedUserId?: true
    recordId?: true
  }

  export type RecordUserMinAggregateInputType = {
    id?: true
    effectedUserId?: true
    recordId?: true
  }

  export type RecordUserMaxAggregateInputType = {
    id?: true
    effectedUserId?: true
    recordId?: true
  }

  export type RecordUserCountAggregateInputType = {
    id?: true
    effectedUserId?: true
    recordId?: true
    _all?: true
  }

  export type RecordUserAggregateArgs = {
    /**
     * Filter which RecordUser to aggregate.
     * 
    **/
    where?: RecordUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecordUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecordUsers
    **/
    _count?: true | RecordUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordUserMaxAggregateInputType
  }

  export type GetRecordUserAggregateType<T extends RecordUserAggregateArgs> = {
        [P in keyof T & keyof AggregateRecordUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecordUser[P]>
      : GetScalarType<T[P], AggregateRecordUser[P]>
  }




  export type RecordUserGroupByArgs = {
    where?: RecordUserWhereInput
    orderBy?: Enumerable<RecordUserOrderByWithAggregationInput>
    by: Array<RecordUserScalarFieldEnum>
    having?: RecordUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordUserCountAggregateInputType | true
    _avg?: RecordUserAvgAggregateInputType
    _sum?: RecordUserSumAggregateInputType
    _min?: RecordUserMinAggregateInputType
    _max?: RecordUserMaxAggregateInputType
  }


  export type RecordUserGroupByOutputType = {
    id: number
    effectedUserId: number
    recordId: number
    _count: RecordUserCountAggregateOutputType | null
    _avg: RecordUserAvgAggregateOutputType | null
    _sum: RecordUserSumAggregateOutputType | null
    _min: RecordUserMinAggregateOutputType | null
    _max: RecordUserMaxAggregateOutputType | null
  }

  type GetRecordUserGroupByPayload<T extends RecordUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecordUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordUserGroupByOutputType[P]>
            : GetScalarType<T[P], RecordUserGroupByOutputType[P]>
        }
      >
    >


  export type RecordUserSelect = {
    id?: boolean
    effectedUser?: boolean | UserArgs
    effectedUserId?: boolean
    record?: boolean | RecordArgs
    recordId?: boolean
  }


  export type RecordUserInclude = {
    effectedUser?: boolean | UserArgs
    record?: boolean | RecordArgs
  } 

  export type RecordUserGetPayload<S extends boolean | null | undefined | RecordUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecordUser :
    S extends undefined ? never :
    S extends { include: any } & (RecordUserArgs | RecordUserFindManyArgs)
    ? RecordUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'effectedUser' ? UserGetPayload<S['include'][P]> :
        P extends 'record' ? RecordGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RecordUserArgs | RecordUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'effectedUser' ? UserGetPayload<S['select'][P]> :
        P extends 'record' ? RecordGetPayload<S['select'][P]> :  P extends keyof RecordUser ? RecordUser[P] : never
  } 
      : RecordUser


  type RecordUserCountArgs = Merge<
    Omit<RecordUserFindManyArgs, 'select' | 'include'> & {
      select?: RecordUserCountAggregateInputType | true
    }
  >

  export interface RecordUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one RecordUser that matches the filter.
     * @param {RecordUserFindUniqueArgs} args - Arguments to find a RecordUser
     * @example
     * // Get one RecordUser
     * const recordUser = await prisma.recordUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecordUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecordUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RecordUser'> extends True ? Prisma__RecordUserClient<RecordUserGetPayload<T>> : Prisma__RecordUserClient<RecordUserGetPayload<T> | null, null>

    /**
     * Find one RecordUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecordUserFindUniqueOrThrowArgs} args - Arguments to find a RecordUser
     * @example
     * // Get one RecordUser
     * const recordUser = await prisma.recordUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecordUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RecordUserFindUniqueOrThrowArgs>
    ): Prisma__RecordUserClient<RecordUserGetPayload<T>>

    /**
     * Find the first RecordUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUserFindFirstArgs} args - Arguments to find a RecordUser
     * @example
     * // Get one RecordUser
     * const recordUser = await prisma.recordUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecordUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecordUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RecordUser'> extends True ? Prisma__RecordUserClient<RecordUserGetPayload<T>> : Prisma__RecordUserClient<RecordUserGetPayload<T> | null, null>

    /**
     * Find the first RecordUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUserFindFirstOrThrowArgs} args - Arguments to find a RecordUser
     * @example
     * // Get one RecordUser
     * const recordUser = await prisma.recordUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecordUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecordUserFindFirstOrThrowArgs>
    ): Prisma__RecordUserClient<RecordUserGetPayload<T>>

    /**
     * Find zero or more RecordUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecordUsers
     * const recordUsers = await prisma.recordUser.findMany()
     * 
     * // Get first 10 RecordUsers
     * const recordUsers = await prisma.recordUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordUserWithIdOnly = await prisma.recordUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecordUserFindManyArgs>(
      args?: SelectSubset<T, RecordUserFindManyArgs>
    ): PrismaPromise<Array<RecordUserGetPayload<T>>>

    /**
     * Create a RecordUser.
     * @param {RecordUserCreateArgs} args - Arguments to create a RecordUser.
     * @example
     * // Create one RecordUser
     * const RecordUser = await prisma.recordUser.create({
     *   data: {
     *     // ... data to create a RecordUser
     *   }
     * })
     * 
    **/
    create<T extends RecordUserCreateArgs>(
      args: SelectSubset<T, RecordUserCreateArgs>
    ): Prisma__RecordUserClient<RecordUserGetPayload<T>>

    /**
     * Create many RecordUsers.
     *     @param {RecordUserCreateManyArgs} args - Arguments to create many RecordUsers.
     *     @example
     *     // Create many RecordUsers
     *     const recordUser = await prisma.recordUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecordUserCreateManyArgs>(
      args?: SelectSubset<T, RecordUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RecordUser.
     * @param {RecordUserDeleteArgs} args - Arguments to delete one RecordUser.
     * @example
     * // Delete one RecordUser
     * const RecordUser = await prisma.recordUser.delete({
     *   where: {
     *     // ... filter to delete one RecordUser
     *   }
     * })
     * 
    **/
    delete<T extends RecordUserDeleteArgs>(
      args: SelectSubset<T, RecordUserDeleteArgs>
    ): Prisma__RecordUserClient<RecordUserGetPayload<T>>

    /**
     * Update one RecordUser.
     * @param {RecordUserUpdateArgs} args - Arguments to update one RecordUser.
     * @example
     * // Update one RecordUser
     * const recordUser = await prisma.recordUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecordUserUpdateArgs>(
      args: SelectSubset<T, RecordUserUpdateArgs>
    ): Prisma__RecordUserClient<RecordUserGetPayload<T>>

    /**
     * Delete zero or more RecordUsers.
     * @param {RecordUserDeleteManyArgs} args - Arguments to filter RecordUsers to delete.
     * @example
     * // Delete a few RecordUsers
     * const { count } = await prisma.recordUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecordUserDeleteManyArgs>(
      args?: SelectSubset<T, RecordUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecordUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecordUsers
     * const recordUser = await prisma.recordUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecordUserUpdateManyArgs>(
      args: SelectSubset<T, RecordUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RecordUser.
     * @param {RecordUserUpsertArgs} args - Arguments to update or create a RecordUser.
     * @example
     * // Update or create a RecordUser
     * const recordUser = await prisma.recordUser.upsert({
     *   create: {
     *     // ... data to create a RecordUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecordUser we want to update
     *   }
     * })
    **/
    upsert<T extends RecordUserUpsertArgs>(
      args: SelectSubset<T, RecordUserUpsertArgs>
    ): Prisma__RecordUserClient<RecordUserGetPayload<T>>

    /**
     * Count the number of RecordUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUserCountArgs} args - Arguments to filter RecordUsers to count.
     * @example
     * // Count the number of RecordUsers
     * const count = await prisma.recordUser.count({
     *   where: {
     *     // ... the filter for the RecordUsers we want to count
     *   }
     * })
    **/
    count<T extends RecordUserCountArgs>(
      args?: Subset<T, RecordUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecordUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecordUserAggregateArgs>(args: Subset<T, RecordUserAggregateArgs>): PrismaPromise<GetRecordUserAggregateType<T>>

    /**
     * Group by RecordUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUserGroupByArgs} args - Group by arguments.
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
      T extends RecordUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordUserGroupByArgs['orderBy'] }
        : { orderBy?: RecordUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecordUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RecordUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecordUserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    effectedUser<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    record<T extends RecordArgs= {}>(args?: Subset<T, RecordArgs>): Prisma__RecordClient<RecordGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RecordUser base type for findUnique actions
   */
  export type RecordUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * Filter, which RecordUser to fetch.
     * 
    **/
    where: RecordUserWhereUniqueInput
  }

  /**
   * RecordUser findUnique
   */
  export interface RecordUserFindUniqueArgs extends RecordUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RecordUser findUniqueOrThrow
   */
  export type RecordUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * Filter, which RecordUser to fetch.
     * 
    **/
    where: RecordUserWhereUniqueInput
  }


  /**
   * RecordUser base type for findFirst actions
   */
  export type RecordUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * Filter, which RecordUser to fetch.
     * 
    **/
    where?: RecordUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecordUsers.
     * 
    **/
    cursor?: RecordUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecordUsers.
     * 
    **/
    distinct?: Enumerable<RecordUserScalarFieldEnum>
  }

  /**
   * RecordUser findFirst
   */
  export interface RecordUserFindFirstArgs extends RecordUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RecordUser findFirstOrThrow
   */
  export type RecordUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * Filter, which RecordUser to fetch.
     * 
    **/
    where?: RecordUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecordUsers.
     * 
    **/
    cursor?: RecordUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecordUsers.
     * 
    **/
    distinct?: Enumerable<RecordUserScalarFieldEnum>
  }


  /**
   * RecordUser findMany
   */
  export type RecordUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * Filter, which RecordUsers to fetch.
     * 
    **/
    where?: RecordUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecordUsers.
     * 
    **/
    cursor?: RecordUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecordUserScalarFieldEnum>
  }


  /**
   * RecordUser create
   */
  export type RecordUserCreateArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * The data needed to create a RecordUser.
     * 
    **/
    data: XOR<RecordUserCreateInput, RecordUserUncheckedCreateInput>
  }


  /**
   * RecordUser createMany
   */
  export type RecordUserCreateManyArgs = {
    /**
     * The data used to create many RecordUsers.
     * 
    **/
    data: Enumerable<RecordUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RecordUser update
   */
  export type RecordUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * The data needed to update a RecordUser.
     * 
    **/
    data: XOR<RecordUserUpdateInput, RecordUserUncheckedUpdateInput>
    /**
     * Choose, which RecordUser to update.
     * 
    **/
    where: RecordUserWhereUniqueInput
  }


  /**
   * RecordUser updateMany
   */
  export type RecordUserUpdateManyArgs = {
    /**
     * The data used to update RecordUsers.
     * 
    **/
    data: XOR<RecordUserUpdateManyMutationInput, RecordUserUncheckedUpdateManyInput>
    /**
     * Filter which RecordUsers to update
     * 
    **/
    where?: RecordUserWhereInput
  }


  /**
   * RecordUser upsert
   */
  export type RecordUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * The filter to search for the RecordUser to update in case it exists.
     * 
    **/
    where: RecordUserWhereUniqueInput
    /**
     * In case the RecordUser found by the `where` argument doesn't exist, create a new RecordUser with this data.
     * 
    **/
    create: XOR<RecordUserCreateInput, RecordUserUncheckedCreateInput>
    /**
     * In case the RecordUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecordUserUpdateInput, RecordUserUncheckedUpdateInput>
  }


  /**
   * RecordUser delete
   */
  export type RecordUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    /**
     * Filter which RecordUser to delete.
     * 
    **/
    where: RecordUserWhereUniqueInput
  }


  /**
   * RecordUser deleteMany
   */
  export type RecordUserDeleteManyArgs = {
    /**
     * Filter which RecordUsers to delete
     * 
    **/
    where?: RecordUserWhereInput
  }


  /**
   * RecordUser without action
   */
  export type RecordUserArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
  }



  /**
   * Model Record
   */


  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  export type RecordAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    authorId: number | null
    typeId: number | null
    categoryId: number | null
    bookId: number | null
  }

  export type RecordSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    authorId: number | null
    typeId: number | null
    categoryId: number | null
    bookId: number | null
  }

  export type RecordMinAggregateOutputType = {
    id: number | null
    effectiveDate: Date | null
    amount: Decimal | null
    authorId: number | null
    typeId: number | null
    categoryId: number | null
    bookId: number | null
  }

  export type RecordMaxAggregateOutputType = {
    id: number | null
    effectiveDate: Date | null
    amount: Decimal | null
    authorId: number | null
    typeId: number | null
    categoryId: number | null
    bookId: number | null
  }

  export type RecordCountAggregateOutputType = {
    id: number
    effectiveDate: number
    amount: number
    authorId: number
    typeId: number
    categoryId: number
    bookId: number
    _all: number
  }


  export type RecordAvgAggregateInputType = {
    id?: true
    amount?: true
    authorId?: true
    typeId?: true
    categoryId?: true
    bookId?: true
  }

  export type RecordSumAggregateInputType = {
    id?: true
    amount?: true
    authorId?: true
    typeId?: true
    categoryId?: true
    bookId?: true
  }

  export type RecordMinAggregateInputType = {
    id?: true
    effectiveDate?: true
    amount?: true
    authorId?: true
    typeId?: true
    categoryId?: true
    bookId?: true
  }

  export type RecordMaxAggregateInputType = {
    id?: true
    effectiveDate?: true
    amount?: true
    authorId?: true
    typeId?: true
    categoryId?: true
    bookId?: true
  }

  export type RecordCountAggregateInputType = {
    id?: true
    effectiveDate?: true
    amount?: true
    authorId?: true
    typeId?: true
    categoryId?: true
    bookId?: true
    _all?: true
  }

  export type RecordAggregateArgs = {
    /**
     * Filter which Record to aggregate.
     * 
    **/
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordMaxAggregateInputType
  }

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>
  }




  export type RecordGroupByArgs = {
    where?: RecordWhereInput
    orderBy?: Enumerable<RecordOrderByWithAggregationInput>
    by: Array<RecordScalarFieldEnum>
    having?: RecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCountAggregateInputType | true
    _avg?: RecordAvgAggregateInputType
    _sum?: RecordSumAggregateInputType
    _min?: RecordMinAggregateInputType
    _max?: RecordMaxAggregateInputType
  }


  export type RecordGroupByOutputType = {
    id: number
    effectiveDate: Date
    amount: Decimal
    authorId: number
    typeId: number
    categoryId: number
    bookId: number
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>
        }
      >
    >


  export type RecordSelect = {
    id?: boolean
    effectiveDate?: boolean
    amount?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    type?: boolean | RecordTypeArgs
    typeId?: boolean
    category?: boolean | RecordCatetoryArgs
    categoryId?: boolean
    book?: boolean | BookArgs
    bookId?: boolean
    recordUser?: boolean | Record$recordUserArgs
    _count?: boolean | RecordCountOutputTypeArgs
  }


  export type RecordInclude = {
    author?: boolean | UserArgs
    type?: boolean | RecordTypeArgs
    category?: boolean | RecordCatetoryArgs
    book?: boolean | BookArgs
    recordUser?: boolean | Record$recordUserArgs
    _count?: boolean | RecordCountOutputTypeArgs
  } 

  export type RecordGetPayload<S extends boolean | null | undefined | RecordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Record :
    S extends undefined ? never :
    S extends { include: any } & (RecordArgs | RecordFindManyArgs)
    ? Record  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'type' ? RecordTypeGetPayload<S['include'][P]> :
        P extends 'category' ? RecordCatetoryGetPayload<S['include'][P]> :
        P extends 'book' ? BookGetPayload<S['include'][P]> :
        P extends 'recordUser' ? Array < RecordUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? RecordCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RecordArgs | RecordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'type' ? RecordTypeGetPayload<S['select'][P]> :
        P extends 'category' ? RecordCatetoryGetPayload<S['select'][P]> :
        P extends 'book' ? BookGetPayload<S['select'][P]> :
        P extends 'recordUser' ? Array < RecordUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? RecordCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Record ? Record[P] : never
  } 
      : Record


  type RecordCountArgs = Merge<
    Omit<RecordFindManyArgs, 'select' | 'include'> & {
      select?: RecordCountAggregateInputType | true
    }
  >

  export interface RecordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Record'> extends True ? Prisma__RecordClient<RecordGetPayload<T>> : Prisma__RecordClient<RecordGetPayload<T> | null, null>

    /**
     * Find one Record that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RecordFindUniqueOrThrowArgs>
    ): Prisma__RecordClient<RecordGetPayload<T>>

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Record'> extends True ? Prisma__RecordClient<RecordGetPayload<T>> : Prisma__RecordClient<RecordGetPayload<T> | null, null>

    /**
     * Find the first Record that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecordFindFirstOrThrowArgs>
    ): Prisma__RecordClient<RecordGetPayload<T>>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecordFindManyArgs>(
      args?: SelectSubset<T, RecordFindManyArgs>
    ): PrismaPromise<Array<RecordGetPayload<T>>>

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     * 
    **/
    create<T extends RecordCreateArgs>(
      args: SelectSubset<T, RecordCreateArgs>
    ): Prisma__RecordClient<RecordGetPayload<T>>

    /**
     * Create many Records.
     *     @param {RecordCreateManyArgs} args - Arguments to create many Records.
     *     @example
     *     // Create many Records
     *     const record = await prisma.record.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecordCreateManyArgs>(
      args?: SelectSubset<T, RecordCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     * 
    **/
    delete<T extends RecordDeleteArgs>(
      args: SelectSubset<T, RecordDeleteArgs>
    ): Prisma__RecordClient<RecordGetPayload<T>>

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecordUpdateArgs>(
      args: SelectSubset<T, RecordUpdateArgs>
    ): Prisma__RecordClient<RecordGetPayload<T>>

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecordDeleteManyArgs>(
      args?: SelectSubset<T, RecordDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecordUpdateManyArgs>(
      args: SelectSubset<T, RecordUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
    **/
    upsert<T extends RecordUpsertArgs>(
      args: SelectSubset<T, RecordUpsertArgs>
    ): Prisma__RecordClient<RecordGetPayload<T>>

    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecordAggregateArgs>(args: Subset<T, RecordAggregateArgs>): PrismaPromise<GetRecordAggregateType<T>>

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
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
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecordClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    type<T extends RecordTypeArgs= {}>(args?: Subset<T, RecordTypeArgs>): Prisma__RecordTypeClient<RecordTypeGetPayload<T> | Null>;

    category<T extends RecordCatetoryArgs= {}>(args?: Subset<T, RecordCatetoryArgs>): Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T> | Null>;

    book<T extends BookArgs= {}>(args?: Subset<T, BookArgs>): Prisma__BookClient<BookGetPayload<T> | Null>;

    recordUser<T extends Record$recordUserArgs= {}>(args?: Subset<T, Record$recordUserArgs>): PrismaPromise<Array<RecordUserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Record base type for findUnique actions
   */
  export type RecordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * Filter, which Record to fetch.
     * 
    **/
    where: RecordWhereUniqueInput
  }

  /**
   * Record findUnique
   */
  export interface RecordFindUniqueArgs extends RecordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * Filter, which Record to fetch.
     * 
    **/
    where: RecordWhereUniqueInput
  }


  /**
   * Record base type for findFirst actions
   */
  export type RecordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * Filter, which Record to fetch.
     * 
    **/
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     * 
    **/
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     * 
    **/
    distinct?: Enumerable<RecordScalarFieldEnum>
  }

  /**
   * Record findFirst
   */
  export interface RecordFindFirstArgs extends RecordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * Filter, which Record to fetch.
     * 
    **/
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     * 
    **/
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     * 
    **/
    distinct?: Enumerable<RecordScalarFieldEnum>
  }


  /**
   * Record findMany
   */
  export type RecordFindManyArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * Filter, which Records to fetch.
     * 
    **/
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     * 
    **/
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecordScalarFieldEnum>
  }


  /**
   * Record create
   */
  export type RecordCreateArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * The data needed to create a Record.
     * 
    **/
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>
  }


  /**
   * Record createMany
   */
  export type RecordCreateManyArgs = {
    /**
     * The data used to create many Records.
     * 
    **/
    data: Enumerable<RecordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Record update
   */
  export type RecordUpdateArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * The data needed to update a Record.
     * 
    **/
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
    /**
     * Choose, which Record to update.
     * 
    **/
    where: RecordWhereUniqueInput
  }


  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs = {
    /**
     * The data used to update Records.
     * 
    **/
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     * 
    **/
    where?: RecordWhereInput
  }


  /**
   * Record upsert
   */
  export type RecordUpsertArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * The filter to search for the Record to update in case it exists.
     * 
    **/
    where: RecordWhereUniqueInput
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     * 
    **/
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
  }


  /**
   * Record delete
   */
  export type RecordDeleteArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    /**
     * Filter which Record to delete.
     * 
    **/
    where: RecordWhereUniqueInput
  }


  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs = {
    /**
     * Filter which Records to delete
     * 
    **/
    where?: RecordWhereInput
  }


  /**
   * Record.recordUser
   */
  export type Record$recordUserArgs = {
    /**
     * Select specific fields to fetch from the RecordUser
     * 
    **/
    select?: RecordUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordUserInclude | null
    where?: RecordUserWhereInput
    orderBy?: Enumerable<RecordUserOrderByWithRelationInput>
    cursor?: RecordUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RecordUserScalarFieldEnum>
  }


  /**
   * Record without action
   */
  export type RecordArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
  }



  /**
   * Model RecordType
   */


  export type AggregateRecordType = {
    _count: RecordTypeCountAggregateOutputType | null
    _avg: RecordTypeAvgAggregateOutputType | null
    _sum: RecordTypeSumAggregateOutputType | null
    _min: RecordTypeMinAggregateOutputType | null
    _max: RecordTypeMaxAggregateOutputType | null
  }

  export type RecordTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type RecordTypeSumAggregateOutputType = {
    id: number | null
  }

  export type RecordTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RecordTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RecordTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RecordTypeAvgAggregateInputType = {
    id?: true
  }

  export type RecordTypeSumAggregateInputType = {
    id?: true
  }

  export type RecordTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RecordTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RecordTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RecordTypeAggregateArgs = {
    /**
     * Filter which RecordType to aggregate.
     * 
    **/
    where?: RecordTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecordTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecordTypes
    **/
    _count?: true | RecordTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordTypeMaxAggregateInputType
  }

  export type GetRecordTypeAggregateType<T extends RecordTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecordType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecordType[P]>
      : GetScalarType<T[P], AggregateRecordType[P]>
  }




  export type RecordTypeGroupByArgs = {
    where?: RecordTypeWhereInput
    orderBy?: Enumerable<RecordTypeOrderByWithAggregationInput>
    by: Array<RecordTypeScalarFieldEnum>
    having?: RecordTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordTypeCountAggregateInputType | true
    _avg?: RecordTypeAvgAggregateInputType
    _sum?: RecordTypeSumAggregateInputType
    _min?: RecordTypeMinAggregateInputType
    _max?: RecordTypeMaxAggregateInputType
  }


  export type RecordTypeGroupByOutputType = {
    id: number
    name: string
    _count: RecordTypeCountAggregateOutputType | null
    _avg: RecordTypeAvgAggregateOutputType | null
    _sum: RecordTypeSumAggregateOutputType | null
    _min: RecordTypeMinAggregateOutputType | null
    _max: RecordTypeMaxAggregateOutputType | null
  }

  type GetRecordTypeGroupByPayload<T extends RecordTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecordTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordTypeGroupByOutputType[P]>
            : GetScalarType<T[P], RecordTypeGroupByOutputType[P]>
        }
      >
    >


  export type RecordTypeSelect = {
    id?: boolean
    name?: boolean
    record?: boolean | RecordType$recordArgs
    _count?: boolean | RecordTypeCountOutputTypeArgs
  }


  export type RecordTypeInclude = {
    record?: boolean | RecordType$recordArgs
    _count?: boolean | RecordTypeCountOutputTypeArgs
  } 

  export type RecordTypeGetPayload<S extends boolean | null | undefined | RecordTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecordType :
    S extends undefined ? never :
    S extends { include: any } & (RecordTypeArgs | RecordTypeFindManyArgs)
    ? RecordType  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'record' ? Array < RecordGetPayload<S['include'][P]>>  :
        P extends '_count' ? RecordTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RecordTypeArgs | RecordTypeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'record' ? Array < RecordGetPayload<S['select'][P]>>  :
        P extends '_count' ? RecordTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RecordType ? RecordType[P] : never
  } 
      : RecordType


  type RecordTypeCountArgs = Merge<
    Omit<RecordTypeFindManyArgs, 'select' | 'include'> & {
      select?: RecordTypeCountAggregateInputType | true
    }
  >

  export interface RecordTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one RecordType that matches the filter.
     * @param {RecordTypeFindUniqueArgs} args - Arguments to find a RecordType
     * @example
     * // Get one RecordType
     * const recordType = await prisma.recordType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecordTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecordTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RecordType'> extends True ? Prisma__RecordTypeClient<RecordTypeGetPayload<T>> : Prisma__RecordTypeClient<RecordTypeGetPayload<T> | null, null>

    /**
     * Find one RecordType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecordTypeFindUniqueOrThrowArgs} args - Arguments to find a RecordType
     * @example
     * // Get one RecordType
     * const recordType = await prisma.recordType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecordTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RecordTypeFindUniqueOrThrowArgs>
    ): Prisma__RecordTypeClient<RecordTypeGetPayload<T>>

    /**
     * Find the first RecordType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordTypeFindFirstArgs} args - Arguments to find a RecordType
     * @example
     * // Get one RecordType
     * const recordType = await prisma.recordType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecordTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecordTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RecordType'> extends True ? Prisma__RecordTypeClient<RecordTypeGetPayload<T>> : Prisma__RecordTypeClient<RecordTypeGetPayload<T> | null, null>

    /**
     * Find the first RecordType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordTypeFindFirstOrThrowArgs} args - Arguments to find a RecordType
     * @example
     * // Get one RecordType
     * const recordType = await prisma.recordType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecordTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecordTypeFindFirstOrThrowArgs>
    ): Prisma__RecordTypeClient<RecordTypeGetPayload<T>>

    /**
     * Find zero or more RecordTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecordTypes
     * const recordTypes = await prisma.recordType.findMany()
     * 
     * // Get first 10 RecordTypes
     * const recordTypes = await prisma.recordType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordTypeWithIdOnly = await prisma.recordType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecordTypeFindManyArgs>(
      args?: SelectSubset<T, RecordTypeFindManyArgs>
    ): PrismaPromise<Array<RecordTypeGetPayload<T>>>

    /**
     * Create a RecordType.
     * @param {RecordTypeCreateArgs} args - Arguments to create a RecordType.
     * @example
     * // Create one RecordType
     * const RecordType = await prisma.recordType.create({
     *   data: {
     *     // ... data to create a RecordType
     *   }
     * })
     * 
    **/
    create<T extends RecordTypeCreateArgs>(
      args: SelectSubset<T, RecordTypeCreateArgs>
    ): Prisma__RecordTypeClient<RecordTypeGetPayload<T>>

    /**
     * Create many RecordTypes.
     *     @param {RecordTypeCreateManyArgs} args - Arguments to create many RecordTypes.
     *     @example
     *     // Create many RecordTypes
     *     const recordType = await prisma.recordType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecordTypeCreateManyArgs>(
      args?: SelectSubset<T, RecordTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RecordType.
     * @param {RecordTypeDeleteArgs} args - Arguments to delete one RecordType.
     * @example
     * // Delete one RecordType
     * const RecordType = await prisma.recordType.delete({
     *   where: {
     *     // ... filter to delete one RecordType
     *   }
     * })
     * 
    **/
    delete<T extends RecordTypeDeleteArgs>(
      args: SelectSubset<T, RecordTypeDeleteArgs>
    ): Prisma__RecordTypeClient<RecordTypeGetPayload<T>>

    /**
     * Update one RecordType.
     * @param {RecordTypeUpdateArgs} args - Arguments to update one RecordType.
     * @example
     * // Update one RecordType
     * const recordType = await prisma.recordType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecordTypeUpdateArgs>(
      args: SelectSubset<T, RecordTypeUpdateArgs>
    ): Prisma__RecordTypeClient<RecordTypeGetPayload<T>>

    /**
     * Delete zero or more RecordTypes.
     * @param {RecordTypeDeleteManyArgs} args - Arguments to filter RecordTypes to delete.
     * @example
     * // Delete a few RecordTypes
     * const { count } = await prisma.recordType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecordTypeDeleteManyArgs>(
      args?: SelectSubset<T, RecordTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecordTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecordTypes
     * const recordType = await prisma.recordType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecordTypeUpdateManyArgs>(
      args: SelectSubset<T, RecordTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RecordType.
     * @param {RecordTypeUpsertArgs} args - Arguments to update or create a RecordType.
     * @example
     * // Update or create a RecordType
     * const recordType = await prisma.recordType.upsert({
     *   create: {
     *     // ... data to create a RecordType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecordType we want to update
     *   }
     * })
    **/
    upsert<T extends RecordTypeUpsertArgs>(
      args: SelectSubset<T, RecordTypeUpsertArgs>
    ): Prisma__RecordTypeClient<RecordTypeGetPayload<T>>

    /**
     * Count the number of RecordTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordTypeCountArgs} args - Arguments to filter RecordTypes to count.
     * @example
     * // Count the number of RecordTypes
     * const count = await prisma.recordType.count({
     *   where: {
     *     // ... the filter for the RecordTypes we want to count
     *   }
     * })
    **/
    count<T extends RecordTypeCountArgs>(
      args?: Subset<T, RecordTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecordType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecordTypeAggregateArgs>(args: Subset<T, RecordTypeAggregateArgs>): PrismaPromise<GetRecordTypeAggregateType<T>>

    /**
     * Group by RecordType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordTypeGroupByArgs} args - Group by arguments.
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
      T extends RecordTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordTypeGroupByArgs['orderBy'] }
        : { orderBy?: RecordTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecordTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordTypeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RecordType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecordTypeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    record<T extends RecordType$recordArgs= {}>(args?: Subset<T, RecordType$recordArgs>): PrismaPromise<Array<RecordGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RecordType base type for findUnique actions
   */
  export type RecordTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * Filter, which RecordType to fetch.
     * 
    **/
    where: RecordTypeWhereUniqueInput
  }

  /**
   * RecordType findUnique
   */
  export interface RecordTypeFindUniqueArgs extends RecordTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RecordType findUniqueOrThrow
   */
  export type RecordTypeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * Filter, which RecordType to fetch.
     * 
    **/
    where: RecordTypeWhereUniqueInput
  }


  /**
   * RecordType base type for findFirst actions
   */
  export type RecordTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * Filter, which RecordType to fetch.
     * 
    **/
    where?: RecordTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecordTypes.
     * 
    **/
    cursor?: RecordTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecordTypes.
     * 
    **/
    distinct?: Enumerable<RecordTypeScalarFieldEnum>
  }

  /**
   * RecordType findFirst
   */
  export interface RecordTypeFindFirstArgs extends RecordTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RecordType findFirstOrThrow
   */
  export type RecordTypeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * Filter, which RecordType to fetch.
     * 
    **/
    where?: RecordTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecordTypes.
     * 
    **/
    cursor?: RecordTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecordTypes.
     * 
    **/
    distinct?: Enumerable<RecordTypeScalarFieldEnum>
  }


  /**
   * RecordType findMany
   */
  export type RecordTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * Filter, which RecordTypes to fetch.
     * 
    **/
    where?: RecordTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecordTypes.
     * 
    **/
    cursor?: RecordTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecordTypeScalarFieldEnum>
  }


  /**
   * RecordType create
   */
  export type RecordTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * The data needed to create a RecordType.
     * 
    **/
    data: XOR<RecordTypeCreateInput, RecordTypeUncheckedCreateInput>
  }


  /**
   * RecordType createMany
   */
  export type RecordTypeCreateManyArgs = {
    /**
     * The data used to create many RecordTypes.
     * 
    **/
    data: Enumerable<RecordTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RecordType update
   */
  export type RecordTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * The data needed to update a RecordType.
     * 
    **/
    data: XOR<RecordTypeUpdateInput, RecordTypeUncheckedUpdateInput>
    /**
     * Choose, which RecordType to update.
     * 
    **/
    where: RecordTypeWhereUniqueInput
  }


  /**
   * RecordType updateMany
   */
  export type RecordTypeUpdateManyArgs = {
    /**
     * The data used to update RecordTypes.
     * 
    **/
    data: XOR<RecordTypeUpdateManyMutationInput, RecordTypeUncheckedUpdateManyInput>
    /**
     * Filter which RecordTypes to update
     * 
    **/
    where?: RecordTypeWhereInput
  }


  /**
   * RecordType upsert
   */
  export type RecordTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * The filter to search for the RecordType to update in case it exists.
     * 
    **/
    where: RecordTypeWhereUniqueInput
    /**
     * In case the RecordType found by the `where` argument doesn't exist, create a new RecordType with this data.
     * 
    **/
    create: XOR<RecordTypeCreateInput, RecordTypeUncheckedCreateInput>
    /**
     * In case the RecordType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecordTypeUpdateInput, RecordTypeUncheckedUpdateInput>
  }


  /**
   * RecordType delete
   */
  export type RecordTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
    /**
     * Filter which RecordType to delete.
     * 
    **/
    where: RecordTypeWhereUniqueInput
  }


  /**
   * RecordType deleteMany
   */
  export type RecordTypeDeleteManyArgs = {
    /**
     * Filter which RecordTypes to delete
     * 
    **/
    where?: RecordTypeWhereInput
  }


  /**
   * RecordType.record
   */
  export type RecordType$recordArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    where?: RecordWhereInput
    orderBy?: Enumerable<RecordOrderByWithRelationInput>
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RecordScalarFieldEnum>
  }


  /**
   * RecordType without action
   */
  export type RecordTypeArgs = {
    /**
     * Select specific fields to fetch from the RecordType
     * 
    **/
    select?: RecordTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordTypeInclude | null
  }



  /**
   * Model RecordCatetory
   */


  export type AggregateRecordCatetory = {
    _count: RecordCatetoryCountAggregateOutputType | null
    _avg: RecordCatetoryAvgAggregateOutputType | null
    _sum: RecordCatetorySumAggregateOutputType | null
    _min: RecordCatetoryMinAggregateOutputType | null
    _max: RecordCatetoryMaxAggregateOutputType | null
  }

  export type RecordCatetoryAvgAggregateOutputType = {
    id: number | null
  }

  export type RecordCatetorySumAggregateOutputType = {
    id: number | null
  }

  export type RecordCatetoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RecordCatetoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RecordCatetoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RecordCatetoryAvgAggregateInputType = {
    id?: true
  }

  export type RecordCatetorySumAggregateInputType = {
    id?: true
  }

  export type RecordCatetoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RecordCatetoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RecordCatetoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RecordCatetoryAggregateArgs = {
    /**
     * Filter which RecordCatetory to aggregate.
     * 
    **/
    where?: RecordCatetoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordCatetories to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordCatetoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RecordCatetoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordCatetories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordCatetories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecordCatetories
    **/
    _count?: true | RecordCatetoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordCatetoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordCatetorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordCatetoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordCatetoryMaxAggregateInputType
  }

  export type GetRecordCatetoryAggregateType<T extends RecordCatetoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRecordCatetory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecordCatetory[P]>
      : GetScalarType<T[P], AggregateRecordCatetory[P]>
  }




  export type RecordCatetoryGroupByArgs = {
    where?: RecordCatetoryWhereInput
    orderBy?: Enumerable<RecordCatetoryOrderByWithAggregationInput>
    by: Array<RecordCatetoryScalarFieldEnum>
    having?: RecordCatetoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCatetoryCountAggregateInputType | true
    _avg?: RecordCatetoryAvgAggregateInputType
    _sum?: RecordCatetorySumAggregateInputType
    _min?: RecordCatetoryMinAggregateInputType
    _max?: RecordCatetoryMaxAggregateInputType
  }


  export type RecordCatetoryGroupByOutputType = {
    id: number
    name: string
    _count: RecordCatetoryCountAggregateOutputType | null
    _avg: RecordCatetoryAvgAggregateOutputType | null
    _sum: RecordCatetorySumAggregateOutputType | null
    _min: RecordCatetoryMinAggregateOutputType | null
    _max: RecordCatetoryMaxAggregateOutputType | null
  }

  type GetRecordCatetoryGroupByPayload<T extends RecordCatetoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RecordCatetoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordCatetoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordCatetoryGroupByOutputType[P]>
            : GetScalarType<T[P], RecordCatetoryGroupByOutputType[P]>
        }
      >
    >


  export type RecordCatetorySelect = {
    id?: boolean
    name?: boolean
    record?: boolean | RecordCatetory$recordArgs
    _count?: boolean | RecordCatetoryCountOutputTypeArgs
  }


  export type RecordCatetoryInclude = {
    record?: boolean | RecordCatetory$recordArgs
    _count?: boolean | RecordCatetoryCountOutputTypeArgs
  } 

  export type RecordCatetoryGetPayload<S extends boolean | null | undefined | RecordCatetoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecordCatetory :
    S extends undefined ? never :
    S extends { include: any } & (RecordCatetoryArgs | RecordCatetoryFindManyArgs)
    ? RecordCatetory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'record' ? Array < RecordGetPayload<S['include'][P]>>  :
        P extends '_count' ? RecordCatetoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RecordCatetoryArgs | RecordCatetoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'record' ? Array < RecordGetPayload<S['select'][P]>>  :
        P extends '_count' ? RecordCatetoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RecordCatetory ? RecordCatetory[P] : never
  } 
      : RecordCatetory


  type RecordCatetoryCountArgs = Merge<
    Omit<RecordCatetoryFindManyArgs, 'select' | 'include'> & {
      select?: RecordCatetoryCountAggregateInputType | true
    }
  >

  export interface RecordCatetoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one RecordCatetory that matches the filter.
     * @param {RecordCatetoryFindUniqueArgs} args - Arguments to find a RecordCatetory
     * @example
     * // Get one RecordCatetory
     * const recordCatetory = await prisma.recordCatetory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecordCatetoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecordCatetoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RecordCatetory'> extends True ? Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T>> : Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T> | null, null>

    /**
     * Find one RecordCatetory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecordCatetoryFindUniqueOrThrowArgs} args - Arguments to find a RecordCatetory
     * @example
     * // Get one RecordCatetory
     * const recordCatetory = await prisma.recordCatetory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecordCatetoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RecordCatetoryFindUniqueOrThrowArgs>
    ): Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T>>

    /**
     * Find the first RecordCatetory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCatetoryFindFirstArgs} args - Arguments to find a RecordCatetory
     * @example
     * // Get one RecordCatetory
     * const recordCatetory = await prisma.recordCatetory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecordCatetoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecordCatetoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RecordCatetory'> extends True ? Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T>> : Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T> | null, null>

    /**
     * Find the first RecordCatetory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCatetoryFindFirstOrThrowArgs} args - Arguments to find a RecordCatetory
     * @example
     * // Get one RecordCatetory
     * const recordCatetory = await prisma.recordCatetory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecordCatetoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecordCatetoryFindFirstOrThrowArgs>
    ): Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T>>

    /**
     * Find zero or more RecordCatetories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCatetoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecordCatetories
     * const recordCatetories = await prisma.recordCatetory.findMany()
     * 
     * // Get first 10 RecordCatetories
     * const recordCatetories = await prisma.recordCatetory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordCatetoryWithIdOnly = await prisma.recordCatetory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecordCatetoryFindManyArgs>(
      args?: SelectSubset<T, RecordCatetoryFindManyArgs>
    ): PrismaPromise<Array<RecordCatetoryGetPayload<T>>>

    /**
     * Create a RecordCatetory.
     * @param {RecordCatetoryCreateArgs} args - Arguments to create a RecordCatetory.
     * @example
     * // Create one RecordCatetory
     * const RecordCatetory = await prisma.recordCatetory.create({
     *   data: {
     *     // ... data to create a RecordCatetory
     *   }
     * })
     * 
    **/
    create<T extends RecordCatetoryCreateArgs>(
      args: SelectSubset<T, RecordCatetoryCreateArgs>
    ): Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T>>

    /**
     * Create many RecordCatetories.
     *     @param {RecordCatetoryCreateManyArgs} args - Arguments to create many RecordCatetories.
     *     @example
     *     // Create many RecordCatetories
     *     const recordCatetory = await prisma.recordCatetory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecordCatetoryCreateManyArgs>(
      args?: SelectSubset<T, RecordCatetoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RecordCatetory.
     * @param {RecordCatetoryDeleteArgs} args - Arguments to delete one RecordCatetory.
     * @example
     * // Delete one RecordCatetory
     * const RecordCatetory = await prisma.recordCatetory.delete({
     *   where: {
     *     // ... filter to delete one RecordCatetory
     *   }
     * })
     * 
    **/
    delete<T extends RecordCatetoryDeleteArgs>(
      args: SelectSubset<T, RecordCatetoryDeleteArgs>
    ): Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T>>

    /**
     * Update one RecordCatetory.
     * @param {RecordCatetoryUpdateArgs} args - Arguments to update one RecordCatetory.
     * @example
     * // Update one RecordCatetory
     * const recordCatetory = await prisma.recordCatetory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecordCatetoryUpdateArgs>(
      args: SelectSubset<T, RecordCatetoryUpdateArgs>
    ): Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T>>

    /**
     * Delete zero or more RecordCatetories.
     * @param {RecordCatetoryDeleteManyArgs} args - Arguments to filter RecordCatetories to delete.
     * @example
     * // Delete a few RecordCatetories
     * const { count } = await prisma.recordCatetory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecordCatetoryDeleteManyArgs>(
      args?: SelectSubset<T, RecordCatetoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecordCatetories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCatetoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecordCatetories
     * const recordCatetory = await prisma.recordCatetory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecordCatetoryUpdateManyArgs>(
      args: SelectSubset<T, RecordCatetoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RecordCatetory.
     * @param {RecordCatetoryUpsertArgs} args - Arguments to update or create a RecordCatetory.
     * @example
     * // Update or create a RecordCatetory
     * const recordCatetory = await prisma.recordCatetory.upsert({
     *   create: {
     *     // ... data to create a RecordCatetory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecordCatetory we want to update
     *   }
     * })
    **/
    upsert<T extends RecordCatetoryUpsertArgs>(
      args: SelectSubset<T, RecordCatetoryUpsertArgs>
    ): Prisma__RecordCatetoryClient<RecordCatetoryGetPayload<T>>

    /**
     * Count the number of RecordCatetories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCatetoryCountArgs} args - Arguments to filter RecordCatetories to count.
     * @example
     * // Count the number of RecordCatetories
     * const count = await prisma.recordCatetory.count({
     *   where: {
     *     // ... the filter for the RecordCatetories we want to count
     *   }
     * })
    **/
    count<T extends RecordCatetoryCountArgs>(
      args?: Subset<T, RecordCatetoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCatetoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecordCatetory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCatetoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecordCatetoryAggregateArgs>(args: Subset<T, RecordCatetoryAggregateArgs>): PrismaPromise<GetRecordCatetoryAggregateType<T>>

    /**
     * Group by RecordCatetory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCatetoryGroupByArgs} args - Group by arguments.
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
      T extends RecordCatetoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordCatetoryGroupByArgs['orderBy'] }
        : { orderBy?: RecordCatetoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecordCatetoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordCatetoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RecordCatetory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecordCatetoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    record<T extends RecordCatetory$recordArgs= {}>(args?: Subset<T, RecordCatetory$recordArgs>): PrismaPromise<Array<RecordGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RecordCatetory base type for findUnique actions
   */
  export type RecordCatetoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * Filter, which RecordCatetory to fetch.
     * 
    **/
    where: RecordCatetoryWhereUniqueInput
  }

  /**
   * RecordCatetory findUnique
   */
  export interface RecordCatetoryFindUniqueArgs extends RecordCatetoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RecordCatetory findUniqueOrThrow
   */
  export type RecordCatetoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * Filter, which RecordCatetory to fetch.
     * 
    **/
    where: RecordCatetoryWhereUniqueInput
  }


  /**
   * RecordCatetory base type for findFirst actions
   */
  export type RecordCatetoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * Filter, which RecordCatetory to fetch.
     * 
    **/
    where?: RecordCatetoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordCatetories to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordCatetoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecordCatetories.
     * 
    **/
    cursor?: RecordCatetoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordCatetories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordCatetories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecordCatetories.
     * 
    **/
    distinct?: Enumerable<RecordCatetoryScalarFieldEnum>
  }

  /**
   * RecordCatetory findFirst
   */
  export interface RecordCatetoryFindFirstArgs extends RecordCatetoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RecordCatetory findFirstOrThrow
   */
  export type RecordCatetoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * Filter, which RecordCatetory to fetch.
     * 
    **/
    where?: RecordCatetoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordCatetories to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordCatetoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecordCatetories.
     * 
    **/
    cursor?: RecordCatetoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordCatetories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordCatetories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecordCatetories.
     * 
    **/
    distinct?: Enumerable<RecordCatetoryScalarFieldEnum>
  }


  /**
   * RecordCatetory findMany
   */
  export type RecordCatetoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * Filter, which RecordCatetories to fetch.
     * 
    **/
    where?: RecordCatetoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecordCatetories to fetch.
     * 
    **/
    orderBy?: Enumerable<RecordCatetoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecordCatetories.
     * 
    **/
    cursor?: RecordCatetoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecordCatetories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecordCatetories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RecordCatetoryScalarFieldEnum>
  }


  /**
   * RecordCatetory create
   */
  export type RecordCatetoryCreateArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * The data needed to create a RecordCatetory.
     * 
    **/
    data: XOR<RecordCatetoryCreateInput, RecordCatetoryUncheckedCreateInput>
  }


  /**
   * RecordCatetory createMany
   */
  export type RecordCatetoryCreateManyArgs = {
    /**
     * The data used to create many RecordCatetories.
     * 
    **/
    data: Enumerable<RecordCatetoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RecordCatetory update
   */
  export type RecordCatetoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * The data needed to update a RecordCatetory.
     * 
    **/
    data: XOR<RecordCatetoryUpdateInput, RecordCatetoryUncheckedUpdateInput>
    /**
     * Choose, which RecordCatetory to update.
     * 
    **/
    where: RecordCatetoryWhereUniqueInput
  }


  /**
   * RecordCatetory updateMany
   */
  export type RecordCatetoryUpdateManyArgs = {
    /**
     * The data used to update RecordCatetories.
     * 
    **/
    data: XOR<RecordCatetoryUpdateManyMutationInput, RecordCatetoryUncheckedUpdateManyInput>
    /**
     * Filter which RecordCatetories to update
     * 
    **/
    where?: RecordCatetoryWhereInput
  }


  /**
   * RecordCatetory upsert
   */
  export type RecordCatetoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * The filter to search for the RecordCatetory to update in case it exists.
     * 
    **/
    where: RecordCatetoryWhereUniqueInput
    /**
     * In case the RecordCatetory found by the `where` argument doesn't exist, create a new RecordCatetory with this data.
     * 
    **/
    create: XOR<RecordCatetoryCreateInput, RecordCatetoryUncheckedCreateInput>
    /**
     * In case the RecordCatetory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RecordCatetoryUpdateInput, RecordCatetoryUncheckedUpdateInput>
  }


  /**
   * RecordCatetory delete
   */
  export type RecordCatetoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
    /**
     * Filter which RecordCatetory to delete.
     * 
    **/
    where: RecordCatetoryWhereUniqueInput
  }


  /**
   * RecordCatetory deleteMany
   */
  export type RecordCatetoryDeleteManyArgs = {
    /**
     * Filter which RecordCatetories to delete
     * 
    **/
    where?: RecordCatetoryWhereInput
  }


  /**
   * RecordCatetory.record
   */
  export type RecordCatetory$recordArgs = {
    /**
     * Select specific fields to fetch from the Record
     * 
    **/
    select?: RecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordInclude | null
    where?: RecordWhereInput
    orderBy?: Enumerable<RecordOrderByWithRelationInput>
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RecordScalarFieldEnum>
  }


  /**
   * RecordCatetory without action
   */
  export type RecordCatetoryArgs = {
    /**
     * Select specific fields to fetch from the RecordCatetory
     * 
    **/
    select?: RecordCatetorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RecordCatetoryInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RecordCatetoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RecordCatetoryScalarFieldEnum = (typeof RecordCatetoryScalarFieldEnum)[keyof typeof RecordCatetoryScalarFieldEnum]


  export const RecordScalarFieldEnum: {
    id: 'id',
    effectiveDate: 'effectiveDate',
    amount: 'amount',
    authorId: 'authorId',
    typeId: 'typeId',
    categoryId: 'categoryId',
    bookId: 'bookId'
  };

  export type RecordScalarFieldEnum = (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum]


  export const RecordTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RecordTypeScalarFieldEnum = (typeof RecordTypeScalarFieldEnum)[keyof typeof RecordTypeScalarFieldEnum]


  export const RecordUserScalarFieldEnum: {
    id: 'id',
    effectedUserId: 'effectedUserId',
    recordId: 'recordId'
  };

  export type RecordUserScalarFieldEnum = (typeof RecordUserScalarFieldEnum)[keyof typeof RecordUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserBookScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    bookId: 'bookId'
  };

  export type UserBookScalarFieldEnum = (typeof UserBookScalarFieldEnum)[keyof typeof UserBookScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    platform: 'platform',
    uid: 'uid'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    platform?: StringFilter | string
    uid?: StringFilter | string
    userBooks?: UserBookListRelationFilter
    records?: RecordListRelationFilter
    recordUser?: RecordUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    uid?: SortOrder
    userBooks?: UserBookOrderByRelationAggregateInput
    records?: RecordOrderByRelationAggregateInput
    recordUser?: RecordUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    uid?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    uid?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    platform?: StringWithAggregatesFilter | string
    uid?: StringWithAggregatesFilter | string
  }

  export type UserBookWhereInput = {
    AND?: Enumerable<UserBookWhereInput>
    OR?: Enumerable<UserBookWhereInput>
    NOT?: Enumerable<UserBookWhereInput>
    id?: IntFilter | number
    member?: XOR<UserRelationFilter, UserWhereInput>
    memberId?: IntFilter | number
    book?: XOR<BookRelationFilter, BookWhereInput>
    bookId?: IntFilter | number
  }

  export type UserBookOrderByWithRelationInput = {
    id?: SortOrder
    member?: UserOrderByWithRelationInput
    memberId?: SortOrder
    book?: BookOrderByWithRelationInput
    bookId?: SortOrder
  }

  export type UserBookWhereUniqueInput = {
    id?: number
  }

  export type UserBookOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
    _count?: UserBookCountOrderByAggregateInput
    _avg?: UserBookAvgOrderByAggregateInput
    _max?: UserBookMaxOrderByAggregateInput
    _min?: UserBookMinOrderByAggregateInput
    _sum?: UserBookSumOrderByAggregateInput
  }

  export type UserBookScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserBookScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserBookScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserBookScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    memberId?: IntWithAggregatesFilter | number
    bookId?: IntWithAggregatesFilter | number
  }

  export type BookWhereInput = {
    AND?: Enumerable<BookWhereInput>
    OR?: Enumerable<BookWhereInput>
    NOT?: Enumerable<BookWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    userBooks?: UserBookListRelationFilter
    records?: RecordListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userBooks?: UserBookOrderByRelationAggregateInput
    records?: RecordOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = {
    id?: number
  }

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BookScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
  }

  export type RecordUserWhereInput = {
    AND?: Enumerable<RecordUserWhereInput>
    OR?: Enumerable<RecordUserWhereInput>
    NOT?: Enumerable<RecordUserWhereInput>
    id?: IntFilter | number
    effectedUser?: XOR<UserRelationFilter, UserWhereInput>
    effectedUserId?: IntFilter | number
    record?: XOR<RecordRelationFilter, RecordWhereInput>
    recordId?: IntFilter | number
  }

  export type RecordUserOrderByWithRelationInput = {
    id?: SortOrder
    effectedUser?: UserOrderByWithRelationInput
    effectedUserId?: SortOrder
    record?: RecordOrderByWithRelationInput
    recordId?: SortOrder
  }

  export type RecordUserWhereUniqueInput = {
    id?: number
  }

  export type RecordUserOrderByWithAggregationInput = {
    id?: SortOrder
    effectedUserId?: SortOrder
    recordId?: SortOrder
    _count?: RecordUserCountOrderByAggregateInput
    _avg?: RecordUserAvgOrderByAggregateInput
    _max?: RecordUserMaxOrderByAggregateInput
    _min?: RecordUserMinOrderByAggregateInput
    _sum?: RecordUserSumOrderByAggregateInput
  }

  export type RecordUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecordUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecordUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecordUserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    effectedUserId?: IntWithAggregatesFilter | number
    recordId?: IntWithAggregatesFilter | number
  }

  export type RecordWhereInput = {
    AND?: Enumerable<RecordWhereInput>
    OR?: Enumerable<RecordWhereInput>
    NOT?: Enumerable<RecordWhereInput>
    id?: IntFilter | number
    effectiveDate?: DateTimeFilter | Date | string
    amount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: IntFilter | number
    type?: XOR<RecordTypeRelationFilter, RecordTypeWhereInput>
    typeId?: IntFilter | number
    category?: XOR<RecordCatetoryRelationFilter, RecordCatetoryWhereInput>
    categoryId?: IntFilter | number
    book?: XOR<BookRelationFilter, BookWhereInput>
    bookId?: IntFilter | number
    recordUser?: RecordUserListRelationFilter
  }

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    amount?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
    type?: RecordTypeOrderByWithRelationInput
    typeId?: SortOrder
    category?: RecordCatetoryOrderByWithRelationInput
    categoryId?: SortOrder
    book?: BookOrderByWithRelationInput
    bookId?: SortOrder
    recordUser?: RecordUserOrderByRelationAggregateInput
  }

  export type RecordWhereUniqueInput = {
    id?: number
  }

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    amount?: SortOrder
    authorId?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    bookId?: SortOrder
    _count?: RecordCountOrderByAggregateInput
    _avg?: RecordAvgOrderByAggregateInput
    _max?: RecordMaxOrderByAggregateInput
    _min?: RecordMinOrderByAggregateInput
    _sum?: RecordSumOrderByAggregateInput
  }

  export type RecordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecordScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecordScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    effectiveDate?: DateTimeWithAggregatesFilter | Date | string
    amount?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    authorId?: IntWithAggregatesFilter | number
    typeId?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    bookId?: IntWithAggregatesFilter | number
  }

  export type RecordTypeWhereInput = {
    AND?: Enumerable<RecordTypeWhereInput>
    OR?: Enumerable<RecordTypeWhereInput>
    NOT?: Enumerable<RecordTypeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    record?: RecordListRelationFilter
  }

  export type RecordTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    record?: RecordOrderByRelationAggregateInput
  }

  export type RecordTypeWhereUniqueInput = {
    id?: number
  }

  export type RecordTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RecordTypeCountOrderByAggregateInput
    _avg?: RecordTypeAvgOrderByAggregateInput
    _max?: RecordTypeMaxOrderByAggregateInput
    _min?: RecordTypeMinOrderByAggregateInput
    _sum?: RecordTypeSumOrderByAggregateInput
  }

  export type RecordTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecordTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecordTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecordTypeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type RecordCatetoryWhereInput = {
    AND?: Enumerable<RecordCatetoryWhereInput>
    OR?: Enumerable<RecordCatetoryWhereInput>
    NOT?: Enumerable<RecordCatetoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    record?: RecordListRelationFilter
  }

  export type RecordCatetoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    record?: RecordOrderByRelationAggregateInput
  }

  export type RecordCatetoryWhereUniqueInput = {
    id?: number
  }

  export type RecordCatetoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RecordCatetoryCountOrderByAggregateInput
    _avg?: RecordCatetoryAvgOrderByAggregateInput
    _max?: RecordCatetoryMaxOrderByAggregateInput
    _min?: RecordCatetoryMinOrderByAggregateInput
    _sum?: RecordCatetorySumOrderByAggregateInput
  }

  export type RecordCatetoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecordCatetoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecordCatetoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecordCatetoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    platform: string
    uid: string
    userBooks?: UserBookCreateNestedManyWithoutMemberInput
    records?: RecordCreateNestedManyWithoutAuthorInput
    recordUser?: RecordUserCreateNestedManyWithoutEffectedUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    platform: string
    uid: string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutMemberInput
    records?: RecordUncheckedCreateNestedManyWithoutAuthorInput
    recordUser?: RecordUserUncheckedCreateNestedManyWithoutEffectedUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUpdateManyWithoutMemberNestedInput
    records?: RecordUpdateManyWithoutAuthorNestedInput
    recordUser?: RecordUserUpdateManyWithoutEffectedUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUncheckedUpdateManyWithoutMemberNestedInput
    records?: RecordUncheckedUpdateManyWithoutAuthorNestedInput
    recordUser?: RecordUserUncheckedUpdateManyWithoutEffectedUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    platform: string
    uid: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type UserBookCreateInput = {
    member: UserCreateNestedOneWithoutUserBooksInput
    book: BookCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateInput = {
    id?: number
    memberId: number
    bookId: number
  }

  export type UserBookUpdateInput = {
    member?: UserUpdateOneRequiredWithoutUserBooksNestedInput
    book?: BookUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBookCreateManyInput = {
    id?: number
    memberId: number
    bookId: number
  }

  export type UserBookUpdateManyMutationInput = {

  }

  export type UserBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type BookCreateInput = {
    title: string
    userBooks?: UserBookCreateNestedManyWithoutBookInput
    records?: RecordCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutBookInput
    records?: RecordUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUpdateManyWithoutBookNestedInput
    records?: RecordUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUncheckedUpdateManyWithoutBookNestedInput
    records?: RecordUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUserCreateInput = {
    effectedUser: UserCreateNestedOneWithoutRecordUserInput
    record: RecordCreateNestedOneWithoutRecordUserInput
  }

  export type RecordUserUncheckedCreateInput = {
    id?: number
    effectedUserId: number
    recordId: number
  }

  export type RecordUserUpdateInput = {
    effectedUser?: UserUpdateOneRequiredWithoutRecordUserNestedInput
    record?: RecordUpdateOneRequiredWithoutRecordUserNestedInput
  }

  export type RecordUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectedUserId?: IntFieldUpdateOperationsInput | number
    recordId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordUserCreateManyInput = {
    id?: number
    effectedUserId: number
    recordId: number
  }

  export type RecordUserUpdateManyMutationInput = {

  }

  export type RecordUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectedUserId?: IntFieldUpdateOperationsInput | number
    recordId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordCreateInput = {
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    author: UserCreateNestedOneWithoutRecordsInput
    type: RecordTypeCreateNestedOneWithoutRecordInput
    category: RecordCatetoryCreateNestedOneWithoutRecordInput
    book: BookCreateNestedOneWithoutRecordsInput
    recordUser?: RecordUserCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    typeId: number
    categoryId: number
    bookId: number
    recordUser?: RecordUserUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordUpdateInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    author?: UserUpdateOneRequiredWithoutRecordsNestedInput
    type?: RecordTypeUpdateOneRequiredWithoutRecordNestedInput
    category?: RecordCatetoryUpdateOneRequiredWithoutRecordNestedInput
    book?: BookUpdateOneRequiredWithoutRecordsNestedInput
    recordUser?: RecordUserUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    authorId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    recordUser?: RecordUserUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordCreateManyInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    typeId: number
    categoryId: number
    bookId: number
  }

  export type RecordUpdateManyMutationInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    authorId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordTypeCreateInput = {
    name: string
    record?: RecordCreateNestedManyWithoutTypeInput
  }

  export type RecordTypeUncheckedCreateInput = {
    id?: number
    name: string
    record?: RecordUncheckedCreateNestedManyWithoutTypeInput
  }

  export type RecordTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    record?: RecordUpdateManyWithoutTypeNestedInput
  }

  export type RecordTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    record?: RecordUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type RecordTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type RecordTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecordTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCatetoryCreateInput = {
    name: string
    record?: RecordCreateNestedManyWithoutCategoryInput
  }

  export type RecordCatetoryUncheckedCreateInput = {
    id?: number
    name: string
    record?: RecordUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type RecordCatetoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    record?: RecordUpdateManyWithoutCategoryNestedInput
  }

  export type RecordCatetoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    record?: RecordUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type RecordCatetoryCreateManyInput = {
    id?: number
    name: string
  }

  export type RecordCatetoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCatetoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserBookListRelationFilter = {
    every?: UserBookWhereInput
    some?: UserBookWhereInput
    none?: UserBookWhereInput
  }

  export type RecordListRelationFilter = {
    every?: RecordWhereInput
    some?: RecordWhereInput
    none?: RecordWhereInput
  }

  export type RecordUserListRelationFilter = {
    every?: RecordUserWhereInput
    some?: RecordUserWhereInput
    none?: RecordUserWhereInput
  }

  export type UserBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecordUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    uid?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    uid?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    uid?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type UserBookCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
  }

  export type UserBookAvgOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
  }

  export type UserBookMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
  }

  export type UserBookMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
  }

  export type UserBookSumOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecordRelationFilter = {
    is?: RecordWhereInput
    isNot?: RecordWhereInput
  }

  export type RecordUserCountOrderByAggregateInput = {
    id?: SortOrder
    effectedUserId?: SortOrder
    recordId?: SortOrder
  }

  export type RecordUserAvgOrderByAggregateInput = {
    id?: SortOrder
    effectedUserId?: SortOrder
    recordId?: SortOrder
  }

  export type RecordUserMaxOrderByAggregateInput = {
    id?: SortOrder
    effectedUserId?: SortOrder
    recordId?: SortOrder
  }

  export type RecordUserMinOrderByAggregateInput = {
    id?: SortOrder
    effectedUserId?: SortOrder
    recordId?: SortOrder
  }

  export type RecordUserSumOrderByAggregateInput = {
    id?: SortOrder
    effectedUserId?: SortOrder
    recordId?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type RecordTypeRelationFilter = {
    is?: RecordTypeWhereInput
    isNot?: RecordTypeWhereInput
  }

  export type RecordCatetoryRelationFilter = {
    is?: RecordCatetoryWhereInput
    isNot?: RecordCatetoryWhereInput
  }

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    amount?: SortOrder
    authorId?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    bookId?: SortOrder
  }

  export type RecordAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    authorId?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    bookId?: SortOrder
  }

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    amount?: SortOrder
    authorId?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    bookId?: SortOrder
  }

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder
    effectiveDate?: SortOrder
    amount?: SortOrder
    authorId?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    bookId?: SortOrder
  }

  export type RecordSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    authorId?: SortOrder
    typeId?: SortOrder
    categoryId?: SortOrder
    bookId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type RecordTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RecordTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecordTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RecordTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RecordTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecordCatetoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RecordCatetoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecordCatetoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RecordCatetoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RecordCatetorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserBookCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<UserBookCreateWithoutMemberInput>, Enumerable<UserBookUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<UserBookCreateOrConnectWithoutMemberInput>
    createMany?: UserBookCreateManyMemberInputEnvelope
    connect?: Enumerable<UserBookWhereUniqueInput>
  }

  export type RecordCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<RecordCreateWithoutAuthorInput>, Enumerable<RecordUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutAuthorInput>
    createMany?: RecordCreateManyAuthorInputEnvelope
    connect?: Enumerable<RecordWhereUniqueInput>
  }

  export type RecordUserCreateNestedManyWithoutEffectedUserInput = {
    create?: XOR<Enumerable<RecordUserCreateWithoutEffectedUserInput>, Enumerable<RecordUserUncheckedCreateWithoutEffectedUserInput>>
    connectOrCreate?: Enumerable<RecordUserCreateOrConnectWithoutEffectedUserInput>
    createMany?: RecordUserCreateManyEffectedUserInputEnvelope
    connect?: Enumerable<RecordUserWhereUniqueInput>
  }

  export type UserBookUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<Enumerable<UserBookCreateWithoutMemberInput>, Enumerable<UserBookUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<UserBookCreateOrConnectWithoutMemberInput>
    createMany?: UserBookCreateManyMemberInputEnvelope
    connect?: Enumerable<UserBookWhereUniqueInput>
  }

  export type RecordUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<RecordCreateWithoutAuthorInput>, Enumerable<RecordUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutAuthorInput>
    createMany?: RecordCreateManyAuthorInputEnvelope
    connect?: Enumerable<RecordWhereUniqueInput>
  }

  export type RecordUserUncheckedCreateNestedManyWithoutEffectedUserInput = {
    create?: XOR<Enumerable<RecordUserCreateWithoutEffectedUserInput>, Enumerable<RecordUserUncheckedCreateWithoutEffectedUserInput>>
    connectOrCreate?: Enumerable<RecordUserCreateOrConnectWithoutEffectedUserInput>
    createMany?: RecordUserCreateManyEffectedUserInputEnvelope
    connect?: Enumerable<RecordUserWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserBookUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<UserBookCreateWithoutMemberInput>, Enumerable<UserBookUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<UserBookCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<UserBookUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: UserBookCreateManyMemberInputEnvelope
    set?: Enumerable<UserBookWhereUniqueInput>
    disconnect?: Enumerable<UserBookWhereUniqueInput>
    delete?: Enumerable<UserBookWhereUniqueInput>
    connect?: Enumerable<UserBookWhereUniqueInput>
    update?: Enumerable<UserBookUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<UserBookUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<UserBookScalarWhereInput>
  }

  export type RecordUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<RecordCreateWithoutAuthorInput>, Enumerable<RecordUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<RecordUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: RecordCreateManyAuthorInputEnvelope
    set?: Enumerable<RecordWhereUniqueInput>
    disconnect?: Enumerable<RecordWhereUniqueInput>
    delete?: Enumerable<RecordWhereUniqueInput>
    connect?: Enumerable<RecordWhereUniqueInput>
    update?: Enumerable<RecordUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<RecordUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<RecordScalarWhereInput>
  }

  export type RecordUserUpdateManyWithoutEffectedUserNestedInput = {
    create?: XOR<Enumerable<RecordUserCreateWithoutEffectedUserInput>, Enumerable<RecordUserUncheckedCreateWithoutEffectedUserInput>>
    connectOrCreate?: Enumerable<RecordUserCreateOrConnectWithoutEffectedUserInput>
    upsert?: Enumerable<RecordUserUpsertWithWhereUniqueWithoutEffectedUserInput>
    createMany?: RecordUserCreateManyEffectedUserInputEnvelope
    set?: Enumerable<RecordUserWhereUniqueInput>
    disconnect?: Enumerable<RecordUserWhereUniqueInput>
    delete?: Enumerable<RecordUserWhereUniqueInput>
    connect?: Enumerable<RecordUserWhereUniqueInput>
    update?: Enumerable<RecordUserUpdateWithWhereUniqueWithoutEffectedUserInput>
    updateMany?: Enumerable<RecordUserUpdateManyWithWhereWithoutEffectedUserInput>
    deleteMany?: Enumerable<RecordUserScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserBookUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<Enumerable<UserBookCreateWithoutMemberInput>, Enumerable<UserBookUncheckedCreateWithoutMemberInput>>
    connectOrCreate?: Enumerable<UserBookCreateOrConnectWithoutMemberInput>
    upsert?: Enumerable<UserBookUpsertWithWhereUniqueWithoutMemberInput>
    createMany?: UserBookCreateManyMemberInputEnvelope
    set?: Enumerable<UserBookWhereUniqueInput>
    disconnect?: Enumerable<UserBookWhereUniqueInput>
    delete?: Enumerable<UserBookWhereUniqueInput>
    connect?: Enumerable<UserBookWhereUniqueInput>
    update?: Enumerable<UserBookUpdateWithWhereUniqueWithoutMemberInput>
    updateMany?: Enumerable<UserBookUpdateManyWithWhereWithoutMemberInput>
    deleteMany?: Enumerable<UserBookScalarWhereInput>
  }

  export type RecordUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<RecordCreateWithoutAuthorInput>, Enumerable<RecordUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<RecordUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: RecordCreateManyAuthorInputEnvelope
    set?: Enumerable<RecordWhereUniqueInput>
    disconnect?: Enumerable<RecordWhereUniqueInput>
    delete?: Enumerable<RecordWhereUniqueInput>
    connect?: Enumerable<RecordWhereUniqueInput>
    update?: Enumerable<RecordUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<RecordUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<RecordScalarWhereInput>
  }

  export type RecordUserUncheckedUpdateManyWithoutEffectedUserNestedInput = {
    create?: XOR<Enumerable<RecordUserCreateWithoutEffectedUserInput>, Enumerable<RecordUserUncheckedCreateWithoutEffectedUserInput>>
    connectOrCreate?: Enumerable<RecordUserCreateOrConnectWithoutEffectedUserInput>
    upsert?: Enumerable<RecordUserUpsertWithWhereUniqueWithoutEffectedUserInput>
    createMany?: RecordUserCreateManyEffectedUserInputEnvelope
    set?: Enumerable<RecordUserWhereUniqueInput>
    disconnect?: Enumerable<RecordUserWhereUniqueInput>
    delete?: Enumerable<RecordUserWhereUniqueInput>
    connect?: Enumerable<RecordUserWhereUniqueInput>
    update?: Enumerable<RecordUserUpdateWithWhereUniqueWithoutEffectedUserInput>
    updateMany?: Enumerable<RecordUserUpdateManyWithWhereWithoutEffectedUserInput>
    deleteMany?: Enumerable<RecordUserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserBooksInput = {
    create?: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBooksInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutUserBooksInput = {
    create?: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutUserBooksInput
    connect?: BookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserBooksNestedInput = {
    create?: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBooksInput
    upsert?: UserUpsertWithoutUserBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserBooksInput, UserUncheckedUpdateWithoutUserBooksInput>
  }

  export type BookUpdateOneRequiredWithoutUserBooksNestedInput = {
    create?: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutUserBooksInput
    upsert?: BookUpsertWithoutUserBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<BookUpdateWithoutUserBooksInput, BookUncheckedUpdateWithoutUserBooksInput>
  }

  export type UserBookCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<UserBookCreateWithoutBookInput>, Enumerable<UserBookUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<UserBookCreateOrConnectWithoutBookInput>
    createMany?: UserBookCreateManyBookInputEnvelope
    connect?: Enumerable<UserBookWhereUniqueInput>
  }

  export type RecordCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<RecordCreateWithoutBookInput>, Enumerable<RecordUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutBookInput>
    createMany?: RecordCreateManyBookInputEnvelope
    connect?: Enumerable<RecordWhereUniqueInput>
  }

  export type UserBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<UserBookCreateWithoutBookInput>, Enumerable<UserBookUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<UserBookCreateOrConnectWithoutBookInput>
    createMany?: UserBookCreateManyBookInputEnvelope
    connect?: Enumerable<UserBookWhereUniqueInput>
  }

  export type RecordUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<RecordCreateWithoutBookInput>, Enumerable<RecordUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutBookInput>
    createMany?: RecordCreateManyBookInputEnvelope
    connect?: Enumerable<RecordWhereUniqueInput>
  }

  export type UserBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<UserBookCreateWithoutBookInput>, Enumerable<UserBookUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<UserBookCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<UserBookUpsertWithWhereUniqueWithoutBookInput>
    createMany?: UserBookCreateManyBookInputEnvelope
    set?: Enumerable<UserBookWhereUniqueInput>
    disconnect?: Enumerable<UserBookWhereUniqueInput>
    delete?: Enumerable<UserBookWhereUniqueInput>
    connect?: Enumerable<UserBookWhereUniqueInput>
    update?: Enumerable<UserBookUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<UserBookUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<UserBookScalarWhereInput>
  }

  export type RecordUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<RecordCreateWithoutBookInput>, Enumerable<RecordUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<RecordUpsertWithWhereUniqueWithoutBookInput>
    createMany?: RecordCreateManyBookInputEnvelope
    set?: Enumerable<RecordWhereUniqueInput>
    disconnect?: Enumerable<RecordWhereUniqueInput>
    delete?: Enumerable<RecordWhereUniqueInput>
    connect?: Enumerable<RecordWhereUniqueInput>
    update?: Enumerable<RecordUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<RecordUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<RecordScalarWhereInput>
  }

  export type UserBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<UserBookCreateWithoutBookInput>, Enumerable<UserBookUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<UserBookCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<UserBookUpsertWithWhereUniqueWithoutBookInput>
    createMany?: UserBookCreateManyBookInputEnvelope
    set?: Enumerable<UserBookWhereUniqueInput>
    disconnect?: Enumerable<UserBookWhereUniqueInput>
    delete?: Enumerable<UserBookWhereUniqueInput>
    connect?: Enumerable<UserBookWhereUniqueInput>
    update?: Enumerable<UserBookUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<UserBookUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<UserBookScalarWhereInput>
  }

  export type RecordUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<RecordCreateWithoutBookInput>, Enumerable<RecordUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<RecordUpsertWithWhereUniqueWithoutBookInput>
    createMany?: RecordCreateManyBookInputEnvelope
    set?: Enumerable<RecordWhereUniqueInput>
    disconnect?: Enumerable<RecordWhereUniqueInput>
    delete?: Enumerable<RecordWhereUniqueInput>
    connect?: Enumerable<RecordWhereUniqueInput>
    update?: Enumerable<RecordUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<RecordUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<RecordScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutRecordUserInput = {
    create?: XOR<UserCreateWithoutRecordUserInput, UserUncheckedCreateWithoutRecordUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordUserInput
    connect?: UserWhereUniqueInput
  }

  export type RecordCreateNestedOneWithoutRecordUserInput = {
    create?: XOR<RecordCreateWithoutRecordUserInput, RecordUncheckedCreateWithoutRecordUserInput>
    connectOrCreate?: RecordCreateOrConnectWithoutRecordUserInput
    connect?: RecordWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecordUserNestedInput = {
    create?: XOR<UserCreateWithoutRecordUserInput, UserUncheckedCreateWithoutRecordUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordUserInput
    upsert?: UserUpsertWithoutRecordUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRecordUserInput, UserUncheckedUpdateWithoutRecordUserInput>
  }

  export type RecordUpdateOneRequiredWithoutRecordUserNestedInput = {
    create?: XOR<RecordCreateWithoutRecordUserInput, RecordUncheckedCreateWithoutRecordUserInput>
    connectOrCreate?: RecordCreateOrConnectWithoutRecordUserInput
    upsert?: RecordUpsertWithoutRecordUserInput
    connect?: RecordWhereUniqueInput
    update?: XOR<RecordUpdateWithoutRecordUserInput, RecordUncheckedUpdateWithoutRecordUserInput>
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type RecordTypeCreateNestedOneWithoutRecordInput = {
    create?: XOR<RecordTypeCreateWithoutRecordInput, RecordTypeUncheckedCreateWithoutRecordInput>
    connectOrCreate?: RecordTypeCreateOrConnectWithoutRecordInput
    connect?: RecordTypeWhereUniqueInput
  }

  export type RecordCatetoryCreateNestedOneWithoutRecordInput = {
    create?: XOR<RecordCatetoryCreateWithoutRecordInput, RecordCatetoryUncheckedCreateWithoutRecordInput>
    connectOrCreate?: RecordCatetoryCreateOrConnectWithoutRecordInput
    connect?: RecordCatetoryWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutRecordsInput = {
    create?: XOR<BookCreateWithoutRecordsInput, BookUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: BookCreateOrConnectWithoutRecordsInput
    connect?: BookWhereUniqueInput
  }

  export type RecordUserCreateNestedManyWithoutRecordInput = {
    create?: XOR<Enumerable<RecordUserCreateWithoutRecordInput>, Enumerable<RecordUserUncheckedCreateWithoutRecordInput>>
    connectOrCreate?: Enumerable<RecordUserCreateOrConnectWithoutRecordInput>
    createMany?: RecordUserCreateManyRecordInputEnvelope
    connect?: Enumerable<RecordUserWhereUniqueInput>
  }

  export type RecordUserUncheckedCreateNestedManyWithoutRecordInput = {
    create?: XOR<Enumerable<RecordUserCreateWithoutRecordInput>, Enumerable<RecordUserUncheckedCreateWithoutRecordInput>>
    connectOrCreate?: Enumerable<RecordUserCreateOrConnectWithoutRecordInput>
    createMany?: RecordUserCreateManyRecordInputEnvelope
    connect?: Enumerable<RecordUserWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type RecordTypeUpdateOneRequiredWithoutRecordNestedInput = {
    create?: XOR<RecordTypeCreateWithoutRecordInput, RecordTypeUncheckedCreateWithoutRecordInput>
    connectOrCreate?: RecordTypeCreateOrConnectWithoutRecordInput
    upsert?: RecordTypeUpsertWithoutRecordInput
    connect?: RecordTypeWhereUniqueInput
    update?: XOR<RecordTypeUpdateWithoutRecordInput, RecordTypeUncheckedUpdateWithoutRecordInput>
  }

  export type RecordCatetoryUpdateOneRequiredWithoutRecordNestedInput = {
    create?: XOR<RecordCatetoryCreateWithoutRecordInput, RecordCatetoryUncheckedCreateWithoutRecordInput>
    connectOrCreate?: RecordCatetoryCreateOrConnectWithoutRecordInput
    upsert?: RecordCatetoryUpsertWithoutRecordInput
    connect?: RecordCatetoryWhereUniqueInput
    update?: XOR<RecordCatetoryUpdateWithoutRecordInput, RecordCatetoryUncheckedUpdateWithoutRecordInput>
  }

  export type BookUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<BookCreateWithoutRecordsInput, BookUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: BookCreateOrConnectWithoutRecordsInput
    upsert?: BookUpsertWithoutRecordsInput
    connect?: BookWhereUniqueInput
    update?: XOR<BookUpdateWithoutRecordsInput, BookUncheckedUpdateWithoutRecordsInput>
  }

  export type RecordUserUpdateManyWithoutRecordNestedInput = {
    create?: XOR<Enumerable<RecordUserCreateWithoutRecordInput>, Enumerable<RecordUserUncheckedCreateWithoutRecordInput>>
    connectOrCreate?: Enumerable<RecordUserCreateOrConnectWithoutRecordInput>
    upsert?: Enumerable<RecordUserUpsertWithWhereUniqueWithoutRecordInput>
    createMany?: RecordUserCreateManyRecordInputEnvelope
    set?: Enumerable<RecordUserWhereUniqueInput>
    disconnect?: Enumerable<RecordUserWhereUniqueInput>
    delete?: Enumerable<RecordUserWhereUniqueInput>
    connect?: Enumerable<RecordUserWhereUniqueInput>
    update?: Enumerable<RecordUserUpdateWithWhereUniqueWithoutRecordInput>
    updateMany?: Enumerable<RecordUserUpdateManyWithWhereWithoutRecordInput>
    deleteMany?: Enumerable<RecordUserScalarWhereInput>
  }

  export type RecordUserUncheckedUpdateManyWithoutRecordNestedInput = {
    create?: XOR<Enumerable<RecordUserCreateWithoutRecordInput>, Enumerable<RecordUserUncheckedCreateWithoutRecordInput>>
    connectOrCreate?: Enumerable<RecordUserCreateOrConnectWithoutRecordInput>
    upsert?: Enumerable<RecordUserUpsertWithWhereUniqueWithoutRecordInput>
    createMany?: RecordUserCreateManyRecordInputEnvelope
    set?: Enumerable<RecordUserWhereUniqueInput>
    disconnect?: Enumerable<RecordUserWhereUniqueInput>
    delete?: Enumerable<RecordUserWhereUniqueInput>
    connect?: Enumerable<RecordUserWhereUniqueInput>
    update?: Enumerable<RecordUserUpdateWithWhereUniqueWithoutRecordInput>
    updateMany?: Enumerable<RecordUserUpdateManyWithWhereWithoutRecordInput>
    deleteMany?: Enumerable<RecordUserScalarWhereInput>
  }

  export type RecordCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<RecordCreateWithoutTypeInput>, Enumerable<RecordUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutTypeInput>
    createMany?: RecordCreateManyTypeInputEnvelope
    connect?: Enumerable<RecordWhereUniqueInput>
  }

  export type RecordUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<RecordCreateWithoutTypeInput>, Enumerable<RecordUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutTypeInput>
    createMany?: RecordCreateManyTypeInputEnvelope
    connect?: Enumerable<RecordWhereUniqueInput>
  }

  export type RecordUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<RecordCreateWithoutTypeInput>, Enumerable<RecordUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<RecordUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: RecordCreateManyTypeInputEnvelope
    set?: Enumerable<RecordWhereUniqueInput>
    disconnect?: Enumerable<RecordWhereUniqueInput>
    delete?: Enumerable<RecordWhereUniqueInput>
    connect?: Enumerable<RecordWhereUniqueInput>
    update?: Enumerable<RecordUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<RecordUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<RecordScalarWhereInput>
  }

  export type RecordUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<RecordCreateWithoutTypeInput>, Enumerable<RecordUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<RecordUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: RecordCreateManyTypeInputEnvelope
    set?: Enumerable<RecordWhereUniqueInput>
    disconnect?: Enumerable<RecordWhereUniqueInput>
    delete?: Enumerable<RecordWhereUniqueInput>
    connect?: Enumerable<RecordWhereUniqueInput>
    update?: Enumerable<RecordUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<RecordUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<RecordScalarWhereInput>
  }

  export type RecordCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<RecordCreateWithoutCategoryInput>, Enumerable<RecordUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutCategoryInput>
    createMany?: RecordCreateManyCategoryInputEnvelope
    connect?: Enumerable<RecordWhereUniqueInput>
  }

  export type RecordUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<RecordCreateWithoutCategoryInput>, Enumerable<RecordUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutCategoryInput>
    createMany?: RecordCreateManyCategoryInputEnvelope
    connect?: Enumerable<RecordWhereUniqueInput>
  }

  export type RecordUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<RecordCreateWithoutCategoryInput>, Enumerable<RecordUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<RecordUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: RecordCreateManyCategoryInputEnvelope
    set?: Enumerable<RecordWhereUniqueInput>
    disconnect?: Enumerable<RecordWhereUniqueInput>
    delete?: Enumerable<RecordWhereUniqueInput>
    connect?: Enumerable<RecordWhereUniqueInput>
    update?: Enumerable<RecordUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<RecordUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<RecordScalarWhereInput>
  }

  export type RecordUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<RecordCreateWithoutCategoryInput>, Enumerable<RecordUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RecordCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<RecordUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: RecordCreateManyCategoryInputEnvelope
    set?: Enumerable<RecordWhereUniqueInput>
    disconnect?: Enumerable<RecordWhereUniqueInput>
    delete?: Enumerable<RecordWhereUniqueInput>
    connect?: Enumerable<RecordWhereUniqueInput>
    update?: Enumerable<RecordUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<RecordUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<RecordScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type UserBookCreateWithoutMemberInput = {
    book: BookCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateWithoutMemberInput = {
    id?: number
    bookId: number
  }

  export type UserBookCreateOrConnectWithoutMemberInput = {
    where: UserBookWhereUniqueInput
    create: XOR<UserBookCreateWithoutMemberInput, UserBookUncheckedCreateWithoutMemberInput>
  }

  export type UserBookCreateManyMemberInputEnvelope = {
    data: Enumerable<UserBookCreateManyMemberInput>
    skipDuplicates?: boolean
  }

  export type RecordCreateWithoutAuthorInput = {
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    type: RecordTypeCreateNestedOneWithoutRecordInput
    category: RecordCatetoryCreateNestedOneWithoutRecordInput
    book: BookCreateNestedOneWithoutRecordsInput
    recordUser?: RecordUserCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateWithoutAuthorInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    typeId: number
    categoryId: number
    bookId: number
    recordUser?: RecordUserUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordCreateOrConnectWithoutAuthorInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutAuthorInput, RecordUncheckedCreateWithoutAuthorInput>
  }

  export type RecordCreateManyAuthorInputEnvelope = {
    data: Enumerable<RecordCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type RecordUserCreateWithoutEffectedUserInput = {
    record: RecordCreateNestedOneWithoutRecordUserInput
  }

  export type RecordUserUncheckedCreateWithoutEffectedUserInput = {
    id?: number
    recordId: number
  }

  export type RecordUserCreateOrConnectWithoutEffectedUserInput = {
    where: RecordUserWhereUniqueInput
    create: XOR<RecordUserCreateWithoutEffectedUserInput, RecordUserUncheckedCreateWithoutEffectedUserInput>
  }

  export type RecordUserCreateManyEffectedUserInputEnvelope = {
    data: Enumerable<RecordUserCreateManyEffectedUserInput>
    skipDuplicates?: boolean
  }

  export type UserBookUpsertWithWhereUniqueWithoutMemberInput = {
    where: UserBookWhereUniqueInput
    update: XOR<UserBookUpdateWithoutMemberInput, UserBookUncheckedUpdateWithoutMemberInput>
    create: XOR<UserBookCreateWithoutMemberInput, UserBookUncheckedCreateWithoutMemberInput>
  }

  export type UserBookUpdateWithWhereUniqueWithoutMemberInput = {
    where: UserBookWhereUniqueInput
    data: XOR<UserBookUpdateWithoutMemberInput, UserBookUncheckedUpdateWithoutMemberInput>
  }

  export type UserBookUpdateManyWithWhereWithoutMemberInput = {
    where: UserBookScalarWhereInput
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyWithoutUserBooksInput>
  }

  export type UserBookScalarWhereInput = {
    AND?: Enumerable<UserBookScalarWhereInput>
    OR?: Enumerable<UserBookScalarWhereInput>
    NOT?: Enumerable<UserBookScalarWhereInput>
    id?: IntFilter | number
    memberId?: IntFilter | number
    bookId?: IntFilter | number
  }

  export type RecordUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutAuthorInput, RecordUncheckedUpdateWithoutAuthorInput>
    create: XOR<RecordCreateWithoutAuthorInput, RecordUncheckedCreateWithoutAuthorInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutAuthorInput, RecordUncheckedUpdateWithoutAuthorInput>
  }

  export type RecordUpdateManyWithWhereWithoutAuthorInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutRecordsInput>
  }

  export type RecordScalarWhereInput = {
    AND?: Enumerable<RecordScalarWhereInput>
    OR?: Enumerable<RecordScalarWhereInput>
    NOT?: Enumerable<RecordScalarWhereInput>
    id?: IntFilter | number
    effectiveDate?: DateTimeFilter | Date | string
    amount?: DecimalFilter | Decimal | DecimalJsLike | number | string
    authorId?: IntFilter | number
    typeId?: IntFilter | number
    categoryId?: IntFilter | number
    bookId?: IntFilter | number
  }

  export type RecordUserUpsertWithWhereUniqueWithoutEffectedUserInput = {
    where: RecordUserWhereUniqueInput
    update: XOR<RecordUserUpdateWithoutEffectedUserInput, RecordUserUncheckedUpdateWithoutEffectedUserInput>
    create: XOR<RecordUserCreateWithoutEffectedUserInput, RecordUserUncheckedCreateWithoutEffectedUserInput>
  }

  export type RecordUserUpdateWithWhereUniqueWithoutEffectedUserInput = {
    where: RecordUserWhereUniqueInput
    data: XOR<RecordUserUpdateWithoutEffectedUserInput, RecordUserUncheckedUpdateWithoutEffectedUserInput>
  }

  export type RecordUserUpdateManyWithWhereWithoutEffectedUserInput = {
    where: RecordUserScalarWhereInput
    data: XOR<RecordUserUpdateManyMutationInput, RecordUserUncheckedUpdateManyWithoutRecordUserInput>
  }

  export type RecordUserScalarWhereInput = {
    AND?: Enumerable<RecordUserScalarWhereInput>
    OR?: Enumerable<RecordUserScalarWhereInput>
    NOT?: Enumerable<RecordUserScalarWhereInput>
    id?: IntFilter | number
    effectedUserId?: IntFilter | number
    recordId?: IntFilter | number
  }

  export type UserCreateWithoutUserBooksInput = {
    email: string
    name?: string | null
    platform: string
    uid: string
    records?: RecordCreateNestedManyWithoutAuthorInput
    recordUser?: RecordUserCreateNestedManyWithoutEffectedUserInput
  }

  export type UserUncheckedCreateWithoutUserBooksInput = {
    id?: number
    email: string
    name?: string | null
    platform: string
    uid: string
    records?: RecordUncheckedCreateNestedManyWithoutAuthorInput
    recordUser?: RecordUserUncheckedCreateNestedManyWithoutEffectedUserInput
  }

  export type UserCreateOrConnectWithoutUserBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
  }

  export type BookCreateWithoutUserBooksInput = {
    title: string
    records?: RecordCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUserBooksInput = {
    id?: number
    title: string
    records?: RecordUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUserBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
  }

  export type UserUpsertWithoutUserBooksInput = {
    update: XOR<UserUpdateWithoutUserBooksInput, UserUncheckedUpdateWithoutUserBooksInput>
    create: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
  }

  export type UserUpdateWithoutUserBooksInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    records?: RecordUpdateManyWithoutAuthorNestedInput
    recordUser?: RecordUserUpdateManyWithoutEffectedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    records?: RecordUncheckedUpdateManyWithoutAuthorNestedInput
    recordUser?: RecordUserUncheckedUpdateManyWithoutEffectedUserNestedInput
  }

  export type BookUpsertWithoutUserBooksInput = {
    update: XOR<BookUpdateWithoutUserBooksInput, BookUncheckedUpdateWithoutUserBooksInput>
    create: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
  }

  export type BookUpdateWithoutUserBooksInput = {
    title?: StringFieldUpdateOperationsInput | string
    records?: RecordUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUserBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    records?: RecordUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserBookCreateWithoutBookInput = {
    member: UserCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateWithoutBookInput = {
    id?: number
    memberId: number
  }

  export type UserBookCreateOrConnectWithoutBookInput = {
    where: UserBookWhereUniqueInput
    create: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput>
  }

  export type UserBookCreateManyBookInputEnvelope = {
    data: Enumerable<UserBookCreateManyBookInput>
    skipDuplicates?: boolean
  }

  export type RecordCreateWithoutBookInput = {
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    author: UserCreateNestedOneWithoutRecordsInput
    type: RecordTypeCreateNestedOneWithoutRecordInput
    category: RecordCatetoryCreateNestedOneWithoutRecordInput
    recordUser?: RecordUserCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateWithoutBookInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    typeId: number
    categoryId: number
    recordUser?: RecordUserUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordCreateOrConnectWithoutBookInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutBookInput, RecordUncheckedCreateWithoutBookInput>
  }

  export type RecordCreateManyBookInputEnvelope = {
    data: Enumerable<RecordCreateManyBookInput>
    skipDuplicates?: boolean
  }

  export type UserBookUpsertWithWhereUniqueWithoutBookInput = {
    where: UserBookWhereUniqueInput
    update: XOR<UserBookUpdateWithoutBookInput, UserBookUncheckedUpdateWithoutBookInput>
    create: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput>
  }

  export type UserBookUpdateWithWhereUniqueWithoutBookInput = {
    where: UserBookWhereUniqueInput
    data: XOR<UserBookUpdateWithoutBookInput, UserBookUncheckedUpdateWithoutBookInput>
  }

  export type UserBookUpdateManyWithWhereWithoutBookInput = {
    where: UserBookScalarWhereInput
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyWithoutUserBooksInput>
  }

  export type RecordUpsertWithWhereUniqueWithoutBookInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutBookInput, RecordUncheckedUpdateWithoutBookInput>
    create: XOR<RecordCreateWithoutBookInput, RecordUncheckedCreateWithoutBookInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutBookInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutBookInput, RecordUncheckedUpdateWithoutBookInput>
  }

  export type RecordUpdateManyWithWhereWithoutBookInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutRecordsInput>
  }

  export type UserCreateWithoutRecordUserInput = {
    email: string
    name?: string | null
    platform: string
    uid: string
    userBooks?: UserBookCreateNestedManyWithoutMemberInput
    records?: RecordCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutRecordUserInput = {
    id?: number
    email: string
    name?: string | null
    platform: string
    uid: string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutMemberInput
    records?: RecordUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutRecordUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordUserInput, UserUncheckedCreateWithoutRecordUserInput>
  }

  export type RecordCreateWithoutRecordUserInput = {
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    author: UserCreateNestedOneWithoutRecordsInput
    type: RecordTypeCreateNestedOneWithoutRecordInput
    category: RecordCatetoryCreateNestedOneWithoutRecordInput
    book: BookCreateNestedOneWithoutRecordsInput
  }

  export type RecordUncheckedCreateWithoutRecordUserInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    typeId: number
    categoryId: number
    bookId: number
  }

  export type RecordCreateOrConnectWithoutRecordUserInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutRecordUserInput, RecordUncheckedCreateWithoutRecordUserInput>
  }

  export type UserUpsertWithoutRecordUserInput = {
    update: XOR<UserUpdateWithoutRecordUserInput, UserUncheckedUpdateWithoutRecordUserInput>
    create: XOR<UserCreateWithoutRecordUserInput, UserUncheckedCreateWithoutRecordUserInput>
  }

  export type UserUpdateWithoutRecordUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUpdateManyWithoutMemberNestedInput
    records?: RecordUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUncheckedUpdateManyWithoutMemberNestedInput
    records?: RecordUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type RecordUpsertWithoutRecordUserInput = {
    update: XOR<RecordUpdateWithoutRecordUserInput, RecordUncheckedUpdateWithoutRecordUserInput>
    create: XOR<RecordCreateWithoutRecordUserInput, RecordUncheckedCreateWithoutRecordUserInput>
  }

  export type RecordUpdateWithoutRecordUserInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    author?: UserUpdateOneRequiredWithoutRecordsNestedInput
    type?: RecordTypeUpdateOneRequiredWithoutRecordNestedInput
    category?: RecordCatetoryUpdateOneRequiredWithoutRecordNestedInput
    book?: BookUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateWithoutRecordUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    authorId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutRecordsInput = {
    email: string
    name?: string | null
    platform: string
    uid: string
    userBooks?: UserBookCreateNestedManyWithoutMemberInput
    recordUser?: RecordUserCreateNestedManyWithoutEffectedUserInput
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    id?: number
    email: string
    name?: string | null
    platform: string
    uid: string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutMemberInput
    recordUser?: RecordUserUncheckedCreateNestedManyWithoutEffectedUserInput
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type RecordTypeCreateWithoutRecordInput = {
    name: string
  }

  export type RecordTypeUncheckedCreateWithoutRecordInput = {
    id?: number
    name: string
  }

  export type RecordTypeCreateOrConnectWithoutRecordInput = {
    where: RecordTypeWhereUniqueInput
    create: XOR<RecordTypeCreateWithoutRecordInput, RecordTypeUncheckedCreateWithoutRecordInput>
  }

  export type RecordCatetoryCreateWithoutRecordInput = {
    name: string
  }

  export type RecordCatetoryUncheckedCreateWithoutRecordInput = {
    id?: number
    name: string
  }

  export type RecordCatetoryCreateOrConnectWithoutRecordInput = {
    where: RecordCatetoryWhereUniqueInput
    create: XOR<RecordCatetoryCreateWithoutRecordInput, RecordCatetoryUncheckedCreateWithoutRecordInput>
  }

  export type BookCreateWithoutRecordsInput = {
    title: string
    userBooks?: UserBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutRecordsInput = {
    id?: number
    title: string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutRecordsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutRecordsInput, BookUncheckedCreateWithoutRecordsInput>
  }

  export type RecordUserCreateWithoutRecordInput = {
    effectedUser: UserCreateNestedOneWithoutRecordUserInput
  }

  export type RecordUserUncheckedCreateWithoutRecordInput = {
    id?: number
    effectedUserId: number
  }

  export type RecordUserCreateOrConnectWithoutRecordInput = {
    where: RecordUserWhereUniqueInput
    create: XOR<RecordUserCreateWithoutRecordInput, RecordUserUncheckedCreateWithoutRecordInput>
  }

  export type RecordUserCreateManyRecordInputEnvelope = {
    data: Enumerable<RecordUserCreateManyRecordInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUpdateManyWithoutMemberNestedInput
    recordUser?: RecordUserUpdateManyWithoutEffectedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUncheckedUpdateManyWithoutMemberNestedInput
    recordUser?: RecordUserUncheckedUpdateManyWithoutEffectedUserNestedInput
  }

  export type RecordTypeUpsertWithoutRecordInput = {
    update: XOR<RecordTypeUpdateWithoutRecordInput, RecordTypeUncheckedUpdateWithoutRecordInput>
    create: XOR<RecordTypeCreateWithoutRecordInput, RecordTypeUncheckedCreateWithoutRecordInput>
  }

  export type RecordTypeUpdateWithoutRecordInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecordTypeUncheckedUpdateWithoutRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCatetoryUpsertWithoutRecordInput = {
    update: XOR<RecordCatetoryUpdateWithoutRecordInput, RecordCatetoryUncheckedUpdateWithoutRecordInput>
    create: XOR<RecordCatetoryCreateWithoutRecordInput, RecordCatetoryUncheckedCreateWithoutRecordInput>
  }

  export type RecordCatetoryUpdateWithoutRecordInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCatetoryUncheckedUpdateWithoutRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BookUpsertWithoutRecordsInput = {
    update: XOR<BookUpdateWithoutRecordsInput, BookUncheckedUpdateWithoutRecordsInput>
    create: XOR<BookCreateWithoutRecordsInput, BookUncheckedCreateWithoutRecordsInput>
  }

  export type BookUpdateWithoutRecordsInput = {
    title?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    userBooks?: UserBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type RecordUserUpsertWithWhereUniqueWithoutRecordInput = {
    where: RecordUserWhereUniqueInput
    update: XOR<RecordUserUpdateWithoutRecordInput, RecordUserUncheckedUpdateWithoutRecordInput>
    create: XOR<RecordUserCreateWithoutRecordInput, RecordUserUncheckedCreateWithoutRecordInput>
  }

  export type RecordUserUpdateWithWhereUniqueWithoutRecordInput = {
    where: RecordUserWhereUniqueInput
    data: XOR<RecordUserUpdateWithoutRecordInput, RecordUserUncheckedUpdateWithoutRecordInput>
  }

  export type RecordUserUpdateManyWithWhereWithoutRecordInput = {
    where: RecordUserScalarWhereInput
    data: XOR<RecordUserUpdateManyMutationInput, RecordUserUncheckedUpdateManyWithoutRecordUserInput>
  }

  export type RecordCreateWithoutTypeInput = {
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    author: UserCreateNestedOneWithoutRecordsInput
    category: RecordCatetoryCreateNestedOneWithoutRecordInput
    book: BookCreateNestedOneWithoutRecordsInput
    recordUser?: RecordUserCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateWithoutTypeInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    categoryId: number
    bookId: number
    recordUser?: RecordUserUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordCreateOrConnectWithoutTypeInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutTypeInput, RecordUncheckedCreateWithoutTypeInput>
  }

  export type RecordCreateManyTypeInputEnvelope = {
    data: Enumerable<RecordCreateManyTypeInput>
    skipDuplicates?: boolean
  }

  export type RecordUpsertWithWhereUniqueWithoutTypeInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutTypeInput, RecordUncheckedUpdateWithoutTypeInput>
    create: XOR<RecordCreateWithoutTypeInput, RecordUncheckedCreateWithoutTypeInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutTypeInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutTypeInput, RecordUncheckedUpdateWithoutTypeInput>
  }

  export type RecordUpdateManyWithWhereWithoutTypeInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutRecordInput>
  }

  export type RecordCreateWithoutCategoryInput = {
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    author: UserCreateNestedOneWithoutRecordsInput
    type: RecordTypeCreateNestedOneWithoutRecordInput
    book: BookCreateNestedOneWithoutRecordsInput
    recordUser?: RecordUserCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateWithoutCategoryInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    typeId: number
    bookId: number
    recordUser?: RecordUserUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordCreateOrConnectWithoutCategoryInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutCategoryInput, RecordUncheckedCreateWithoutCategoryInput>
  }

  export type RecordCreateManyCategoryInputEnvelope = {
    data: Enumerable<RecordCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type RecordUpsertWithWhereUniqueWithoutCategoryInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutCategoryInput, RecordUncheckedUpdateWithoutCategoryInput>
    create: XOR<RecordCreateWithoutCategoryInput, RecordUncheckedCreateWithoutCategoryInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutCategoryInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutCategoryInput, RecordUncheckedUpdateWithoutCategoryInput>
  }

  export type RecordUpdateManyWithWhereWithoutCategoryInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutRecordInput>
  }

  export type UserBookCreateManyMemberInput = {
    id?: number
    bookId: number
  }

  export type RecordCreateManyAuthorInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    typeId: number
    categoryId: number
    bookId: number
  }

  export type RecordUserCreateManyEffectedUserInput = {
    id?: number
    recordId: number
  }

  export type UserBookUpdateWithoutMemberInput = {
    book?: BookUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBookUncheckedUpdateManyWithoutUserBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordUpdateWithoutAuthorInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: RecordTypeUpdateOneRequiredWithoutRecordNestedInput
    category?: RecordCatetoryUpdateOneRequiredWithoutRecordNestedInput
    book?: BookUpdateOneRequiredWithoutRecordsNestedInput
    recordUser?: RecordUserUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    recordUser?: RecordUserUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateManyWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordUserUpdateWithoutEffectedUserInput = {
    record?: RecordUpdateOneRequiredWithoutRecordUserNestedInput
  }

  export type RecordUserUncheckedUpdateWithoutEffectedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recordId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordUserUncheckedUpdateManyWithoutRecordUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recordId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBookCreateManyBookInput = {
    id?: number
    memberId: number
  }

  export type RecordCreateManyBookInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    typeId: number
    categoryId: number
  }

  export type UserBookUpdateWithoutBookInput = {
    member?: UserUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordUpdateWithoutBookInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    author?: UserUpdateOneRequiredWithoutRecordsNestedInput
    type?: RecordTypeUpdateOneRequiredWithoutRecordNestedInput
    category?: RecordCatetoryUpdateOneRequiredWithoutRecordNestedInput
    recordUser?: RecordUserUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    authorId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    recordUser?: RecordUserUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordUserCreateManyRecordInput = {
    id?: number
    effectedUserId: number
  }

  export type RecordUserUpdateWithoutRecordInput = {
    effectedUser?: UserUpdateOneRequiredWithoutRecordUserNestedInput
  }

  export type RecordUserUncheckedUpdateWithoutRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectedUserId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordCreateManyTypeInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    categoryId: number
    bookId: number
  }

  export type RecordUpdateWithoutTypeInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    author?: UserUpdateOneRequiredWithoutRecordsNestedInput
    category?: RecordCatetoryUpdateOneRequiredWithoutRecordNestedInput
    book?: BookUpdateOneRequiredWithoutRecordsNestedInput
    recordUser?: RecordUserUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    recordUser?: RecordUserUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateManyWithoutRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type RecordCreateManyCategoryInput = {
    id?: number
    effectiveDate: Date | string
    amount: Decimal | DecimalJsLike | number | string
    authorId: number
    typeId: number
    bookId: number
  }

  export type RecordUpdateWithoutCategoryInput = {
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    author?: UserUpdateOneRequiredWithoutRecordsNestedInput
    type?: RecordTypeUpdateOneRequiredWithoutRecordNestedInput
    book?: BookUpdateOneRequiredWithoutRecordsNestedInput
    recordUser?: RecordUserUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    effectiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    authorId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    recordUser?: RecordUserUncheckedUpdateManyWithoutRecordNestedInput
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