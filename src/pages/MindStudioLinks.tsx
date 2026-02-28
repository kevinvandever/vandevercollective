import { useState, useEffect, useCallback } from 'react';
import { Link2, AlertTriangle } from 'lucide-react';
import { fetchLinks, getUniqueCategories, filterByCategory } from '../utils/links';
import type { LinkEntry } from '../types';
import CategoryFilter from '../components/ui/CategoryFilter';
import LinksGrid from '../components/ui/LinksGrid';
import LoadingSpinner from '../components/ui/LoadingSpinner';

type PageState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; links: LinkEntry[] };

export default function MindStudioLinks() {
  const [state, setState] = useState<PageState>({ status: 'loading' });
  const [activeCategory, setActiveCategory] = useState('All');

  const loadLinks = useCallback(async () => {
    setState({ status: 'loading' });
    try {
      const links = await fetchLinks();
      setState({ status: 'success', links });
    } catch {
      setState({ status: 'error', message: 'Unable to load MindStudio tools. Please try again.' });
    }
  }, []);

  useEffect(() => {
    loadLinks();
  }, [loadLinks]);

  const categories = state.status === 'success' ? getUniqueCategories(state.links) : [];
  const filteredLinks =
    state.status === 'success' ? filterByCategory(state.links, activeCategory) : [];

  return (
    <div className="min-h-screen">
      {/* Gradient Header */}
      <section className="bg-gradient-to-br from-navy to-teal text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Link2 className="text-accent" size={28} />
              <span className="text-background/80 font-medium uppercase tracking-wider text-sm">
                MindStudio Tools
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              AI Tools &amp; Agents
            </h1>
            <p className="text-lg sm:text-xl text-background/90 leading-relaxed">
              Browse our curated collection of MindStudio AI tools and agents.
              Each one is built to solve real problems and streamline your
              workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {state.status === 'loading' && <LoadingSpinner />}

          {state.status === 'error' && (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <AlertTriangle className="text-accent" size={40} />
              <p className="text-lg text-navy font-medium">{state.message}</p>
              <button
                onClick={loadLinks}
                className="rounded-lg bg-accent px-6 py-3 text-white font-medium hover:bg-accent/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {state.status === 'success' && (
            <div className="flex flex-col gap-8">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />
              <LinksGrid links={filteredLinks} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
