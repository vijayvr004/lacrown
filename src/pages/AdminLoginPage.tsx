import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, AlertCircle, Shield } from 'lucide-react';
import { checkAdminSession, setAdminSession, DEMO_ADMIN } from '../data/mockApi';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkAdminSession()) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email.trim() === DEMO_ADMIN.username && password === DEMO_ADMIN.password) {
        setAdminSession();
        navigate('/admin/dashboard');
      } else {
        setError('Invalid administrator email or password.');
        setLoading(false);
      }
    }, 600);
  };

  const handleFillDemo = () => {
    setEmail(DEMO_ADMIN.username);
    setPassword(DEMO_ADMIN.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-burgundy-wine p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-md w-full bg-white p-8 md:p-10 shadow-2xl border border-rose-border rounded-2xl relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-3">
            <img src="/assets/logo.png" alt="LA CROWN" className="h-16 w-auto mx-auto object-contain drop-shadow" />
          </Link>
          <h1 className="font-serif text-2xl text-charcoal">LA CROWN Administration</h1>
          <p className="font-sans text-xs text-taupe uppercase tracking-widest mt-1">
            Request Management Portal
          </p>
        </div>

        {/* Demo credentials notice */}
        <div className="bg-amber-50 border border-amber-200 p-3.5 mb-6 text-xs font-sans text-amber-800">
          <div className="flex items-center gap-1.5 font-semibold mb-1">
            <Shield size={14} className="text-amber-600" />
            <span>Development Authentication Mock</span>
          </div>
          <p className="mb-2 text-taupe leading-relaxed">
            In production, connected to server-side authentication with encrypted session tokens.
          </p>
          <button
            type="button"
            onClick={handleFillDemo}
            className="text-burgundy underline font-medium hover:text-gold"
          >
            Auto-fill demo credentials ({DEMO_ADMIN.username})
          </button>
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs p-3 mb-5 font-sans">
            <AlertCircle size={15} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="form-label text-xs">Administrator Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-taupe" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@lacrown.in"
                className="form-input pl-10 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="form-label text-xs">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-taupe" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="form-input pl-10 pr-10 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe hover:text-charcoal"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`btn-primary w-full text-xs py-3.5 tracking-wider uppercase ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
          </button>
        </form>

        <div className="mt-8 pt-4 border-t border-ivory-200 text-center">
          <Link to="/" className="font-sans text-xs text-taupe hover:text-burgundy">
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
