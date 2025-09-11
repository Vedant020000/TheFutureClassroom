import { useEffect, useRef } from 'react';

const Starfield = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!starfieldRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;
      
      starfieldRef.current.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
};

export default Starfield;