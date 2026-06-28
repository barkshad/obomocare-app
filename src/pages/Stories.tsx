import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';

export const Stories: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container">
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Stories</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
            Impact Stories
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 'var(--space-8)' }}>
          {content.stories.map((story) => (
            <ReactRouterDOM.Link
              key={story.id}
              to={`/stories/${story.id}`}
              style={{ textDecoration: 'none', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.04)', display: 'block', transition: 'border-color 200ms ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.04)'; }}
            >
              <img src={story.image} alt={story.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>{story.category}</span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(0,0,0,0.4)' }}>{story.date}</span>
              </div>
              <div style={{ padding: 'var(--space-6)' }}>
                <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-3)' }}>{story.title}</h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(0,0,0,0.6)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>{story.excerpt}</p>
<ReactRouterDOM.Link to={`/stories/${story.id}`} style={{ color: 'var(--color-secondary)', fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'none' }}>Read full story &rarr;</ReactRouterDOM.Link>
        </div>
      </ReactRouterDOM.Link>
          ))}
        </div>
      </div>
    </div>
  );
};

