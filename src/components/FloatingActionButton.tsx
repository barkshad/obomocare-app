import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Heart, ChevronUp } from 'lucide-react';

export const FloatingActionButton: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShowScroll(window.scrollY > 500);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ReactRouterDOM.Link
        to="/get-involved"
        className="anim-glow"
        style={{
          position: 'fixed',
          bottom: 'var(--space-6)',
          left: 'var(--space-6)',
          zIndex: 49,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          padding: 'var(--space-3) var(--space-5)',
          background: 'var(--color-accent)',
          color: '#0A0A1A',
          fontWeight: 700,
          fontSize: 'var(--text-sm)',
          borderRadius: 'var(--radius-pill)',
          textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(232,117,26,0.35)',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 200ms ease, box-shadow 200ms ease',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
        aria-label="Support OBOMOCARE"
      >
        <Heart size={16} fill="#0A0A1A" />
        <span style={{ letterSpacing: '0.02em' }}>Donate</span>
      </ReactRouterDOM.Link>

      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: 'var(--space-6)',
            right: 'var(--space-6)',
            zIndex: 49,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.12)',
            cursor: 'pointer',
            transition: 'background 200ms ease, opacity 300ms ease',
            opacity: showScroll ? 1 : 0,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
};
