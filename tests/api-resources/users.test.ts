// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Identety from 'identety';
import { Response } from 'node-fetch';

const client = new Identety({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('create: only required params', async () => {
    const responsePromise = client.users.create({
      address: {
        country: 'USA',
        locality: 'New York',
        postalCode: '10001',
        region: 'NY',
        streetAddress: '123 Main St',
      },
      email: 'john@example.com',
      familyName: 'Doe',
      givenName: 'John',
      locale: 'en-US',
      metadata: { customField: 'value' },
      name: 'John Doe',
      password: 'password123',
      picture: 'https://example.com/photo.jpg',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.users.create({
      address: {
        country: 'USA',
        locality: 'New York',
        postalCode: '10001',
        region: 'NY',
        streetAddress: '123 Main St',
      },
      email: 'john@example.com',
      familyName: 'Doe',
      givenName: 'John',
      locale: 'en-US',
      metadata: { customField: 'value' },
      name: 'John Doe',
      password: 'password123',
      picture: 'https://example.com/photo.jpg',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.users.retrieve('id');
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
    await expect(client.users.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Identety.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.users.update('id', {
      address: {
        country: 'USA',
        locality: 'New York',
        postalCode: '10001',
        region: 'NY',
        streetAddress: '123 Main St',
      },
      familyName: 'Doe',
      givenName: 'John',
      locale: 'en-US',
      metadata: { customField: 'value' },
      name: 'John Doe',
      picture: 'https://example.com/photo.jpg',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.users.update('id', {
      address: {
        country: 'USA',
        locality: 'New York',
        postalCode: '10001',
        region: 'NY',
        streetAddress: '123 Main St',
      },
      familyName: 'Doe',
      givenName: 'John',
      locale: 'en-US',
      metadata: { customField: 'value' },
      name: 'John Doe',
      picture: 'https://example.com/photo.jpg',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.users.list({ columns: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.users.list({
      columns: 'id',
      limit: 0,
      page: 0,
      sort: 'asc',
      sortBy: 'sortBy',
    });
  });

  test('delete', async () => {
    const responsePromise = client.users.delete('id');
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
    await expect(client.users.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Identety.NotFoundError,
    );
  });
});
