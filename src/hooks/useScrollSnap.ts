import { useEffect } from 'react';

export const useScrollSnap = () => {
  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;
      
      const sections = document.querySelectorAll('section');
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find the current section
      let currentSectionIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (scrollTop >= sectionTop - windowHeight / 2) {
          currentSectionIndex = index;
        }
      });

      // Auto-snap to sections on scroll
      const currentSection = sections[currentSectionIndex];
      if (currentSection) {
        const sectionTop = currentSection.offsetTop;
        const diff = Math.abs(scrollTop - sectionTop);
        
        // If we're close to a section boundary, snap to it
        if (diff > 50 && diff < windowHeight / 3) {
          isScrolling = true;
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
      }
    };

    const throttledScroll = () => {
      setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);
};