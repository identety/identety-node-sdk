// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Identety from 'identety';
import { Response } from 'node-fetch';

const client = new Identety({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource clients', () => {
  test('create: only required params', async () => {
    const responsePromise = client.clients.create({ name: 'name', type: 'public' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.clients.create({
      name: 'name',
      type: 'public',
      allowedGrants: ['authorization_code'],
      allowedScopes: ['string'],
      redirectUris: ['string'],
      settings: {},
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.clients.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.clients.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Identety.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.clients.update('id', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.clients.update('id', {
      name: 'name',
      allowedGrants: ['authorization_code'],
      allowedScopes: ['string'],
      redirectUris: ['string'],
      settings: {},
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.clients.list({ columns: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.clients.list({
      columns: 'id',
      limit: 0,
      page: 0,
      sort: 'asc',
      sortBy: 'sortBy',
    });
  });

  test('delete', async () => {
    const responsePromise = client.clients.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.clients.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Identety.NotFoundError,
    );
  });
});
