import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
}

const InteractiveParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with proper pixel ratio for crisp rendering
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(pixelRatio, pixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuration
    const config = {
      numberOfStars: 80,
      maxDistance: 120,
      starSize: [1.5, 3],
      speedFactor: 0.25,
      mouseRadius: 150,
      starColor: '#ffffff',
      connectionColor: 'rgba(255, 255, 255, 0.3)',
      canvasBackgroundColor: '#000000',
      lineThickness: 1,
      starShapes: 'circle' as const,
      randomStarSpeeds: true,
      connectionsWhenNoMouse: true,
      percentStarsConnecting: 0.08,
      connectionLinesDashed: false,
      dashedLinesConfig: [5, 5],
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < config.numberOfStars; i++) {
        const particle: Particle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * config.speedFactor * (Math.random() * 2 + 0.5),
          vy: (Math.random() - 0.5) * config.speedFactor * (Math.random() * 2 + 0.5),
          size: Math.random() * (config.starSize[1] - config.starSize[0]) + config.starSize[0],
          opacity: Math.random() * 0.6 + 0.3,
          baseOpacity: Math.random() * 0.6 + 0.3,
        };
        particlesRef.current.push(particle);
      }
    };

    // Draw particle
    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;

      if (config.starShapes === 'circle') {
        // Add subtle glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 1.5
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw main particle
        ctx.fillStyle = config.starColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    // Draw connection between particles
    const drawConnection = (p1: Particle, p2: Particle, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = config.connectionColor;
      ctx.lineWidth = config.lineThickness;

      if (config.connectionLinesDashed) {
        ctx.setLineDash(config.dashedLinesConfig);
      }

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };

    // Update particle position
    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // Mouse interaction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.mouseRadius) {
        const force = (config.mouseRadius - distance) / config.mouseRadius;
        particle.opacity = Math.min(1, particle.baseOpacity + force * 0.5);
      } else {
        particle.opacity = particle.baseOpacity;
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = config.canvasBackgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });

      // Draw connections
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.maxDistance) {
            let opacity = (config.maxDistance - distance) / config.maxDistance * 0.5;

            // Mouse influence on connections
            const mouseDx1 = mouseRef.current.x - p1.x;
            const mouseDy1 = mouseRef.current.y - p1.y;
            const mouseDistance1 = Math.sqrt(mouseDx1 * mouseDx1 + mouseDy1 * mouseDy1);

            const mouseDx2 = mouseRef.current.x - p2.x;
            const mouseDy2 = mouseRef.current.y - p2.y;
            const mouseDistance2 = Math.sqrt(mouseDx2 * mouseDx2 + mouseDy2 * mouseDy2);

            if (mouseDistance1 < config.mouseRadius || mouseDistance2 < config.mouseRadius) {
              opacity = Math.min(0.8, opacity + 0.4);
            }

            drawConnection(p1, p2, opacity);
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Initialize and start
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default InteractiveParticleNetwork;