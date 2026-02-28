import type { LinkEntry } from '../../types';
import LinkCard from './LinkCard';

interface LinksGridProps {
  links: LinkEntry[];
}

export default function LinksGrid({ links }: LinksGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link) => (
        <LinkCard key={link.url} link={link} />
      ))}
    </div>
  );
}
