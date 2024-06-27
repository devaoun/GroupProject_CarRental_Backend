
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
 * Model Admins
 * 
 */
export type Admins = $Result.DefaultSelection<Prisma.$AdminsPayload>
/**
 * Model Customers
 * 
 */
export type Customers = $Result.DefaultSelection<Prisma.$CustomersPayload>
/**
 * Model Branches
 * 
 */
export type Branches = $Result.DefaultSelection<Prisma.$BranchesPayload>
/**
 * Model CarTypes
 * 
 */
export type CarTypes = $Result.DefaultSelection<Prisma.$CarTypesPayload>
/**
 * Model CarModels
 * 
 */
export type CarModels = $Result.DefaultSelection<Prisma.$CarModelsPayload>
/**
 * Model CarImages
 * 
 */
export type CarImages = $Result.DefaultSelection<Prisma.$CarImagesPayload>
/**
 * Model Cars
 * 
 */
export type Cars = $Result.DefaultSelection<Prisma.$CarsPayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CarStatus: {
  available: 'available',
  rented: 'rented',
  maintenance: 'maintenance'
};

export type CarStatus = (typeof CarStatus)[keyof typeof CarStatus]


export const BookingStatus: {
  confirmed: 'confirmed',
  cancelled: 'cancelled'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type CarStatus = $Enums.CarStatus

export const CarStatus: typeof $Enums.CarStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admins.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admins.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admins`: Exposes CRUD operations for the **Admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.AdminsDelegate<ExtArgs>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **Customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.CustomersDelegate<ExtArgs>;

  /**
   * `prisma.branches`: Exposes CRUD operations for the **Branches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branches.findMany()
    * ```
    */
  get branches(): Prisma.BranchesDelegate<ExtArgs>;

  /**
   * `prisma.carTypes`: Exposes CRUD operations for the **CarTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarTypes
    * const carTypes = await prisma.carTypes.findMany()
    * ```
    */
  get carTypes(): Prisma.CarTypesDelegate<ExtArgs>;

  /**
   * `prisma.carModels`: Exposes CRUD operations for the **CarModels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarModels
    * const carModels = await prisma.carModels.findMany()
    * ```
    */
  get carModels(): Prisma.CarModelsDelegate<ExtArgs>;

  /**
   * `prisma.carImages`: Exposes CRUD operations for the **CarImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarImages
    * const carImages = await prisma.carImages.findMany()
    * ```
    */
  get carImages(): Prisma.CarImagesDelegate<ExtArgs>;

  /**
   * `prisma.cars`: Exposes CRUD operations for the **Cars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.cars.findMany()
    * ```
    */
  get cars(): Prisma.CarsDelegate<ExtArgs>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Admins: 'Admins',
    Customers: 'Customers',
    Branches: 'Branches',
    CarTypes: 'CarTypes',
    CarModels: 'CarModels',
    CarImages: 'CarImages',
    Cars: 'Cars',
    Bookings: 'Bookings',
    Payments: 'Payments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admins' | 'customers' | 'branches' | 'carTypes' | 'carModels' | 'carImages' | 'cars' | 'bookings' | 'payments'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Admins: {
        payload: Prisma.$AdminsPayload<ExtArgs>
        fields: Prisma.AdminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findFirst: {
            args: Prisma.AdminsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findMany: {
            args: Prisma.AdminsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          create: {
            args: Prisma.AdminsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          createMany: {
            args: Prisma.AdminsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          update: {
            args: Prisma.AdminsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          deleteMany: {
            args: Prisma.AdminsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.AdminsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminsCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      Customers: {
        payload: Prisma.$CustomersPayload<ExtArgs>
        fields: Prisma.CustomersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findFirst: {
            args: Prisma.CustomersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          findMany: {
            args: Prisma.CustomersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>[]
          }
          create: {
            args: Prisma.CustomersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          createMany: {
            args: Prisma.CustomersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          update: {
            args: Prisma.CustomersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          deleteMany: {
            args: Prisma.CustomersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.CustomersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomersCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      Branches: {
        payload: Prisma.$BranchesPayload<ExtArgs>
        fields: Prisma.BranchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload>
          }
          findFirst: {
            args: Prisma.BranchesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload>
          }
          findMany: {
            args: Prisma.BranchesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload>[]
          }
          create: {
            args: Prisma.BranchesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload>
          }
          createMany: {
            args: Prisma.BranchesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BranchesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload>
          }
          update: {
            args: Prisma.BranchesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload>
          }
          deleteMany: {
            args: Prisma.BranchesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BranchesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BranchesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchesPayload>
          }
          aggregate: {
            args: Prisma.BranchesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBranches>
          }
          groupBy: {
            args: Prisma.BranchesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BranchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchesCountArgs<ExtArgs>,
            result: $Utils.Optional<BranchesCountAggregateOutputType> | number
          }
        }
      }
      CarTypes: {
        payload: Prisma.$CarTypesPayload<ExtArgs>
        fields: Prisma.CarTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarTypesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarTypesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload>
          }
          findFirst: {
            args: Prisma.CarTypesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarTypesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload>
          }
          findMany: {
            args: Prisma.CarTypesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload>[]
          }
          create: {
            args: Prisma.CarTypesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload>
          }
          createMany: {
            args: Prisma.CarTypesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarTypesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload>
          }
          update: {
            args: Prisma.CarTypesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload>
          }
          deleteMany: {
            args: Prisma.CarTypesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarTypesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarTypesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarTypesPayload>
          }
          aggregate: {
            args: Prisma.CarTypesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarTypes>
          }
          groupBy: {
            args: Prisma.CarTypesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarTypesCountArgs<ExtArgs>,
            result: $Utils.Optional<CarTypesCountAggregateOutputType> | number
          }
        }
      }
      CarModels: {
        payload: Prisma.$CarModelsPayload<ExtArgs>
        fields: Prisma.CarModelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarModelsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarModelsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload>
          }
          findFirst: {
            args: Prisma.CarModelsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarModelsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload>
          }
          findMany: {
            args: Prisma.CarModelsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload>[]
          }
          create: {
            args: Prisma.CarModelsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload>
          }
          createMany: {
            args: Prisma.CarModelsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarModelsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload>
          }
          update: {
            args: Prisma.CarModelsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload>
          }
          deleteMany: {
            args: Prisma.CarModelsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarModelsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarModelsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarModelsPayload>
          }
          aggregate: {
            args: Prisma.CarModelsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarModels>
          }
          groupBy: {
            args: Prisma.CarModelsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarModelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarModelsCountArgs<ExtArgs>,
            result: $Utils.Optional<CarModelsCountAggregateOutputType> | number
          }
        }
      }
      CarImages: {
        payload: Prisma.$CarImagesPayload<ExtArgs>
        fields: Prisma.CarImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarImagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarImagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          findFirst: {
            args: Prisma.CarImagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarImagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          findMany: {
            args: Prisma.CarImagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>[]
          }
          create: {
            args: Prisma.CarImagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          createMany: {
            args: Prisma.CarImagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarImagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          update: {
            args: Prisma.CarImagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          deleteMany: {
            args: Prisma.CarImagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarImagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarImagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarImagesPayload>
          }
          aggregate: {
            args: Prisma.CarImagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarImages>
          }
          groupBy: {
            args: Prisma.CarImagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarImagesCountArgs<ExtArgs>,
            result: $Utils.Optional<CarImagesCountAggregateOutputType> | number
          }
        }
      }
      Cars: {
        payload: Prisma.$CarsPayload<ExtArgs>
        fields: Prisma.CarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findFirst: {
            args: Prisma.CarsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findMany: {
            args: Prisma.CarsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          create: {
            args: Prisma.CarsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          createMany: {
            args: Prisma.CarsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          update: {
            args: Prisma.CarsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          deleteMany: {
            args: Prisma.CarsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          aggregate: {
            args: Prisma.CarsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCars>
          }
          groupBy: {
            args: Prisma.CarsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarsCountArgs<ExtArgs>,
            result: $Utils.Optional<CarsCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>,
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    Bookings: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bookings?: boolean | CustomersCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Count Type BranchesCountOutputType
   */

  export type BranchesCountOutputType = {
    Cars: number
    PickupBookings: number
    DropoffBookings: number
  }

  export type BranchesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cars?: boolean | BranchesCountOutputTypeCountCarsArgs
    PickupBookings?: boolean | BranchesCountOutputTypeCountPickupBookingsArgs
    DropoffBookings?: boolean | BranchesCountOutputTypeCountDropoffBookingsArgs
  }

  // Custom InputTypes
  /**
   * BranchesCountOutputType without action
   */
  export type BranchesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchesCountOutputType
     */
    select?: BranchesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchesCountOutputType without action
   */
  export type BranchesCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
  }

  /**
   * BranchesCountOutputType without action
   */
  export type BranchesCountOutputTypeCountPickupBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }

  /**
   * BranchesCountOutputType without action
   */
  export type BranchesCountOutputTypeCountDropoffBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Count Type CarTypesCountOutputType
   */

  export type CarTypesCountOutputType = {
    CarModels: number
  }

  export type CarTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarModels?: boolean | CarTypesCountOutputTypeCountCarModelsArgs
  }

  // Custom InputTypes
  /**
   * CarTypesCountOutputType without action
   */
  export type CarTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypesCountOutputType
     */
    select?: CarTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarTypesCountOutputType without action
   */
  export type CarTypesCountOutputTypeCountCarModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModelsWhereInput
  }


  /**
   * Count Type CarModelsCountOutputType
   */

  export type CarModelsCountOutputType = {
    CarImages: number
    Cars: number
  }

  export type CarModelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarImages?: boolean | CarModelsCountOutputTypeCountCarImagesArgs
    Cars?: boolean | CarModelsCountOutputTypeCountCarsArgs
  }

  // Custom InputTypes
  /**
   * CarModelsCountOutputType without action
   */
  export type CarModelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModelsCountOutputType
     */
    select?: CarModelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarModelsCountOutputType without action
   */
  export type CarModelsCountOutputTypeCountCarImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarImagesWhereInput
  }

  /**
   * CarModelsCountOutputType without action
   */
  export type CarModelsCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
  }


  /**
   * Count Type CarsCountOutputType
   */

  export type CarsCountOutputType = {
    Bookings: number
  }

  export type CarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bookings?: boolean | CarsCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsCountOutputType
     */
    select?: CarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Count Type BookingsCountOutputType
   */

  export type BookingsCountOutputType = {
    Payment: number
  }

  export type BookingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | BookingsCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingsCountOutputType
     */
    select?: BookingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminsSumAggregateOutputType = {
    id: number | null
  }

  export type AdminsMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminsMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminsCountAggregateOutputType = {
    id: number
    username: number
    password: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminsAvgAggregateInputType = {
    id?: true
  }

  export type AdminsSumAggregateInputType = {
    id?: true
  }

  export type AdminsMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminsMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminsCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to aggregate.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type AdminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminsWhereInput
    orderBy?: AdminsOrderByWithAggregationInput | AdminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: AdminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _avg?: AdminsAvgAggregateInputType
    _sum?: AdminsSumAggregateInputType
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    id: number
    username: string
    password: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminsCountAggregateOutputType | null
    _avg: AdminsAvgAggregateOutputType | null
    _sum: AdminsSumAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends AdminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type AdminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admins"]>


  export type AdminsSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type AdminsGetPayload<S extends boolean | null | undefined | AdminsDefaultArgs> = $Result.GetResult<Prisma.$AdminsPayload, S>

  type AdminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface AdminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admins'], meta: { name: 'Admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {AdminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminsFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminsFindFirstArgs<ExtArgs>>
    ): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admins.
     * @param {AdminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
    **/
    create<T extends AdminsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminsCreateArgs<ExtArgs>>
    ): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AdminsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admins.
     * @param {AdminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
    **/
    delete<T extends AdminsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminsDeleteArgs<ExtArgs>>
    ): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admins.
     * @param {AdminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminsUpdateArgs<ExtArgs>>
    ): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admins.
     * @param {AdminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
    **/
    upsert<T extends AdminsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminsUpsertArgs<ExtArgs>>
    ): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminsCountArgs>(
      args?: Subset<T, AdminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsGroupByArgs} args - Group by arguments.
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
      T extends AdminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminsGroupByArgs['orderBy'] }
        : { orderBy?: AdminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admins model
   */
  readonly fields: AdminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admins model
   */ 
  interface AdminsFieldRefs {
    readonly id: FieldRef<"Admins", 'Int'>
    readonly username: FieldRef<"Admins", 'String'>
    readonly password: FieldRef<"Admins", 'String'>
    readonly isActive: FieldRef<"Admins", 'Boolean'>
    readonly createdAt: FieldRef<"Admins", 'DateTime'>
    readonly updatedAt: FieldRef<"Admins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admins findUnique
   */
  export type AdminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findUniqueOrThrow
   */
  export type AdminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findFirst
   */
  export type AdminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findFirstOrThrow
   */
  export type AdminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findMany
   */
  export type AdminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins create
   */
  export type AdminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * The data needed to create a Admins.
     */
    data: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
  }

  /**
   * Admins createMany
   */
  export type AdminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins update
   */
  export type AdminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * The data needed to update a Admins.
     */
    data: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
    /**
     * Choose, which Admins to update.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins updateMany
   */
  export type AdminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
  }

  /**
   * Admins upsert
   */
  export type AdminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * The filter to search for the Admins to update in case it exists.
     */
    where: AdminsWhereUniqueInput
    /**
     * In case the Admins found by the `where` argument doesn't exist, create a new Admins with this data.
     */
    create: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
    /**
     * In case the Admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
  }

  /**
   * Admins delete
   */
  export type AdminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Filter which Admins to delete.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins deleteMany
   */
  export type AdminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminsWhereInput
  }

  /**
   * Admins without action
   */
  export type AdminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
  }


  /**
   * Model Customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    customerId: number | null
    totalPoints: number | null
  }

  export type CustomersSumAggregateOutputType = {
    customerId: number | null
    totalPoints: number | null
  }

  export type CustomersMinAggregateOutputType = {
    customerId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    driverLicense: string | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    customerId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    driverLicense: string | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    customerId: number
    firstName: number
    lastName: number
    email: number
    password: number
    phone: number
    address: number
    driverLicense: number
    totalPoints: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    customerId?: true
    totalPoints?: true
  }

  export type CustomersSumAggregateInputType = {
    customerId?: true
    totalPoints?: true
  }

  export type CustomersMinAggregateInputType = {
    customerId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    driverLicense?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersMaxAggregateInputType = {
    customerId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    driverLicense?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomersCountAggregateInputType = {
    customerId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    driverLicense?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to aggregate.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type CustomersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomersWhereInput
    orderBy?: CustomersOrderByWithAggregationInput | CustomersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: CustomersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    customerId: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    address: string | null
    driverLicense: string
    totalPoints: number
    createdAt: Date
    updatedAt: Date
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type CustomersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    driverLicense?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Bookings?: boolean | Customers$BookingsArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>


  export type CustomersSelectScalar = {
    customerId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    driverLicense?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bookings?: boolean | Customers$BookingsArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customers"
    objects: {
      Bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      firstName: string
      lastName: string
      email: string
      password: string
      phone: string
      address: string | null
      driverLicense: string
      totalPoints: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type CustomersGetPayload<S extends boolean | null | undefined | CustomersDefaultArgs> = $Result.GetResult<Prisma.$CustomersPayload, S>

  type CustomersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface CustomersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customers'], meta: { name: 'Customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {CustomersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindFirstArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customersWithCustomerIdOnly = await prisma.customers.findMany({ select: { customerId: true } })
     * 
    **/
    findMany<T extends CustomersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customers.
     * @param {CustomersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
    **/
    create<T extends CustomersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersCreateArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CustomersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {CustomersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
    **/
    delete<T extends CustomersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersDeleteArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customers.
     * @param {CustomersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpdateArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {CustomersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
    **/
    upsert<T extends CustomersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpsertArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomersCountArgs>(
      args?: Subset<T, CustomersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
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
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customers model
   */
  readonly fields: CustomersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Bookings<T extends Customers$BookingsArgs<ExtArgs> = {}>(args?: Subset<T, Customers$BookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customers model
   */ 
  interface CustomersFieldRefs {
    readonly customerId: FieldRef<"Customers", 'Int'>
    readonly firstName: FieldRef<"Customers", 'String'>
    readonly lastName: FieldRef<"Customers", 'String'>
    readonly email: FieldRef<"Customers", 'String'>
    readonly password: FieldRef<"Customers", 'String'>
    readonly phone: FieldRef<"Customers", 'String'>
    readonly address: FieldRef<"Customers", 'String'>
    readonly driverLicense: FieldRef<"Customers", 'String'>
    readonly totalPoints: FieldRef<"Customers", 'Int'>
    readonly createdAt: FieldRef<"Customers", 'DateTime'>
    readonly updatedAt: FieldRef<"Customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customers findUnique
   */
  export type CustomersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findUniqueOrThrow
   */
  export type CustomersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findFirst
   */
  export type CustomersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers findFirstOrThrow
   */
  export type CustomersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers findMany
   */
  export type CustomersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomersOrderByWithRelationInput | CustomersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * Customers create
   */
  export type CustomersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The data needed to create a Customers.
     */
    data: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
  }

  /**
   * Customers createMany
   */
  export type CustomersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomersCreateManyInput | CustomersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customers update
   */
  export type CustomersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The data needed to update a Customers.
     */
    data: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
    /**
     * Choose, which Customers to update.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers updateMany
   */
  export type CustomersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomersUpdateManyMutationInput, CustomersUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomersWhereInput
  }

  /**
   * Customers upsert
   */
  export type CustomersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * The filter to search for the Customers to update in case it exists.
     */
    where: CustomersWhereUniqueInput
    /**
     * In case the Customers found by the `where` argument doesn't exist, create a new Customers with this data.
     */
    create: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
    /**
     * In case the Customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
  }

  /**
   * Customers delete
   */
  export type CustomersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
    /**
     * Filter which Customers to delete.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers deleteMany
   */
  export type CustomersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomersWhereInput
  }

  /**
   * Customers.Bookings
   */
  export type Customers$BookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Customers without action
   */
  export type CustomersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomersInclude<ExtArgs> | null
  }


  /**
   * Model Branches
   */

  export type AggregateBranches = {
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  export type BranchesAvgAggregateOutputType = {
    branchId: number | null
    lat: number | null
    lng: number | null
  }

  export type BranchesSumAggregateOutputType = {
    branchId: number | null
    lat: number | null
    lng: number | null
  }

  export type BranchesMinAggregateOutputType = {
    branchId: number | null
    branchName: string | null
    region: string | null
    lat: number | null
    lng: number | null
  }

  export type BranchesMaxAggregateOutputType = {
    branchId: number | null
    branchName: string | null
    region: string | null
    lat: number | null
    lng: number | null
  }

  export type BranchesCountAggregateOutputType = {
    branchId: number
    branchName: number
    region: number
    lat: number
    lng: number
    _all: number
  }


  export type BranchesAvgAggregateInputType = {
    branchId?: true
    lat?: true
    lng?: true
  }

  export type BranchesSumAggregateInputType = {
    branchId?: true
    lat?: true
    lng?: true
  }

  export type BranchesMinAggregateInputType = {
    branchId?: true
    branchName?: true
    region?: true
    lat?: true
    lng?: true
  }

  export type BranchesMaxAggregateInputType = {
    branchId?: true
    branchName?: true
    region?: true
    lat?: true
    lng?: true
  }

  export type BranchesCountAggregateInputType = {
    branchId?: true
    branchName?: true
    region?: true
    lat?: true
    lng?: true
    _all?: true
  }

  export type BranchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to aggregate.
     */
    where?: BranchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchesOrderByWithRelationInput | BranchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchesMaxAggregateInputType
  }

  export type GetBranchesAggregateType<T extends BranchesAggregateArgs> = {
        [P in keyof T & keyof AggregateBranches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranches[P]>
      : GetScalarType<T[P], AggregateBranches[P]>
  }




  export type BranchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchesWhereInput
    orderBy?: BranchesOrderByWithAggregationInput | BranchesOrderByWithAggregationInput[]
    by: BranchesScalarFieldEnum[] | BranchesScalarFieldEnum
    having?: BranchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchesCountAggregateInputType | true
    _avg?: BranchesAvgAggregateInputType
    _sum?: BranchesSumAggregateInputType
    _min?: BranchesMinAggregateInputType
    _max?: BranchesMaxAggregateInputType
  }

  export type BranchesGroupByOutputType = {
    branchId: number
    branchName: string
    region: string
    lat: number
    lng: number
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  type GetBranchesGroupByPayload<T extends BranchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchesGroupByOutputType[P]>
            : GetScalarType<T[P], BranchesGroupByOutputType[P]>
        }
      >
    >


  export type BranchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    branchId?: boolean
    branchName?: boolean
    region?: boolean
    lat?: boolean
    lng?: boolean
    Cars?: boolean | Branches$CarsArgs<ExtArgs>
    PickupBookings?: boolean | Branches$PickupBookingsArgs<ExtArgs>
    DropoffBookings?: boolean | Branches$DropoffBookingsArgs<ExtArgs>
    _count?: boolean | BranchesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branches"]>


  export type BranchesSelectScalar = {
    branchId?: boolean
    branchName?: boolean
    region?: boolean
    lat?: boolean
    lng?: boolean
  }

  export type BranchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cars?: boolean | Branches$CarsArgs<ExtArgs>
    PickupBookings?: boolean | Branches$PickupBookingsArgs<ExtArgs>
    DropoffBookings?: boolean | Branches$DropoffBookingsArgs<ExtArgs>
    _count?: boolean | BranchesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BranchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branches"
    objects: {
      Cars: Prisma.$CarsPayload<ExtArgs>[]
      PickupBookings: Prisma.$BookingsPayload<ExtArgs>[]
      DropoffBookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      branchId: number
      branchName: string
      region: string
      lat: number
      lng: number
    }, ExtArgs["result"]["branches"]>
    composites: {}
  }

  type BranchesGetPayload<S extends boolean | null | undefined | BranchesDefaultArgs> = $Result.GetResult<Prisma.$BranchesPayload, S>

  type BranchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BranchesCountAggregateInputType | true
    }

  export interface BranchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branches'], meta: { name: 'Branches' } }
    /**
     * Find zero or one Branches that matches the filter.
     * @param {BranchesFindUniqueArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BranchesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BranchesFindUniqueArgs<ExtArgs>>
    ): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Branches that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BranchesFindUniqueOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BranchesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesFindFirstArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BranchesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchesFindFirstArgs<ExtArgs>>
    ): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Branches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesFindFirstOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BranchesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branches.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branches.findMany({ take: 10 })
     * 
     * // Only select the `branchId`
     * const branchesWithBranchIdOnly = await prisma.branches.findMany({ select: { branchId: true } })
     * 
    **/
    findMany<T extends BranchesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Branches.
     * @param {BranchesCreateArgs} args - Arguments to create a Branches.
     * @example
     * // Create one Branches
     * const Branches = await prisma.branches.create({
     *   data: {
     *     // ... data to create a Branches
     *   }
     * })
     * 
    **/
    create<T extends BranchesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BranchesCreateArgs<ExtArgs>>
    ): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Branches.
     * @param {BranchesCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branches = await prisma.branches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BranchesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branches.
     * @param {BranchesDeleteArgs} args - Arguments to delete one Branches.
     * @example
     * // Delete one Branches
     * const Branches = await prisma.branches.delete({
     *   where: {
     *     // ... filter to delete one Branches
     *   }
     * })
     * 
    **/
    delete<T extends BranchesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BranchesDeleteArgs<ExtArgs>>
    ): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Branches.
     * @param {BranchesUpdateArgs} args - Arguments to update one Branches.
     * @example
     * // Update one Branches
     * const branches = await prisma.branches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BranchesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BranchesUpdateArgs<ExtArgs>>
    ): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Branches.
     * @param {BranchesDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BranchesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branches = await prisma.branches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BranchesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BranchesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branches.
     * @param {BranchesUpsertArgs} args - Arguments to update or create a Branches.
     * @example
     * // Update or create a Branches
     * const branches = await prisma.branches.upsert({
     *   create: {
     *     // ... data to create a Branches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branches we want to update
     *   }
     * })
    **/
    upsert<T extends BranchesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BranchesUpsertArgs<ExtArgs>>
    ): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branches.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchesCountArgs>(
      args?: Subset<T, BranchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchesAggregateArgs>(args: Subset<T, BranchesAggregateArgs>): Prisma.PrismaPromise<GetBranchesAggregateType<T>>

    /**
     * Group by Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesGroupByArgs} args - Group by arguments.
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
      T extends BranchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchesGroupByArgs['orderBy'] }
        : { orderBy?: BranchesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branches model
   */
  readonly fields: BranchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Cars<T extends Branches$CarsArgs<ExtArgs> = {}>(args?: Subset<T, Branches$CarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findMany'> | Null>;

    PickupBookings<T extends Branches$PickupBookingsArgs<ExtArgs> = {}>(args?: Subset<T, Branches$PickupBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findMany'> | Null>;

    DropoffBookings<T extends Branches$DropoffBookingsArgs<ExtArgs> = {}>(args?: Subset<T, Branches$DropoffBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Branches model
   */ 
  interface BranchesFieldRefs {
    readonly branchId: FieldRef<"Branches", 'Int'>
    readonly branchName: FieldRef<"Branches", 'String'>
    readonly region: FieldRef<"Branches", 'String'>
    readonly lat: FieldRef<"Branches", 'Float'>
    readonly lng: FieldRef<"Branches", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Branches findUnique
   */
  export type BranchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where: BranchesWhereUniqueInput
  }

  /**
   * Branches findUniqueOrThrow
   */
  export type BranchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where: BranchesWhereUniqueInput
  }

  /**
   * Branches findFirst
   */
  export type BranchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchesOrderByWithRelationInput | BranchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * Branches findFirstOrThrow
   */
  export type BranchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchesOrderByWithRelationInput | BranchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * Branches findMany
   */
  export type BranchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchesOrderByWithRelationInput | BranchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * Branches create
   */
  export type BranchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * The data needed to create a Branches.
     */
    data: XOR<BranchesCreateInput, BranchesUncheckedCreateInput>
  }

  /**
   * Branches createMany
   */
  export type BranchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchesCreateManyInput | BranchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branches update
   */
  export type BranchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * The data needed to update a Branches.
     */
    data: XOR<BranchesUpdateInput, BranchesUncheckedUpdateInput>
    /**
     * Choose, which Branches to update.
     */
    where: BranchesWhereUniqueInput
  }

  /**
   * Branches updateMany
   */
  export type BranchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchesUpdateManyMutationInput, BranchesUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchesWhereInput
  }

  /**
   * Branches upsert
   */
  export type BranchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * The filter to search for the Branches to update in case it exists.
     */
    where: BranchesWhereUniqueInput
    /**
     * In case the Branches found by the `where` argument doesn't exist, create a new Branches with this data.
     */
    create: XOR<BranchesCreateInput, BranchesUncheckedCreateInput>
    /**
     * In case the Branches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchesUpdateInput, BranchesUncheckedUpdateInput>
  }

  /**
   * Branches delete
   */
  export type BranchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    /**
     * Filter which Branches to delete.
     */
    where: BranchesWhereUniqueInput
  }

  /**
   * Branches deleteMany
   */
  export type BranchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchesWhereInput
  }

  /**
   * Branches.Cars
   */
  export type Branches$CarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    cursor?: CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Branches.PickupBookings
   */
  export type Branches$PickupBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Branches.DropoffBookings
   */
  export type Branches$DropoffBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Branches without action
   */
  export type BranchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
  }


  /**
   * Model CarTypes
   */

  export type AggregateCarTypes = {
    _count: CarTypesCountAggregateOutputType | null
    _avg: CarTypesAvgAggregateOutputType | null
    _sum: CarTypesSumAggregateOutputType | null
    _min: CarTypesMinAggregateOutputType | null
    _max: CarTypesMaxAggregateOutputType | null
  }

  export type CarTypesAvgAggregateOutputType = {
    carTypeId: number | null
    pricePerDay: number | null
  }

  export type CarTypesSumAggregateOutputType = {
    carTypeId: number | null
    pricePerDay: number | null
  }

  export type CarTypesMinAggregateOutputType = {
    carTypeId: number | null
    carTypeName: string | null
    pricePerDay: number | null
  }

  export type CarTypesMaxAggregateOutputType = {
    carTypeId: number | null
    carTypeName: string | null
    pricePerDay: number | null
  }

  export type CarTypesCountAggregateOutputType = {
    carTypeId: number
    carTypeName: number
    pricePerDay: number
    _all: number
  }


  export type CarTypesAvgAggregateInputType = {
    carTypeId?: true
    pricePerDay?: true
  }

  export type CarTypesSumAggregateInputType = {
    carTypeId?: true
    pricePerDay?: true
  }

  export type CarTypesMinAggregateInputType = {
    carTypeId?: true
    carTypeName?: true
    pricePerDay?: true
  }

  export type CarTypesMaxAggregateInputType = {
    carTypeId?: true
    carTypeName?: true
    pricePerDay?: true
  }

  export type CarTypesCountAggregateInputType = {
    carTypeId?: true
    carTypeName?: true
    pricePerDay?: true
    _all?: true
  }

  export type CarTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarTypes to aggregate.
     */
    where?: CarTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarTypes to fetch.
     */
    orderBy?: CarTypesOrderByWithRelationInput | CarTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarTypes
    **/
    _count?: true | CarTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarTypesMaxAggregateInputType
  }

  export type GetCarTypesAggregateType<T extends CarTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateCarTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarTypes[P]>
      : GetScalarType<T[P], AggregateCarTypes[P]>
  }




  export type CarTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarTypesWhereInput
    orderBy?: CarTypesOrderByWithAggregationInput | CarTypesOrderByWithAggregationInput[]
    by: CarTypesScalarFieldEnum[] | CarTypesScalarFieldEnum
    having?: CarTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarTypesCountAggregateInputType | true
    _avg?: CarTypesAvgAggregateInputType
    _sum?: CarTypesSumAggregateInputType
    _min?: CarTypesMinAggregateInputType
    _max?: CarTypesMaxAggregateInputType
  }

  export type CarTypesGroupByOutputType = {
    carTypeId: number
    carTypeName: string
    pricePerDay: number
    _count: CarTypesCountAggregateOutputType | null
    _avg: CarTypesAvgAggregateOutputType | null
    _sum: CarTypesSumAggregateOutputType | null
    _min: CarTypesMinAggregateOutputType | null
    _max: CarTypesMaxAggregateOutputType | null
  }

  type GetCarTypesGroupByPayload<T extends CarTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarTypesGroupByOutputType[P]>
            : GetScalarType<T[P], CarTypesGroupByOutputType[P]>
        }
      >
    >


  export type CarTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carTypeId?: boolean
    carTypeName?: boolean
    pricePerDay?: boolean
    CarModels?: boolean | CarTypes$CarModelsArgs<ExtArgs>
    _count?: boolean | CarTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carTypes"]>


  export type CarTypesSelectScalar = {
    carTypeId?: boolean
    carTypeName?: boolean
    pricePerDay?: boolean
  }

  export type CarTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarModels?: boolean | CarTypes$CarModelsArgs<ExtArgs>
    _count?: boolean | CarTypesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CarTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarTypes"
    objects: {
      CarModels: Prisma.$CarModelsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      carTypeId: number
      carTypeName: string
      pricePerDay: number
    }, ExtArgs["result"]["carTypes"]>
    composites: {}
  }

  type CarTypesGetPayload<S extends boolean | null | undefined | CarTypesDefaultArgs> = $Result.GetResult<Prisma.$CarTypesPayload, S>

  type CarTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarTypesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarTypesCountAggregateInputType | true
    }

  export interface CarTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarTypes'], meta: { name: 'CarTypes' } }
    /**
     * Find zero or one CarTypes that matches the filter.
     * @param {CarTypesFindUniqueArgs} args - Arguments to find a CarTypes
     * @example
     * // Get one CarTypes
     * const carTypes = await prisma.carTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarTypesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarTypesFindUniqueArgs<ExtArgs>>
    ): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CarTypes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CarTypesFindUniqueOrThrowArgs} args - Arguments to find a CarTypes
     * @example
     * // Get one CarTypes
     * const carTypes = await prisma.carTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarTypesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarTypesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CarTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarTypesFindFirstArgs} args - Arguments to find a CarTypes
     * @example
     * // Get one CarTypes
     * const carTypes = await prisma.carTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarTypesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarTypesFindFirstArgs<ExtArgs>>
    ): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CarTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarTypesFindFirstOrThrowArgs} args - Arguments to find a CarTypes
     * @example
     * // Get one CarTypes
     * const carTypes = await prisma.carTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarTypesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarTypesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CarTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarTypes
     * const carTypes = await prisma.carTypes.findMany()
     * 
     * // Get first 10 CarTypes
     * const carTypes = await prisma.carTypes.findMany({ take: 10 })
     * 
     * // Only select the `carTypeId`
     * const carTypesWithCarTypeIdOnly = await prisma.carTypes.findMany({ select: { carTypeId: true } })
     * 
    **/
    findMany<T extends CarTypesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarTypesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CarTypes.
     * @param {CarTypesCreateArgs} args - Arguments to create a CarTypes.
     * @example
     * // Create one CarTypes
     * const CarTypes = await prisma.carTypes.create({
     *   data: {
     *     // ... data to create a CarTypes
     *   }
     * })
     * 
    **/
    create<T extends CarTypesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarTypesCreateArgs<ExtArgs>>
    ): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CarTypes.
     * @param {CarTypesCreateManyArgs} args - Arguments to create many CarTypes.
     * @example
     * // Create many CarTypes
     * const carTypes = await prisma.carTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CarTypesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarTypesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarTypes.
     * @param {CarTypesDeleteArgs} args - Arguments to delete one CarTypes.
     * @example
     * // Delete one CarTypes
     * const CarTypes = await prisma.carTypes.delete({
     *   where: {
     *     // ... filter to delete one CarTypes
     *   }
     * })
     * 
    **/
    delete<T extends CarTypesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarTypesDeleteArgs<ExtArgs>>
    ): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CarTypes.
     * @param {CarTypesUpdateArgs} args - Arguments to update one CarTypes.
     * @example
     * // Update one CarTypes
     * const carTypes = await prisma.carTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarTypesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarTypesUpdateArgs<ExtArgs>>
    ): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CarTypes.
     * @param {CarTypesDeleteManyArgs} args - Arguments to filter CarTypes to delete.
     * @example
     * // Delete a few CarTypes
     * const { count } = await prisma.carTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarTypesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarTypesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarTypes
     * const carTypes = await prisma.carTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarTypesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarTypesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarTypes.
     * @param {CarTypesUpsertArgs} args - Arguments to update or create a CarTypes.
     * @example
     * // Update or create a CarTypes
     * const carTypes = await prisma.carTypes.upsert({
     *   create: {
     *     // ... data to create a CarTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarTypes we want to update
     *   }
     * })
    **/
    upsert<T extends CarTypesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarTypesUpsertArgs<ExtArgs>>
    ): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CarTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarTypesCountArgs} args - Arguments to filter CarTypes to count.
     * @example
     * // Count the number of CarTypes
     * const count = await prisma.carTypes.count({
     *   where: {
     *     // ... the filter for the CarTypes we want to count
     *   }
     * })
    **/
    count<T extends CarTypesCountArgs>(
      args?: Subset<T, CarTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarTypesAggregateArgs>(args: Subset<T, CarTypesAggregateArgs>): Prisma.PrismaPromise<GetCarTypesAggregateType<T>>

    /**
     * Group by CarTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarTypesGroupByArgs} args - Group by arguments.
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
      T extends CarTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarTypesGroupByArgs['orderBy'] }
        : { orderBy?: CarTypesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarTypes model
   */
  readonly fields: CarTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CarModels<T extends CarTypes$CarModelsArgs<ExtArgs> = {}>(args?: Subset<T, CarTypes$CarModelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CarTypes model
   */ 
  interface CarTypesFieldRefs {
    readonly carTypeId: FieldRef<"CarTypes", 'Int'>
    readonly carTypeName: FieldRef<"CarTypes", 'String'>
    readonly pricePerDay: FieldRef<"CarTypes", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CarTypes findUnique
   */
  export type CarTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * Filter, which CarTypes to fetch.
     */
    where: CarTypesWhereUniqueInput
  }

  /**
   * CarTypes findUniqueOrThrow
   */
  export type CarTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * Filter, which CarTypes to fetch.
     */
    where: CarTypesWhereUniqueInput
  }

  /**
   * CarTypes findFirst
   */
  export type CarTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * Filter, which CarTypes to fetch.
     */
    where?: CarTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarTypes to fetch.
     */
    orderBy?: CarTypesOrderByWithRelationInput | CarTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarTypes.
     */
    cursor?: CarTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarTypes.
     */
    distinct?: CarTypesScalarFieldEnum | CarTypesScalarFieldEnum[]
  }

  /**
   * CarTypes findFirstOrThrow
   */
  export type CarTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * Filter, which CarTypes to fetch.
     */
    where?: CarTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarTypes to fetch.
     */
    orderBy?: CarTypesOrderByWithRelationInput | CarTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarTypes.
     */
    cursor?: CarTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarTypes.
     */
    distinct?: CarTypesScalarFieldEnum | CarTypesScalarFieldEnum[]
  }

  /**
   * CarTypes findMany
   */
  export type CarTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * Filter, which CarTypes to fetch.
     */
    where?: CarTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarTypes to fetch.
     */
    orderBy?: CarTypesOrderByWithRelationInput | CarTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarTypes.
     */
    cursor?: CarTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarTypes.
     */
    skip?: number
    distinct?: CarTypesScalarFieldEnum | CarTypesScalarFieldEnum[]
  }

  /**
   * CarTypes create
   */
  export type CarTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a CarTypes.
     */
    data: XOR<CarTypesCreateInput, CarTypesUncheckedCreateInput>
  }

  /**
   * CarTypes createMany
   */
  export type CarTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarTypes.
     */
    data: CarTypesCreateManyInput | CarTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarTypes update
   */
  export type CarTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a CarTypes.
     */
    data: XOR<CarTypesUpdateInput, CarTypesUncheckedUpdateInput>
    /**
     * Choose, which CarTypes to update.
     */
    where: CarTypesWhereUniqueInput
  }

  /**
   * CarTypes updateMany
   */
  export type CarTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarTypes.
     */
    data: XOR<CarTypesUpdateManyMutationInput, CarTypesUncheckedUpdateManyInput>
    /**
     * Filter which CarTypes to update
     */
    where?: CarTypesWhereInput
  }

  /**
   * CarTypes upsert
   */
  export type CarTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the CarTypes to update in case it exists.
     */
    where: CarTypesWhereUniqueInput
    /**
     * In case the CarTypes found by the `where` argument doesn't exist, create a new CarTypes with this data.
     */
    create: XOR<CarTypesCreateInput, CarTypesUncheckedCreateInput>
    /**
     * In case the CarTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarTypesUpdateInput, CarTypesUncheckedUpdateInput>
  }

  /**
   * CarTypes delete
   */
  export type CarTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
    /**
     * Filter which CarTypes to delete.
     */
    where: CarTypesWhereUniqueInput
  }

  /**
   * CarTypes deleteMany
   */
  export type CarTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarTypes to delete
     */
    where?: CarTypesWhereInput
  }

  /**
   * CarTypes.CarModels
   */
  export type CarTypes$CarModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    where?: CarModelsWhereInput
    orderBy?: CarModelsOrderByWithRelationInput | CarModelsOrderByWithRelationInput[]
    cursor?: CarModelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarModelsScalarFieldEnum | CarModelsScalarFieldEnum[]
  }

  /**
   * CarTypes without action
   */
  export type CarTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarTypes
     */
    select?: CarTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarTypesInclude<ExtArgs> | null
  }


  /**
   * Model CarModels
   */

  export type AggregateCarModels = {
    _count: CarModelsCountAggregateOutputType | null
    _avg: CarModelsAvgAggregateOutputType | null
    _sum: CarModelsSumAggregateOutputType | null
    _min: CarModelsMinAggregateOutputType | null
    _max: CarModelsMaxAggregateOutputType | null
  }

  export type CarModelsAvgAggregateOutputType = {
    carModelId: number | null
    carTypeId: number | null
    seats: number | null
  }

  export type CarModelsSumAggregateOutputType = {
    carModelId: number | null
    carTypeId: number | null
    seats: number | null
  }

  export type CarModelsMinAggregateOutputType = {
    carModelId: number | null
    carTypeId: number | null
    brand: string | null
    model: string | null
    color: string | null
    transmission: string | null
    fuel: string | null
    seats: number | null
  }

  export type CarModelsMaxAggregateOutputType = {
    carModelId: number | null
    carTypeId: number | null
    brand: string | null
    model: string | null
    color: string | null
    transmission: string | null
    fuel: string | null
    seats: number | null
  }

  export type CarModelsCountAggregateOutputType = {
    carModelId: number
    carTypeId: number
    brand: number
    model: number
    color: number
    transmission: number
    fuel: number
    seats: number
    _all: number
  }


  export type CarModelsAvgAggregateInputType = {
    carModelId?: true
    carTypeId?: true
    seats?: true
  }

  export type CarModelsSumAggregateInputType = {
    carModelId?: true
    carTypeId?: true
    seats?: true
  }

  export type CarModelsMinAggregateInputType = {
    carModelId?: true
    carTypeId?: true
    brand?: true
    model?: true
    color?: true
    transmission?: true
    fuel?: true
    seats?: true
  }

  export type CarModelsMaxAggregateInputType = {
    carModelId?: true
    carTypeId?: true
    brand?: true
    model?: true
    color?: true
    transmission?: true
    fuel?: true
    seats?: true
  }

  export type CarModelsCountAggregateInputType = {
    carModelId?: true
    carTypeId?: true
    brand?: true
    model?: true
    color?: true
    transmission?: true
    fuel?: true
    seats?: true
    _all?: true
  }

  export type CarModelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarModels to aggregate.
     */
    where?: CarModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelsOrderByWithRelationInput | CarModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarModels
    **/
    _count?: true | CarModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarModelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarModelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarModelsMaxAggregateInputType
  }

  export type GetCarModelsAggregateType<T extends CarModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarModels[P]>
      : GetScalarType<T[P], AggregateCarModels[P]>
  }




  export type CarModelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarModelsWhereInput
    orderBy?: CarModelsOrderByWithAggregationInput | CarModelsOrderByWithAggregationInput[]
    by: CarModelsScalarFieldEnum[] | CarModelsScalarFieldEnum
    having?: CarModelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarModelsCountAggregateInputType | true
    _avg?: CarModelsAvgAggregateInputType
    _sum?: CarModelsSumAggregateInputType
    _min?: CarModelsMinAggregateInputType
    _max?: CarModelsMaxAggregateInputType
  }

  export type CarModelsGroupByOutputType = {
    carModelId: number
    carTypeId: number
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    _count: CarModelsCountAggregateOutputType | null
    _avg: CarModelsAvgAggregateOutputType | null
    _sum: CarModelsSumAggregateOutputType | null
    _min: CarModelsMinAggregateOutputType | null
    _max: CarModelsMaxAggregateOutputType | null
  }

  type GetCarModelsGroupByPayload<T extends CarModelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarModelsGroupByOutputType[P]>
            : GetScalarType<T[P], CarModelsGroupByOutputType[P]>
        }
      >
    >


  export type CarModelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carModelId?: boolean
    carTypeId?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    transmission?: boolean
    fuel?: boolean
    seats?: boolean
    CarImages?: boolean | CarModels$CarImagesArgs<ExtArgs>
    Cars?: boolean | CarModels$CarsArgs<ExtArgs>
    CarType?: boolean | CarTypesDefaultArgs<ExtArgs>
    _count?: boolean | CarModelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carModels"]>


  export type CarModelsSelectScalar = {
    carModelId?: boolean
    carTypeId?: boolean
    brand?: boolean
    model?: boolean
    color?: boolean
    transmission?: boolean
    fuel?: boolean
    seats?: boolean
  }

  export type CarModelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarImages?: boolean | CarModels$CarImagesArgs<ExtArgs>
    Cars?: boolean | CarModels$CarsArgs<ExtArgs>
    CarType?: boolean | CarTypesDefaultArgs<ExtArgs>
    _count?: boolean | CarModelsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CarModelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarModels"
    objects: {
      CarImages: Prisma.$CarImagesPayload<ExtArgs>[]
      Cars: Prisma.$CarsPayload<ExtArgs>[]
      CarType: Prisma.$CarTypesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      carModelId: number
      carTypeId: number
      brand: string
      model: string
      color: string
      transmission: string
      fuel: string
      seats: number
    }, ExtArgs["result"]["carModels"]>
    composites: {}
  }

  type CarModelsGetPayload<S extends boolean | null | undefined | CarModelsDefaultArgs> = $Result.GetResult<Prisma.$CarModelsPayload, S>

  type CarModelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarModelsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarModelsCountAggregateInputType | true
    }

  export interface CarModelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarModels'], meta: { name: 'CarModels' } }
    /**
     * Find zero or one CarModels that matches the filter.
     * @param {CarModelsFindUniqueArgs} args - Arguments to find a CarModels
     * @example
     * // Get one CarModels
     * const carModels = await prisma.carModels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarModelsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarModelsFindUniqueArgs<ExtArgs>>
    ): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CarModels that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CarModelsFindUniqueOrThrowArgs} args - Arguments to find a CarModels
     * @example
     * // Get one CarModels
     * const carModels = await prisma.carModels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarModelsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModelsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CarModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelsFindFirstArgs} args - Arguments to find a CarModels
     * @example
     * // Get one CarModels
     * const carModels = await prisma.carModels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarModelsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModelsFindFirstArgs<ExtArgs>>
    ): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CarModels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelsFindFirstOrThrowArgs} args - Arguments to find a CarModels
     * @example
     * // Get one CarModels
     * const carModels = await prisma.carModels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarModelsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModelsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CarModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarModels
     * const carModels = await prisma.carModels.findMany()
     * 
     * // Get first 10 CarModels
     * const carModels = await prisma.carModels.findMany({ take: 10 })
     * 
     * // Only select the `carModelId`
     * const carModelsWithCarModelIdOnly = await prisma.carModels.findMany({ select: { carModelId: true } })
     * 
    **/
    findMany<T extends CarModelsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModelsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CarModels.
     * @param {CarModelsCreateArgs} args - Arguments to create a CarModels.
     * @example
     * // Create one CarModels
     * const CarModels = await prisma.carModels.create({
     *   data: {
     *     // ... data to create a CarModels
     *   }
     * })
     * 
    **/
    create<T extends CarModelsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarModelsCreateArgs<ExtArgs>>
    ): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CarModels.
     * @param {CarModelsCreateManyArgs} args - Arguments to create many CarModels.
     * @example
     * // Create many CarModels
     * const carModels = await prisma.carModels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CarModelsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModelsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarModels.
     * @param {CarModelsDeleteArgs} args - Arguments to delete one CarModels.
     * @example
     * // Delete one CarModels
     * const CarModels = await prisma.carModels.delete({
     *   where: {
     *     // ... filter to delete one CarModels
     *   }
     * })
     * 
    **/
    delete<T extends CarModelsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarModelsDeleteArgs<ExtArgs>>
    ): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CarModels.
     * @param {CarModelsUpdateArgs} args - Arguments to update one CarModels.
     * @example
     * // Update one CarModels
     * const carModels = await prisma.carModels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarModelsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarModelsUpdateArgs<ExtArgs>>
    ): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CarModels.
     * @param {CarModelsDeleteManyArgs} args - Arguments to filter CarModels to delete.
     * @example
     * // Delete a few CarModels
     * const { count } = await prisma.carModels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarModelsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarModelsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarModels
     * const carModels = await prisma.carModels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarModelsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarModelsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarModels.
     * @param {CarModelsUpsertArgs} args - Arguments to update or create a CarModels.
     * @example
     * // Update or create a CarModels
     * const carModels = await prisma.carModels.upsert({
     *   create: {
     *     // ... data to create a CarModels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarModels we want to update
     *   }
     * })
    **/
    upsert<T extends CarModelsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarModelsUpsertArgs<ExtArgs>>
    ): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelsCountArgs} args - Arguments to filter CarModels to count.
     * @example
     * // Count the number of CarModels
     * const count = await prisma.carModels.count({
     *   where: {
     *     // ... the filter for the CarModels we want to count
     *   }
     * })
    **/
    count<T extends CarModelsCountArgs>(
      args?: Subset<T, CarModelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarModelsAggregateArgs>(args: Subset<T, CarModelsAggregateArgs>): Prisma.PrismaPromise<GetCarModelsAggregateType<T>>

    /**
     * Group by CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelsGroupByArgs} args - Group by arguments.
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
      T extends CarModelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarModelsGroupByArgs['orderBy'] }
        : { orderBy?: CarModelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarModelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarModels model
   */
  readonly fields: CarModelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarModels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarModelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CarImages<T extends CarModels$CarImagesArgs<ExtArgs> = {}>(args?: Subset<T, CarModels$CarImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    Cars<T extends CarModels$CarsArgs<ExtArgs> = {}>(args?: Subset<T, CarModels$CarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findMany'> | Null>;

    CarType<T extends CarTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarTypesDefaultArgs<ExtArgs>>): Prisma__CarTypesClient<$Result.GetResult<Prisma.$CarTypesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CarModels model
   */ 
  interface CarModelsFieldRefs {
    readonly carModelId: FieldRef<"CarModels", 'Int'>
    readonly carTypeId: FieldRef<"CarModels", 'Int'>
    readonly brand: FieldRef<"CarModels", 'String'>
    readonly model: FieldRef<"CarModels", 'String'>
    readonly color: FieldRef<"CarModels", 'String'>
    readonly transmission: FieldRef<"CarModels", 'String'>
    readonly fuel: FieldRef<"CarModels", 'String'>
    readonly seats: FieldRef<"CarModels", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CarModels findUnique
   */
  export type CarModelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarModels to fetch.
     */
    where: CarModelsWhereUniqueInput
  }

  /**
   * CarModels findUniqueOrThrow
   */
  export type CarModelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarModels to fetch.
     */
    where: CarModelsWhereUniqueInput
  }

  /**
   * CarModels findFirst
   */
  export type CarModelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarModels to fetch.
     */
    where?: CarModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelsOrderByWithRelationInput | CarModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarModels.
     */
    cursor?: CarModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarModels.
     */
    distinct?: CarModelsScalarFieldEnum | CarModelsScalarFieldEnum[]
  }

  /**
   * CarModels findFirstOrThrow
   */
  export type CarModelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarModels to fetch.
     */
    where?: CarModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelsOrderByWithRelationInput | CarModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarModels.
     */
    cursor?: CarModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarModels.
     */
    distinct?: CarModelsScalarFieldEnum | CarModelsScalarFieldEnum[]
  }

  /**
   * CarModels findMany
   */
  export type CarModelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * Filter, which CarModels to fetch.
     */
    where?: CarModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarModels to fetch.
     */
    orderBy?: CarModelsOrderByWithRelationInput | CarModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarModels.
     */
    cursor?: CarModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarModels.
     */
    skip?: number
    distinct?: CarModelsScalarFieldEnum | CarModelsScalarFieldEnum[]
  }

  /**
   * CarModels create
   */
  export type CarModelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * The data needed to create a CarModels.
     */
    data: XOR<CarModelsCreateInput, CarModelsUncheckedCreateInput>
  }

  /**
   * CarModels createMany
   */
  export type CarModelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarModels.
     */
    data: CarModelsCreateManyInput | CarModelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarModels update
   */
  export type CarModelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * The data needed to update a CarModels.
     */
    data: XOR<CarModelsUpdateInput, CarModelsUncheckedUpdateInput>
    /**
     * Choose, which CarModels to update.
     */
    where: CarModelsWhereUniqueInput
  }

  /**
   * CarModels updateMany
   */
  export type CarModelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarModels.
     */
    data: XOR<CarModelsUpdateManyMutationInput, CarModelsUncheckedUpdateManyInput>
    /**
     * Filter which CarModels to update
     */
    where?: CarModelsWhereInput
  }

  /**
   * CarModels upsert
   */
  export type CarModelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * The filter to search for the CarModels to update in case it exists.
     */
    where: CarModelsWhereUniqueInput
    /**
     * In case the CarModels found by the `where` argument doesn't exist, create a new CarModels with this data.
     */
    create: XOR<CarModelsCreateInput, CarModelsUncheckedCreateInput>
    /**
     * In case the CarModels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarModelsUpdateInput, CarModelsUncheckedUpdateInput>
  }

  /**
   * CarModels delete
   */
  export type CarModelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
    /**
     * Filter which CarModels to delete.
     */
    where: CarModelsWhereUniqueInput
  }

  /**
   * CarModels deleteMany
   */
  export type CarModelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarModels to delete
     */
    where?: CarModelsWhereInput
  }

  /**
   * CarModels.CarImages
   */
  export type CarModels$CarImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    where?: CarImagesWhereInput
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    cursor?: CarImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * CarModels.Cars
   */
  export type CarModels$CarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    cursor?: CarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * CarModels without action
   */
  export type CarModelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarModels
     */
    select?: CarModelsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelsInclude<ExtArgs> | null
  }


  /**
   * Model CarImages
   */

  export type AggregateCarImages = {
    _count: CarImagesCountAggregateOutputType | null
    _avg: CarImagesAvgAggregateOutputType | null
    _sum: CarImagesSumAggregateOutputType | null
    _min: CarImagesMinAggregateOutputType | null
    _max: CarImagesMaxAggregateOutputType | null
  }

  export type CarImagesAvgAggregateOutputType = {
    imageId: number | null
    carModelId: number | null
  }

  export type CarImagesSumAggregateOutputType = {
    imageId: number | null
    carModelId: number | null
  }

  export type CarImagesMinAggregateOutputType = {
    imageId: number | null
    carModelId: number | null
    imageUrl: string | null
  }

  export type CarImagesMaxAggregateOutputType = {
    imageId: number | null
    carModelId: number | null
    imageUrl: string | null
  }

  export type CarImagesCountAggregateOutputType = {
    imageId: number
    carModelId: number
    imageUrl: number
    _all: number
  }


  export type CarImagesAvgAggregateInputType = {
    imageId?: true
    carModelId?: true
  }

  export type CarImagesSumAggregateInputType = {
    imageId?: true
    carModelId?: true
  }

  export type CarImagesMinAggregateInputType = {
    imageId?: true
    carModelId?: true
    imageUrl?: true
  }

  export type CarImagesMaxAggregateInputType = {
    imageId?: true
    carModelId?: true
    imageUrl?: true
  }

  export type CarImagesCountAggregateInputType = {
    imageId?: true
    carModelId?: true
    imageUrl?: true
    _all?: true
  }

  export type CarImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarImages to aggregate.
     */
    where?: CarImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarImages to fetch.
     */
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarImages
    **/
    _count?: true | CarImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarImagesMaxAggregateInputType
  }

  export type GetCarImagesAggregateType<T extends CarImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateCarImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarImages[P]>
      : GetScalarType<T[P], AggregateCarImages[P]>
  }




  export type CarImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarImagesWhereInput
    orderBy?: CarImagesOrderByWithAggregationInput | CarImagesOrderByWithAggregationInput[]
    by: CarImagesScalarFieldEnum[] | CarImagesScalarFieldEnum
    having?: CarImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarImagesCountAggregateInputType | true
    _avg?: CarImagesAvgAggregateInputType
    _sum?: CarImagesSumAggregateInputType
    _min?: CarImagesMinAggregateInputType
    _max?: CarImagesMaxAggregateInputType
  }

  export type CarImagesGroupByOutputType = {
    imageId: number
    carModelId: number
    imageUrl: string
    _count: CarImagesCountAggregateOutputType | null
    _avg: CarImagesAvgAggregateOutputType | null
    _sum: CarImagesSumAggregateOutputType | null
    _min: CarImagesMinAggregateOutputType | null
    _max: CarImagesMaxAggregateOutputType | null
  }

  type GetCarImagesGroupByPayload<T extends CarImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarImagesGroupByOutputType[P]>
            : GetScalarType<T[P], CarImagesGroupByOutputType[P]>
        }
      >
    >


  export type CarImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    imageId?: boolean
    carModelId?: boolean
    imageUrl?: boolean
    CarModel?: boolean | CarModelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carImages"]>


  export type CarImagesSelectScalar = {
    imageId?: boolean
    carModelId?: boolean
    imageUrl?: boolean
  }

  export type CarImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarModel?: boolean | CarModelsDefaultArgs<ExtArgs>
  }

  export type $CarImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarImages"
    objects: {
      CarModel: Prisma.$CarModelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      imageId: number
      carModelId: number
      imageUrl: string
    }, ExtArgs["result"]["carImages"]>
    composites: {}
  }

  type CarImagesGetPayload<S extends boolean | null | undefined | CarImagesDefaultArgs> = $Result.GetResult<Prisma.$CarImagesPayload, S>

  type CarImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarImagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarImagesCountAggregateInputType | true
    }

  export interface CarImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarImages'], meta: { name: 'CarImages' } }
    /**
     * Find zero or one CarImages that matches the filter.
     * @param {CarImagesFindUniqueArgs} args - Arguments to find a CarImages
     * @example
     * // Get one CarImages
     * const carImages = await prisma.carImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarImagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarImagesFindUniqueArgs<ExtArgs>>
    ): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CarImages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CarImagesFindUniqueOrThrowArgs} args - Arguments to find a CarImages
     * @example
     * // Get one CarImages
     * const carImages = await prisma.carImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarImagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarImagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CarImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesFindFirstArgs} args - Arguments to find a CarImages
     * @example
     * // Get one CarImages
     * const carImages = await prisma.carImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarImagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarImagesFindFirstArgs<ExtArgs>>
    ): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CarImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesFindFirstOrThrowArgs} args - Arguments to find a CarImages
     * @example
     * // Get one CarImages
     * const carImages = await prisma.carImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarImagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarImagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CarImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarImages
     * const carImages = await prisma.carImages.findMany()
     * 
     * // Get first 10 CarImages
     * const carImages = await prisma.carImages.findMany({ take: 10 })
     * 
     * // Only select the `imageId`
     * const carImagesWithImageIdOnly = await prisma.carImages.findMany({ select: { imageId: true } })
     * 
    **/
    findMany<T extends CarImagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarImagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CarImages.
     * @param {CarImagesCreateArgs} args - Arguments to create a CarImages.
     * @example
     * // Create one CarImages
     * const CarImages = await prisma.carImages.create({
     *   data: {
     *     // ... data to create a CarImages
     *   }
     * })
     * 
    **/
    create<T extends CarImagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarImagesCreateArgs<ExtArgs>>
    ): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CarImages.
     * @param {CarImagesCreateManyArgs} args - Arguments to create many CarImages.
     * @example
     * // Create many CarImages
     * const carImages = await prisma.carImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CarImagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarImagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarImages.
     * @param {CarImagesDeleteArgs} args - Arguments to delete one CarImages.
     * @example
     * // Delete one CarImages
     * const CarImages = await prisma.carImages.delete({
     *   where: {
     *     // ... filter to delete one CarImages
     *   }
     * })
     * 
    **/
    delete<T extends CarImagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarImagesDeleteArgs<ExtArgs>>
    ): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CarImages.
     * @param {CarImagesUpdateArgs} args - Arguments to update one CarImages.
     * @example
     * // Update one CarImages
     * const carImages = await prisma.carImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarImagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarImagesUpdateArgs<ExtArgs>>
    ): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CarImages.
     * @param {CarImagesDeleteManyArgs} args - Arguments to filter CarImages to delete.
     * @example
     * // Delete a few CarImages
     * const { count } = await prisma.carImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarImagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarImagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarImages
     * const carImages = await prisma.carImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarImagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarImagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarImages.
     * @param {CarImagesUpsertArgs} args - Arguments to update or create a CarImages.
     * @example
     * // Update or create a CarImages
     * const carImages = await prisma.carImages.upsert({
     *   create: {
     *     // ... data to create a CarImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarImages we want to update
     *   }
     * })
    **/
    upsert<T extends CarImagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarImagesUpsertArgs<ExtArgs>>
    ): Prisma__CarImagesClient<$Result.GetResult<Prisma.$CarImagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CarImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesCountArgs} args - Arguments to filter CarImages to count.
     * @example
     * // Count the number of CarImages
     * const count = await prisma.carImages.count({
     *   where: {
     *     // ... the filter for the CarImages we want to count
     *   }
     * })
    **/
    count<T extends CarImagesCountArgs>(
      args?: Subset<T, CarImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarImagesAggregateArgs>(args: Subset<T, CarImagesAggregateArgs>): Prisma.PrismaPromise<GetCarImagesAggregateType<T>>

    /**
     * Group by CarImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarImagesGroupByArgs} args - Group by arguments.
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
      T extends CarImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarImagesGroupByArgs['orderBy'] }
        : { orderBy?: CarImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarImages model
   */
  readonly fields: CarImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CarModel<T extends CarModelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarModelsDefaultArgs<ExtArgs>>): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CarImages model
   */ 
  interface CarImagesFieldRefs {
    readonly imageId: FieldRef<"CarImages", 'Int'>
    readonly carModelId: FieldRef<"CarImages", 'Int'>
    readonly imageUrl: FieldRef<"CarImages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CarImages findUnique
   */
  export type CarImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where: CarImagesWhereUniqueInput
  }

  /**
   * CarImages findUniqueOrThrow
   */
  export type CarImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where: CarImagesWhereUniqueInput
  }

  /**
   * CarImages findFirst
   */
  export type CarImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where?: CarImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarImages to fetch.
     */
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarImages.
     */
    cursor?: CarImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarImages.
     */
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * CarImages findFirstOrThrow
   */
  export type CarImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where?: CarImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarImages to fetch.
     */
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarImages.
     */
    cursor?: CarImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarImages.
     */
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * CarImages findMany
   */
  export type CarImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter, which CarImages to fetch.
     */
    where?: CarImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarImages to fetch.
     */
    orderBy?: CarImagesOrderByWithRelationInput | CarImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarImages.
     */
    cursor?: CarImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarImages.
     */
    skip?: number
    distinct?: CarImagesScalarFieldEnum | CarImagesScalarFieldEnum[]
  }

  /**
   * CarImages create
   */
  export type CarImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a CarImages.
     */
    data: XOR<CarImagesCreateInput, CarImagesUncheckedCreateInput>
  }

  /**
   * CarImages createMany
   */
  export type CarImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarImages.
     */
    data: CarImagesCreateManyInput | CarImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarImages update
   */
  export type CarImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a CarImages.
     */
    data: XOR<CarImagesUpdateInput, CarImagesUncheckedUpdateInput>
    /**
     * Choose, which CarImages to update.
     */
    where: CarImagesWhereUniqueInput
  }

  /**
   * CarImages updateMany
   */
  export type CarImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarImages.
     */
    data: XOR<CarImagesUpdateManyMutationInput, CarImagesUncheckedUpdateManyInput>
    /**
     * Filter which CarImages to update
     */
    where?: CarImagesWhereInput
  }

  /**
   * CarImages upsert
   */
  export type CarImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the CarImages to update in case it exists.
     */
    where: CarImagesWhereUniqueInput
    /**
     * In case the CarImages found by the `where` argument doesn't exist, create a new CarImages with this data.
     */
    create: XOR<CarImagesCreateInput, CarImagesUncheckedCreateInput>
    /**
     * In case the CarImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarImagesUpdateInput, CarImagesUncheckedUpdateInput>
  }

  /**
   * CarImages delete
   */
  export type CarImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
    /**
     * Filter which CarImages to delete.
     */
    where: CarImagesWhereUniqueInput
  }

  /**
   * CarImages deleteMany
   */
  export type CarImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarImages to delete
     */
    where?: CarImagesWhereInput
  }

  /**
   * CarImages without action
   */
  export type CarImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarImages
     */
    select?: CarImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarImagesInclude<ExtArgs> | null
  }


  /**
   * Model Cars
   */

  export type AggregateCars = {
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  export type CarsAvgAggregateOutputType = {
    carId: number | null
    carModelId: number | null
    branchId: number | null
  }

  export type CarsSumAggregateOutputType = {
    carId: number | null
    carModelId: number | null
    branchId: number | null
  }

  export type CarsMinAggregateOutputType = {
    carId: number | null
    carModelId: number | null
    licensePlate: string | null
    status: $Enums.CarStatus | null
    branchId: number | null
    useDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type CarsMaxAggregateOutputType = {
    carId: number | null
    carModelId: number | null
    licensePlate: string | null
    status: $Enums.CarStatus | null
    branchId: number | null
    useDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type CarsCountAggregateOutputType = {
    carId: number
    carModelId: number
    licensePlate: number
    status: number
    branchId: number
    useDate: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type CarsAvgAggregateInputType = {
    carId?: true
    carModelId?: true
    branchId?: true
  }

  export type CarsSumAggregateInputType = {
    carId?: true
    carModelId?: true
    branchId?: true
  }

  export type CarsMinAggregateInputType = {
    carId?: true
    carModelId?: true
    licensePlate?: true
    status?: true
    branchId?: true
    useDate?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type CarsMaxAggregateInputType = {
    carId?: true
    carModelId?: true
    licensePlate?: true
    status?: true
    branchId?: true
    useDate?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type CarsCountAggregateInputType = {
    carId?: true
    carModelId?: true
    licensePlate?: true
    status?: true
    branchId?: true
    useDate?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type CarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to aggregate.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsMaxAggregateInputType
  }

  export type GetCarsAggregateType<T extends CarsAggregateArgs> = {
        [P in keyof T & keyof AggregateCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCars[P]>
      : GetScalarType<T[P], AggregateCars[P]>
  }




  export type CarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithAggregationInput | CarsOrderByWithAggregationInput[]
    by: CarsScalarFieldEnum[] | CarsScalarFieldEnum
    having?: CarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsCountAggregateInputType | true
    _avg?: CarsAvgAggregateInputType
    _sum?: CarsSumAggregateInputType
    _min?: CarsMinAggregateInputType
    _max?: CarsMaxAggregateInputType
  }

  export type CarsGroupByOutputType = {
    carId: number
    carModelId: number
    licensePlate: string
    status: $Enums.CarStatus
    branchId: number | null
    useDate: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  type GetCarsGroupByPayload<T extends CarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsGroupByOutputType[P]>
            : GetScalarType<T[P], CarsGroupByOutputType[P]>
        }
      >
    >


  export type CarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carId?: boolean
    carModelId?: boolean
    licensePlate?: boolean
    status?: boolean
    branchId?: boolean
    useDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    CarModel?: boolean | CarModelsDefaultArgs<ExtArgs>
    Branch?: boolean | Cars$BranchArgs<ExtArgs>
    Bookings?: boolean | Cars$BookingsArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>


  export type CarsSelectScalar = {
    carId?: boolean
    carModelId?: boolean
    licensePlate?: boolean
    status?: boolean
    branchId?: boolean
    useDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type CarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CarModel?: boolean | CarModelsDefaultArgs<ExtArgs>
    Branch?: boolean | Cars$BranchArgs<ExtArgs>
    Bookings?: boolean | Cars$BookingsArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cars"
    objects: {
      CarModel: Prisma.$CarModelsPayload<ExtArgs>
      Branch: Prisma.$BranchesPayload<ExtArgs> | null
      Bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      carId: number
      carModelId: number
      licensePlate: string
      status: $Enums.CarStatus
      branchId: number | null
      useDate: string
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["cars"]>
    composites: {}
  }

  type CarsGetPayload<S extends boolean | null | undefined | CarsDefaultArgs> = $Result.GetResult<Prisma.$CarsPayload, S>

  type CarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarsCountAggregateInputType | true
    }

  export interface CarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cars'], meta: { name: 'Cars' } }
    /**
     * Find zero or one Cars that matches the filter.
     * @param {CarsFindUniqueArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarsFindUniqueArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cars that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CarsFindUniqueOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsFindFirstArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.cars.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.cars.findMany({ take: 10 })
     * 
     * // Only select the `carId`
     * const carsWithCarIdOnly = await prisma.cars.findMany({ select: { carId: true } })
     * 
    **/
    findMany<T extends CarsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cars.
     * @param {CarsCreateArgs} args - Arguments to create a Cars.
     * @example
     * // Create one Cars
     * const Cars = await prisma.cars.create({
     *   data: {
     *     // ... data to create a Cars
     *   }
     * })
     * 
    **/
    create<T extends CarsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarsCreateArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cars.
     * @param {CarsCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CarsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cars.
     * @param {CarsDeleteArgs} args - Arguments to delete one Cars.
     * @example
     * // Delete one Cars
     * const Cars = await prisma.cars.delete({
     *   where: {
     *     // ... filter to delete one Cars
     *   }
     * })
     * 
    **/
    delete<T extends CarsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarsDeleteArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cars.
     * @param {CarsUpdateArgs} args - Arguments to update one Cars.
     * @example
     * // Update one Cars
     * const cars = await prisma.cars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarsUpdateArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cars.
     * @param {CarsDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.cars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cars.
     * @param {CarsUpsertArgs} args - Arguments to update or create a Cars.
     * @example
     * // Update or create a Cars
     * const cars = await prisma.cars.upsert({
     *   create: {
     *     // ... data to create a Cars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cars we want to update
     *   }
     * })
    **/
    upsert<T extends CarsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarsUpsertArgs<ExtArgs>>
    ): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.cars.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarsCountArgs>(
      args?: Subset<T, CarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarsAggregateArgs>(args: Subset<T, CarsAggregateArgs>): Prisma.PrismaPromise<GetCarsAggregateType<T>>

    /**
     * Group by Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsGroupByArgs} args - Group by arguments.
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
      T extends CarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarsGroupByArgs['orderBy'] }
        : { orderBy?: CarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cars model
   */
  readonly fields: CarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CarModel<T extends CarModelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarModelsDefaultArgs<ExtArgs>>): Prisma__CarModelsClient<$Result.GetResult<Prisma.$CarModelsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Branch<T extends Cars$BranchArgs<ExtArgs> = {}>(args?: Subset<T, Cars$BranchArgs<ExtArgs>>): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Bookings<T extends Cars$BookingsArgs<ExtArgs> = {}>(args?: Subset<T, Cars$BookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cars model
   */ 
  interface CarsFieldRefs {
    readonly carId: FieldRef<"Cars", 'Int'>
    readonly carModelId: FieldRef<"Cars", 'Int'>
    readonly licensePlate: FieldRef<"Cars", 'String'>
    readonly status: FieldRef<"Cars", 'CarStatus'>
    readonly branchId: FieldRef<"Cars", 'Int'>
    readonly useDate: FieldRef<"Cars", 'String'>
    readonly createdAt: FieldRef<"Cars", 'DateTime'>
    readonly updatedAt: FieldRef<"Cars", 'DateTime'>
    readonly isDeleted: FieldRef<"Cars", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Cars findUnique
   */
  export type CarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findUniqueOrThrow
   */
  export type CarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findFirst
   */
  export type CarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findFirstOrThrow
   */
  export type CarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findMany
   */
  export type CarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars create
   */
  export type CarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cars.
     */
    data: XOR<CarsCreateInput, CarsUncheckedCreateInput>
  }

  /**
   * Cars createMany
   */
  export type CarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cars update
   */
  export type CarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cars.
     */
    data: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
    /**
     * Choose, which Cars to update.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars updateMany
   */
  export type CarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
  }

  /**
   * Cars upsert
   */
  export type CarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cars to update in case it exists.
     */
    where: CarsWhereUniqueInput
    /**
     * In case the Cars found by the `where` argument doesn't exist, create a new Cars with this data.
     */
    create: XOR<CarsCreateInput, CarsUncheckedCreateInput>
    /**
     * In case the Cars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
  }

  /**
   * Cars delete
   */
  export type CarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter which Cars to delete.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars deleteMany
   */
  export type CarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarsWhereInput
  }

  /**
   * Cars.Branch
   */
  export type Cars$BranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branches
     */
    select?: BranchesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchesInclude<ExtArgs> | null
    where?: BranchesWhereInput
  }

  /**
   * Cars.Bookings
   */
  export type Cars$BookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Cars without action
   */
  export type CarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
  }


  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    bookingId: number | null
    customerId: number | null
    carId: number | null
    totalAmount: number | null
    pickupLocationId: number | null
    dropoffLocationId: number | null
  }

  export type BookingsSumAggregateOutputType = {
    bookingId: number | null
    customerId: number | null
    carId: number | null
    totalAmount: number | null
    pickupLocationId: number | null
    dropoffLocationId: number | null
  }

  export type BookingsMinAggregateOutputType = {
    bookingId: number | null
    customerId: number | null
    carId: number | null
    startDate: Date | null
    endDate: Date | null
    pickDropTime: string | null
    totalAmount: number | null
    pickupLocationId: number | null
    dropoffLocationId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingsMaxAggregateOutputType = {
    bookingId: number | null
    customerId: number | null
    carId: number | null
    startDate: Date | null
    endDate: Date | null
    pickDropTime: string | null
    totalAmount: number | null
    pickupLocationId: number | null
    dropoffLocationId: number | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingsCountAggregateOutputType = {
    bookingId: number
    customerId: number
    carId: number
    startDate: number
    endDate: number
    pickDropTime: number
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    bookingId?: true
    customerId?: true
    carId?: true
    totalAmount?: true
    pickupLocationId?: true
    dropoffLocationId?: true
  }

  export type BookingsSumAggregateInputType = {
    bookingId?: true
    customerId?: true
    carId?: true
    totalAmount?: true
    pickupLocationId?: true
    dropoffLocationId?: true
  }

  export type BookingsMinAggregateInputType = {
    bookingId?: true
    customerId?: true
    carId?: true
    startDate?: true
    endDate?: true
    pickDropTime?: true
    totalAmount?: true
    pickupLocationId?: true
    dropoffLocationId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingsMaxAggregateInputType = {
    bookingId?: true
    customerId?: true
    carId?: true
    startDate?: true
    endDate?: true
    pickDropTime?: true
    totalAmount?: true
    pickupLocationId?: true
    dropoffLocationId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingsCountAggregateInputType = {
    bookingId?: true
    customerId?: true
    carId?: true
    startDate?: true
    endDate?: true
    pickDropTime?: true
    totalAmount?: true
    pickupLocationId?: true
    dropoffLocationId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    bookingId: number
    customerId: number
    carId: number
    startDate: Date
    endDate: Date
    pickDropTime: string | null
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status: $Enums.BookingStatus
    createdAt: Date
    updatedAt: Date
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookingId?: boolean
    customerId?: boolean
    carId?: boolean
    startDate?: boolean
    endDate?: boolean
    pickDropTime?: boolean
    totalAmount?: boolean
    pickupLocationId?: boolean
    dropoffLocationId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Customer?: boolean | CustomersDefaultArgs<ExtArgs>
    Car?: boolean | CarsDefaultArgs<ExtArgs>
    PickupLocation?: boolean | BranchesDefaultArgs<ExtArgs>
    DropoffLocation?: boolean | BranchesDefaultArgs<ExtArgs>
    Payment?: boolean | Bookings$PaymentArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>


  export type BookingsSelectScalar = {
    bookingId?: boolean
    customerId?: boolean
    carId?: boolean
    startDate?: boolean
    endDate?: boolean
    pickDropTime?: boolean
    totalAmount?: boolean
    pickupLocationId?: boolean
    dropoffLocationId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomersDefaultArgs<ExtArgs>
    Car?: boolean | CarsDefaultArgs<ExtArgs>
    PickupLocation?: boolean | BranchesDefaultArgs<ExtArgs>
    DropoffLocation?: boolean | BranchesDefaultArgs<ExtArgs>
    Payment?: boolean | Bookings$PaymentArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {
      Customer: Prisma.$CustomersPayload<ExtArgs>
      Car: Prisma.$CarsPayload<ExtArgs>
      PickupLocation: Prisma.$BranchesPayload<ExtArgs>
      DropoffLocation: Prisma.$BranchesPayload<ExtArgs>
      Payment: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bookingId: number
      customerId: number
      carId: number
      startDate: Date
      endDate: Date
      pickDropTime: string | null
      totalAmount: number
      pickupLocationId: number
      dropoffLocationId: number
      status: $Enums.BookingStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `bookingId`
     * const bookingsWithBookingIdOnly = await prisma.bookings.findMany({ select: { bookingId: true } })
     * 
    **/
    findMany<T extends BookingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
    **/
    create<T extends BookingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookings.
     * @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BookingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
    **/
    delete<T extends BookingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
    **/
    upsert<T extends BookingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>
    ): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
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
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Customer<T extends CustomersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomersDefaultArgs<ExtArgs>>): Prisma__CustomersClient<$Result.GetResult<Prisma.$CustomersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Car<T extends CarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarsDefaultArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    PickupLocation<T extends BranchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchesDefaultArgs<ExtArgs>>): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    DropoffLocation<T extends BranchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchesDefaultArgs<ExtArgs>>): Prisma__BranchesClient<$Result.GetResult<Prisma.$BranchesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Payment<T extends Bookings$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Bookings$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bookings model
   */ 
  interface BookingsFieldRefs {
    readonly bookingId: FieldRef<"Bookings", 'Int'>
    readonly customerId: FieldRef<"Bookings", 'Int'>
    readonly carId: FieldRef<"Bookings", 'Int'>
    readonly startDate: FieldRef<"Bookings", 'DateTime'>
    readonly endDate: FieldRef<"Bookings", 'DateTime'>
    readonly pickDropTime: FieldRef<"Bookings", 'String'>
    readonly totalAmount: FieldRef<"Bookings", 'Float'>
    readonly pickupLocationId: FieldRef<"Bookings", 'Int'>
    readonly dropoffLocationId: FieldRef<"Bookings", 'Int'>
    readonly status: FieldRef<"Bookings", 'BookingStatus'>
    readonly createdAt: FieldRef<"Bookings", 'DateTime'>
    readonly updatedAt: FieldRef<"Bookings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }

  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
  }

  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }

  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
  }

  /**
   * Bookings.Payment
   */
  export type Bookings$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    paymentId: number | null
    bookingId: number | null
    amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    paymentId: number | null
    bookingId: number | null
    amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    paymentId: number | null
    bookingId: number | null
    paymentDate: Date | null
    amount: number | null
    orderId: string | null
    sessionId: string | null
    paymentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    paymentId: number | null
    bookingId: number | null
    paymentDate: Date | null
    amount: number | null
    orderId: string | null
    sessionId: string | null
    paymentStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    paymentId: number
    bookingId: number
    paymentDate: number
    amount: number
    orderId: number
    sessionId: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    paymentId?: true
    bookingId?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    paymentId?: true
    bookingId?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    paymentId?: true
    bookingId?: true
    paymentDate?: true
    amount?: true
    orderId?: true
    sessionId?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsMaxAggregateInputType = {
    paymentId?: true
    bookingId?: true
    paymentDate?: true
    amount?: true
    orderId?: true
    sessionId?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsCountAggregateInputType = {
    paymentId?: true
    bookingId?: true
    paymentDate?: true
    amount?: true
    orderId?: true
    sessionId?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    paymentId: number
    bookingId: number
    paymentDate: Date
    amount: number
    orderId: string
    sessionId: string
    paymentStatus: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paymentId?: boolean
    bookingId?: boolean
    paymentDate?: boolean
    amount?: boolean
    orderId?: boolean
    sessionId?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>


  export type PaymentsSelectScalar = {
    paymentId?: boolean
    bookingId?: boolean
    paymentDate?: boolean
    amount?: boolean
    orderId?: boolean
    sessionId?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Booking?: boolean | BookingsDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      Booking: Prisma.$BookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      paymentId: number
      bookingId: number
      paymentDate: Date
      amount: number
      orderId: string
      sessionId: string
      paymentStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `paymentId`
     * const paymentsWithPaymentIdOnly = await prisma.payments.findMany({ select: { paymentId: true } })
     * 
    **/
    findMany<T extends PaymentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
    **/
    create<T extends PaymentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PaymentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
    **/
    delete<T extends PaymentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Booking<T extends BookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingsDefaultArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payments model
   */ 
  interface PaymentsFieldRefs {
    readonly paymentId: FieldRef<"Payments", 'Int'>
    readonly bookingId: FieldRef<"Payments", 'Int'>
    readonly paymentDate: FieldRef<"Payments", 'DateTime'>
    readonly amount: FieldRef<"Payments", 'Float'>
    readonly orderId: FieldRef<"Payments", 'String'>
    readonly sessionId: FieldRef<"Payments", 'String'>
    readonly paymentStatus: FieldRef<"Payments", 'String'>
    readonly createdAt: FieldRef<"Payments", 'DateTime'>
    readonly updatedAt: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    customerId: 'customerId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    driverLicense: 'driverLicense',
    totalPoints: 'totalPoints',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const BranchesScalarFieldEnum: {
    branchId: 'branchId',
    branchName: 'branchName',
    region: 'region',
    lat: 'lat',
    lng: 'lng'
  };

  export type BranchesScalarFieldEnum = (typeof BranchesScalarFieldEnum)[keyof typeof BranchesScalarFieldEnum]


  export const CarTypesScalarFieldEnum: {
    carTypeId: 'carTypeId',
    carTypeName: 'carTypeName',
    pricePerDay: 'pricePerDay'
  };

  export type CarTypesScalarFieldEnum = (typeof CarTypesScalarFieldEnum)[keyof typeof CarTypesScalarFieldEnum]


  export const CarModelsScalarFieldEnum: {
    carModelId: 'carModelId',
    carTypeId: 'carTypeId',
    brand: 'brand',
    model: 'model',
    color: 'color',
    transmission: 'transmission',
    fuel: 'fuel',
    seats: 'seats'
  };

  export type CarModelsScalarFieldEnum = (typeof CarModelsScalarFieldEnum)[keyof typeof CarModelsScalarFieldEnum]


  export const CarImagesScalarFieldEnum: {
    imageId: 'imageId',
    carModelId: 'carModelId',
    imageUrl: 'imageUrl'
  };

  export type CarImagesScalarFieldEnum = (typeof CarImagesScalarFieldEnum)[keyof typeof CarImagesScalarFieldEnum]


  export const CarsScalarFieldEnum: {
    carId: 'carId',
    carModelId: 'carModelId',
    licensePlate: 'licensePlate',
    status: 'status',
    branchId: 'branchId',
    useDate: 'useDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type CarsScalarFieldEnum = (typeof CarsScalarFieldEnum)[keyof typeof CarsScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    bookingId: 'bookingId',
    customerId: 'customerId',
    carId: 'carId',
    startDate: 'startDate',
    endDate: 'endDate',
    pickDropTime: 'pickDropTime',
    totalAmount: 'totalAmount',
    pickupLocationId: 'pickupLocationId',
    dropoffLocationId: 'dropoffLocationId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    paymentId: 'paymentId',
    bookingId: 'bookingId',
    paymentDate: 'paymentDate',
    amount: 'amount',
    orderId: 'orderId',
    sessionId: 'sessionId',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'CarStatus'
   */
  export type EnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    
  /**
   * Deep Input Types
   */


  export type AdminsWhereInput = {
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    id?: IntFilter<"Admins"> | number
    username?: StringFilter<"Admins"> | string
    password?: StringFilter<"Admins"> | string
    isActive?: BoolFilter<"Admins"> | boolean
    createdAt?: DateTimeFilter<"Admins"> | Date | string
    updatedAt?: DateTimeFilter<"Admins"> | Date | string
  }

  export type AdminsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    password?: StringFilter<"Admins"> | string
    isActive?: BoolFilter<"Admins"> | boolean
    createdAt?: DateTimeFilter<"Admins"> | Date | string
    updatedAt?: DateTimeFilter<"Admins"> | Date | string
  }, "id" | "username">

  export type AdminsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminsCountOrderByAggregateInput
    _avg?: AdminsAvgOrderByAggregateInput
    _max?: AdminsMaxOrderByAggregateInput
    _min?: AdminsMinOrderByAggregateInput
    _sum?: AdminsSumOrderByAggregateInput
  }

  export type AdminsScalarWhereWithAggregatesInput = {
    AND?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    OR?: AdminsScalarWhereWithAggregatesInput[]
    NOT?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admins"> | number
    username?: StringWithAggregatesFilter<"Admins"> | string
    password?: StringWithAggregatesFilter<"Admins"> | string
    isActive?: BoolWithAggregatesFilter<"Admins"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admins"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admins"> | Date | string
  }

  export type CustomersWhereInput = {
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    customerId?: IntFilter<"Customers"> | number
    firstName?: StringFilter<"Customers"> | string
    lastName?: StringFilter<"Customers"> | string
    email?: StringFilter<"Customers"> | string
    password?: StringFilter<"Customers"> | string
    phone?: StringFilter<"Customers"> | string
    address?: StringNullableFilter<"Customers"> | string | null
    driverLicense?: StringFilter<"Customers"> | string
    totalPoints?: IntFilter<"Customers"> | number
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updatedAt?: DateTimeFilter<"Customers"> | Date | string
    Bookings?: BookingsListRelationFilter
  }

  export type CustomersOrderByWithRelationInput = {
    customerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    driverLicense?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Bookings?: BookingsOrderByRelationAggregateInput
  }

  export type CustomersWhereUniqueInput = Prisma.AtLeast<{
    customerId?: number
    email?: string
    driverLicense?: string
    AND?: CustomersWhereInput | CustomersWhereInput[]
    OR?: CustomersWhereInput[]
    NOT?: CustomersWhereInput | CustomersWhereInput[]
    firstName?: StringFilter<"Customers"> | string
    lastName?: StringFilter<"Customers"> | string
    password?: StringFilter<"Customers"> | string
    phone?: StringFilter<"Customers"> | string
    address?: StringNullableFilter<"Customers"> | string | null
    totalPoints?: IntFilter<"Customers"> | number
    createdAt?: DateTimeFilter<"Customers"> | Date | string
    updatedAt?: DateTimeFilter<"Customers"> | Date | string
    Bookings?: BookingsListRelationFilter
  }, "customerId" | "email" | "driverLicense">

  export type CustomersOrderByWithAggregationInput = {
    customerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    driverLicense?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomersCountOrderByAggregateInput
    _avg?: CustomersAvgOrderByAggregateInput
    _max?: CustomersMaxOrderByAggregateInput
    _min?: CustomersMinOrderByAggregateInput
    _sum?: CustomersSumOrderByAggregateInput
  }

  export type CustomersScalarWhereWithAggregatesInput = {
    AND?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    OR?: CustomersScalarWhereWithAggregatesInput[]
    NOT?: CustomersScalarWhereWithAggregatesInput | CustomersScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"Customers"> | number
    firstName?: StringWithAggregatesFilter<"Customers"> | string
    lastName?: StringWithAggregatesFilter<"Customers"> | string
    email?: StringWithAggregatesFilter<"Customers"> | string
    password?: StringWithAggregatesFilter<"Customers"> | string
    phone?: StringWithAggregatesFilter<"Customers"> | string
    address?: StringNullableWithAggregatesFilter<"Customers"> | string | null
    driverLicense?: StringWithAggregatesFilter<"Customers"> | string
    totalPoints?: IntWithAggregatesFilter<"Customers"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customers"> | Date | string
  }

  export type BranchesWhereInput = {
    AND?: BranchesWhereInput | BranchesWhereInput[]
    OR?: BranchesWhereInput[]
    NOT?: BranchesWhereInput | BranchesWhereInput[]
    branchId?: IntFilter<"Branches"> | number
    branchName?: StringFilter<"Branches"> | string
    region?: StringFilter<"Branches"> | string
    lat?: FloatFilter<"Branches"> | number
    lng?: FloatFilter<"Branches"> | number
    Cars?: CarsListRelationFilter
    PickupBookings?: BookingsListRelationFilter
    DropoffBookings?: BookingsListRelationFilter
  }

  export type BranchesOrderByWithRelationInput = {
    branchId?: SortOrder
    branchName?: SortOrder
    region?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    Cars?: CarsOrderByRelationAggregateInput
    PickupBookings?: BookingsOrderByRelationAggregateInput
    DropoffBookings?: BookingsOrderByRelationAggregateInput
  }

  export type BranchesWhereUniqueInput = Prisma.AtLeast<{
    branchId?: number
    AND?: BranchesWhereInput | BranchesWhereInput[]
    OR?: BranchesWhereInput[]
    NOT?: BranchesWhereInput | BranchesWhereInput[]
    branchName?: StringFilter<"Branches"> | string
    region?: StringFilter<"Branches"> | string
    lat?: FloatFilter<"Branches"> | number
    lng?: FloatFilter<"Branches"> | number
    Cars?: CarsListRelationFilter
    PickupBookings?: BookingsListRelationFilter
    DropoffBookings?: BookingsListRelationFilter
  }, "branchId">

  export type BranchesOrderByWithAggregationInput = {
    branchId?: SortOrder
    branchName?: SortOrder
    region?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    _count?: BranchesCountOrderByAggregateInput
    _avg?: BranchesAvgOrderByAggregateInput
    _max?: BranchesMaxOrderByAggregateInput
    _min?: BranchesMinOrderByAggregateInput
    _sum?: BranchesSumOrderByAggregateInput
  }

  export type BranchesScalarWhereWithAggregatesInput = {
    AND?: BranchesScalarWhereWithAggregatesInput | BranchesScalarWhereWithAggregatesInput[]
    OR?: BranchesScalarWhereWithAggregatesInput[]
    NOT?: BranchesScalarWhereWithAggregatesInput | BranchesScalarWhereWithAggregatesInput[]
    branchId?: IntWithAggregatesFilter<"Branches"> | number
    branchName?: StringWithAggregatesFilter<"Branches"> | string
    region?: StringWithAggregatesFilter<"Branches"> | string
    lat?: FloatWithAggregatesFilter<"Branches"> | number
    lng?: FloatWithAggregatesFilter<"Branches"> | number
  }

  export type CarTypesWhereInput = {
    AND?: CarTypesWhereInput | CarTypesWhereInput[]
    OR?: CarTypesWhereInput[]
    NOT?: CarTypesWhereInput | CarTypesWhereInput[]
    carTypeId?: IntFilter<"CarTypes"> | number
    carTypeName?: StringFilter<"CarTypes"> | string
    pricePerDay?: FloatFilter<"CarTypes"> | number
    CarModels?: CarModelsListRelationFilter
  }

  export type CarTypesOrderByWithRelationInput = {
    carTypeId?: SortOrder
    carTypeName?: SortOrder
    pricePerDay?: SortOrder
    CarModels?: CarModelsOrderByRelationAggregateInput
  }

  export type CarTypesWhereUniqueInput = Prisma.AtLeast<{
    carTypeId?: number
    AND?: CarTypesWhereInput | CarTypesWhereInput[]
    OR?: CarTypesWhereInput[]
    NOT?: CarTypesWhereInput | CarTypesWhereInput[]
    carTypeName?: StringFilter<"CarTypes"> | string
    pricePerDay?: FloatFilter<"CarTypes"> | number
    CarModels?: CarModelsListRelationFilter
  }, "carTypeId">

  export type CarTypesOrderByWithAggregationInput = {
    carTypeId?: SortOrder
    carTypeName?: SortOrder
    pricePerDay?: SortOrder
    _count?: CarTypesCountOrderByAggregateInput
    _avg?: CarTypesAvgOrderByAggregateInput
    _max?: CarTypesMaxOrderByAggregateInput
    _min?: CarTypesMinOrderByAggregateInput
    _sum?: CarTypesSumOrderByAggregateInput
  }

  export type CarTypesScalarWhereWithAggregatesInput = {
    AND?: CarTypesScalarWhereWithAggregatesInput | CarTypesScalarWhereWithAggregatesInput[]
    OR?: CarTypesScalarWhereWithAggregatesInput[]
    NOT?: CarTypesScalarWhereWithAggregatesInput | CarTypesScalarWhereWithAggregatesInput[]
    carTypeId?: IntWithAggregatesFilter<"CarTypes"> | number
    carTypeName?: StringWithAggregatesFilter<"CarTypes"> | string
    pricePerDay?: FloatWithAggregatesFilter<"CarTypes"> | number
  }

  export type CarModelsWhereInput = {
    AND?: CarModelsWhereInput | CarModelsWhereInput[]
    OR?: CarModelsWhereInput[]
    NOT?: CarModelsWhereInput | CarModelsWhereInput[]
    carModelId?: IntFilter<"CarModels"> | number
    carTypeId?: IntFilter<"CarModels"> | number
    brand?: StringFilter<"CarModels"> | string
    model?: StringFilter<"CarModels"> | string
    color?: StringFilter<"CarModels"> | string
    transmission?: StringFilter<"CarModels"> | string
    fuel?: StringFilter<"CarModels"> | string
    seats?: IntFilter<"CarModels"> | number
    CarImages?: CarImagesListRelationFilter
    Cars?: CarsListRelationFilter
    CarType?: XOR<CarTypesRelationFilter, CarTypesWhereInput>
  }

  export type CarModelsOrderByWithRelationInput = {
    carModelId?: SortOrder
    carTypeId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    transmission?: SortOrder
    fuel?: SortOrder
    seats?: SortOrder
    CarImages?: CarImagesOrderByRelationAggregateInput
    Cars?: CarsOrderByRelationAggregateInput
    CarType?: CarTypesOrderByWithRelationInput
  }

  export type CarModelsWhereUniqueInput = Prisma.AtLeast<{
    carModelId?: number
    AND?: CarModelsWhereInput | CarModelsWhereInput[]
    OR?: CarModelsWhereInput[]
    NOT?: CarModelsWhereInput | CarModelsWhereInput[]
    carTypeId?: IntFilter<"CarModels"> | number
    brand?: StringFilter<"CarModels"> | string
    model?: StringFilter<"CarModels"> | string
    color?: StringFilter<"CarModels"> | string
    transmission?: StringFilter<"CarModels"> | string
    fuel?: StringFilter<"CarModels"> | string
    seats?: IntFilter<"CarModels"> | number
    CarImages?: CarImagesListRelationFilter
    Cars?: CarsListRelationFilter
    CarType?: XOR<CarTypesRelationFilter, CarTypesWhereInput>
  }, "carModelId">

  export type CarModelsOrderByWithAggregationInput = {
    carModelId?: SortOrder
    carTypeId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    transmission?: SortOrder
    fuel?: SortOrder
    seats?: SortOrder
    _count?: CarModelsCountOrderByAggregateInput
    _avg?: CarModelsAvgOrderByAggregateInput
    _max?: CarModelsMaxOrderByAggregateInput
    _min?: CarModelsMinOrderByAggregateInput
    _sum?: CarModelsSumOrderByAggregateInput
  }

  export type CarModelsScalarWhereWithAggregatesInput = {
    AND?: CarModelsScalarWhereWithAggregatesInput | CarModelsScalarWhereWithAggregatesInput[]
    OR?: CarModelsScalarWhereWithAggregatesInput[]
    NOT?: CarModelsScalarWhereWithAggregatesInput | CarModelsScalarWhereWithAggregatesInput[]
    carModelId?: IntWithAggregatesFilter<"CarModels"> | number
    carTypeId?: IntWithAggregatesFilter<"CarModels"> | number
    brand?: StringWithAggregatesFilter<"CarModels"> | string
    model?: StringWithAggregatesFilter<"CarModels"> | string
    color?: StringWithAggregatesFilter<"CarModels"> | string
    transmission?: StringWithAggregatesFilter<"CarModels"> | string
    fuel?: StringWithAggregatesFilter<"CarModels"> | string
    seats?: IntWithAggregatesFilter<"CarModels"> | number
  }

  export type CarImagesWhereInput = {
    AND?: CarImagesWhereInput | CarImagesWhereInput[]
    OR?: CarImagesWhereInput[]
    NOT?: CarImagesWhereInput | CarImagesWhereInput[]
    imageId?: IntFilter<"CarImages"> | number
    carModelId?: IntFilter<"CarImages"> | number
    imageUrl?: StringFilter<"CarImages"> | string
    CarModel?: XOR<CarModelsRelationFilter, CarModelsWhereInput>
  }

  export type CarImagesOrderByWithRelationInput = {
    imageId?: SortOrder
    carModelId?: SortOrder
    imageUrl?: SortOrder
    CarModel?: CarModelsOrderByWithRelationInput
  }

  export type CarImagesWhereUniqueInput = Prisma.AtLeast<{
    imageId?: number
    AND?: CarImagesWhereInput | CarImagesWhereInput[]
    OR?: CarImagesWhereInput[]
    NOT?: CarImagesWhereInput | CarImagesWhereInput[]
    carModelId?: IntFilter<"CarImages"> | number
    imageUrl?: StringFilter<"CarImages"> | string
    CarModel?: XOR<CarModelsRelationFilter, CarModelsWhereInput>
  }, "imageId">

  export type CarImagesOrderByWithAggregationInput = {
    imageId?: SortOrder
    carModelId?: SortOrder
    imageUrl?: SortOrder
    _count?: CarImagesCountOrderByAggregateInput
    _avg?: CarImagesAvgOrderByAggregateInput
    _max?: CarImagesMaxOrderByAggregateInput
    _min?: CarImagesMinOrderByAggregateInput
    _sum?: CarImagesSumOrderByAggregateInput
  }

  export type CarImagesScalarWhereWithAggregatesInput = {
    AND?: CarImagesScalarWhereWithAggregatesInput | CarImagesScalarWhereWithAggregatesInput[]
    OR?: CarImagesScalarWhereWithAggregatesInput[]
    NOT?: CarImagesScalarWhereWithAggregatesInput | CarImagesScalarWhereWithAggregatesInput[]
    imageId?: IntWithAggregatesFilter<"CarImages"> | number
    carModelId?: IntWithAggregatesFilter<"CarImages"> | number
    imageUrl?: StringWithAggregatesFilter<"CarImages"> | string
  }

  export type CarsWhereInput = {
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    carId?: IntFilter<"Cars"> | number
    carModelId?: IntFilter<"Cars"> | number
    licensePlate?: StringFilter<"Cars"> | string
    status?: EnumCarStatusFilter<"Cars"> | $Enums.CarStatus
    branchId?: IntNullableFilter<"Cars"> | number | null
    useDate?: StringFilter<"Cars"> | string
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    isDeleted?: BoolFilter<"Cars"> | boolean
    CarModel?: XOR<CarModelsRelationFilter, CarModelsWhereInput>
    Branch?: XOR<BranchesNullableRelationFilter, BranchesWhereInput> | null
    Bookings?: BookingsListRelationFilter
  }

  export type CarsOrderByWithRelationInput = {
    carId?: SortOrder
    carModelId?: SortOrder
    licensePlate?: SortOrder
    status?: SortOrder
    branchId?: SortOrderInput | SortOrder
    useDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    CarModel?: CarModelsOrderByWithRelationInput
    Branch?: BranchesOrderByWithRelationInput
    Bookings?: BookingsOrderByRelationAggregateInput
  }

  export type CarsWhereUniqueInput = Prisma.AtLeast<{
    carId?: number
    licensePlate?: string
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    carModelId?: IntFilter<"Cars"> | number
    status?: EnumCarStatusFilter<"Cars"> | $Enums.CarStatus
    branchId?: IntNullableFilter<"Cars"> | number | null
    useDate?: StringFilter<"Cars"> | string
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    isDeleted?: BoolFilter<"Cars"> | boolean
    CarModel?: XOR<CarModelsRelationFilter, CarModelsWhereInput>
    Branch?: XOR<BranchesNullableRelationFilter, BranchesWhereInput> | null
    Bookings?: BookingsListRelationFilter
  }, "carId" | "licensePlate">

  export type CarsOrderByWithAggregationInput = {
    carId?: SortOrder
    carModelId?: SortOrder
    licensePlate?: SortOrder
    status?: SortOrder
    branchId?: SortOrderInput | SortOrder
    useDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: CarsCountOrderByAggregateInput
    _avg?: CarsAvgOrderByAggregateInput
    _max?: CarsMaxOrderByAggregateInput
    _min?: CarsMinOrderByAggregateInput
    _sum?: CarsSumOrderByAggregateInput
  }

  export type CarsScalarWhereWithAggregatesInput = {
    AND?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    OR?: CarsScalarWhereWithAggregatesInput[]
    NOT?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    carId?: IntWithAggregatesFilter<"Cars"> | number
    carModelId?: IntWithAggregatesFilter<"Cars"> | number
    licensePlate?: StringWithAggregatesFilter<"Cars"> | string
    status?: EnumCarStatusWithAggregatesFilter<"Cars"> | $Enums.CarStatus
    branchId?: IntNullableWithAggregatesFilter<"Cars"> | number | null
    useDate?: StringWithAggregatesFilter<"Cars"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Cars"> | boolean
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    bookingId?: IntFilter<"Bookings"> | number
    customerId?: IntFilter<"Bookings"> | number
    carId?: IntFilter<"Bookings"> | number
    startDate?: DateTimeFilter<"Bookings"> | Date | string
    endDate?: DateTimeFilter<"Bookings"> | Date | string
    pickDropTime?: StringNullableFilter<"Bookings"> | string | null
    totalAmount?: FloatFilter<"Bookings"> | number
    pickupLocationId?: IntFilter<"Bookings"> | number
    dropoffLocationId?: IntFilter<"Bookings"> | number
    status?: EnumBookingStatusFilter<"Bookings"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
    Customer?: XOR<CustomersRelationFilter, CustomersWhereInput>
    Car?: XOR<CarsRelationFilter, CarsWhereInput>
    PickupLocation?: XOR<BranchesRelationFilter, BranchesWhereInput>
    DropoffLocation?: XOR<BranchesRelationFilter, BranchesWhereInput>
    Payment?: PaymentsListRelationFilter
  }

  export type BookingsOrderByWithRelationInput = {
    bookingId?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    pickDropTime?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    pickupLocationId?: SortOrder
    dropoffLocationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Customer?: CustomersOrderByWithRelationInput
    Car?: CarsOrderByWithRelationInput
    PickupLocation?: BranchesOrderByWithRelationInput
    DropoffLocation?: BranchesOrderByWithRelationInput
    Payment?: PaymentsOrderByRelationAggregateInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    bookingId?: number
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    customerId?: IntFilter<"Bookings"> | number
    carId?: IntFilter<"Bookings"> | number
    startDate?: DateTimeFilter<"Bookings"> | Date | string
    endDate?: DateTimeFilter<"Bookings"> | Date | string
    pickDropTime?: StringNullableFilter<"Bookings"> | string | null
    totalAmount?: FloatFilter<"Bookings"> | number
    pickupLocationId?: IntFilter<"Bookings"> | number
    dropoffLocationId?: IntFilter<"Bookings"> | number
    status?: EnumBookingStatusFilter<"Bookings"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
    Customer?: XOR<CustomersRelationFilter, CustomersWhereInput>
    Car?: XOR<CarsRelationFilter, CarsWhereInput>
    PickupLocation?: XOR<BranchesRelationFilter, BranchesWhereInput>
    DropoffLocation?: XOR<BranchesRelationFilter, BranchesWhereInput>
    Payment?: PaymentsListRelationFilter
  }, "bookingId">

  export type BookingsOrderByWithAggregationInput = {
    bookingId?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    pickDropTime?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    pickupLocationId?: SortOrder
    dropoffLocationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _avg?: BookingsAvgOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
    _sum?: BookingsSumOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    bookingId?: IntWithAggregatesFilter<"Bookings"> | number
    customerId?: IntWithAggregatesFilter<"Bookings"> | number
    carId?: IntWithAggregatesFilter<"Bookings"> | number
    startDate?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    pickDropTime?: StringNullableWithAggregatesFilter<"Bookings"> | string | null
    totalAmount?: FloatWithAggregatesFilter<"Bookings"> | number
    pickupLocationId?: IntWithAggregatesFilter<"Bookings"> | number
    dropoffLocationId?: IntWithAggregatesFilter<"Bookings"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Bookings"> | $Enums.BookingStatus
    createdAt?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    paymentId?: IntFilter<"Payments"> | number
    bookingId?: IntFilter<"Payments"> | number
    paymentDate?: DateTimeFilter<"Payments"> | Date | string
    amount?: FloatFilter<"Payments"> | number
    orderId?: StringFilter<"Payments"> | string
    sessionId?: StringFilter<"Payments"> | string
    paymentStatus?: StringFilter<"Payments"> | string
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
    Booking?: XOR<BookingsRelationFilter, BookingsWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    paymentId?: SortOrder
    bookingId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    sessionId?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Booking?: BookingsOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    paymentId?: number
    bookingId?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    paymentDate?: DateTimeFilter<"Payments"> | Date | string
    amount?: FloatFilter<"Payments"> | number
    orderId?: StringFilter<"Payments"> | string
    sessionId?: StringFilter<"Payments"> | string
    paymentStatus?: StringFilter<"Payments"> | string
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
    Booking?: XOR<BookingsRelationFilter, BookingsWhereInput>
  }, "paymentId" | "bookingId">

  export type PaymentsOrderByWithAggregationInput = {
    paymentId?: SortOrder
    bookingId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    sessionId?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    paymentId?: IntWithAggregatesFilter<"Payments"> | number
    bookingId?: IntWithAggregatesFilter<"Payments"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    amount?: FloatWithAggregatesFilter<"Payments"> | number
    orderId?: StringWithAggregatesFilter<"Payments"> | string
    sessionId?: StringWithAggregatesFilter<"Payments"> | string
    paymentStatus?: StringWithAggregatesFilter<"Payments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type AdminsCreateInput = {
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminsUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminsUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminsCreateManyInput = {
    id?: number
    username: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminsUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    address?: string | null
    driverLicense: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Bookings?: BookingsCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUncheckedCreateInput = {
    customerId?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    address?: string | null
    driverLicense: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Bookings?: BookingsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomersUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    driverLicense?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bookings?: BookingsUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    driverLicense?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bookings?: BookingsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomersCreateManyInput = {
    customerId?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    address?: string | null
    driverLicense: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    driverLicense?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    driverLicense?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchesCreateInput = {
    branchName: string
    region: string
    lat: number
    lng: number
    Cars?: CarsCreateNestedManyWithoutBranchInput
    PickupBookings?: BookingsCreateNestedManyWithoutPickupLocationInput
    DropoffBookings?: BookingsCreateNestedManyWithoutDropoffLocationInput
  }

  export type BranchesUncheckedCreateInput = {
    branchId?: number
    branchName: string
    region: string
    lat: number
    lng: number
    Cars?: CarsUncheckedCreateNestedManyWithoutBranchInput
    PickupBookings?: BookingsUncheckedCreateNestedManyWithoutPickupLocationInput
    DropoffBookings?: BookingsUncheckedCreateNestedManyWithoutDropoffLocationInput
  }

  export type BranchesUpdateInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    Cars?: CarsUpdateManyWithoutBranchNestedInput
    PickupBookings?: BookingsUpdateManyWithoutPickupLocationNestedInput
    DropoffBookings?: BookingsUpdateManyWithoutDropoffLocationNestedInput
  }

  export type BranchesUncheckedUpdateInput = {
    branchId?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    Cars?: CarsUncheckedUpdateManyWithoutBranchNestedInput
    PickupBookings?: BookingsUncheckedUpdateManyWithoutPickupLocationNestedInput
    DropoffBookings?: BookingsUncheckedUpdateManyWithoutDropoffLocationNestedInput
  }

  export type BranchesCreateManyInput = {
    branchId?: number
    branchName: string
    region: string
    lat: number
    lng: number
  }

  export type BranchesUpdateManyMutationInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
  }

  export type BranchesUncheckedUpdateManyInput = {
    branchId?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
  }

  export type CarTypesCreateInput = {
    carTypeName: string
    pricePerDay: number
    CarModels?: CarModelsCreateNestedManyWithoutCarTypeInput
  }

  export type CarTypesUncheckedCreateInput = {
    carTypeId?: number
    carTypeName: string
    pricePerDay: number
    CarModels?: CarModelsUncheckedCreateNestedManyWithoutCarTypeInput
  }

  export type CarTypesUpdateInput = {
    carTypeName?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    CarModels?: CarModelsUpdateManyWithoutCarTypeNestedInput
  }

  export type CarTypesUncheckedUpdateInput = {
    carTypeId?: IntFieldUpdateOperationsInput | number
    carTypeName?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    CarModels?: CarModelsUncheckedUpdateManyWithoutCarTypeNestedInput
  }

  export type CarTypesCreateManyInput = {
    carTypeId?: number
    carTypeName: string
    pricePerDay: number
  }

  export type CarTypesUpdateManyMutationInput = {
    carTypeName?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
  }

  export type CarTypesUncheckedUpdateManyInput = {
    carTypeId?: IntFieldUpdateOperationsInput | number
    carTypeName?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
  }

  export type CarModelsCreateInput = {
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    CarImages?: CarImagesCreateNestedManyWithoutCarModelInput
    Cars?: CarsCreateNestedManyWithoutCarModelInput
    CarType: CarTypesCreateNestedOneWithoutCarModelsInput
  }

  export type CarModelsUncheckedCreateInput = {
    carModelId?: number
    carTypeId: number
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    CarImages?: CarImagesUncheckedCreateNestedManyWithoutCarModelInput
    Cars?: CarsUncheckedCreateNestedManyWithoutCarModelInput
  }

  export type CarModelsUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUpdateManyWithoutCarModelNestedInput
    Cars?: CarsUpdateManyWithoutCarModelNestedInput
    CarType?: CarTypesUpdateOneRequiredWithoutCarModelsNestedInput
  }

  export type CarModelsUncheckedUpdateInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    carTypeId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUncheckedUpdateManyWithoutCarModelNestedInput
    Cars?: CarsUncheckedUpdateManyWithoutCarModelNestedInput
  }

  export type CarModelsCreateManyInput = {
    carModelId?: number
    carTypeId: number
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
  }

  export type CarModelsUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
  }

  export type CarModelsUncheckedUpdateManyInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    carTypeId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
  }

  export type CarImagesCreateInput = {
    imageUrl: string
    CarModel: CarModelsCreateNestedOneWithoutCarImagesInput
  }

  export type CarImagesUncheckedCreateInput = {
    imageId?: number
    carModelId: number
    imageUrl: string
  }

  export type CarImagesUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    CarModel?: CarModelsUpdateOneRequiredWithoutCarImagesNestedInput
  }

  export type CarImagesUncheckedUpdateInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    carModelId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CarImagesCreateManyInput = {
    imageId?: number
    carModelId: number
    imageUrl: string
  }

  export type CarImagesUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CarImagesUncheckedUpdateManyInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    carModelId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CarsCreateInput = {
    licensePlate: string
    status?: $Enums.CarStatus
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    CarModel: CarModelsCreateNestedOneWithoutCarsInput
    Branch?: BranchesCreateNestedOneWithoutCarsInput
    Bookings?: BookingsCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateInput = {
    carId?: number
    carModelId: number
    licensePlate: string
    status?: $Enums.CarStatus
    branchId?: number | null
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Bookings?: BookingsUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsUpdateInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    CarModel?: CarModelsUpdateOneRequiredWithoutCarsNestedInput
    Branch?: BranchesUpdateOneWithoutCarsNestedInput
    Bookings?: BookingsUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateInput = {
    carId?: IntFieldUpdateOperationsInput | number
    carModelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Bookings?: BookingsUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsCreateManyInput = {
    carId?: number
    carModelId: number
    licensePlate: string
    status?: $Enums.CarStatus
    branchId?: number | null
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type CarsUpdateManyMutationInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CarsUncheckedUpdateManyInput = {
    carId?: IntFieldUpdateOperationsInput | number
    carModelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingsCreateInput = {
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomersCreateNestedOneWithoutBookingsInput
    Car: CarsCreateNestedOneWithoutBookingsInput
    PickupLocation: BranchesCreateNestedOneWithoutPickupBookingsInput
    DropoffLocation: BranchesCreateNestedOneWithoutDropoffBookingsInput
    Payment?: PaymentsCreateNestedManyWithoutBookingInput
  }

  export type BookingsUncheckedCreateInput = {
    bookingId?: number
    customerId: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingsUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomersUpdateOneRequiredWithoutBookingsNestedInput
    Car?: CarsUpdateOneRequiredWithoutBookingsNestedInput
    PickupLocation?: BranchesUpdateOneRequiredWithoutPickupBookingsNestedInput
    DropoffLocation?: BranchesUpdateOneRequiredWithoutDropoffBookingsNestedInput
    Payment?: PaymentsUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingsCreateManyInput = {
    bookingId?: number
    customerId: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUncheckedUpdateManyInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    paymentDate: Date | string
    amount: number
    orderId: string
    sessionId: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Booking: BookingsCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateInput = {
    paymentId?: number
    bookingId: number
    paymentDate: Date | string
    amount: number
    orderId: string
    sessionId: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsUpdateInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Booking?: BookingsUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    paymentId?: number
    bookingId: number
    paymentDate: Date | string
    amount: number
    orderId: string
    sessionId: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminsSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BookingsListRelationFilter = {
    every?: BookingsWhereInput
    some?: BookingsWhereInput
    none?: BookingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomersCountOrderByAggregateInput = {
    customerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    driverLicense?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersAvgOrderByAggregateInput = {
    customerId?: SortOrder
    totalPoints?: SortOrder
  }

  export type CustomersMaxOrderByAggregateInput = {
    customerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    driverLicense?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersMinOrderByAggregateInput = {
    customerId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    driverLicense?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomersSumOrderByAggregateInput = {
    customerId?: SortOrder
    totalPoints?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CarsListRelationFilter = {
    every?: CarsWhereInput
    some?: CarsWhereInput
    none?: CarsWhereInput
  }

  export type CarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchesCountOrderByAggregateInput = {
    branchId?: SortOrder
    branchName?: SortOrder
    region?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BranchesAvgOrderByAggregateInput = {
    branchId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BranchesMaxOrderByAggregateInput = {
    branchId?: SortOrder
    branchName?: SortOrder
    region?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BranchesMinOrderByAggregateInput = {
    branchId?: SortOrder
    branchName?: SortOrder
    region?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BranchesSumOrderByAggregateInput = {
    branchId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CarModelsListRelationFilter = {
    every?: CarModelsWhereInput
    some?: CarModelsWhereInput
    none?: CarModelsWhereInput
  }

  export type CarModelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarTypesCountOrderByAggregateInput = {
    carTypeId?: SortOrder
    carTypeName?: SortOrder
    pricePerDay?: SortOrder
  }

  export type CarTypesAvgOrderByAggregateInput = {
    carTypeId?: SortOrder
    pricePerDay?: SortOrder
  }

  export type CarTypesMaxOrderByAggregateInput = {
    carTypeId?: SortOrder
    carTypeName?: SortOrder
    pricePerDay?: SortOrder
  }

  export type CarTypesMinOrderByAggregateInput = {
    carTypeId?: SortOrder
    carTypeName?: SortOrder
    pricePerDay?: SortOrder
  }

  export type CarTypesSumOrderByAggregateInput = {
    carTypeId?: SortOrder
    pricePerDay?: SortOrder
  }

  export type CarImagesListRelationFilter = {
    every?: CarImagesWhereInput
    some?: CarImagesWhereInput
    none?: CarImagesWhereInput
  }

  export type CarTypesRelationFilter = {
    is?: CarTypesWhereInput
    isNot?: CarTypesWhereInput
  }

  export type CarImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarModelsCountOrderByAggregateInput = {
    carModelId?: SortOrder
    carTypeId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    transmission?: SortOrder
    fuel?: SortOrder
    seats?: SortOrder
  }

  export type CarModelsAvgOrderByAggregateInput = {
    carModelId?: SortOrder
    carTypeId?: SortOrder
    seats?: SortOrder
  }

  export type CarModelsMaxOrderByAggregateInput = {
    carModelId?: SortOrder
    carTypeId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    transmission?: SortOrder
    fuel?: SortOrder
    seats?: SortOrder
  }

  export type CarModelsMinOrderByAggregateInput = {
    carModelId?: SortOrder
    carTypeId?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    color?: SortOrder
    transmission?: SortOrder
    fuel?: SortOrder
    seats?: SortOrder
  }

  export type CarModelsSumOrderByAggregateInput = {
    carModelId?: SortOrder
    carTypeId?: SortOrder
    seats?: SortOrder
  }

  export type CarModelsRelationFilter = {
    is?: CarModelsWhereInput
    isNot?: CarModelsWhereInput
  }

  export type CarImagesCountOrderByAggregateInput = {
    imageId?: SortOrder
    carModelId?: SortOrder
    imageUrl?: SortOrder
  }

  export type CarImagesAvgOrderByAggregateInput = {
    imageId?: SortOrder
    carModelId?: SortOrder
  }

  export type CarImagesMaxOrderByAggregateInput = {
    imageId?: SortOrder
    carModelId?: SortOrder
    imageUrl?: SortOrder
  }

  export type CarImagesMinOrderByAggregateInput = {
    imageId?: SortOrder
    carModelId?: SortOrder
    imageUrl?: SortOrder
  }

  export type CarImagesSumOrderByAggregateInput = {
    imageId?: SortOrder
    carModelId?: SortOrder
  }

  export type EnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[]
    notIn?: $Enums.CarStatus[]
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BranchesNullableRelationFilter = {
    is?: BranchesWhereInput | null
    isNot?: BranchesWhereInput | null
  }

  export type CarsCountOrderByAggregateInput = {
    carId?: SortOrder
    carModelId?: SortOrder
    licensePlate?: SortOrder
    status?: SortOrder
    branchId?: SortOrder
    useDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type CarsAvgOrderByAggregateInput = {
    carId?: SortOrder
    carModelId?: SortOrder
    branchId?: SortOrder
  }

  export type CarsMaxOrderByAggregateInput = {
    carId?: SortOrder
    carModelId?: SortOrder
    licensePlate?: SortOrder
    status?: SortOrder
    branchId?: SortOrder
    useDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type CarsMinOrderByAggregateInput = {
    carId?: SortOrder
    carModelId?: SortOrder
    licensePlate?: SortOrder
    status?: SortOrder
    branchId?: SortOrder
    useDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type CarsSumOrderByAggregateInput = {
    carId?: SortOrder
    carModelId?: SortOrder
    branchId?: SortOrder
  }

  export type EnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[]
    notIn?: $Enums.CarStatus[]
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type CustomersRelationFilter = {
    is?: CustomersWhereInput
    isNot?: CustomersWhereInput
  }

  export type CarsRelationFilter = {
    is?: CarsWhereInput
    isNot?: CarsWhereInput
  }

  export type BranchesRelationFilter = {
    is?: BranchesWhereInput
    isNot?: BranchesWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingsCountOrderByAggregateInput = {
    bookingId?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    pickDropTime?: SortOrder
    totalAmount?: SortOrder
    pickupLocationId?: SortOrder
    dropoffLocationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsAvgOrderByAggregateInput = {
    bookingId?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    totalAmount?: SortOrder
    pickupLocationId?: SortOrder
    dropoffLocationId?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    bookingId?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    pickDropTime?: SortOrder
    totalAmount?: SortOrder
    pickupLocationId?: SortOrder
    dropoffLocationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    bookingId?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    pickDropTime?: SortOrder
    totalAmount?: SortOrder
    pickupLocationId?: SortOrder
    dropoffLocationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingsSumOrderByAggregateInput = {
    bookingId?: SortOrder
    customerId?: SortOrder
    carId?: SortOrder
    totalAmount?: SortOrder
    pickupLocationId?: SortOrder
    dropoffLocationId?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingsRelationFilter = {
    is?: BookingsWhereInput
    isNot?: BookingsWhereInput
  }

  export type PaymentsCountOrderByAggregateInput = {
    paymentId?: SortOrder
    bookingId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    sessionId?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    paymentId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    paymentId?: SortOrder
    bookingId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    sessionId?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    paymentId?: SortOrder
    bookingId?: SortOrder
    paymentDate?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    sessionId?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    paymentId?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingsCreateWithoutCustomerInput, BookingsUncheckedCreateWithoutCustomerInput> | BookingsCreateWithoutCustomerInput[] | BookingsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutCustomerInput | BookingsCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingsCreateManyCustomerInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingsCreateWithoutCustomerInput, BookingsUncheckedCreateWithoutCustomerInput> | BookingsCreateWithoutCustomerInput[] | BookingsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutCustomerInput | BookingsCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingsCreateManyCustomerInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookingsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingsCreateWithoutCustomerInput, BookingsUncheckedCreateWithoutCustomerInput> | BookingsCreateWithoutCustomerInput[] | BookingsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutCustomerInput | BookingsCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutCustomerInput | BookingsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingsCreateManyCustomerInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutCustomerInput | BookingsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutCustomerInput | BookingsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingsCreateWithoutCustomerInput, BookingsUncheckedCreateWithoutCustomerInput> | BookingsCreateWithoutCustomerInput[] | BookingsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutCustomerInput | BookingsCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutCustomerInput | BookingsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingsCreateManyCustomerInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutCustomerInput | BookingsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutCustomerInput | BookingsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type CarsCreateNestedManyWithoutBranchInput = {
    create?: XOR<CarsCreateWithoutBranchInput, CarsUncheckedCreateWithoutBranchInput> | CarsCreateWithoutBranchInput[] | CarsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutBranchInput | CarsCreateOrConnectWithoutBranchInput[]
    createMany?: CarsCreateManyBranchInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type BookingsCreateNestedManyWithoutPickupLocationInput = {
    create?: XOR<BookingsCreateWithoutPickupLocationInput, BookingsUncheckedCreateWithoutPickupLocationInput> | BookingsCreateWithoutPickupLocationInput[] | BookingsUncheckedCreateWithoutPickupLocationInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutPickupLocationInput | BookingsCreateOrConnectWithoutPickupLocationInput[]
    createMany?: BookingsCreateManyPickupLocationInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsCreateNestedManyWithoutDropoffLocationInput = {
    create?: XOR<BookingsCreateWithoutDropoffLocationInput, BookingsUncheckedCreateWithoutDropoffLocationInput> | BookingsCreateWithoutDropoffLocationInput[] | BookingsUncheckedCreateWithoutDropoffLocationInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutDropoffLocationInput | BookingsCreateOrConnectWithoutDropoffLocationInput[]
    createMany?: BookingsCreateManyDropoffLocationInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<CarsCreateWithoutBranchInput, CarsUncheckedCreateWithoutBranchInput> | CarsCreateWithoutBranchInput[] | CarsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutBranchInput | CarsCreateOrConnectWithoutBranchInput[]
    createMany?: CarsCreateManyBranchInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutPickupLocationInput = {
    create?: XOR<BookingsCreateWithoutPickupLocationInput, BookingsUncheckedCreateWithoutPickupLocationInput> | BookingsCreateWithoutPickupLocationInput[] | BookingsUncheckedCreateWithoutPickupLocationInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutPickupLocationInput | BookingsCreateOrConnectWithoutPickupLocationInput[]
    createMany?: BookingsCreateManyPickupLocationInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutDropoffLocationInput = {
    create?: XOR<BookingsCreateWithoutDropoffLocationInput, BookingsUncheckedCreateWithoutDropoffLocationInput> | BookingsCreateWithoutDropoffLocationInput[] | BookingsUncheckedCreateWithoutDropoffLocationInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutDropoffLocationInput | BookingsCreateOrConnectWithoutDropoffLocationInput[]
    createMany?: BookingsCreateManyDropoffLocationInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarsUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CarsCreateWithoutBranchInput, CarsUncheckedCreateWithoutBranchInput> | CarsCreateWithoutBranchInput[] | CarsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutBranchInput | CarsCreateOrConnectWithoutBranchInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutBranchInput | CarsUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CarsCreateManyBranchInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutBranchInput | CarsUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutBranchInput | CarsUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type BookingsUpdateManyWithoutPickupLocationNestedInput = {
    create?: XOR<BookingsCreateWithoutPickupLocationInput, BookingsUncheckedCreateWithoutPickupLocationInput> | BookingsCreateWithoutPickupLocationInput[] | BookingsUncheckedCreateWithoutPickupLocationInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutPickupLocationInput | BookingsCreateOrConnectWithoutPickupLocationInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutPickupLocationInput | BookingsUpsertWithWhereUniqueWithoutPickupLocationInput[]
    createMany?: BookingsCreateManyPickupLocationInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutPickupLocationInput | BookingsUpdateWithWhereUniqueWithoutPickupLocationInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutPickupLocationInput | BookingsUpdateManyWithWhereWithoutPickupLocationInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUpdateManyWithoutDropoffLocationNestedInput = {
    create?: XOR<BookingsCreateWithoutDropoffLocationInput, BookingsUncheckedCreateWithoutDropoffLocationInput> | BookingsCreateWithoutDropoffLocationInput[] | BookingsUncheckedCreateWithoutDropoffLocationInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutDropoffLocationInput | BookingsCreateOrConnectWithoutDropoffLocationInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutDropoffLocationInput | BookingsUpsertWithWhereUniqueWithoutDropoffLocationInput[]
    createMany?: BookingsCreateManyDropoffLocationInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutDropoffLocationInput | BookingsUpdateWithWhereUniqueWithoutDropoffLocationInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutDropoffLocationInput | BookingsUpdateManyWithWhereWithoutDropoffLocationInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type CarsUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CarsCreateWithoutBranchInput, CarsUncheckedCreateWithoutBranchInput> | CarsCreateWithoutBranchInput[] | CarsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutBranchInput | CarsCreateOrConnectWithoutBranchInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutBranchInput | CarsUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CarsCreateManyBranchInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutBranchInput | CarsUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutBranchInput | CarsUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutPickupLocationNestedInput = {
    create?: XOR<BookingsCreateWithoutPickupLocationInput, BookingsUncheckedCreateWithoutPickupLocationInput> | BookingsCreateWithoutPickupLocationInput[] | BookingsUncheckedCreateWithoutPickupLocationInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutPickupLocationInput | BookingsCreateOrConnectWithoutPickupLocationInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutPickupLocationInput | BookingsUpsertWithWhereUniqueWithoutPickupLocationInput[]
    createMany?: BookingsCreateManyPickupLocationInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutPickupLocationInput | BookingsUpdateWithWhereUniqueWithoutPickupLocationInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutPickupLocationInput | BookingsUpdateManyWithWhereWithoutPickupLocationInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutDropoffLocationNestedInput = {
    create?: XOR<BookingsCreateWithoutDropoffLocationInput, BookingsUncheckedCreateWithoutDropoffLocationInput> | BookingsCreateWithoutDropoffLocationInput[] | BookingsUncheckedCreateWithoutDropoffLocationInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutDropoffLocationInput | BookingsCreateOrConnectWithoutDropoffLocationInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutDropoffLocationInput | BookingsUpsertWithWhereUniqueWithoutDropoffLocationInput[]
    createMany?: BookingsCreateManyDropoffLocationInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutDropoffLocationInput | BookingsUpdateWithWhereUniqueWithoutDropoffLocationInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutDropoffLocationInput | BookingsUpdateManyWithWhereWithoutDropoffLocationInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type CarModelsCreateNestedManyWithoutCarTypeInput = {
    create?: XOR<CarModelsCreateWithoutCarTypeInput, CarModelsUncheckedCreateWithoutCarTypeInput> | CarModelsCreateWithoutCarTypeInput[] | CarModelsUncheckedCreateWithoutCarTypeInput[]
    connectOrCreate?: CarModelsCreateOrConnectWithoutCarTypeInput | CarModelsCreateOrConnectWithoutCarTypeInput[]
    createMany?: CarModelsCreateManyCarTypeInputEnvelope
    connect?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
  }

  export type CarModelsUncheckedCreateNestedManyWithoutCarTypeInput = {
    create?: XOR<CarModelsCreateWithoutCarTypeInput, CarModelsUncheckedCreateWithoutCarTypeInput> | CarModelsCreateWithoutCarTypeInput[] | CarModelsUncheckedCreateWithoutCarTypeInput[]
    connectOrCreate?: CarModelsCreateOrConnectWithoutCarTypeInput | CarModelsCreateOrConnectWithoutCarTypeInput[]
    createMany?: CarModelsCreateManyCarTypeInputEnvelope
    connect?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
  }

  export type CarModelsUpdateManyWithoutCarTypeNestedInput = {
    create?: XOR<CarModelsCreateWithoutCarTypeInput, CarModelsUncheckedCreateWithoutCarTypeInput> | CarModelsCreateWithoutCarTypeInput[] | CarModelsUncheckedCreateWithoutCarTypeInput[]
    connectOrCreate?: CarModelsCreateOrConnectWithoutCarTypeInput | CarModelsCreateOrConnectWithoutCarTypeInput[]
    upsert?: CarModelsUpsertWithWhereUniqueWithoutCarTypeInput | CarModelsUpsertWithWhereUniqueWithoutCarTypeInput[]
    createMany?: CarModelsCreateManyCarTypeInputEnvelope
    set?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
    disconnect?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
    delete?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
    connect?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
    update?: CarModelsUpdateWithWhereUniqueWithoutCarTypeInput | CarModelsUpdateWithWhereUniqueWithoutCarTypeInput[]
    updateMany?: CarModelsUpdateManyWithWhereWithoutCarTypeInput | CarModelsUpdateManyWithWhereWithoutCarTypeInput[]
    deleteMany?: CarModelsScalarWhereInput | CarModelsScalarWhereInput[]
  }

  export type CarModelsUncheckedUpdateManyWithoutCarTypeNestedInput = {
    create?: XOR<CarModelsCreateWithoutCarTypeInput, CarModelsUncheckedCreateWithoutCarTypeInput> | CarModelsCreateWithoutCarTypeInput[] | CarModelsUncheckedCreateWithoutCarTypeInput[]
    connectOrCreate?: CarModelsCreateOrConnectWithoutCarTypeInput | CarModelsCreateOrConnectWithoutCarTypeInput[]
    upsert?: CarModelsUpsertWithWhereUniqueWithoutCarTypeInput | CarModelsUpsertWithWhereUniqueWithoutCarTypeInput[]
    createMany?: CarModelsCreateManyCarTypeInputEnvelope
    set?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
    disconnect?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
    delete?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
    connect?: CarModelsWhereUniqueInput | CarModelsWhereUniqueInput[]
    update?: CarModelsUpdateWithWhereUniqueWithoutCarTypeInput | CarModelsUpdateWithWhereUniqueWithoutCarTypeInput[]
    updateMany?: CarModelsUpdateManyWithWhereWithoutCarTypeInput | CarModelsUpdateManyWithWhereWithoutCarTypeInput[]
    deleteMany?: CarModelsScalarWhereInput | CarModelsScalarWhereInput[]
  }

  export type CarImagesCreateNestedManyWithoutCarModelInput = {
    create?: XOR<CarImagesCreateWithoutCarModelInput, CarImagesUncheckedCreateWithoutCarModelInput> | CarImagesCreateWithoutCarModelInput[] | CarImagesUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarModelInput | CarImagesCreateOrConnectWithoutCarModelInput[]
    createMany?: CarImagesCreateManyCarModelInputEnvelope
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
  }

  export type CarsCreateNestedManyWithoutCarModelInput = {
    create?: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput> | CarsCreateWithoutCarModelInput[] | CarsUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarModelInput | CarsCreateOrConnectWithoutCarModelInput[]
    createMany?: CarsCreateManyCarModelInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarTypesCreateNestedOneWithoutCarModelsInput = {
    create?: XOR<CarTypesCreateWithoutCarModelsInput, CarTypesUncheckedCreateWithoutCarModelsInput>
    connectOrCreate?: CarTypesCreateOrConnectWithoutCarModelsInput
    connect?: CarTypesWhereUniqueInput
  }

  export type CarImagesUncheckedCreateNestedManyWithoutCarModelInput = {
    create?: XOR<CarImagesCreateWithoutCarModelInput, CarImagesUncheckedCreateWithoutCarModelInput> | CarImagesCreateWithoutCarModelInput[] | CarImagesUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarModelInput | CarImagesCreateOrConnectWithoutCarModelInput[]
    createMany?: CarImagesCreateManyCarModelInputEnvelope
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
  }

  export type CarsUncheckedCreateNestedManyWithoutCarModelInput = {
    create?: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput> | CarsCreateWithoutCarModelInput[] | CarsUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarModelInput | CarsCreateOrConnectWithoutCarModelInput[]
    createMany?: CarsCreateManyCarModelInputEnvelope
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
  }

  export type CarImagesUpdateManyWithoutCarModelNestedInput = {
    create?: XOR<CarImagesCreateWithoutCarModelInput, CarImagesUncheckedCreateWithoutCarModelInput> | CarImagesCreateWithoutCarModelInput[] | CarImagesUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarModelInput | CarImagesCreateOrConnectWithoutCarModelInput[]
    upsert?: CarImagesUpsertWithWhereUniqueWithoutCarModelInput | CarImagesUpsertWithWhereUniqueWithoutCarModelInput[]
    createMany?: CarImagesCreateManyCarModelInputEnvelope
    set?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    disconnect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    delete?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    update?: CarImagesUpdateWithWhereUniqueWithoutCarModelInput | CarImagesUpdateWithWhereUniqueWithoutCarModelInput[]
    updateMany?: CarImagesUpdateManyWithWhereWithoutCarModelInput | CarImagesUpdateManyWithWhereWithoutCarModelInput[]
    deleteMany?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
  }

  export type CarsUpdateManyWithoutCarModelNestedInput = {
    create?: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput> | CarsCreateWithoutCarModelInput[] | CarsUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarModelInput | CarsCreateOrConnectWithoutCarModelInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutCarModelInput | CarsUpsertWithWhereUniqueWithoutCarModelInput[]
    createMany?: CarsCreateManyCarModelInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutCarModelInput | CarsUpdateWithWhereUniqueWithoutCarModelInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutCarModelInput | CarsUpdateManyWithWhereWithoutCarModelInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarTypesUpdateOneRequiredWithoutCarModelsNestedInput = {
    create?: XOR<CarTypesCreateWithoutCarModelsInput, CarTypesUncheckedCreateWithoutCarModelsInput>
    connectOrCreate?: CarTypesCreateOrConnectWithoutCarModelsInput
    upsert?: CarTypesUpsertWithoutCarModelsInput
    connect?: CarTypesWhereUniqueInput
    update?: XOR<XOR<CarTypesUpdateToOneWithWhereWithoutCarModelsInput, CarTypesUpdateWithoutCarModelsInput>, CarTypesUncheckedUpdateWithoutCarModelsInput>
  }

  export type CarImagesUncheckedUpdateManyWithoutCarModelNestedInput = {
    create?: XOR<CarImagesCreateWithoutCarModelInput, CarImagesUncheckedCreateWithoutCarModelInput> | CarImagesCreateWithoutCarModelInput[] | CarImagesUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarImagesCreateOrConnectWithoutCarModelInput | CarImagesCreateOrConnectWithoutCarModelInput[]
    upsert?: CarImagesUpsertWithWhereUniqueWithoutCarModelInput | CarImagesUpsertWithWhereUniqueWithoutCarModelInput[]
    createMany?: CarImagesCreateManyCarModelInputEnvelope
    set?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    disconnect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    delete?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    connect?: CarImagesWhereUniqueInput | CarImagesWhereUniqueInput[]
    update?: CarImagesUpdateWithWhereUniqueWithoutCarModelInput | CarImagesUpdateWithWhereUniqueWithoutCarModelInput[]
    updateMany?: CarImagesUpdateManyWithWhereWithoutCarModelInput | CarImagesUpdateManyWithWhereWithoutCarModelInput[]
    deleteMany?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
  }

  export type CarsUncheckedUpdateManyWithoutCarModelNestedInput = {
    create?: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput> | CarsCreateWithoutCarModelInput[] | CarsUncheckedCreateWithoutCarModelInput[]
    connectOrCreate?: CarsCreateOrConnectWithoutCarModelInput | CarsCreateOrConnectWithoutCarModelInput[]
    upsert?: CarsUpsertWithWhereUniqueWithoutCarModelInput | CarsUpsertWithWhereUniqueWithoutCarModelInput[]
    createMany?: CarsCreateManyCarModelInputEnvelope
    set?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    disconnect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    delete?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    connect?: CarsWhereUniqueInput | CarsWhereUniqueInput[]
    update?: CarsUpdateWithWhereUniqueWithoutCarModelInput | CarsUpdateWithWhereUniqueWithoutCarModelInput[]
    updateMany?: CarsUpdateManyWithWhereWithoutCarModelInput | CarsUpdateManyWithWhereWithoutCarModelInput[]
    deleteMany?: CarsScalarWhereInput | CarsScalarWhereInput[]
  }

  export type CarModelsCreateNestedOneWithoutCarImagesInput = {
    create?: XOR<CarModelsCreateWithoutCarImagesInput, CarModelsUncheckedCreateWithoutCarImagesInput>
    connectOrCreate?: CarModelsCreateOrConnectWithoutCarImagesInput
    connect?: CarModelsWhereUniqueInput
  }

  export type CarModelsUpdateOneRequiredWithoutCarImagesNestedInput = {
    create?: XOR<CarModelsCreateWithoutCarImagesInput, CarModelsUncheckedCreateWithoutCarImagesInput>
    connectOrCreate?: CarModelsCreateOrConnectWithoutCarImagesInput
    upsert?: CarModelsUpsertWithoutCarImagesInput
    connect?: CarModelsWhereUniqueInput
    update?: XOR<XOR<CarModelsUpdateToOneWithWhereWithoutCarImagesInput, CarModelsUpdateWithoutCarImagesInput>, CarModelsUncheckedUpdateWithoutCarImagesInput>
  }

  export type CarModelsCreateNestedOneWithoutCarsInput = {
    create?: XOR<CarModelsCreateWithoutCarsInput, CarModelsUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarModelsCreateOrConnectWithoutCarsInput
    connect?: CarModelsWhereUniqueInput
  }

  export type BranchesCreateNestedOneWithoutCarsInput = {
    create?: XOR<BranchesCreateWithoutCarsInput, BranchesUncheckedCreateWithoutCarsInput>
    connectOrCreate?: BranchesCreateOrConnectWithoutCarsInput
    connect?: BranchesWhereUniqueInput
  }

  export type BookingsCreateNestedManyWithoutCarInput = {
    create?: XOR<BookingsCreateWithoutCarInput, BookingsUncheckedCreateWithoutCarInput> | BookingsCreateWithoutCarInput[] | BookingsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutCarInput | BookingsCreateOrConnectWithoutCarInput[]
    createMany?: BookingsCreateManyCarInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<BookingsCreateWithoutCarInput, BookingsUncheckedCreateWithoutCarInput> | BookingsCreateWithoutCarInput[] | BookingsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutCarInput | BookingsCreateOrConnectWithoutCarInput[]
    createMany?: BookingsCreateManyCarInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type EnumCarStatusFieldUpdateOperationsInput = {
    set?: $Enums.CarStatus
  }

  export type CarModelsUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<CarModelsCreateWithoutCarsInput, CarModelsUncheckedCreateWithoutCarsInput>
    connectOrCreate?: CarModelsCreateOrConnectWithoutCarsInput
    upsert?: CarModelsUpsertWithoutCarsInput
    connect?: CarModelsWhereUniqueInput
    update?: XOR<XOR<CarModelsUpdateToOneWithWhereWithoutCarsInput, CarModelsUpdateWithoutCarsInput>, CarModelsUncheckedUpdateWithoutCarsInput>
  }

  export type BranchesUpdateOneWithoutCarsNestedInput = {
    create?: XOR<BranchesCreateWithoutCarsInput, BranchesUncheckedCreateWithoutCarsInput>
    connectOrCreate?: BranchesCreateOrConnectWithoutCarsInput
    upsert?: BranchesUpsertWithoutCarsInput
    disconnect?: BranchesWhereInput | boolean
    delete?: BranchesWhereInput | boolean
    connect?: BranchesWhereUniqueInput
    update?: XOR<XOR<BranchesUpdateToOneWithWhereWithoutCarsInput, BranchesUpdateWithoutCarsInput>, BranchesUncheckedUpdateWithoutCarsInput>
  }

  export type BookingsUpdateManyWithoutCarNestedInput = {
    create?: XOR<BookingsCreateWithoutCarInput, BookingsUncheckedCreateWithoutCarInput> | BookingsCreateWithoutCarInput[] | BookingsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutCarInput | BookingsCreateOrConnectWithoutCarInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutCarInput | BookingsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: BookingsCreateManyCarInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutCarInput | BookingsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutCarInput | BookingsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingsUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<BookingsCreateWithoutCarInput, BookingsUncheckedCreateWithoutCarInput> | BookingsCreateWithoutCarInput[] | BookingsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutCarInput | BookingsCreateOrConnectWithoutCarInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutCarInput | BookingsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: BookingsCreateManyCarInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutCarInput | BookingsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutCarInput | BookingsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type CustomersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomersCreateWithoutBookingsInput, CustomersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutBookingsInput
    connect?: CustomersWhereUniqueInput
  }

  export type CarsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CarsCreateWithoutBookingsInput, CarsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CarsCreateOrConnectWithoutBookingsInput
    connect?: CarsWhereUniqueInput
  }

  export type BranchesCreateNestedOneWithoutPickupBookingsInput = {
    create?: XOR<BranchesCreateWithoutPickupBookingsInput, BranchesUncheckedCreateWithoutPickupBookingsInput>
    connectOrCreate?: BranchesCreateOrConnectWithoutPickupBookingsInput
    connect?: BranchesWhereUniqueInput
  }

  export type BranchesCreateNestedOneWithoutDropoffBookingsInput = {
    create?: XOR<BranchesCreateWithoutDropoffBookingsInput, BranchesUncheckedCreateWithoutDropoffBookingsInput>
    connectOrCreate?: BranchesCreateOrConnectWithoutDropoffBookingsInput
    connect?: BranchesWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput> | PaymentsCreateWithoutBookingInput[] | PaymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingInput | PaymentsCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentsCreateManyBookingInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput> | PaymentsCreateWithoutBookingInput[] | PaymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingInput | PaymentsCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentsCreateManyBookingInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type CustomersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CustomersCreateWithoutBookingsInput, CustomersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomersCreateOrConnectWithoutBookingsInput
    upsert?: CustomersUpsertWithoutBookingsInput
    connect?: CustomersWhereUniqueInput
    update?: XOR<XOR<CustomersUpdateToOneWithWhereWithoutBookingsInput, CustomersUpdateWithoutBookingsInput>, CustomersUncheckedUpdateWithoutBookingsInput>
  }

  export type CarsUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CarsCreateWithoutBookingsInput, CarsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CarsCreateOrConnectWithoutBookingsInput
    upsert?: CarsUpsertWithoutBookingsInput
    connect?: CarsWhereUniqueInput
    update?: XOR<XOR<CarsUpdateToOneWithWhereWithoutBookingsInput, CarsUpdateWithoutBookingsInput>, CarsUncheckedUpdateWithoutBookingsInput>
  }

  export type BranchesUpdateOneRequiredWithoutPickupBookingsNestedInput = {
    create?: XOR<BranchesCreateWithoutPickupBookingsInput, BranchesUncheckedCreateWithoutPickupBookingsInput>
    connectOrCreate?: BranchesCreateOrConnectWithoutPickupBookingsInput
    upsert?: BranchesUpsertWithoutPickupBookingsInput
    connect?: BranchesWhereUniqueInput
    update?: XOR<XOR<BranchesUpdateToOneWithWhereWithoutPickupBookingsInput, BranchesUpdateWithoutPickupBookingsInput>, BranchesUncheckedUpdateWithoutPickupBookingsInput>
  }

  export type BranchesUpdateOneRequiredWithoutDropoffBookingsNestedInput = {
    create?: XOR<BranchesCreateWithoutDropoffBookingsInput, BranchesUncheckedCreateWithoutDropoffBookingsInput>
    connectOrCreate?: BranchesCreateOrConnectWithoutDropoffBookingsInput
    upsert?: BranchesUpsertWithoutDropoffBookingsInput
    connect?: BranchesWhereUniqueInput
    update?: XOR<XOR<BranchesUpdateToOneWithWhereWithoutDropoffBookingsInput, BranchesUpdateWithoutDropoffBookingsInput>, BranchesUncheckedUpdateWithoutDropoffBookingsInput>
  }

  export type PaymentsUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput> | PaymentsCreateWithoutBookingInput[] | PaymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingInput | PaymentsCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutBookingInput | PaymentsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentsCreateManyBookingInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutBookingInput | PaymentsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutBookingInput | PaymentsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput> | PaymentsCreateWithoutBookingInput[] | PaymentsUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingInput | PaymentsCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutBookingInput | PaymentsUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentsCreateManyBookingInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutBookingInput | PaymentsUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutBookingInput | PaymentsUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type BookingsCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentInput
    connect?: BookingsWhereUniqueInput
  }

  export type BookingsUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentInput
    upsert?: BookingsUpsertWithoutPaymentInput
    connect?: BookingsWhereUniqueInput
    update?: XOR<XOR<BookingsUpdateToOneWithWhereWithoutPaymentInput, BookingsUpdateWithoutPaymentInput>, BookingsUncheckedUpdateWithoutPaymentInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[]
    notIn?: $Enums.CarStatus[]
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type NestedEnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[]
    notIn?: $Enums.CarStatus[]
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingsCreateWithoutCustomerInput = {
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Car: CarsCreateNestedOneWithoutBookingsInput
    PickupLocation: BranchesCreateNestedOneWithoutPickupBookingsInput
    DropoffLocation: BranchesCreateNestedOneWithoutDropoffBookingsInput
    Payment?: PaymentsCreateNestedManyWithoutBookingInput
  }

  export type BookingsUncheckedCreateWithoutCustomerInput = {
    bookingId?: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingsCreateOrConnectWithoutCustomerInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutCustomerInput, BookingsUncheckedCreateWithoutCustomerInput>
  }

  export type BookingsCreateManyCustomerInputEnvelope = {
    data: BookingsCreateManyCustomerInput | BookingsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BookingsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutCustomerInput, BookingsUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingsCreateWithoutCustomerInput, BookingsUncheckedCreateWithoutCustomerInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutCustomerInput, BookingsUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingsUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingsScalarWhereInput = {
    AND?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    OR?: BookingsScalarWhereInput[]
    NOT?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    bookingId?: IntFilter<"Bookings"> | number
    customerId?: IntFilter<"Bookings"> | number
    carId?: IntFilter<"Bookings"> | number
    startDate?: DateTimeFilter<"Bookings"> | Date | string
    endDate?: DateTimeFilter<"Bookings"> | Date | string
    pickDropTime?: StringNullableFilter<"Bookings"> | string | null
    totalAmount?: FloatFilter<"Bookings"> | number
    pickupLocationId?: IntFilter<"Bookings"> | number
    dropoffLocationId?: IntFilter<"Bookings"> | number
    status?: EnumBookingStatusFilter<"Bookings"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Bookings"> | Date | string
    updatedAt?: DateTimeFilter<"Bookings"> | Date | string
  }

  export type CarsCreateWithoutBranchInput = {
    licensePlate: string
    status?: $Enums.CarStatus
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    CarModel: CarModelsCreateNestedOneWithoutCarsInput
    Bookings?: BookingsCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutBranchInput = {
    carId?: number
    carModelId: number
    licensePlate: string
    status?: $Enums.CarStatus
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Bookings?: BookingsUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutBranchInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutBranchInput, CarsUncheckedCreateWithoutBranchInput>
  }

  export type CarsCreateManyBranchInputEnvelope = {
    data: CarsCreateManyBranchInput | CarsCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type BookingsCreateWithoutPickupLocationInput = {
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomersCreateNestedOneWithoutBookingsInput
    Car: CarsCreateNestedOneWithoutBookingsInput
    DropoffLocation: BranchesCreateNestedOneWithoutDropoffBookingsInput
    Payment?: PaymentsCreateNestedManyWithoutBookingInput
  }

  export type BookingsUncheckedCreateWithoutPickupLocationInput = {
    bookingId?: number
    customerId: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingsCreateOrConnectWithoutPickupLocationInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutPickupLocationInput, BookingsUncheckedCreateWithoutPickupLocationInput>
  }

  export type BookingsCreateManyPickupLocationInputEnvelope = {
    data: BookingsCreateManyPickupLocationInput | BookingsCreateManyPickupLocationInput[]
    skipDuplicates?: boolean
  }

  export type BookingsCreateWithoutDropoffLocationInput = {
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomersCreateNestedOneWithoutBookingsInput
    Car: CarsCreateNestedOneWithoutBookingsInput
    PickupLocation: BranchesCreateNestedOneWithoutPickupBookingsInput
    Payment?: PaymentsCreateNestedManyWithoutBookingInput
  }

  export type BookingsUncheckedCreateWithoutDropoffLocationInput = {
    bookingId?: number
    customerId: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingsCreateOrConnectWithoutDropoffLocationInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutDropoffLocationInput, BookingsUncheckedCreateWithoutDropoffLocationInput>
  }

  export type BookingsCreateManyDropoffLocationInputEnvelope = {
    data: BookingsCreateManyDropoffLocationInput | BookingsCreateManyDropoffLocationInput[]
    skipDuplicates?: boolean
  }

  export type CarsUpsertWithWhereUniqueWithoutBranchInput = {
    where: CarsWhereUniqueInput
    update: XOR<CarsUpdateWithoutBranchInput, CarsUncheckedUpdateWithoutBranchInput>
    create: XOR<CarsCreateWithoutBranchInput, CarsUncheckedCreateWithoutBranchInput>
  }

  export type CarsUpdateWithWhereUniqueWithoutBranchInput = {
    where: CarsWhereUniqueInput
    data: XOR<CarsUpdateWithoutBranchInput, CarsUncheckedUpdateWithoutBranchInput>
  }

  export type CarsUpdateManyWithWhereWithoutBranchInput = {
    where: CarsScalarWhereInput
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyWithoutBranchInput>
  }

  export type CarsScalarWhereInput = {
    AND?: CarsScalarWhereInput | CarsScalarWhereInput[]
    OR?: CarsScalarWhereInput[]
    NOT?: CarsScalarWhereInput | CarsScalarWhereInput[]
    carId?: IntFilter<"Cars"> | number
    carModelId?: IntFilter<"Cars"> | number
    licensePlate?: StringFilter<"Cars"> | string
    status?: EnumCarStatusFilter<"Cars"> | $Enums.CarStatus
    branchId?: IntNullableFilter<"Cars"> | number | null
    useDate?: StringFilter<"Cars"> | string
    createdAt?: DateTimeFilter<"Cars"> | Date | string
    updatedAt?: DateTimeFilter<"Cars"> | Date | string
    isDeleted?: BoolFilter<"Cars"> | boolean
  }

  export type BookingsUpsertWithWhereUniqueWithoutPickupLocationInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutPickupLocationInput, BookingsUncheckedUpdateWithoutPickupLocationInput>
    create: XOR<BookingsCreateWithoutPickupLocationInput, BookingsUncheckedCreateWithoutPickupLocationInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutPickupLocationInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutPickupLocationInput, BookingsUncheckedUpdateWithoutPickupLocationInput>
  }

  export type BookingsUpdateManyWithWhereWithoutPickupLocationInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutPickupLocationInput>
  }

  export type BookingsUpsertWithWhereUniqueWithoutDropoffLocationInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutDropoffLocationInput, BookingsUncheckedUpdateWithoutDropoffLocationInput>
    create: XOR<BookingsCreateWithoutDropoffLocationInput, BookingsUncheckedCreateWithoutDropoffLocationInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutDropoffLocationInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutDropoffLocationInput, BookingsUncheckedUpdateWithoutDropoffLocationInput>
  }

  export type BookingsUpdateManyWithWhereWithoutDropoffLocationInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutDropoffLocationInput>
  }

  export type CarModelsCreateWithoutCarTypeInput = {
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    CarImages?: CarImagesCreateNestedManyWithoutCarModelInput
    Cars?: CarsCreateNestedManyWithoutCarModelInput
  }

  export type CarModelsUncheckedCreateWithoutCarTypeInput = {
    carModelId?: number
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    CarImages?: CarImagesUncheckedCreateNestedManyWithoutCarModelInput
    Cars?: CarsUncheckedCreateNestedManyWithoutCarModelInput
  }

  export type CarModelsCreateOrConnectWithoutCarTypeInput = {
    where: CarModelsWhereUniqueInput
    create: XOR<CarModelsCreateWithoutCarTypeInput, CarModelsUncheckedCreateWithoutCarTypeInput>
  }

  export type CarModelsCreateManyCarTypeInputEnvelope = {
    data: CarModelsCreateManyCarTypeInput | CarModelsCreateManyCarTypeInput[]
    skipDuplicates?: boolean
  }

  export type CarModelsUpsertWithWhereUniqueWithoutCarTypeInput = {
    where: CarModelsWhereUniqueInput
    update: XOR<CarModelsUpdateWithoutCarTypeInput, CarModelsUncheckedUpdateWithoutCarTypeInput>
    create: XOR<CarModelsCreateWithoutCarTypeInput, CarModelsUncheckedCreateWithoutCarTypeInput>
  }

  export type CarModelsUpdateWithWhereUniqueWithoutCarTypeInput = {
    where: CarModelsWhereUniqueInput
    data: XOR<CarModelsUpdateWithoutCarTypeInput, CarModelsUncheckedUpdateWithoutCarTypeInput>
  }

  export type CarModelsUpdateManyWithWhereWithoutCarTypeInput = {
    where: CarModelsScalarWhereInput
    data: XOR<CarModelsUpdateManyMutationInput, CarModelsUncheckedUpdateManyWithoutCarTypeInput>
  }

  export type CarModelsScalarWhereInput = {
    AND?: CarModelsScalarWhereInput | CarModelsScalarWhereInput[]
    OR?: CarModelsScalarWhereInput[]
    NOT?: CarModelsScalarWhereInput | CarModelsScalarWhereInput[]
    carModelId?: IntFilter<"CarModels"> | number
    carTypeId?: IntFilter<"CarModels"> | number
    brand?: StringFilter<"CarModels"> | string
    model?: StringFilter<"CarModels"> | string
    color?: StringFilter<"CarModels"> | string
    transmission?: StringFilter<"CarModels"> | string
    fuel?: StringFilter<"CarModels"> | string
    seats?: IntFilter<"CarModels"> | number
  }

  export type CarImagesCreateWithoutCarModelInput = {
    imageUrl: string
  }

  export type CarImagesUncheckedCreateWithoutCarModelInput = {
    imageId?: number
    imageUrl: string
  }

  export type CarImagesCreateOrConnectWithoutCarModelInput = {
    where: CarImagesWhereUniqueInput
    create: XOR<CarImagesCreateWithoutCarModelInput, CarImagesUncheckedCreateWithoutCarModelInput>
  }

  export type CarImagesCreateManyCarModelInputEnvelope = {
    data: CarImagesCreateManyCarModelInput | CarImagesCreateManyCarModelInput[]
    skipDuplicates?: boolean
  }

  export type CarsCreateWithoutCarModelInput = {
    licensePlate: string
    status?: $Enums.CarStatus
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Branch?: BranchesCreateNestedOneWithoutCarsInput
    Bookings?: BookingsCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateWithoutCarModelInput = {
    carId?: number
    licensePlate: string
    status?: $Enums.CarStatus
    branchId?: number | null
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Bookings?: BookingsUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsCreateOrConnectWithoutCarModelInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput>
  }

  export type CarsCreateManyCarModelInputEnvelope = {
    data: CarsCreateManyCarModelInput | CarsCreateManyCarModelInput[]
    skipDuplicates?: boolean
  }

  export type CarTypesCreateWithoutCarModelsInput = {
    carTypeName: string
    pricePerDay: number
  }

  export type CarTypesUncheckedCreateWithoutCarModelsInput = {
    carTypeId?: number
    carTypeName: string
    pricePerDay: number
  }

  export type CarTypesCreateOrConnectWithoutCarModelsInput = {
    where: CarTypesWhereUniqueInput
    create: XOR<CarTypesCreateWithoutCarModelsInput, CarTypesUncheckedCreateWithoutCarModelsInput>
  }

  export type CarImagesUpsertWithWhereUniqueWithoutCarModelInput = {
    where: CarImagesWhereUniqueInput
    update: XOR<CarImagesUpdateWithoutCarModelInput, CarImagesUncheckedUpdateWithoutCarModelInput>
    create: XOR<CarImagesCreateWithoutCarModelInput, CarImagesUncheckedCreateWithoutCarModelInput>
  }

  export type CarImagesUpdateWithWhereUniqueWithoutCarModelInput = {
    where: CarImagesWhereUniqueInput
    data: XOR<CarImagesUpdateWithoutCarModelInput, CarImagesUncheckedUpdateWithoutCarModelInput>
  }

  export type CarImagesUpdateManyWithWhereWithoutCarModelInput = {
    where: CarImagesScalarWhereInput
    data: XOR<CarImagesUpdateManyMutationInput, CarImagesUncheckedUpdateManyWithoutCarModelInput>
  }

  export type CarImagesScalarWhereInput = {
    AND?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
    OR?: CarImagesScalarWhereInput[]
    NOT?: CarImagesScalarWhereInput | CarImagesScalarWhereInput[]
    imageId?: IntFilter<"CarImages"> | number
    carModelId?: IntFilter<"CarImages"> | number
    imageUrl?: StringFilter<"CarImages"> | string
  }

  export type CarsUpsertWithWhereUniqueWithoutCarModelInput = {
    where: CarsWhereUniqueInput
    update: XOR<CarsUpdateWithoutCarModelInput, CarsUncheckedUpdateWithoutCarModelInput>
    create: XOR<CarsCreateWithoutCarModelInput, CarsUncheckedCreateWithoutCarModelInput>
  }

  export type CarsUpdateWithWhereUniqueWithoutCarModelInput = {
    where: CarsWhereUniqueInput
    data: XOR<CarsUpdateWithoutCarModelInput, CarsUncheckedUpdateWithoutCarModelInput>
  }

  export type CarsUpdateManyWithWhereWithoutCarModelInput = {
    where: CarsScalarWhereInput
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyWithoutCarModelInput>
  }

  export type CarTypesUpsertWithoutCarModelsInput = {
    update: XOR<CarTypesUpdateWithoutCarModelsInput, CarTypesUncheckedUpdateWithoutCarModelsInput>
    create: XOR<CarTypesCreateWithoutCarModelsInput, CarTypesUncheckedCreateWithoutCarModelsInput>
    where?: CarTypesWhereInput
  }

  export type CarTypesUpdateToOneWithWhereWithoutCarModelsInput = {
    where?: CarTypesWhereInput
    data: XOR<CarTypesUpdateWithoutCarModelsInput, CarTypesUncheckedUpdateWithoutCarModelsInput>
  }

  export type CarTypesUpdateWithoutCarModelsInput = {
    carTypeName?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
  }

  export type CarTypesUncheckedUpdateWithoutCarModelsInput = {
    carTypeId?: IntFieldUpdateOperationsInput | number
    carTypeName?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
  }

  export type CarModelsCreateWithoutCarImagesInput = {
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    Cars?: CarsCreateNestedManyWithoutCarModelInput
    CarType: CarTypesCreateNestedOneWithoutCarModelsInput
  }

  export type CarModelsUncheckedCreateWithoutCarImagesInput = {
    carModelId?: number
    carTypeId: number
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    Cars?: CarsUncheckedCreateNestedManyWithoutCarModelInput
  }

  export type CarModelsCreateOrConnectWithoutCarImagesInput = {
    where: CarModelsWhereUniqueInput
    create: XOR<CarModelsCreateWithoutCarImagesInput, CarModelsUncheckedCreateWithoutCarImagesInput>
  }

  export type CarModelsUpsertWithoutCarImagesInput = {
    update: XOR<CarModelsUpdateWithoutCarImagesInput, CarModelsUncheckedUpdateWithoutCarImagesInput>
    create: XOR<CarModelsCreateWithoutCarImagesInput, CarModelsUncheckedCreateWithoutCarImagesInput>
    where?: CarModelsWhereInput
  }

  export type CarModelsUpdateToOneWithWhereWithoutCarImagesInput = {
    where?: CarModelsWhereInput
    data: XOR<CarModelsUpdateWithoutCarImagesInput, CarModelsUncheckedUpdateWithoutCarImagesInput>
  }

  export type CarModelsUpdateWithoutCarImagesInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    Cars?: CarsUpdateManyWithoutCarModelNestedInput
    CarType?: CarTypesUpdateOneRequiredWithoutCarModelsNestedInput
  }

  export type CarModelsUncheckedUpdateWithoutCarImagesInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    carTypeId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    Cars?: CarsUncheckedUpdateManyWithoutCarModelNestedInput
  }

  export type CarModelsCreateWithoutCarsInput = {
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    CarImages?: CarImagesCreateNestedManyWithoutCarModelInput
    CarType: CarTypesCreateNestedOneWithoutCarModelsInput
  }

  export type CarModelsUncheckedCreateWithoutCarsInput = {
    carModelId?: number
    carTypeId: number
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
    CarImages?: CarImagesUncheckedCreateNestedManyWithoutCarModelInput
  }

  export type CarModelsCreateOrConnectWithoutCarsInput = {
    where: CarModelsWhereUniqueInput
    create: XOR<CarModelsCreateWithoutCarsInput, CarModelsUncheckedCreateWithoutCarsInput>
  }

  export type BranchesCreateWithoutCarsInput = {
    branchName: string
    region: string
    lat: number
    lng: number
    PickupBookings?: BookingsCreateNestedManyWithoutPickupLocationInput
    DropoffBookings?: BookingsCreateNestedManyWithoutDropoffLocationInput
  }

  export type BranchesUncheckedCreateWithoutCarsInput = {
    branchId?: number
    branchName: string
    region: string
    lat: number
    lng: number
    PickupBookings?: BookingsUncheckedCreateNestedManyWithoutPickupLocationInput
    DropoffBookings?: BookingsUncheckedCreateNestedManyWithoutDropoffLocationInput
  }

  export type BranchesCreateOrConnectWithoutCarsInput = {
    where: BranchesWhereUniqueInput
    create: XOR<BranchesCreateWithoutCarsInput, BranchesUncheckedCreateWithoutCarsInput>
  }

  export type BookingsCreateWithoutCarInput = {
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomersCreateNestedOneWithoutBookingsInput
    PickupLocation: BranchesCreateNestedOneWithoutPickupBookingsInput
    DropoffLocation: BranchesCreateNestedOneWithoutDropoffBookingsInput
    Payment?: PaymentsCreateNestedManyWithoutBookingInput
  }

  export type BookingsUncheckedCreateWithoutCarInput = {
    bookingId?: number
    customerId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentsUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingsCreateOrConnectWithoutCarInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutCarInput, BookingsUncheckedCreateWithoutCarInput>
  }

  export type BookingsCreateManyCarInputEnvelope = {
    data: BookingsCreateManyCarInput | BookingsCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type CarModelsUpsertWithoutCarsInput = {
    update: XOR<CarModelsUpdateWithoutCarsInput, CarModelsUncheckedUpdateWithoutCarsInput>
    create: XOR<CarModelsCreateWithoutCarsInput, CarModelsUncheckedCreateWithoutCarsInput>
    where?: CarModelsWhereInput
  }

  export type CarModelsUpdateToOneWithWhereWithoutCarsInput = {
    where?: CarModelsWhereInput
    data: XOR<CarModelsUpdateWithoutCarsInput, CarModelsUncheckedUpdateWithoutCarsInput>
  }

  export type CarModelsUpdateWithoutCarsInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUpdateManyWithoutCarModelNestedInput
    CarType?: CarTypesUpdateOneRequiredWithoutCarModelsNestedInput
  }

  export type CarModelsUncheckedUpdateWithoutCarsInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    carTypeId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUncheckedUpdateManyWithoutCarModelNestedInput
  }

  export type BranchesUpsertWithoutCarsInput = {
    update: XOR<BranchesUpdateWithoutCarsInput, BranchesUncheckedUpdateWithoutCarsInput>
    create: XOR<BranchesCreateWithoutCarsInput, BranchesUncheckedCreateWithoutCarsInput>
    where?: BranchesWhereInput
  }

  export type BranchesUpdateToOneWithWhereWithoutCarsInput = {
    where?: BranchesWhereInput
    data: XOR<BranchesUpdateWithoutCarsInput, BranchesUncheckedUpdateWithoutCarsInput>
  }

  export type BranchesUpdateWithoutCarsInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    PickupBookings?: BookingsUpdateManyWithoutPickupLocationNestedInput
    DropoffBookings?: BookingsUpdateManyWithoutDropoffLocationNestedInput
  }

  export type BranchesUncheckedUpdateWithoutCarsInput = {
    branchId?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    PickupBookings?: BookingsUncheckedUpdateManyWithoutPickupLocationNestedInput
    DropoffBookings?: BookingsUncheckedUpdateManyWithoutDropoffLocationNestedInput
  }

  export type BookingsUpsertWithWhereUniqueWithoutCarInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutCarInput, BookingsUncheckedUpdateWithoutCarInput>
    create: XOR<BookingsCreateWithoutCarInput, BookingsUncheckedCreateWithoutCarInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutCarInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutCarInput, BookingsUncheckedUpdateWithoutCarInput>
  }

  export type BookingsUpdateManyWithWhereWithoutCarInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutCarInput>
  }

  export type CustomersCreateWithoutBookingsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    address?: string | null
    driverLicense: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersUncheckedCreateWithoutBookingsInput = {
    customerId?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    address?: string | null
    driverLicense: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomersCreateOrConnectWithoutBookingsInput = {
    where: CustomersWhereUniqueInput
    create: XOR<CustomersCreateWithoutBookingsInput, CustomersUncheckedCreateWithoutBookingsInput>
  }

  export type CarsCreateWithoutBookingsInput = {
    licensePlate: string
    status?: $Enums.CarStatus
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    CarModel: CarModelsCreateNestedOneWithoutCarsInput
    Branch?: BranchesCreateNestedOneWithoutCarsInput
  }

  export type CarsUncheckedCreateWithoutBookingsInput = {
    carId?: number
    carModelId: number
    licensePlate: string
    status?: $Enums.CarStatus
    branchId?: number | null
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type CarsCreateOrConnectWithoutBookingsInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutBookingsInput, CarsUncheckedCreateWithoutBookingsInput>
  }

  export type BranchesCreateWithoutPickupBookingsInput = {
    branchName: string
    region: string
    lat: number
    lng: number
    Cars?: CarsCreateNestedManyWithoutBranchInput
    DropoffBookings?: BookingsCreateNestedManyWithoutDropoffLocationInput
  }

  export type BranchesUncheckedCreateWithoutPickupBookingsInput = {
    branchId?: number
    branchName: string
    region: string
    lat: number
    lng: number
    Cars?: CarsUncheckedCreateNestedManyWithoutBranchInput
    DropoffBookings?: BookingsUncheckedCreateNestedManyWithoutDropoffLocationInput
  }

  export type BranchesCreateOrConnectWithoutPickupBookingsInput = {
    where: BranchesWhereUniqueInput
    create: XOR<BranchesCreateWithoutPickupBookingsInput, BranchesUncheckedCreateWithoutPickupBookingsInput>
  }

  export type BranchesCreateWithoutDropoffBookingsInput = {
    branchName: string
    region: string
    lat: number
    lng: number
    Cars?: CarsCreateNestedManyWithoutBranchInput
    PickupBookings?: BookingsCreateNestedManyWithoutPickupLocationInput
  }

  export type BranchesUncheckedCreateWithoutDropoffBookingsInput = {
    branchId?: number
    branchName: string
    region: string
    lat: number
    lng: number
    Cars?: CarsUncheckedCreateNestedManyWithoutBranchInput
    PickupBookings?: BookingsUncheckedCreateNestedManyWithoutPickupLocationInput
  }

  export type BranchesCreateOrConnectWithoutDropoffBookingsInput = {
    where: BranchesWhereUniqueInput
    create: XOR<BranchesCreateWithoutDropoffBookingsInput, BranchesUncheckedCreateWithoutDropoffBookingsInput>
  }

  export type PaymentsCreateWithoutBookingInput = {
    paymentDate: Date | string
    amount: number
    orderId: string
    sessionId: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsUncheckedCreateWithoutBookingInput = {
    paymentId?: number
    paymentDate: Date | string
    amount: number
    orderId: string
    sessionId: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutBookingInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput>
  }

  export type PaymentsCreateManyBookingInputEnvelope = {
    data: PaymentsCreateManyBookingInput | PaymentsCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type CustomersUpsertWithoutBookingsInput = {
    update: XOR<CustomersUpdateWithoutBookingsInput, CustomersUncheckedUpdateWithoutBookingsInput>
    create: XOR<CustomersCreateWithoutBookingsInput, CustomersUncheckedCreateWithoutBookingsInput>
    where?: CustomersWhereInput
  }

  export type CustomersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CustomersWhereInput
    data: XOR<CustomersUpdateWithoutBookingsInput, CustomersUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomersUpdateWithoutBookingsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    driverLicense?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomersUncheckedUpdateWithoutBookingsInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    driverLicense?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsUpsertWithoutBookingsInput = {
    update: XOR<CarsUpdateWithoutBookingsInput, CarsUncheckedUpdateWithoutBookingsInput>
    create: XOR<CarsCreateWithoutBookingsInput, CarsUncheckedCreateWithoutBookingsInput>
    where?: CarsWhereInput
  }

  export type CarsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CarsWhereInput
    data: XOR<CarsUpdateWithoutBookingsInput, CarsUncheckedUpdateWithoutBookingsInput>
  }

  export type CarsUpdateWithoutBookingsInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    CarModel?: CarModelsUpdateOneRequiredWithoutCarsNestedInput
    Branch?: BranchesUpdateOneWithoutCarsNestedInput
  }

  export type CarsUncheckedUpdateWithoutBookingsInput = {
    carId?: IntFieldUpdateOperationsInput | number
    carModelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BranchesUpsertWithoutPickupBookingsInput = {
    update: XOR<BranchesUpdateWithoutPickupBookingsInput, BranchesUncheckedUpdateWithoutPickupBookingsInput>
    create: XOR<BranchesCreateWithoutPickupBookingsInput, BranchesUncheckedCreateWithoutPickupBookingsInput>
    where?: BranchesWhereInput
  }

  export type BranchesUpdateToOneWithWhereWithoutPickupBookingsInput = {
    where?: BranchesWhereInput
    data: XOR<BranchesUpdateWithoutPickupBookingsInput, BranchesUncheckedUpdateWithoutPickupBookingsInput>
  }

  export type BranchesUpdateWithoutPickupBookingsInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    Cars?: CarsUpdateManyWithoutBranchNestedInput
    DropoffBookings?: BookingsUpdateManyWithoutDropoffLocationNestedInput
  }

  export type BranchesUncheckedUpdateWithoutPickupBookingsInput = {
    branchId?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    Cars?: CarsUncheckedUpdateManyWithoutBranchNestedInput
    DropoffBookings?: BookingsUncheckedUpdateManyWithoutDropoffLocationNestedInput
  }

  export type BranchesUpsertWithoutDropoffBookingsInput = {
    update: XOR<BranchesUpdateWithoutDropoffBookingsInput, BranchesUncheckedUpdateWithoutDropoffBookingsInput>
    create: XOR<BranchesCreateWithoutDropoffBookingsInput, BranchesUncheckedCreateWithoutDropoffBookingsInput>
    where?: BranchesWhereInput
  }

  export type BranchesUpdateToOneWithWhereWithoutDropoffBookingsInput = {
    where?: BranchesWhereInput
    data: XOR<BranchesUpdateWithoutDropoffBookingsInput, BranchesUncheckedUpdateWithoutDropoffBookingsInput>
  }

  export type BranchesUpdateWithoutDropoffBookingsInput = {
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    Cars?: CarsUpdateManyWithoutBranchNestedInput
    PickupBookings?: BookingsUpdateManyWithoutPickupLocationNestedInput
  }

  export type BranchesUncheckedUpdateWithoutDropoffBookingsInput = {
    branchId?: IntFieldUpdateOperationsInput | number
    branchName?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    Cars?: CarsUncheckedUpdateManyWithoutBranchNestedInput
    PickupBookings?: BookingsUncheckedUpdateManyWithoutPickupLocationNestedInput
  }

  export type PaymentsUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutBookingInput, PaymentsUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentsCreateWithoutBookingInput, PaymentsUncheckedCreateWithoutBookingInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutBookingInput, PaymentsUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    paymentId?: IntFilter<"Payments"> | number
    bookingId?: IntFilter<"Payments"> | number
    paymentDate?: DateTimeFilter<"Payments"> | Date | string
    amount?: FloatFilter<"Payments"> | number
    orderId?: StringFilter<"Payments"> | string
    sessionId?: StringFilter<"Payments"> | string
    paymentStatus?: StringFilter<"Payments"> | string
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
  }

  export type BookingsCreateWithoutPaymentInput = {
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomersCreateNestedOneWithoutBookingsInput
    Car: CarsCreateNestedOneWithoutBookingsInput
    PickupLocation: BranchesCreateNestedOneWithoutPickupBookingsInput
    DropoffLocation: BranchesCreateNestedOneWithoutDropoffBookingsInput
  }

  export type BookingsUncheckedCreateWithoutPaymentInput = {
    bookingId?: number
    customerId: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsCreateOrConnectWithoutPaymentInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
  }

  export type BookingsUpsertWithoutPaymentInput = {
    update: XOR<BookingsUpdateWithoutPaymentInput, BookingsUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingsCreateWithoutPaymentInput, BookingsUncheckedCreateWithoutPaymentInput>
    where?: BookingsWhereInput
  }

  export type BookingsUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingsWhereInput
    data: XOR<BookingsUpdateWithoutPaymentInput, BookingsUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingsUpdateWithoutPaymentInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomersUpdateOneRequiredWithoutBookingsNestedInput
    Car?: CarsUpdateOneRequiredWithoutBookingsNestedInput
    PickupLocation?: BranchesUpdateOneRequiredWithoutPickupBookingsNestedInput
    DropoffLocation?: BranchesUpdateOneRequiredWithoutDropoffBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutPaymentInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsCreateManyCustomerInput = {
    bookingId?: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsUpdateWithoutCustomerInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Car?: CarsUpdateOneRequiredWithoutBookingsNestedInput
    PickupLocation?: BranchesUpdateOneRequiredWithoutPickupBookingsNestedInput
    DropoffLocation?: BranchesUpdateOneRequiredWithoutDropoffBookingsNestedInput
    Payment?: PaymentsUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateWithoutCustomerInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutCustomerInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsCreateManyBranchInput = {
    carId?: number
    carModelId: number
    licensePlate: string
    status?: $Enums.CarStatus
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type BookingsCreateManyPickupLocationInput = {
    bookingId?: number
    customerId: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsCreateManyDropoffLocationInput = {
    bookingId?: number
    customerId: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarsUpdateWithoutBranchInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    CarModel?: CarModelsUpdateOneRequiredWithoutCarsNestedInput
    Bookings?: BookingsUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutBranchInput = {
    carId?: IntFieldUpdateOperationsInput | number
    carModelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Bookings?: BookingsUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutBranchInput = {
    carId?: IntFieldUpdateOperationsInput | number
    carModelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingsUpdateWithoutPickupLocationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomersUpdateOneRequiredWithoutBookingsNestedInput
    Car?: CarsUpdateOneRequiredWithoutBookingsNestedInput
    DropoffLocation?: BranchesUpdateOneRequiredWithoutDropoffBookingsNestedInput
    Payment?: PaymentsUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateWithoutPickupLocationInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutPickupLocationInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingsUpdateWithoutDropoffLocationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomersUpdateOneRequiredWithoutBookingsNestedInput
    Car?: CarsUpdateOneRequiredWithoutBookingsNestedInput
    PickupLocation?: BranchesUpdateOneRequiredWithoutPickupBookingsNestedInput
    Payment?: PaymentsUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateWithoutDropoffLocationInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutDropoffLocationInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarModelsCreateManyCarTypeInput = {
    carModelId?: number
    brand: string
    model: string
    color: string
    transmission: string
    fuel: string
    seats: number
  }

  export type CarModelsUpdateWithoutCarTypeInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUpdateManyWithoutCarModelNestedInput
    Cars?: CarsUpdateManyWithoutCarModelNestedInput
  }

  export type CarModelsUncheckedUpdateWithoutCarTypeInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    CarImages?: CarImagesUncheckedUpdateManyWithoutCarModelNestedInput
    Cars?: CarsUncheckedUpdateManyWithoutCarModelNestedInput
  }

  export type CarModelsUncheckedUpdateManyWithoutCarTypeInput = {
    carModelId?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    fuel?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
  }

  export type CarImagesCreateManyCarModelInput = {
    imageId?: number
    imageUrl: string
  }

  export type CarsCreateManyCarModelInput = {
    carId?: number
    licensePlate: string
    status?: $Enums.CarStatus
    branchId?: number | null
    useDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type CarImagesUpdateWithoutCarModelInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CarImagesUncheckedUpdateWithoutCarModelInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CarImagesUncheckedUpdateManyWithoutCarModelInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CarsUpdateWithoutCarModelInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Branch?: BranchesUpdateOneWithoutCarsNestedInput
    Bookings?: BookingsUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateWithoutCarModelInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Bookings?: BookingsUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateManyWithoutCarModelInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    useDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingsCreateManyCarInput = {
    bookingId?: number
    customerId: number
    startDate: Date | string
    endDate: Date | string
    pickDropTime?: string | null
    totalAmount: number
    pickupLocationId: number
    dropoffLocationId: number
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingsUpdateWithoutCarInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomersUpdateOneRequiredWithoutBookingsNestedInput
    PickupLocation?: BranchesUpdateOneRequiredWithoutPickupBookingsNestedInput
    DropoffLocation?: BranchesUpdateOneRequiredWithoutDropoffBookingsNestedInput
    Payment?: PaymentsUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateWithoutCarInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentsUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutCarInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickDropTime?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    pickupLocationId?: IntFieldUpdateOperationsInput | number
    dropoffLocationId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyBookingInput = {
    paymentId?: number
    paymentDate: Date | string
    amount: number
    orderId: string
    sessionId: string
    paymentStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsUpdateWithoutBookingInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateWithoutBookingInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutBookingInput = {
    paymentId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomersCountOutputTypeDefaultArgs instead
     */
    export type CustomersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchesCountOutputTypeDefaultArgs instead
     */
    export type BranchesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarTypesCountOutputTypeDefaultArgs instead
     */
    export type CarTypesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarTypesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarModelsCountOutputTypeDefaultArgs instead
     */
    export type CarModelsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarModelsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarsCountOutputTypeDefaultArgs instead
     */
    export type CarsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingsCountOutputTypeDefaultArgs instead
     */
    export type BookingsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminsDefaultArgs instead
     */
    export type AdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomersDefaultArgs instead
     */
    export type CustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchesDefaultArgs instead
     */
    export type BranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarTypesDefaultArgs instead
     */
    export type CarTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarTypesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarModelsDefaultArgs instead
     */
    export type CarModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarModelsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarImagesDefaultArgs instead
     */
    export type CarImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarImagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarsDefaultArgs instead
     */
    export type CarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingsDefaultArgs instead
     */
    export type BookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentsDefaultArgs instead
     */
    export type PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentsDefaultArgs<ExtArgs>

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