'use client';

import { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

const GRID_SPACING = 8;
const NOISE_SCALE = 0.005;
const TIME_SPEED = 0.018;
// Direction the noise field scrolls — creates the fluid "moving" feel
const FLOW_X = 0.7;
const FLOW_Y = 0.25;
const BASE_SIZE = 2;
const MAX_SIZE = 4;
const MOUSE_RADIUS = 100;
const OPACITY_THRESHOLD = 0.28;

interface Dot {
  x: number;
  y: number;
}

export default function DotGridBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Two noise layers at different scales/speeds for turbulent fluid look
    const noise2D_a = createNoise2D();
    const noise2D_b = createNoise2D();

    let dots: Dot[] = [];
    let time = 0;
    let rafId: number;
    const mouse = { x: -9999, y: -9999 };

    const buildGrid = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      ctx.imageSmoothingEnabled = false;
      dots = [];
      const offsetX = Math.round((W % GRID_SPACING) / 2);
      const offsetY = Math.round((H % GRID_SPACING) / 2);
      const cols = Math.ceil(W / GRID_SPACING) + 1;
      const rows = Math.ceil(H / GRID_SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: offsetX + c * GRID_SPACING, y: offsetY + r * GRID_SPACING });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const tX = time * FLOW_X;
      const tY = time * FLOW_Y;

      for (const dot of dots) {
        const nx = dot.x * NOISE_SCALE;
        const ny = dot.y * NOISE_SCALE;

        // Layer A scrolls in the main flow direction
        const a = noise2D_a(nx + tX, ny + tY);
        // Layer B scrolls at a different speed/angle for turbulence
        const b = noise2D_b(nx * 1.8 - tX * 0.4, ny * 1.8 + tY * 0.6);

        const n = a * 0.65 + b * 0.35;
        const norm = (n + 1) / 2;

        let opacity = norm < OPACITY_THRESHOLD ? 0 : (norm - OPACITY_THRESHOLD) / (1 - OPACITY_THRESHOLD);
        let size = BASE_SIZE + (MAX_SIZE - BASE_SIZE) * norm;

        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS) {
          const boost = 1 - dist / MOUSE_RADIUS;
          opacity = Math.min(1, opacity + boost * 0.65);
          size = Math.min(MAX_SIZE + 1.5, size + boost * 1.8);
        }

        if (opacity <= 0.01) continue;

        const px = Math.round(size);
        ctx.fillStyle = `rgba(216,216,216,${opacity})`;
        ctx.fillRect(dot.x - (px >> 1), dot.y - (px >> 1), px, px);
      }

      time += TIME_SPEED;
      rafId = requestAnimationFrame(draw);
    };

    buildGrid();
    draw();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouse.y = (e.clientY - rect.top) * (canvas.height / rect.height);
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener('resize', buildGrid);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', buildGrid);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  );
}
