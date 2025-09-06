import { useEffect, useState } from 'react';
// Disabled ScrollManager for better performance

// Hook for managing active section in navigation - Simplified for performance
export const useActiveSection = (sections: string[], offset = 150) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= offset && rect.bottom >= offset;
        }
        return false;
      }) || '';

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    // Throttled scroll listener
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [sections, offset, activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  return { activeSection, scrollToSection };
};

export default { useActiveSection };
