
import { useEffect, useState } from 'react';

interface TypewriterOptions {
  delay?: number;
  startDelay?: number;
  speed?: number;
  pauseBetweenTexts?: number;
  loop?: boolean;
  deleteSpeed?: number;
  showCursor?: boolean;
  cursorChar?: string;
}

/**
 * A hook that creates a typewriter effect
 * @param texts The array of texts to type (pass a single text as an array with one item)
 * @param options Configuration options for the typewriter effect
 * @returns Object with current text and cursor state
 */
export const useTypewriter = (texts: string[], options: TypewriterOptions = {}) => {
  const {
    delay = 70,
    startDelay = 500,
    speed = 1,
    pauseBetweenTexts = 2000,
    loop = true,
    deleteSpeed = 40,
    showCursor = true,
    cursorChar = '|'
  } = options;
  
  const [currentText, setCurrentText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Control cursor blinking
  useEffect(() => {
    if (!showCursor) return;
    
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, [showCursor]);
  
  useEffect(() => {
    if (texts.length === 0) return;
    
    let timer: ReturnType<typeof setTimeout>;
    
    const typeText = () => {
      const currentFullText = texts[currentTextIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(prevText => {
          const newText = prevText.substring(0, prevText.length - 1);
          
          if (newText === '') {
            setIsDeleting(false);
            const nextIndex = (currentTextIndex + 1) % texts.length;
            setCurrentTextIndex(nextIndex);
          }
          
          return newText;
        });
        
        timer = setTimeout(typeText, deleteSpeed / speed);
      } else {
        // Typing text
        setCurrentText(prevText => {
          const nextChar = currentFullText.substring(prevText.length, prevText.length + 1);
          const newText = prevText + nextChar;
          
          if (newText === currentFullText) {
            setIsTypingComplete(true);
            timer = setTimeout(() => {
              setIsTypingComplete(false);
              if (texts.length > 1 && loop) {
                setIsDeleting(true);
                typeText();
              }
            }, pauseBetweenTexts);
            return newText;
          }
          
          timer = setTimeout(typeText, delay / speed);
          return newText;
        });
      }
    };
    
    // Initial delay before starting
    timer = setTimeout(() => {
      typeText();
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [texts, currentTextIndex, isDeleting, isTypingComplete, delay, deleteSpeed, pauseBetweenTexts, speed, startDelay, loop]);
  
  // Combine text and cursor for display
  const displayText = showCursor 
    ? `${currentText}${cursorVisible ? cursorChar : ''}`
    : currentText;
  
  return { 
    text: displayText, 
    currentTextIndex,
    isTypingComplete,
    isDeleting,
    rawText: currentText // Add raw text without cursor for styling purposes
  };
};

export default useTypewriter;
