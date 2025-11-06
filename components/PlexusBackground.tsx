"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type PlexusBackgroundProps = {
  color?: string;
  density?: number;
};

export function PlexusBackground({ color = "#00ffff", density = 1 }: PlexusBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const pointCount = Math.floor(120 * density);
    const maxDistance = 190;
    const mouseRadius = 220;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(DPR, DPR);
      createPoints();
    };

    const createPoints = () => {
      const points: Point[] = [];
      for (let i = 0; i < pointCount; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 0.2 + Math.random() * 0.3;

        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity
        });
      }

      pointsRef.current = points;
    };

    const draw = () => {
      const points = pointsRef.current;
      if (!points.length) return;

      context.clearRect(0, 0, width, height);

      // Background gradient glow
      const gradient = context.createRadialGradient(width / 2, height / 2, width * 0.1, width / 2, height / 2, width * 0.8);
      gradient.addColorStop(0, "rgba(0, 255, 255, 0.12)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.lineWidth = 0.6;
      context.strokeStyle = `${color}14`;

      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];

        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        for (let j = i + 1; j < points.length; j += 1) {
          const other = points[j];
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < maxDistance * maxDistance) {
            const alpha = 1 - Math.sqrt(distanceSquared) / maxDistance;
            context.globalAlpha = alpha * 0.8;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        const mouse = mouseRef.current;
        if (mouse) {
          const dx = point.x - mouse.x;
          const dy = point.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius;
            point.vx += (dx / distance) * force * 0.04;
            point.vy += (dy / distance) * force * 0.04;
          }
        }

        context.globalAlpha = 1;
        context.fillStyle = `${color}d9`;
        context.beginPath();
        context.arc(point.x, point.y, 1.8, 0, Math.PI * 2);
        context.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [color, density]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

