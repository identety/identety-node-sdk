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
});
