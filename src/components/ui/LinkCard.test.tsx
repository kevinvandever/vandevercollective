import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LinkCard from './LinkCard';
import type { LinkEntry } from '../../types';

const sampleLink: LinkEntry = {
  name: 'AI Content Writer',
  description: 'Generate blog posts and marketing copy with AI.',
  url: 'https://app.mindstudio.ai/tool/writer',
  category: 'Content Creation',
};

describe('LinkCard', () => {
  it('renders the link name as a heading', () => {
    render(<LinkCard link={sampleLink} />);
    expect(screen.getByText('AI Content Writer')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<LinkCard link={sampleLink} />);
    expect(screen.getByText('Generate blog posts and marketing copy with AI.')).toBeInTheDocument();
  });

  it('renders the category as a badge', () => {
    render(<LinkCard link={sampleLink} />);
    expect(screen.getByText('Content Creation')).toBeInTheDocument();
  });

  it('renders an external link with correct href', () => {
    render(<LinkCard link={sampleLink} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://app.mindstudio.ai/tool/writer');
  });

  it('opens link in a new tab with security attributes', () => {
    render(<LinkCard link={sampleLink} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has an accessible label on the external link', () => {
    render(<LinkCard link={sampleLink} />);
    const link = screen.getByLabelText('Open AI Content Writer in new tab');
    expect(link).toBeInTheDocument();
  });
});
