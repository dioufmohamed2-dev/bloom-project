import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  z: number; // Depth factor for 3D parallax
}

export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    // Configuration
    const particleCount = 60; // Nombre de points
    const connectionDistance = 150; // Distance pour tracer une ligne
    const mouseDistance = 200; // Rayon d'interaction souris

    let mouseX = -1000;
    let mouseY = -1000;

    // Resize handler
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const z = Math.random(); // 0 (far) to 1 (near)
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5 * (1 + z), // Parallax speed
          vy: (Math.random() - 0.5) * 0.5 * (1 + z),
          size: (Math.random() * 2 + 1) * (0.5 + z * 0.5), // Size based on depth
          color: Math.random() > 0.5 ? '#3B5ADB' : '#ffffff',
          z: z 
        });
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction (gentle attraction)
        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseDistance) {
          const force = (mouseDistance - distMouse) / mouseDistance;
          p.x += dxMouse * force * 0.03 * p.z; // Closer particles react more
          p.y += dyMouse * force * 0.03 * p.z;
        }

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.3 + p.z * 0.5; // Depth opacity
        ctx.fill();
      });

      // Draw Connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          
          // Optimization: roughly check close Z values to simulate 3D planes connecting mainly with similar depth
          if (Math.abs(p1.z - p2.z) > 0.3) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = '#3B5ADB';
            // Opacity based on distance and depth average
            const alpha = (1 - dist / connectionDistance) * ((p1.z + p2.z) / 4); 
            ctx.globalAlpha = alpha;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Init
    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 bg-[#0a0d4a] overflow-hidden">
      {/* Deep gradient background base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14197C] via-[#0a0d4a] to-[#050624] opacity-90" />
      
      {/* The Animation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d4a]/90 via-[#0a0d4a]/60 to-transparent pointer-events-none" />
    </div>
  );
};