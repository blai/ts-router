// Type definitions for Koa 2.x
// Project: http://koajs.com
// Definitions by: DavidCai1993 <https://github.com/DavidCai1993>

/* =================== USAGE ===================

    import * as Koa from 'koa'
    const app = new Koa()

 =============================================== */
/// <reference path="../node/node.d.ts" />

declare module "koa" {
  import { EventEmitter } from "events";
  import * as http from "http";
  import * as net from "net";

  namespace Koa {
      interface IContext extends IRequest, IResponse {
          body?: any;
          request?: IRequest;
          response?: IResponse;
          originalUrl?: string;
          state?: any;
          name?: string;
          cookies?: any;
          writable?: Boolean;
          respond?: Boolean;
          app?: Koa;
          req?: http.IncomingMessage;
          res?: http.ServerResponse;
          onerror(err: any): void;
          toJSON(): any;
          inspect(): any;
          throw(): void;
          assert(): void;
      }

      interface IRequest {
          _querycache?: string;
          app?: Koa;
          req?: http.IncomingMessage;
          res?: http.ServerResponse;
          response?: IResponse;
          ctx?: IContext;
          headers?: any;
          header?: any;
          method?: string;
          length?: any;
          url?: string;
          origin?: string;
          originalUrl?: string;
          href?: string;
          path?: string;
          querystring?: string;
          query?: any;
          search?: string;
          idempotent?: Boolean;
          socket?: net.Socket;
          protocol?: string;
          host?: string;
          hostname?: string;
          fresh?: Boolean;
          stale?: Boolean;
          charset?: string;
          secure?: Boolean;
          ips?: Array<string>;
          ip?: string;
          subdomains?: Array<string>;
          accept?: any;
          type?: string;
          accepts?: () => any;
          acceptsEncodings?: () => any;
          acceptsCharsets?: () => any;
          acceptsLanguages?: () => any;
          is?: (types: any) => any;
          toJSON?: () => any;
          inspect?: () => any;
          get?: (field: string) => string;
      }

      interface IResponse {
          _body?: any;
          _explicitStatus?: Boolean;
          app?: Koa;
          res?: http.ServerResponse;
          req?: http.IncomingMessage;
          ctx?: IContext;
          request?: IRequest;
          socket?: net.Socket;
          header?: any;
          headers?: any;
          status?: number;
          message?: string;
          type?: string;
          body?: any;
          length?: any;
          headerSent?: Boolean;
          lastModified?: Date;
          etag?: string;
          writable?: Boolean;
          is?: (types: any) => any;
          redirect?: (url: string, alt: string) => void;
          attachment?: (filename?: string) => void;
          vary?: (field: string) => void;
          get?: (field: string) => string;
          set?: (field: any, val: any) => void;
          remove?: (field: string) => void;
          append?: (field: string, val: any) => void;
          toJSON?: () => any;
          inspect?: () => any;
      }
  }
    class Koa extends EventEmitter {
        keys: Array<string>;
        subdomainOffset: number;
        proxy: Boolean;
        server: http.Server;
        env: string;
        context: Koa.IContext;
        request: Koa.IRequest;
        response: Koa.IResponse;
        silent: Boolean;
        constructor();
        use(middleware: (ctx: Koa.IContext, next: Promise<void>) => any): Koa;
        callback(): (req: http.IncomingMessage, res: http.ServerResponse) => void;
        listen(port?: number, callback?: Function): http.Server;
        toJSON(): any;
        inspect(): any;
        onerror(err: any): void;
    }


  export = Koa;
}
