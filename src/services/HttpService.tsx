import { generateClient } from "aws-amplify/data";
// TODO: Update the import path below to the correct location of your Schema type.
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

export function createCustomer(data: { firstName: string; lastName: string; email: string; password: string }) {
  return client.models.Customer.create(data);
}

export async function fetchData(url: string, method: string = 'GET', body: unknown = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchDataWithAuth(url: string, method: string = 'GET', body: unknown = null) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}   

export async function postData(url: string, body: unknown) {
  return fetchData(url, 'POST', body);
}