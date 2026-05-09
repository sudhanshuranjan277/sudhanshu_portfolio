import React, { useEffect, useRef } from "react";

/**
 * Lightweight canvas particle network — neon cyan/purple linked dots.
 * Avoids heavy 3rd-party deps and works smoothly on low-end devices.
 */
export default function ParticleBg() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    const COUNT = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 22000));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = Array.from({ length: COUNT }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        c: Math.random() > 0.5 ? "0, 240, 255" : "176, 38, 255",
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c}, 0.8)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(step);
    };

    resize();
    init();
    step();
    window.addEventListener("resize", () => {
      resize();
      init();
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={ref} className="absolute inset-0 opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute -top-32 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #00F0FF 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[700px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #B026FF 0%, transparent 60%)" }}
      />
    </div>
  );
}
