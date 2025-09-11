import { useEffect } from 'react';

export const useScrollSnap = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isScrolling) return;
      
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Find the section we're closest to
        let closestSection = sections[0];
        let closestDistance = Math.abs(scrollTop - closestSection.offsetTop);
        
        sections.forEach((section) => {
          const distance = Math.abs(scrollTop - section.offsetTop);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        });

        // Only snap if we're reasonably close to a section
        if (closestDistance < windowHeight * 0.3) {
          isScrolling = true;
          
          window.scrollTo({
            top: closestSection.offsetTop,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            isScrolling = false;
          }, 800);
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
};