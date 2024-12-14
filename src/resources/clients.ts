// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Clients extends APIResource {
  /**
   * Create new client
   */
  create(body: ClientCreateParams, options?: Core.RequestOptions): Core.APIPromise<Client> {
    return this._client.post('/clients', { body, ...options });
  }

  /**
   * Get client details by id
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Client> {
    return this._client.get(`/clients/${id}`, options);
  }

  /**
   * Update client
   */
  update(id: string, body: ClientUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Client> {
    return this._client.patch(`/clients/${id}`, { body, ...options });
  }

  /**
   * Get all clients
   */
  list(query: ClientListParams, options?: Core.RequestOptions): Core.APIPromise<ClientListResponse> {
    return this._client.get('/clients', { query, ...options });
  }

  /**
   * Delete client
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Client> {
    return this._client.delete(`/clients/${id}`, options);
  }
}

export interface Client {
  id: string;

  allowedGrants: Array<string>;

  allowedScopes: Array<string>;

  clientId: string;

  clientSecret: string;

  isActive: boolean;

  name: string;

  redirectUris: Array<string>;

  settings: unknown;

  type: 'public' | 'private' | 'm2m';
}

export interface ClientListResponse {
  meta: unknown;

  nodes: Array<Client>;
}

export interface ClientCreateParams {
  /**
   * Client Name
   */
  name: string;

  /**
   * Client type
   */
  type: 'public' | 'private' | 'm2m';

  /**
   * Allowed Grants
   */
  allowedGrants?: Array<'authorization_code' | 'client_credentials' | 'refresh_token'>;

  /**
   * Allowed Scopes
   */
  allowedScopes?: Array<string>;

  /**
   * Redirect URIs
   */
  redirectUris?: Array<string>;

  /**
   * Client Settings
   */
  settings?: unknown;
}

export interface ClientUpdateParams {
  /**
   * Client Name
   */
  name: string;

  /**
   * Allowed Grants
   */
  allowedGrants?: Array<'authorization_code' | 'client_credentials' | 'refresh_token'>;

  /**
   * Allowed Scopes
   */
  allowedScopes?: Array<string>;

  /**
   * Redirect URIs
   */
  redirectUris?: Array<string>;

  /**
   * Client Settings
   */
  settings?: unknown;
}

export interface ClientListParams {
  /**
   * Comma separated column names
   */
  columns:
    | 'id'
    | 'client_id'
    | 'client_secret'
    | 'name'
    | 'type'
    | 'redirect_uris'
    | 'allowed_scopes'
    | 'allowed_grants'
    | 'is_active'
    | 'require_pkce'
    | 'settings'
    | 'tenant_id'
    | 'created_at'
    | 'updated_at';

  limit?: number;

  page?: number;

  sort?: 'asc' | 'desc';

  sortBy?: string;
}

export declare namespace Clients {
  export {
    type Client as Client,
    type ClientListResponse as ClientListResponse,
    type ClientCreateParams as ClientCreateParams,
    type ClientUpdateParams as ClientUpdateParams,
    type ClientListParams as ClientListParams,
  };
}
