import { ExternalLink } from 'lucide-react';
import type { LinkEntry } from '../../types';

interface LinkCardProps {
  link: LinkEntry;
}

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-bold text-navy">{link.name}</h3>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-accent hover:text-teal transition-colors"
          aria-label={`Open ${link.name} in new tab`}
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="text-teal text-sm leading-relaxed mb-4">{link.description}</p>
      <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-medium text-navy">
        {link.category}
      </span>
    </div>
  );
}
