import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb { label: string; to?: string }

export default function Breadcrumb({ crumbs, light = false }: { crumbs: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className={`flex flex-wrap items-center gap-1.5 font-sans text-xs ${light ? 'text-ivory/70' : 'text-taupe'}`}>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} className={light ? 'text-ivory/40' : 'text-taupe/40'} />}
            {crumb.to ? (
              <Link
                to={crumb.to}
                className={light ? 'hover:text-gold-soft transition-colors' : 'hover:text-burgundy transition-colors'}
              >
                {crumb.label}
              </Link>
            ) : (
              <span className={`font-medium ${light ? 'text-white' : 'text-charcoal'}`}>
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
