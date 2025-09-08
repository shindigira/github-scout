/**
 * HTTP utilities for fetch wrappers with revalidation and tags
 */

interface FetchOptions extends RequestInit {
  tags?: string[];
  revalidate?: number | false;
}

export async function httpGet<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { tags, revalidate, ...fetchOptions } = options;
  
  const response = await fetch(url, {
    method: 'GET',
    ...fetchOptions,
    next: {
      tags,
      revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function httpPost<T>(
  url: string,
  data: any,
  options: FetchOptions = {}
): Promise<T> {
  const { tags, revalidate, ...fetchOptions } = options;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    body: JSON.stringify(data),
    ...fetchOptions,
    next: {
      tags,
      revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
