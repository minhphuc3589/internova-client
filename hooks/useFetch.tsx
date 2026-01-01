

export const useFetch = async <T,>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
  }
  const data: T = await response.json();
  return data;
}