import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { ArrowLeft } from 'lucide-react';

export const ProgramDetail: React.FC = () => {
  const { id } = ReactRouterDOM.useParams<{ id: string }>();
  const { content } = useContent();

  const program = content.programs.find(p => p.id === id);

  if (!program) {
    return <ReactRouterDOM.Navigate to="/programs" replace />;
  }

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container">
        <ReactRouterDOM.Link to="/programs" className="btn btn--ghost" style={{ marginBottom: 'var(--space-8)' }}>
          <ArrowLeft size={16} /> All programmes
        </ReactRouterDOM.Link>

        <img src={program.image} alt={program.title} style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-8)' }} />

        <div className="features-head">
          <div className="features-head__tag">{program.stats}</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-6)' }}>
            {program.title}
          </h1>
        </div>

        <div style={{ maxWidth: '48rem', padding: 'var(--space-10)', background: 'var(--surface-light)', borderRadius: 'var(--radius-md)' }}>
          <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>About this pillar</h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'rgba(0,0,0,0.72)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
            {program.description}
          </p>
        </div>

        <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-10)', background: 'var(--color-accent)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>Support this pillar</h3>
          <p style={{ color: '#0A0A1A', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
            Your contribution directly supports the {program.title} initiative. Help us reach more households in Kisii and Nyamira Counties.
          </p>
          <ReactRouterDOM.Link to="/get-involved" className="btn btn--light">
            Support programme
          </ReactRouterDOM.Link>
        </div>
      </div>
    </div>
  );
};

