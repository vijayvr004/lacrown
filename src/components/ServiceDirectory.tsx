import { useState, useMemo } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { AESTHETIC_SERVICES, AESTHETIC_CATEGORIES } from '../data/aestheticServices';
import { SALON_SERVICES, SALON_CATEGORIES } from '../data/salonServices';
import ServiceCard from './ServiceCard';

type Tab = 'all' | 'aesthetic' | 'salon';

export default function ServiceDirectory() {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<Tab>('all');
  const [category, setCategory] = useState('all');

  const allServices = useMemo(() => [
    ...AESTHETIC_SERVICES.map((s) => ({ ...s, type: 'aesthetic' as const })),
    ...SALON_SERVICES.map((s) => ({ ...s, type: 'salon' as const, overview: s.description, featured: s.featured ?? false })),
  ], []);

  const categories = useMemo(() => {
    if (tab === 'aesthetic') return AESTHETIC_CATEGORIES;
    if (tab === 'salon') return SALON_CATEGORIES;
    return [
      ...AESTHETIC_CATEGORIES.map((c) => ({ ...c, label: `Clinic: ${c.name}` })),
      ...SALON_CATEGORIES.map((c) => ({ ...c, label: `Salon: ${c.name}` })),
    ];
  }, [tab]);

  const filtered = useMemo(() => {
    return allServices.filter((s) => {
      const matchesTab = tab === 'all' || s.type === tab;
      const matchesCategory = category === 'all' || s.categorySlug === category;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q);
      return matchesTab && matchesCategory && matchesQuery;
    });
  }, [allServices, tab, category, query]);

  const getServiceUrl = (s: typeof allServices[0]) => {
    if (s.type === 'aesthetic') return `/aesthetic-clinic/${s.slug}`;
    return `/salon/${s.slug}`;
  };

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-taupe" />
        <input
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setCategory('all'); }}
          placeholder="Search treatments and services…"
          className="form-input pl-12 pr-12"
          aria-label="Search services"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-taupe hover:text-burgundy"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Tab filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(['all', 'aesthetic', 'salon'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setCategory('all'); }}
            className={`px-5 py-2 font-sans text-xs uppercase tracking-wider font-semibold rounded-full border transition-all ${
              tab === t
                ? 'bg-burgundy text-white border-burgundy shadow-sm'
                : 'bg-white text-charcoal border-rose-border hover:border-burgundy hover:text-burgundy'
            }`}
          >
            {t === 'all' ? 'All Services' : t === 'aesthetic' ? 'Aesthetic Clinic' : 'Salon'}
          </button>
        ))}
      </div>

      {/* Category filter */}
      <div className="flex items-center gap-2 mb-6">
        <Filter size={15} className="text-taupe flex-shrink-0" />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-sans font-medium rounded-full border transition-all ${
              category === 'all'
                ? 'bg-burgundy text-white border-burgundy'
                : 'bg-white text-charcoal/80 border-rose-border hover:border-burgundy hover:text-burgundy'
            }`}
          >
            All Categories
          </button>
          {categories.slice(0, 12).map((c) => (
            <button
              key={c.slug}
              onClick={() => setCategory(c.slug)}
              className={`px-3.5 py-1.5 text-xs font-sans font-medium rounded-full border transition-all ${
                category === c.slug
                  ? 'bg-burgundy text-white border-burgundy'
                  : 'bg-white text-charcoal/80 border-rose-border hover:border-burgundy hover:text-burgundy'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 font-sans text-sm text-taupe">
        {filtered.length} service{filtered.length !== 1 ? 's' : ''} found
        {query && <span> for "<strong>{query}</strong>"</span>}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((s) => (
            <ServiceCard
              key={s.id}
              name={s.name}
              description={s.description}
              image={s.image}
              to={getServiceUrl(s)}
              category={s.type === 'aesthetic' ? 'Aesthetic Clinic' : 'Salon'}
              priceNote={s.priceNote || 'Contact us for pricing'}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-ivory-300">
          <div className="font-serif text-charcoal text-xl mb-2">No services found</div>
          <p className="font-sans text-taupe text-sm mb-4">
            Try a different search term or browse by category.
          </p>
          <button
            onClick={() => { setQuery(''); setCategory('all'); setTab('all'); }}
            className="btn-secondary text-xs"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
