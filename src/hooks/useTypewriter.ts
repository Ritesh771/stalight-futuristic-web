
import { useState, useEffect, useRef } from 'react';

interface TypewriterOptions {
  delay?: number;
  startDelay?: number;
  speed?: number;
  pauseTime?: number;
  eraseDelay?: number;
  eraseSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
}

type TypewriterState = 'typing' | 'pausing' | 'erasing' | 'transitioning';

/**
 * A hook that adds a dynamic typewriter effect to a DOM element
 * @param texts Array of texts to type
 * @param options Configuration options for the typewriter effect
 * @returns Object with the current text, ref to attach to the element, and cursor state
 */
export const useTypewriter = (
  texts: string | string[], 
  options: TypewriterOptions = {}
) => {
  const textsArray = Array.isArray(texts) ? texts : [texts];
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const elementRef = useRef<HTMLElement>(null);
  const currentIndex = useRef(0);
  const charIndex = useRef(0);
  const state = useRef<TypewriterState>('typing');
  
  const { 
    delay = 40, // Increased typing speed (was 70)
    startDelay = 500, 
    speed = 2,  // Increased speed multiplier (was 1)
    pauseTime = 1500,
    eraseDelay = 30, // Faster erase speed (was 70)
    eraseSpeed = 2,  // Increased erase speed multiplier (was 1.5)
    loop = true,
    showCursor: cursorOption = true
  } = options;
  
  useEffect(() => {
    if (!elementRef.current || textsArray.length === 0) return;
    
    let animationFrame: number;
    let timeout: NodeJS.Timeout;
    
    const typeChar = () => {
      if (!elementRef.current) return;
      
      const currentSentence = textsArray[currentIndex.current];
      
      if (state.current === 'typing') {
        if (charIndex.current < currentSentence.length) {
          setCurrentText(currentSentence.substring(0, charIndex.current + 1));
          charIndex.current++;
          timeout = setTimeout(() => {
            animationFrame = requestAnimationFrame(typeChar);
          }, delay / speed);
        } else {
          state.current = 'pausing';
          timeout = setTimeout(() => {
            animationFrame = requestAnimationFrame(typeChar);
          }, pauseTime);
        }
      } else if (state.current === 'pausing') {
        state.current = 'erasing';
        timeout = setTimeout(() => {
          animationFrame = requestAnimationFrame(typeChar);
        }, eraseDelay);
      } else if (state.current === 'erasing') {
        if (charIndex.current > 0) {
          charIndex.current--;
          setCurrentText(currentSentence.substring(0, charIndex.current));
          timeout = setTimeout(() => {
            animationFrame = requestAnimationFrame(typeChar);
          }, eraseDelay / eraseSpeed);
        } else {
          state.current = 'transitioning';
          timeout = setTimeout(() => {
            currentIndex.current = (currentIndex.current + 1) % textsArray.length;
            if (!loop && currentIndex.current === 0) {
              return;
            }
            state.current = 'typing';
            animationFrame = requestAnimationFrame(typeChar);
          }, startDelay);
        }
      }
    };
    
    // Start the typewriter effect after initial delay
    timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(typeChar);
      
      // Blinking cursor effect
      if (cursorOption) {
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        
        return () => {
          clearInterval(cursorInterval);
        };
      }
    }, startDelay);
    
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [textsArray, delay, startDelay, speed, pauseTime, eraseDelay, eraseSpeed, loop, cursorOption]);
  
  return { 
    text: currentText, 
    ref: elementRef, 
    cursor: cursorOption && showCursor ? '|' : ''
  };
};

export default useTypewriter;
