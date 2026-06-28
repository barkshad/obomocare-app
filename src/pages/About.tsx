import React from 'react';
import { useContent } from '../contexts/ContentContext';
import * as ReactRouterDOM from 'react-router-dom';

export const About: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container">

        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Who we are</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A' }}>
            About OBOMOCARE
          </h1>
        </div>

        <div className="split-layout" style={{ marginBottom: 'var(--space-16)' }}>
          <div style={{ padding: 'var(--space-10)', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              <svg viewBox="0 0 40 40" width="32" height="32"><path d="M20 4 C14 10 12 26 20 34 C28 26 26 10 20 4 Z" fill="var(--color-secondary)" /></svg>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 0 }}>Our Mission</h2>
            </div>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(0,0,0,0.72)', lineHeight: 1.7 }}>{content.about.mission}</p>
          </div>
          <div style={{ padding: 'var(--space-10)', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
              <svg viewBox="0 0 40 40" width="32" height="32"><path d="M20 4 C14 10 12 26 20 34 C28 26 26 10 20 4 Z" fill="var(--color-accent)" /></svg>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 0 }}>Our Vision</h2>
            </div>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(0,0,0,0.72)', lineHeight: 1.7 }}>{content.about.vision}</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-10)', alignItems: 'flex-start', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-10)', marginBottom: 'var(--space-16)', border: '1px solid rgba(0,0,0,0.06)' }}>
          {content.about.founderImage && (
            <div style={{ flexShrink: 0 }}>
              <img
                src={content.about.founderImage}
                alt="Founder"
                style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '2px solid rgba(0,0,0,0.06)' }}
              />
            </div>
          )}
          <div>
            <div style={{ display: 'inline-block', padding: 'var(--space-1) var(--space-3)', background: 'var(--color-secondary)', color: '#fff', fontSize: 'var(--text-xs)', fontWeight: 600, borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-4)' }}>
              Our founder's story
            </div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-4)', lineHeight: 1.3 }}>
              From a single neighbour to a movement
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: 'rgba(0,0,0,0.72)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
              {content.about.founderStory}
            </p>
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <svg viewBox="0 0 40 40" width="28" height="28"><path d="M20 4 C14 10 12 26 20 34 C28 26 26 10 20 4 Z" fill="var(--color-secondary)" opacity="0.7" /></svg>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', opacity: 0.6, marginBottom: 'var(--space-1)' }}>Motto</div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-secondary)', letterSpacing: '0.04em' }}>Care. Unity. Dignity.</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-16)' }}>
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">What guides us</div>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
              Our Core Values
            </h2>
            <p style={{ color: 'rgba(0,0,0,0.55)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7 }}>
              Principles that shape every decision we make and every visit we carry out.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-4)' }}>
            {content.about.values.map((value, idx) => (
              <span
                key={idx}
                style={{
                  padding: 'var(--space-4) var(--space-8)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  background: 'var(--surface-light)',
                  color: '#0A0A1A',
                  border: '1px solid rgba(0,0,0,0.08)',
                  maxWidth: '20rem',
                  lineHeight: 1.5,
                  textAlign: 'center',
                }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div style={{ padding: 'var(--space-16)', background: 'var(--color-secondary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-6)' }}>
            <div style={{ padding: 'var(--space-3)', background: 'rgba(255,255,255,0.15)', borderRadius: 'var(--radius-md)' }}>
              <svg viewBox="0 0 40 40" width="28" height="28"><path d="M20 4 C14 10 12 26 20 34 C28 26 26 10 20 4 Z" fill="white" opacity="0.95" /></svg>
            </div>
          </div>
          <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>
            Join our mission
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '42ch', margin: '0 auto var(--space-8)', lineHeight: 1.7 }}>
            Whether you volunteer, donate, or spread the word, your support helps us close the gaps that leave vulnerable households behind.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ReactRouterDOM.Link to="/get-involved" className="btn btn--light">
              Get involved
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/programs" className="btn btn--outline">
              View programmes
            </ReactRouterDOM.Link>
          </div>
        </div>

      </div>
    </div>
  );
};

