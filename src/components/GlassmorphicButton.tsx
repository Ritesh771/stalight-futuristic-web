
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/components/ui/button';

interface GlassmorphicButtonProps extends ButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  glowEffect?: boolean;
  fullWidth?: boolean;
}

const GlassmorphicButton: React.FC<GlassmorphicButtonProps> = ({
  children,
  className,
  variant = 'default',
  glowEffect = false,
  fullWidth = false,
  ...props
}) => {
  const baseStyle = "transition-all duration-300 transform hover:scale-105 backdrop-blur-md";
  
  const variantStyles = {
    default: "bg-stalight-primary/90 hover:bg-stalight-primary text-white hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]",
    outline: "border border-white/20 hover:bg-white/10 text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
    ghost: "text-white/80 hover:bg-white/5 hover:text-white",
    link: "text-stalight-primary hover:text-stalight-primary/80 p-0 underline-offset-4 hover:underline"
  };
  
  const glowStyles = glowEffect ? "animate-pulse-glow" : "";
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <Button
      className={cn(
        baseStyle, 
        variantStyles[variant], 
        glowStyles, 
        widthStyles, 
        "rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GlassmorphicButton;
