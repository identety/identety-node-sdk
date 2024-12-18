// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { App } from './resources/app';
import {
  Client,
  ClientCreateParams,
  ClientListParams,
  ClientListResponse,
  ClientUpdateParams,
  Clients,
} from './resources/clients';
import { Orgs } from './resources/orgs';
import { Roles } from './resources/roles';
import {
  User,
  UserCreateParams,
  UserListParams,
  UserListResponse,
  UserUpdateParams,
  Users,
} from './resources/users';

export interface ClientOptions {
  /**
   * API Key for accessing the API
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['IDENTETY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Identety API.
 */
export class Identety extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Identety API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['X_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['IDENTETY_BASE_URL']] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('IDENTETY_BASE_URL'),
    apiKey = Core.readEnv('X_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.IdentetyError(
        "The X_API_KEY environment variable is missing or empty; either provide it, or instantiate the Identety client with an apiKey option, like new Identety({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
    };

    if (Core.isRunningInBrowser()) {
      throw new Errors.IdentetyError(
        "It looks like you're running in a browser-like environment, which is disabled to protect your secret API credentials from attackers. If you have a strong business need for client-side use of this API, please open a GitHub issue with your use-case and security mitigations.",
      );
    }

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  app: API.App = new API.App(this);
  clients: API.Clients = new API.Clients(this);
  users: API.Users = new API.Users(this);
  orgs: API.Orgs = new API.Orgs(this);
  roles: API.Roles = new API.Roles(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'x-api-key': this.apiKey };
  }

  static Identety = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static IdentetyError = Errors.IdentetyError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Identety.App = App;
Identety.Clients = Clients;
Identety.Users = Users;
Identety.Orgs = Orgs;
Identety.Roles = Roles;
export declare namespace Identety {
  export type RequestOptions = Core.RequestOptions;

  export { App as App };

  export {
    Clients as Clients,
    type Client as Client,
    type ClientListResponse as ClientListResponse,
    type ClientCreateParams as ClientCreateParams,
    type ClientUpdateParams as ClientUpdateParams,
    type ClientListParams as ClientListParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
  };

  export { Orgs as Orgs };

  export { Roles as Roles };
}

export { toFile, fileFromPath } from './uploads';
export {
  IdentetyError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Identety;
