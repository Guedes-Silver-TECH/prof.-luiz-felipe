import React, { useEffect, useRef } from 'react';

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Characters to display - programming symbols and hex
    const chars = '01{}[]/<>=\\~#A8F2C9B!%*?'.split('');
    
    const fontSize = 14;
    let columns = width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Start off-screen randomly
    }

    const draw = () => {
      // Semi-transparent deep dark purple to create the trail effect
      ctx.fillStyle = 'rgba(11, 0, 26, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Bright Cyan/Purple for the text to pop against dark background
      ctx.fillStyle = 'rgba(10, 180, 205, 0.6)'; // Cyan
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Randomly use gold sometimes
        if (Math.random() > 0.95) {
           ctx.fillStyle = 'rgba(234, 179, 8, 0.8)'; // Gold pop
        } else if (Math.random() > 0.8) {
           ctx.fillStyle = 'rgba(150, 100, 255, 0.6)'; // Light Purple
        } else {
           ctx.fillStyle = 'rgba(10, 180, 205, 0.6)'; // Cyan
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    let animationFrame: number;
    // Slow down the matrix effect so it's not too distracting
    let lastDrawTime = 0;
    const fps = 20;
    const interval = 1000 / fps;

    const loop = (timestamp: number) => {
      if (timestamp - lastDrawTime > interval) {
        draw();
        lastDrawTime = timestamp;
      }
      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = width / fontSize;
      // Reset drops array size
      drops.length = 0;
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * -100;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-60 pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
      }}
      aria-hidden="true"
    />
  );
}
