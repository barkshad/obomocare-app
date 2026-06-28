import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else {
          if (!once) setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const getTransform = () => {
    if (!visible) {
      switch (direction) {
        case 'up': return 'translateY(40px)';
        case 'down': return 'translateY(-40px)';
        case 'left': return 'translateX(-40px)';
        case 'right': return 'translateX(40px)';
        case 'none': return 'none';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export const Stagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  baseDelay?: number;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}> = ({ children, className = '', style, baseDelay = 0, staggerDelay = 0.08, direction = 'up' }) => {
  const items = React.Children.toArray(children);
  return (
    <div className={className} style={style}>
      {items.map((child, i) => (
        <Reveal key={i} delay={baseDelay + i * staggerDelay} direction={direction}>
          {child}
        </Reveal>
      ))}
    </div>
  );
};
