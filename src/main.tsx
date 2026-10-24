import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Global automatic resolution for static image URLs under GitHub Pages subpath
if (typeof window !== 'undefined') {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  if (cleanBase !== '/') {
    // 1. Hook HTMLImageElement.src
    const originalSrcDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
    if (originalSrcDesc && originalSrcDesc.set) {
      const originalSet = originalSrcDesc.set;
      Object.defineProperty(HTMLImageElement.prototype, 'src', {
        set(value: string) {
          if (typeof value === 'string' && (value.startsWith('/images/') || value.startsWith('/assets/'))) {
            if (!value.startsWith(cleanBase)) {
              value = cleanBase + value.slice(1);
            }
          }
          originalSet.call(this, value);
        },
        get: originalSrcDesc.get,
        configurable: true,
      });
    }

    // 2. Hook setAttribute
    const originalSetAttribute = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name: string, value: string) {
      if (
        name.toLowerCase() === 'src' &&
        typeof value === 'string' &&
        (value.startsWith('/images/') || value.startsWith('/assets/'))
      ) {
        if (!value.startsWith(cleanBase)) {
          value = cleanBase + value.slice(1);
        }
      }
      return originalSetAttribute.call(this, name, value);
    };
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
