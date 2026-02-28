import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LinksGrid from './LinksGrid';
import type { LinkEntry } from '../../types';

const sampleLinks: LinkEntry[] = [
  { name: 'Tool A', description: 'Desc A', url: 'https://example.com/a', category: 'Cat1' },
  { name: 'Tool B', description: 'Desc B', url: 'https://example.com/b', category: 'Cat2' },
  { name: 'Tool C', description: 'Desc C', url: 'https://example.com/c', category: 'Cat1' },
];

describe('LinksGrid', () => {
  it('renders a LinkCard for each link entry', () => {
    render(<LinksGrid links={sampleLinks} />);
    expect(screen.getByText('Tool A')).toBeInTheDocument();
    expect(screen.getByText('Tool B')).toBeInTheDocument();
    expect(screen.getByText('Tool C')).toBeInTheDocument();
  });

  it('renders nothing when links array is empty', () => {
    const { container } = render(<LinksGrid links={[]} />);
    const grid = container.firstChild as HTMLElement;
    expect(grid.children).toHaveLength(0);
  });

  it('applies responsive grid classes', () => {
    const { container } = render(<LinksGrid links={sampleLinks} />);
    const grid = container.firstChild as HTMLElement;
    expect(grid.className).toContain('grid-cols-1');
    expect(grid.className).toContain('sm:grid-cols-2');
    expect(grid.className).toContain('lg:grid-cols-3');
  });
});
