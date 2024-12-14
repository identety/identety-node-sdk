// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Roles extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/role/${id}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
