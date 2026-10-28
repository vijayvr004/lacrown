import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAssetUrl } from '../utils/imageUrl';

interface LuxuryCurtainContextValue {
  navigateWithCurtain: (to: string) => void;
  isTransitioning: boolean;
}

const LuxuryCurtainContext = createContext<LuxuryCurtainContextValue>({
  navigateWithCurtain: () => {},
  isTransitioning: false,
});

export const useLuxuryCurtain = () => useContext(LuxuryCurtainContext);

type TransitionPhase = 'idle' | 'covering' | 'covered' | 'revealing';

export default function LuxuryCurtainTransition() {
  const navigate = useNavigate();
  const location = useLocation();

  const [phase, setPhase] = useState<TransitionPhase>('idle');
  const isTransitioningRef = useRef(false);

  const coverTimerRef = useRef<number | null>(null);
  const revealTimerRef = useRef<number | null>(null);
  const safetyTimerRef = useRef<number | null>(null);

  // Clear all timers
  const clearAllTimers = useCallback(() => {
    if (coverTimerRef.current) window.clearTimeout(coverTimerRef.current);
    if (revealTimerRef.current) window.clearTimeout(revealTimerRef.current);
    if (safetyTimerRef.current) window.clearTimeout(safetyTimerRef.current);
    coverTimerRef.current = null;
    revealTimerRef.current = null;
    safetyTimerRef.current = null;
  }, []);

  // Reset to idle state safely
  const resetToIdle = useCallback(() => {
    clearAllTimers();
    setPhase('idle');
    isTransitioningRef.current = false;
  }, [clearAllTimers]);

  // Main navigation orchestration function
  const navigateWithCurtain = useCallback((destination: string) => {
    // 1. Guard against duplicate rapid clicks
    if (isTransitioningRef.current) return;

    // 2. Check reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      navigate(destination);
      return;
    }

    clearAllTimers();
    isTransitioningRef.current = true;

    // PHASE 1 & 2: CURTAIN COVER (Left to Right)
    setPhase('covering');

    // Fail-safe timeout (max 2 seconds) to ensure the curtain never gets stuck under any circumstance
    safetyTimerRef.current = window.setTimeout(() => {
      resetToIdle();
    }, 2000);

    // After cover phase finishes (500ms):
    coverTimerRef.current = window.setTimeout(() => {
      setPhase('covered');

      // PHASE 3: ROUTE NAVIGATION BEHIND THE CURTAIN
      navigate(destination);

      // Handle optional hash navigation after route update
      const hashIndex = destination.indexOf('#');
      if (hashIndex !== -1) {
        const hash = destination.slice(hashIndex);
        window.setTimeout(() => {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }

      // Small delay to allow React to paint the destination page before opening
      requestAnimationFrame(() => {
        window.setTimeout(() => {
          // PHASE 4: CURTAIN REVEAL (Continuing Left to Right)
          setPhase('revealing');

          revealTimerRef.current = window.setTimeout(() => {
            resetToIdle();
          }, 520);
        }, 40);
      });
    }, 500);
  }, [navigate, clearAllTimers, resetToIdle]);

  // Global click interception on internal links
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // 1. If currently animating, block further navigation clicks
      if (isTransitioningRef.current) {
        const target = e.target as HTMLElement | null;
        if (target?.closest('a')) {
          e.preventDefault();
          e.stopPropagation();
        }
        return;
      }

      // 2. Ignore non-primary or modified clicks (Ctrl, Cmd, Shift, Alt, middle-click)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      // 3. Find closest anchor tag
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      // 4. Ignore target="_blank", download, rel="external", mailto, tel, javascript
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;

      // 5. Parse destination URL
      let targetUrl: URL;
      try {
        targetUrl = new URL(href, window.location.href);
      } catch {
        return;
      }

      // 6. Ignore external domains
      if (targetUrl.origin !== window.location.origin) return;

      // 7. Resolve relative route path using Vite base URL
      const base = import.meta.env.BASE_URL || '/';
      let targetPath = targetUrl.pathname;
      const cleanBase = base.replace(/\/$/, '');
      if (cleanBase && targetPath.startsWith(cleanBase)) {
        targetPath = targetPath.slice(cleanBase.length) || '/';
      }
      const destination = targetPath + targetUrl.search + targetUrl.hash;

      // 8. Handle same-page links & same-page hash anchors
      if (targetPath === location.pathname && targetUrl.search === location.search) {
        if (targetUrl.hash) {
          // Pure in-page anchor jump — let native smooth scrolling proceed without curtain
          return;
        }
        // Identical URL click — prevent unnecessary reload
        e.preventDefault();
        return;
      }

      // 9. Check reduced-motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      // 10. Valid internal route transition: intercept and start Luxury Curtain
      e.preventDefault();
      e.stopPropagation();
      navigateWithCurtain(destination);
    };

    // Attach in capture phase to reliably intercept navigation before internal bubbling handlers
    document.addEventListener('click', handleDocumentClick, true);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, [location, navigateWithCurtain]);

  // Clean up all timers on unmount
  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

  const isActive = phase !== 'idle';

  return (
    <LuxuryCurtainContext.Provider
      value={{
        navigateWithCurtain,
        isTransitioning: isActive,
      }}
    >
      <div
        className={`luxury-curtain-overlay ${isActive ? 'active' : ''}`}
        data-phase={phase}
        aria-hidden="true"
      >
        {/* Secondary Accent Panel (Deep Wine with Champagne Gold leading edge) */}
        <div className="luxury-curtain-panel luxury-curtain-secondary" />

        {/* Primary Luxury Curtain (Brand Burgundy with Center Royal Crest Logo) */}
        <div className="luxury-curtain-panel luxury-curtain-primary flex flex-col items-center justify-center select-none pointer-events-none">
          <div className="flex flex-col items-center justify-center text-center px-6 max-w-xl">
            <img
              src={getAssetUrl('/assets/logo.png')}
              alt="LA CROWN Crest"
              className="h-28 sm:h-40 md:h-52 lg:h-60 w-auto object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)] mb-4 animate-fade-in transition-all duration-300"
              loading="eager"
            />
            <div className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.25em] uppercase font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              LA CROWN
            </div>
            <div className="w-20 sm:w-28 md:w-36 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent my-3 sm:my-4 opacity-90" />
            <div className="font-sans text-gold-200 text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase font-semibold drop-shadow-sm">
              Luxury Aesthetic Clinic & Salon
            </div>
          </div>
        </div>
      </div>
    </LuxuryCurtainContext.Provider>
  );
}
