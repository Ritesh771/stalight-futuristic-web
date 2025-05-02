
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CanvasRevealCardProps {
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
  title?: string;
  onClick?: () => void;
  spotlight?: boolean;
}

const CanvasRevealCard: React.FC<CanvasRevealCardProps> = ({
  children,
  className,
  imageSrc,
  title,
  onClick,
  spotlight = true,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!spotlight) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
  };

  return (
    <div 
      className={cn(
        "canvas-reveal relative rounded-xl overflow-hidden transition-all duration-500 scroll-reveal-item",
        spotlight && "card-spotlight",
        className
      )}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      style={spotlight ? {
        '--x': `${position.x}px`,
        '--y': `${position.y}px`
      } as React.CSSProperties : undefined}
    >
      {imageSrc && (
        <div className="relative overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title || "Dashboard preview"} 
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="canvas-dots absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}
      <div className="p-4 glass-card">
        {title && (
          <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        )}
        {children}
      </div>
    </div>
  );
};

export default CanvasRevealCard;
