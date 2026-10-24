import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory-100 py-16 px-4">
      <div className="max-w-md w-full text-center bg-white border border-ivory-300 p-10 shadow-card">
        <div className="font-serif text-6xl text-burgundy font-bold mb-3">404</div>
        <h1 className="font-serif text-2xl text-charcoal mb-3">Page Not Found</h1>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-5" />
        <p className="font-sans text-sm text-taupe leading-relaxed mb-8">
          The page or treatment service you are looking for may have been relocated, updated, or does not exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary text-xs flex items-center justify-center gap-1.5">
            <Home size={14} /> Back to Homepage
          </Link>
          <Link to="/services" className="btn-secondary text-xs flex items-center justify-center gap-1.5">
            <Search size={14} /> Search Services
          </Link>
        </div>
      </div>
    </div>
  );
}
