interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onChange }: CategoryFilterProps) {
  const allCategories = ['All', ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-accent text-white'
              : 'bg-navy/10 text-navy hover:bg-teal/20 hover:text-teal'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
