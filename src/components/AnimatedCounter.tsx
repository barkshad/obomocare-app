import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  prefix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '', label, duration = 2000, prefix = '' }) => {
  const [display, setDisplay] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [visible, value, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm stat"
      style={{ border: '1px solid rgba(0,0,0,0.06)', transition: 'opacity 0.5s ease', opacity: visible ? 1 : 0 }}
    >
      <span className="stat__number">
        {prefix}{display.toLocaleString()}{suffix}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  );
};
