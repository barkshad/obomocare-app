import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = false }) => {
  return (
    <div
      className={className}
      style={{
        background: 'var(--surface-white)',
        border: '1px solid var(--ink-100)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: hoverEffect ? 'transform 200ms ease, box-shadow 200ms ease' : 'none',
      }}
    >
      {children}
    </div>
  );
};

