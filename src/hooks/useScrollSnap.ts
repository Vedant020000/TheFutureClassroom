import { useEffect } from 'react';

export const useScrollSnap = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    // Check if device is desktop (1024px and above)
    const isDesktop = () => window.innerWidth >= 1024;

    const handleScroll = () => {
      // Only apply scroll snapping on desktop devices
      if (!isDesktop() || isScrolling) return;

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        // Double check desktop before executing
        if (!isDesktop()) return;

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

    const handleResize = () => {
      // If no longer desktop, clear any pending scroll timeout
      if (!isDesktop()) {
        clearTimeout(scrollTimeout);
        isScrolling = false;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(scrollTimeout);
    };
  }, []);
};