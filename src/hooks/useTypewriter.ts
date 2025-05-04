
import { useEffect, useRef } from 'react';

interface TypewriterOptions {
  delay?: number;
  startDelay?: number;
  speed?: number;
}

/**
 * A hook that adds a typewriter effect to a DOM element
 * @param text The text to type
 * @param options Configuration options for the typewriter effect
 * @returns Ref to attach to the element
 */
export const useTypewriter = (text: string, options: TypewriterOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const { delay = 70, startDelay = 500, speed = 1 } = options;
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    element.innerText = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        if (elementRef.current) {
          elementRef.current.innerText += text.charAt(i);
          i++;
          setTimeout(typeWriter, delay / speed);
        }
      }
    };
    
    const timer = setTimeout(() => {
      typeWriter();
    }, startDelay);
    
    return () => {
      clearTimeout(timer);
      if (elementRef.current) {
        elementRef.current.innerText = text;
      }
    };
  }, [text, delay, startDelay, speed]);
  
  return elementRef;
};

export default useTypewriter;
