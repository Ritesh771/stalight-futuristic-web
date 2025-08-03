import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  MessageCircle,
  Bell,
  Home,
  Info,
  Download
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useScrollEffects';

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
  index: number;
}

const DockItem: React.FC<DockItemProps> = ({
  icon,
  label,
  onClick,
  active = false,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      className={cn(
        "dock-item relative group",
        active && "bg-stalight-primary/20 scale-110",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-tooltip={label}
    >
      <div className={cn(
        "relative z-10 transition-all duration-300",
        isHovered && "scale-110",
        active && "text-stalight-primary"
      )}>
        {icon}
      </div>
      
      {/* Active indicator */}
      {active && (
        <div className="absolute inset-0 bg-stalight-primary/20 rounded-2xl animate-pulse"></div>
      )}
      
      {/* Hover glow effect */}
      <div className={cn(
        "absolute inset-0 rounded-2xl transition-all duration-300",
        isHovered && "bg-white/10 shadow-lg shadow-stalight-primary/30"
      )}></div>
    </button>
  );
};

const FloatingDock: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sections = ['home', 'about', 'products', 'neuro-campus', 'contact'];
  const { activeSection, scrollToSection } = useActiveSection(sections, 150);

  useEffect(() => {
    // Show dock after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const dockItems = [
    { icon: <Home className="h-6 w-6" />, label: "Home", section: 'home' },
    { icon: <Info className="h-6 w-6" />, label: "About", section: 'about' },
    { icon: <LayoutDashboard className="h-6 w-6" />, label: "Products", section: 'products' },
    { icon: <Download className="h-6 w-6" />, label: "NEURO CAMPUS", section: 'neuro-campus' },
    { icon: <MessageCircle className="h-6 w-6" />, label: "Contact", section: 'contact' },
  ];

  if (!isVisible) return null;

  return (
    <div className={cn(
      "floating-dock",
      "animate-fade-in transition-all duration-500 ease-out"
    )}>
      {dockItems.map((item, index) => (
        <DockItem 
          key={item.section}
          icon={item.icon} 
          label={item.label}
          onClick={() => scrollToSection(item.section)}
          active={activeSection === item.section}
          index={index}
        />
      ))}
    </div>
  );
};

export default FloatingDock;
