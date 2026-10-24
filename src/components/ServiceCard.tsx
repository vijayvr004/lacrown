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
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-ivory-200">
        {resolvedImage && !imgError ? (
          <img
            src={resolvedImage}
            alt={name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ivory-200 to-cream flex items-center justify-center">
            <img src={getAssetUrl('/assets/logo.png')} alt="" className="h-16 w-auto opacity-20" />
          </div>
        )}
        {badge && (
          <div className="absolute top-3 left-3 bg-burgundy text-white text-[10px] font-sans font-medium px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {badge}
          </div>
        )}
        {category && (
          <div className="absolute top-3 right-3 bg-ivory-100/90 backdrop-blur-sm text-burgundy text-[10px] font-sans font-semibold px-2.5 py-0.5 rounded-full border border-rose-border shadow-sm">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-charcoal text-lg font-semibold mb-2 group-hover:text-burgundy transition-colors leading-tight">
          {name}
        </h3>
        <p className="font-sans text-taupe text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            {price ? (
              <span className="font-sans text-burgundy text-sm font-semibold">{price}</span>
            ) : priceNote ? (
              <span className="font-sans text-taupe text-xs italic">{priceNote}</span>
            ) : null}
          </div>
          <span className="font-sans text-burgundy text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
