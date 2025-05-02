
import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  MessageCircle,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}

const DockItem: React.FC<DockItemProps> = ({
  icon,
  label,
  onClick,
  active = false
}) => {
  return (
    <button 
      className={cn(
        "dock-item",
        active && "bg-stalight-primary/20"
      )}
      onClick={onClick}
      data-tooltip={label}
    >
      {icon}
    </button>
  );
};

const FloatingDock: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="floating-dock animate-fade-in">
      <DockItem 
        icon={<LayoutDashboard className="h-6 w-6 text-white" />} 
        label="Products"
        onClick={() => scrollToSection('products')}
      />
      <DockItem 
        icon={<Users className="h-6 w-6 text-white" />} 
        label="Testimonials"
        onClick={() => scrollToSection('testimonials')}
      />
      <DockItem 
        icon={<BookOpen className="h-6 w-6 text-white" />} 
        label="Blog"
        onClick={() => scrollToSection('blog')}
      />
      <DockItem 
        icon={<MessageCircle className="h-6 w-6 text-white" />} 
        label="Contact"
        onClick={() => scrollToSection('contact')}
      />
      <DockItem 
        icon={<Bell className="h-6 w-6 text-white" />} 
        label="Newsletter"
        onClick={() => scrollToSection('newsletter')}
      />
    </div>
  );
};

export default FloatingDock;
