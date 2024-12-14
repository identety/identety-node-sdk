// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Users extends APIResource {
  /**
   * Create client
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Get client details by id
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/users/${id}`, options);
  }

  /**
   * Update client
   */
  update(id: string, body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.put(`/users/${id}`, { body, ...options });
  }

  /**
   * Get all users
   */
  list(query: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/users', { query, ...options });
  }

  /**
   * Delete client
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.delete(`/users/${id}`, options);
  }
}

export interface User {
  id: string;

  address: User.Address;

  familyName: string;

  givenName: string;

  locale: string;

  metadata: unknown;

  name: string;

  picture: string;
}

export namespace User {
  export interface Address {
    country: string;

    locality: string;

    postalCode: string;

    region: string;

    streetAddress: string;
  }
}

export interface UserListResponse {
  meta: unknown;

  nodes: Array<User>;
}

export interface UserCreateParams {
  address: UserCreateParams.Address;

  email: string;

  familyName: string;

  givenName: string;

  locale: string;

  metadata: unknown;

  name: string;

  password: string;

  picture: string;
}

export namespace UserCreateParams {
  export interface Address {
    country: string;

    locality: string;

    postalCode: string;

    region: string;

    streetAddress: string;
  }
}

export interface UserUpdateParams {
  address: UserUpdateParams.Address;

  familyName: string;

  givenName: string;

  locale: string;

  metadata: unknown;

  name: string;

  picture: string;
}

export namespace UserUpdateParams {
  export interface Address {
    country: string;

    locality: string;

    postalCode: string;

    region: string;

    streetAddress: string;
  }
}

export interface UserListParams {
  /**
   * Comma separated column names
   */
  columns:
    | 'id'
    | 'email'
    | 'name'
    | 'phone_number'
    | 'address'
    | 'locale'
    | 'email_verified'
    | 'phone_number_verified'
    | 'created_at'
    | 'updated_at';

  limit?: number;

  page?: number;

  sort?: 'asc' | 'desc';

  sortBy?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
  };
}
