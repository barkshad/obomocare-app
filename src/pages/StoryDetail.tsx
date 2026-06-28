import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export const StoryDetail: React.FC = () => {
  const { id } = ReactRouterDOM.useParams<{ id: string }>();
  const { content } = useContent();

  const story = content.stories.find((s: any) => s.id === id);

  if (!story) {
    return <ReactRouterDOM.Navigate to="/stories" replace />;
  }

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container" style={{ maxWidth: '48rem' }}>
        <ReactRouterDOM.Link to="/stories" className="btn btn--ghost" style={{ marginBottom: 'var(--space-8)' }}>
          <ArrowLeft size={16} /> All stories
        </ReactRouterDOM.Link>

        <img src={story.image} alt={story.title} style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-8)' }} />

        <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          <span style={{ padding: 'var(--space-1) var(--space-3)', background: 'var(--color-accent)', color: '#0A0A1A', fontSize: 'var(--text-xs)', fontWeight: 600, borderRadius: 'var(--radius-pill)' }}>
            {story.category}
          </span>
        </div>

        <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)', lineHeight: 1.1 }}>
          {story.title}
        </h1>

        <div style={{ display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-10)', color: 'rgba(0,0,0,0.5)', fontSize: 'var(--text-sm)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <User size={14} /> {story.author}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Calendar size={14} /> {story.date}
          </span>
        </div>

        <div style={{ padding: 'var(--space-10)', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-10)' }}>
          <p style={{ fontSize: 'var(--text-base)', color: '#0A0A1A', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
            {story.content}
          </p>
        </div>

        <div style={{ padding: 'var(--space-10)', background: 'var(--color-accent)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
            Support stories like this
          </h3>
          <p style={{ color: '#0A0A1A', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
            Every story represents a real household we have walked with. Your contribution helps us reach more families.
          </p>
          <ReactRouterDOM.Link to="/get-involved" className="btn btn--light">
            Get involved
          </ReactRouterDOM.Link>
        </div>
      </div>
    </div>
  );
};

