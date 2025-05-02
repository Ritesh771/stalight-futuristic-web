
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  speed = 50, 
  className = "", 
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [index, text, speed, isComplete, onComplete]);

  return (
    <span className={`${className} relative`}>
      {displayedText}
      <span className="animate-pulse-soft inline-block w-0.5 h-5 bg-stalight-primary ml-1 align-middle">|</span>
    </span>
  );
};

export default TypeWriter;
