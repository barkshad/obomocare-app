import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { X, CheckCircle } from 'lucide-react';

export const Sponsorship: React.FC = () => {
  const { content } = useContent();
  const [selectedChild, setSelectedChild] = useState<any | null>(null);

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container">
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Programme profiles</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
            Our Programme Pillars
          </h1>
          <p style={{ color: 'rgba(0,0,0,0.55)', maxWidth: '48ch', marginInline: 'auto', lineHeight: 1.7 }}>
            Each pillar addresses a critical gap in the care continuum for vulnerable households in Kisii and Nyamira.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
          {content.children.map((child) => (
            <div
              key={child.id}
              onClick={() => setSelectedChild(child)}
              style={{ cursor: 'pointer', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.04)' }}
            >
              <img src={child.image} alt={child.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: 'var(--space-6)' }}>
                <div style={{ display: 'inline-block', padding: 'var(--space-1) var(--space-3)', background: 'var(--color-accent)', color: '#0A0A1A', fontSize: 'var(--text-xs)', fontWeight: 600, borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-3)' }}>
                  {child.dream}
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-2)' }}>{child.name}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(0,0,0,0.6)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>{child.bio}</p>
                <button className="btn btn--accent" style={{ width: '100%' }}>
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedChild && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4)', background: 'rgba(10,10,26,0.9)', overflowY: 'auto' }}
          onClick={() => setSelectedChild(null)}
        >
          <div
            style={{ background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', maxWidth: '36rem', width: '100%', overflow: 'hidden', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedChild(null)}
              style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', background: 'rgba(0,0,0,0.08)', border: 'none', cursor: 'pointer', color: '#0A0A1A', padding: 'var(--space-2)', borderRadius: '50%', display: 'flex', zIndex: 10 }}
            >
              <X size={20} />
            </button>
            {selectedChild.image && (
              <img src={selectedChild.image} alt={selectedChild.name} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
            )}
            <div style={{ padding: 'var(--space-8)' }}>
              <span style={{ display: 'inline-block', padding: 'var(--space-1) var(--space-3)', background: 'var(--color-accent)', color: '#0A0A1A', fontSize: 'var(--text-xs)', fontWeight: 600, borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-4)' }}>
                {selectedChild.dream}
              </span>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>{selectedChild.name}</h2>
              <p style={{ color: 'rgba(0,0,0,0.6)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>{selectedChild.bio}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
                {['Direct household support', 'Community volunteer caregivers', 'Transparent quarterly reporting'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', fontSize: 'var(--text-sm)', color: 'rgba(0,0,0,0.6)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
              <ReactRouterDOM.Link to="/get-involved" className="btn btn--accent" style={{ width: '100%', textAlign: 'center' }}>
                Support this pillar
              </ReactRouterDOM.Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

