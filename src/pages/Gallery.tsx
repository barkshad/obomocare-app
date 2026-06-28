import React, { useState, useMemo } from 'react';
import { useContent } from '../contexts/ContentContext';
import { X, ZoomIn, Play, Film } from 'lucide-react';
import { MediaItem } from '../config/types';

export const Gallery: React.FC = () => {
  const { content } = useContent();
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = content.gallery.length > 0 ? ['All', ...Array.from(new Set(content.gallery.map(item => item.category)))] : ['All'];

  const filteredItems = useMemo(() => {
    if (filter === 'All') return content.gallery;
    return content.gallery.filter(item => item.category === filter);
  }, [content.gallery, filter]);

  return (
    <div className="section" style={{ background: '#FFFFFF', paddingTop: '6rem' }}>
      <div className="container">
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Gallery</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#0A0A1A', marginBottom: 'var(--space-4)' }}>
            Our Gallery
          </h1>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-10)' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'btn btn--accent' : 'btn'}
              style={filter !== cat ? { background: 'rgba(0,0,0,0.04)', borderColor: 'transparent' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{ aspectRatio: '1', borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer', background: 'var(--surface-light)', position: 'relative' }}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'video' ? (
                <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000' }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <div style={{ width: 48, height: 48, background: 'rgba(0,0,0,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={20} style={{ color: '#0A0A1A', marginLeft: 2 }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)', background: 'rgba(0,0,0,0.6)', color: '#0A0A1A', padding: '2px 8px', borderRadius: '4px', fontSize: 'var(--text-xs)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Film size={10} /> Video
                  </div>
                </div>
              ) : (
                <img src={item.url} alt={item.category} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,26,0)', transition: 'background 300ms ease', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(10,10,26,0.6)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(10,10,26,0)'; (e.currentTarget as HTMLElement).style.opacity = '0'; }}
              >
                <div style={{ textAlign: 'center', color: '#0A0A1A' }}>
                  <ZoomIn size={24} style={{ margin: '0 auto var(--space-2)' }} />
                  <span style={{ fontWeight: 600, fontSize: 'var(--text-xs)', textTransform: 'uppercase' }}>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4)', background: 'rgba(10,10,26,0.95)' }}
          onClick={() => setSelectedItem(null)}
        >
          <button
            style={{ position: 'absolute', top: 'var(--space-6)', right: 'var(--space-6)', background: 'none', border: 'none', cursor: 'pointer', color: '#0A0A1A', padding: 'var(--space-2)' }}
            onClick={() => setSelectedItem(null)}
          >
            <X size={24} />
          </button>
          <div style={{ position: 'relative', maxWidth: '64rem', width: '100%', maxHeight: '85vh' }} onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <video src={selectedItem.url} style={{ width: '100%', maxHeight: '85vh', borderRadius: 'var(--radius-md)' }} controls autoPlay />
            ) : (
              <img src={selectedItem.url} alt={selectedItem.category} style={{ width: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: 'var(--radius-md)' }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

