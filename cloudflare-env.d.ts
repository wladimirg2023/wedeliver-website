interface Fetcher{fetch(input:Request):Promise<Response>}
interface D1Database{prepare(query:string):unknown;batch(statements:unknown[]):Promise<unknown[]>;exec(query:string):Promise<unknown>;dump():Promise<ArrayBuffer>}
declare module"cloudflare:workers"{export const env:{DB:D1Database}}
