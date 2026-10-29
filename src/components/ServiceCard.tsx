import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/imageUrl';

interface ServiceCardProps {
  name: string;
  description: string;
  image?: string;
  to: string;
  category?: string;
  price?: string;
  priceNote?: string;
  featured?: boolean;
  badge?: string;
}

export default function ServiceCard({
  name, description, image, to, category, price, priceNote, badge
}: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);
  const resolvedImage = getAssetUrl(image);

  return (
    <Link to={to} className="service-card block overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/2] bg-gradient-to-br from-ivory-100 via-ivory-200 to-cream flex items-center justify-center">
        {resolvedImage && !imgError ? (
          <img
            src={resolvedImage}
            alt={name}
            width={600}
            height={400}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ivory-200 to-cream flex items-center justify-center">
            <img src={getAssetUrl('/assets/logo.png')} alt="" className="h-12 w-auto opacity-20" />
          </div>
        )}
        {badge && (
          <div className="absolute top-2.5 left-2.5 z-20 bg-burgundy text-white text-[9px] font-sans font-medium px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
            {badge}
          </div>
        )}
        {category && (
          <div className="absolute top-2.5 right-2.5 z-20 bg-ivory-100/90 backdrop-blur-sm text-burgundy text-[9px] font-sans font-semibold px-2 py-0.5 rounded-full border border-rose-border shadow-sm">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        <h3 className="font-serif text-charcoal text-base font-semibold mb-1 group-hover:text-burgundy transition-colors leading-snug line-clamp-1">
          {name}
        </h3>
        <p className="font-sans text-taupe text-xs leading-relaxed line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between pt-1 border-t border-rose-border/40">
          <div>
            {price ? (
              <span className="font-sans text-burgundy text-xs font-semibold">{price}</span>
            ) : priceNote ? (
              <span className="font-sans text-taupe text-[11px] italic">{priceNote}</span>
            ) : null}
          </div>
          <span className="font-sans text-burgundy text-[11px] font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
            View Details <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}
