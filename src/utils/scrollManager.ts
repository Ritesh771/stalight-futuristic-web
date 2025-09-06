// Optimized scroll manager to handle all scroll-based animations efficiently
class ScrollManager {
  private static instance: ScrollManager;
  private observers: IntersectionObserver[] = [];
  private scrollListeners: Array<{ callback: () => void; throttled: boolean }> = [];
  private rafId: number | null = null;
  private lastScrollTime = 0;
  private throttleDelay = 16; // ~60fps
  private isScrolling = false;
  private scrollTimeout: number | null = null;

  private constructor() {
    this.initializeManager();
  }

  static getInstance(): ScrollManager {
    if (!ScrollManager.instance) {
      ScrollManager.instance = new ScrollManager();
    }
    return ScrollManager.instance;
  }

  private initializeManager() {
    // Passive scroll listener for better performance
    window.addEventListener('scroll', this.handleScroll.bind(this), { 
      passive: true,
      capture: false 
    });
  }

  private handleScroll() {
    const now = Date.now();
    
    if (now - this.lastScrollTime < this.throttleDelay) {
      return;
    }
    
    this.lastScrollTime = now;
    this.isScrolling = true;
    
    // Clear existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    // Set scrolling state to false after scroll stops
    this.scrollTimeout = window.setTimeout(() => {
      this.isScrolling = false;
    }, 150);
    
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    this.rafId = requestAnimationFrame(() => {
      this.scrollListeners.forEach(listener => {
        try {
          listener.callback();
        } catch (error) {
          console.warn('Scroll listener error:', error);
        }
      });
    });
  }

  // Add scroll listener with automatic throttling
  addScrollListener(callback: () => void, throttled = true) {
    this.scrollListeners.push({ callback, throttled });
    
    return () => {
      const index = this.scrollListeners.findIndex(listener => listener.callback === callback);
      if (index > -1) {
        this.scrollListeners.splice(index, 1);
      }
    };
  }

  // Create optimized intersection observer
  createIntersectionObserver(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {}
  ): IntersectionObserver {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    const observer = new IntersectionObserver(callback, defaultOptions);
    this.observers.push(observer);
    
    return observer;
  }

  // Auto-revealing elements with performance optimization
  observeRevealElements(selector = '.scroll-reveal-item') {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return null;

    const observer = this.createIntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add revealed class
          entry.target.classList.add('revealed');
          
          // Stop observing this element to improve performance
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return observer;
  }

  // Progressive reveal with optimized timing
  progressiveReveal(selector = '.progressive-reveal', baseDelay = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('revealed');
      }, baseDelay * index);
    });
  }

  // Clean up all observers and listeners
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.scrollListeners = [];
    
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  // Smooth scroll utility
  smoothScrollTo(elementId: string, offset = 0) {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    return true;
  }

  // Get current scroll state
  isCurrentlyScrolling(): boolean {
    return this.isScrolling;
  }
}

export default ScrollManager;
