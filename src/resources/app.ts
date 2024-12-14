// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class App extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}
