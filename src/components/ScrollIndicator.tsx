import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollBottom = scrollTop + windowHeight;

      // Check if we're near the bottom (within 200px of footer)
      const footer = document.querySelector('footer');
      const isNearBottom = footer ? scrollBottom >= footer.offsetTop - 200 : false;

      // Check if we're at the very top (hero section)
      const isAtTop = scrollTop < windowHeight * 0.5;

      // Show indicator if we're not at the bottom and not at the very top
      setIsVisible(!isNearBottom && !isAtTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    setIsAnimating(true);
    const sections = document.querySelectorAll('section, footer');
    const currentScrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    // Find the next section that's below the current viewport
    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;
      if (sectionTop > currentScrollTop + windowHeight * 0.3) {
        sections[i].scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }

    // Reset animation state after scroll completes
    setTimeout(() => setIsAnimating(false), 1000);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={scrollToNextSection}
        className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium tracking-wider opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          SCROLL DOWN
        </span>
        <div className={`relative ${isAnimating ? 'animate-pulse' : 'animate-bounce'}`}>
          <ChevronDown
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full border border-current opacity-20 scale-150 animate-ping"></div>
        </div>
      </button>
    </div>
  );
};

export default ScrollIndicator;
