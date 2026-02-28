import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CategoryFilter from './CategoryFilter';

describe('CategoryFilter', () => {
  const categories = ['Content Creation', 'Productivity', 'Analytics'];

  it('renders "All" button first followed by category buttons', () => {
    render(<CategoryFilter categories={categories} activeCategory="All" onChange={() => {}} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
    expect(buttons[0]).toHaveTextContent('All');
    expect(buttons[1]).toHaveTextContent('Content Creation');
    expect(buttons[2]).toHaveTextContent('Productivity');
    expect(buttons[3]).toHaveTextContent('Analytics');
  });

  it('highlights the active category button with accent styling', () => {
    render(<CategoryFilter categories={categories} activeCategory="Productivity" onChange={() => {}} />);

    const activeButton = screen.getByText('Productivity');
    expect(activeButton.className).toContain('bg-accent');
    expect(activeButton.className).toContain('text-white');

    const inactiveButton = screen.getByText('All');
    expect(inactiveButton.className).not.toContain('bg-accent');
  });

  it('highlights "All" when it is the active category', () => {
    render(<CategoryFilter categories={categories} activeCategory="All" onChange={() => {}} />);

    const allButton = screen.getByText('All');
    expect(allButton.className).toContain('bg-accent');
    expect(allButton.className).toContain('text-white');
  });

  it('calls onChange with the clicked category', () => {
    const onChange = vi.fn();
    render(<CategoryFilter categories={categories} activeCategory="All" onChange={onChange} />);

    fireEvent.click(screen.getByText('Productivity'));
    expect(onChange).toHaveBeenCalledWith('Productivity');
  });

  it('calls onChange with "All" when All button is clicked', () => {
    const onChange = vi.fn();
    render(<CategoryFilter categories={categories} activeCategory="Productivity" onChange={onChange} />);

    fireEvent.click(screen.getByText('All'));
    expect(onChange).toHaveBeenCalledWith('All');
  });

  it('renders with empty categories list (only All button)', () => {
    render(<CategoryFilter categories={[]} activeCategory="All" onChange={() => {}} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent('All');
  });
});
