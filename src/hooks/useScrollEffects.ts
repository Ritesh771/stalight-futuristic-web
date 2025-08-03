import { useEffect, useRef, useState } from 'react';
import ScrollManager from '@/utils/scrollManager';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Hook for scroll-based reveal animations
export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const scrollManager = ScrollManager.getInstance();
    
    const observer = scrollManager.createIntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (options.triggerOnce !== false) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return ref;
};

// Hook for managing active section in navigation
export const useActiveSection = (sections: string[], offset = 150) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const scrollManager = ScrollManager.getInstance();

    const removeListener = scrollManager.addScrollListener(() => {
      const current = scrollManager.getCurrentSection(sections, offset);
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    });

    return removeListener;
  }, [sections, offset, activeSection]);

  const scrollToSection = (sectionId: string) => {
    const scrollManager = ScrollManager.getInstance();
    const success = scrollManager.smoothScrollTo(sectionId, offset);
    
    if (success) {
      setActiveSection(sectionId);
    }
    
    return success;
  };

  return { activeSection, scrollToSection };
};

export default { useScrollReveal, useActiveSection };
