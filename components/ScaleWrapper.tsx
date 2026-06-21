'use client';

import { useEffect, useRef } from 'react';

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;

export default function ScaleWrapper({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scale = Math.min(
        window.innerWidth / DESIGN_WIDTH,
        window.innerHeight / DESIGN_HEIGHT
      );
      if (innerRef.current) {
        innerRef.current.style.transform = `scale(${scale})`;
      }
      if (outerRef.current) {
        outerRef.current.style.height = `${DESIGN_HEIGHT * scale}px`;
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div
      ref={outerRef}
      style={{ width: '100vw', overflow: 'hidden', background: 'var(--color-bg)' }}
    >
      <div
        ref={innerRef}
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}
