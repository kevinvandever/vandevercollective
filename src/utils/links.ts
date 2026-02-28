import { LinkEntry } from '../types';
import { LINKS_DATA_URL } from '../config';

export async function fetchLinks(): Promise<LinkEntry[]> {
  const response = await fetch(LINKS_DATA_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch links: ${response.status}`);
  }
  const data = await response.json();
  if (!isValidLinksData(data)) {
    throw new Error('Invalid links data format');
  }
  return data;
}

export function isValidLinksData(data: unknown): data is LinkEntry[] {
  if (!Array.isArray(data)) return false;
  return data.every(
    (item) =>
      typeof item === 'object' &&
      item !== null &&
      typeof item.name === 'string' &&
      typeof item.description === 'string' &&
      typeof item.url === 'string' &&
      typeof item.category === 'string'
  );
}

export function getUniqueCategories(links: LinkEntry[]): string[] {
  return [...new Set(links.map((link) => link.category))].sort();
}

export function filterByCategory(links: LinkEntry[], category: string): LinkEntry[] {
  if (category === 'All') return links;
  return links.filter((link) => link.category === category);
}
