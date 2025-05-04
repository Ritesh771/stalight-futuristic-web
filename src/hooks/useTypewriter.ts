
import { useEffect, useRef, useState } from 'react';

interface TypewriterOptions {
  delay?: number;
  startDelay?: number;
  speed?: number;
  pauseBetweenTexts?: number;
  loop?: boolean;
}

/**
 * A hook that adds a typewriter effect to a DOM element
 * @param texts The array of texts to type (pass a single text as an array with one item)
 * @param options Configuration options for the typewriter effect
 * @returns Object with ref to attach to the element and current text index
 */
export const useTypewriter = (texts: string[], options: TypewriterOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const { delay = 70, startDelay = 500, speed = 1, pauseBetweenTexts = 2000, loop = true } = options;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    if (!elementRef.current || texts.length === 0) return;
    
    const element = elementRef.current;
    
    const typeText = (textIndex: number) => {
      const currentText = texts[textIndex];
      element.innerText = '';
      let i = 0;
      
      const typeWriter = () => {
        if (i < currentText.length) {
          if (elementRef.current) {
            elementRef.current.innerText += currentText.charAt(i);
            i++;
            setTimeout(typeWriter, delay / speed);
          }
        } else {
          // When finished typing, pause and then proceed to next text
          setTimeout(() => {
            if (loop || textIndex < texts.length - 1) {
              const nextIndex = (textIndex + 1) % texts.length;
              setCurrentTextIndex(nextIndex);
              typeText(nextIndex);
            }
          }, pauseBetweenTexts);
        }
      };
      
      typeWriter();
    };
    
    const timer = setTimeout(() => {
      typeText(currentTextIndex);
    }, startDelay);
    
    return () => {
      clearTimeout(timer);
      if (elementRef.current) {
        elementRef.current.innerText = texts[currentTextIndex];
      }
    };
  }, [texts, delay, startDelay, speed, pauseBetweenTexts, loop]);
  
  return { elementRef, currentTextIndex };
};

export default useTypewriter;
