// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Users extends APIResource {
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/users', { body, ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
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

export declare namespace Users {
  export { type UserCreateParams as UserCreateParams };
}
