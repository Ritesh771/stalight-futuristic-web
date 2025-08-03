import React from 'react';

// AI/Technology themed illustrations
export const AiTechnologyIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Neural Network Nodes */}
    <circle cx="100" cy="100" r="8" fill="#6366f1" opacity="0.8"/>
    <circle cx="150" cy="80" r="8" fill="#8b5cf6" opacity="0.8"/>
    <circle cx="200" cy="100" r="8" fill="#a855f7" opacity="0.8"/>
    <circle cx="250" cy="80" r="8" fill="#c084fc" opacity="0.8"/>
    <circle cx="300" cy="100" r="8" fill="#6366f1" opacity="0.8"/>
    
    <circle cx="100" cy="150" r="8" fill="#8b5cf6" opacity="0.8"/>
    <circle cx="150" cy="130" r="8" fill="#a855f7" opacity="0.8"/>
    <circle cx="200" cy="150" r="8" fill="#c084fc" opacity="0.8"/>
    <circle cx="250" cy="130" r="8" fill="#6366f1" opacity="0.8"/>
    <circle cx="300" cy="150" r="8" fill="#8b5cf6" opacity="0.8"/>
    
    <circle cx="100" cy="200" r="8" fill="#a855f7" opacity="0.8"/>
    <circle cx="150" cy="180" r="8" fill="#c084fc" opacity="0.8"/>
    <circle cx="200" cy="200" r="8" fill="#6366f1" opacity="0.8"/>
    <circle cx="250" cy="180" r="8" fill="#8b5cf6" opacity="0.8"/>
    <circle cx="300" cy="200" r="8" fill="#a855f7" opacity="0.8"/>
    
    {/* Connection Lines */}
    <line x1="100" y1="100" x2="150" y2="80" stroke="#6366f1" strokeWidth="1" opacity="0.4"/>
    <line x1="150" y1="80" x2="200" y2="100" stroke="#8b5cf6" strokeWidth="1" opacity="0.4"/>
    <line x1="200" y1="100" x2="250" y2="80" stroke="#a855f7" strokeWidth="1" opacity="0.4"/>
    <line x1="250" y1="80" x2="300" y2="100" stroke="#c084fc" strokeWidth="1" opacity="0.4"/>
    
    <line x1="100" y1="150" x2="150" y2="130" stroke="#8b5cf6" strokeWidth="1" opacity="0.4"/>
    <line x1="150" y1="130" x2="200" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.4"/>
    <line x1="200" y1="150" x2="250" y2="130" stroke="#c084fc" strokeWidth="1" opacity="0.4"/>
    <line x1="250" y1="130" x2="300" y2="150" stroke="#6366f1" strokeWidth="1" opacity="0.4"/>
    
    <line x1="100" y1="200" x2="150" y2="180" stroke="#a855f7" strokeWidth="1" opacity="0.4"/>
    <line x1="150" y1="180" x2="200" y2="200" stroke="#c084fc" strokeWidth="1" opacity="0.4"/>
    <line x1="200" y1="200" x2="250" y2="180" stroke="#6366f1" strokeWidth="1" opacity="0.4"/>
    <line x1="250" y1="180" x2="300" y2="200" stroke="#8b5cf6" strokeWidth="1" opacity="0.4"/>
    
    {/* Vertical Connections */}
    <line x1="100" y1="100" x2="100" y2="150" stroke="#6366f1" strokeWidth="1" opacity="0.3"/>
    <line x1="100" y1="150" x2="100" y2="200" stroke="#8b5cf6" strokeWidth="1" opacity="0.3"/>
    <line x1="200" y1="100" x2="200" y2="150" stroke="#a855f7" strokeWidth="1" opacity="0.3"/>
    <line x1="200" y1="150" x2="200" y2="200" stroke="#c084fc" strokeWidth="1" opacity="0.3"/>
    <line x1="300" y1="100" x2="300" y2="150" stroke="#6366f1" strokeWidth="1" opacity="0.3"/>
    <line x1="300" y1="150" x2="300" y2="200" stroke="#8b5cf6" strokeWidth="1" opacity="0.3"/>
  </svg>
);

export const EducationIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Graduation Cap */}
    <path d="M150 120 L250 120 L200 100 Z" fill="#6366f1" opacity="0.8"/>
    <rect x="150" y="120" width="100" height="10" fill="#8b5cf6" opacity="0.8"/>
    <circle cx="200" cy="130" r="3" fill="#a855f7"/>
    
    {/* Books */}
    <rect x="120" y="180" width="40" height="50" fill="#6366f1" opacity="0.7"/>
    <rect x="130" y="190" width="20" height="30" fill="#8b5cf6" opacity="0.8"/>
    
    <rect x="240" y="180" width="40" height="50" fill="#a855f7" opacity="0.7"/>
    <rect x="250" y="190" width="20" height="30" fill="#c084fc" opacity="0.8"/>
    
    {/* Digital Elements */}
    <rect x="180" y="160" width="40" height="30" fill="#6366f1" opacity="0.6" rx="5"/>
    <circle cx="200" cy="175" r="3" fill="#8b5cf6"/>
    <line x1="185" y1="185" x2="215" y2="185" stroke="#a855f7" strokeWidth="2"/>
    <line x1="185" y1="190" x2="205" y2="190" stroke="#c084fc" strokeWidth="2"/>
  </svg>
);

export const DashboardIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dashboard Frame */}
    <rect x="50" y="50" width="300" height="200" fill="#1f2937" opacity="0.8" rx="10"/>
    <rect x="60" y="60" width="280" height="180" fill="#374151" opacity="0.6" rx="5"/>
    
    {/* Chart Bars */}
    <rect x="80" y="180" width="20" height="40" fill="#6366f1" opacity="0.8"/>
    <rect x="110" y="160" width="20" height="60" fill="#8b5cf6" opacity="0.8"/>
    <rect x="140" y="140" width="20" height="80" fill="#a855f7" opacity="0.8"/>
    <rect x="170" y="120" width="20" height="100" fill="#c084fc" opacity="0.8"/>
    <rect x="200" y="150" width="20" height="70" fill="#6366f1" opacity="0.8"/>
    <rect x="230" y="130" width="20" height="90" fill="#8b5cf6" opacity="0.8"/>
    <rect x="260" y="170" width="20" height="50" fill="#a855f7" opacity="0.8"/>
    
    {/* Line Chart */}
    <path d="M80 150 L110 130 L140 110 L170 90 L200 120 L230 100 L260 140" 
          stroke="#6366f1" strokeWidth="3" fill="none" opacity="0.8"/>
    
    {/* Pie Chart */}
    <circle cx="320" cy="120" r="30" fill="none" stroke="#6366f1" strokeWidth="8" opacity="0.8"/>
    <circle cx="320" cy="120" r="30" fill="none" stroke="#8b5cf6" strokeWidth="8" opacity="0.8" 
            strokeDasharray="47 94" strokeDashoffset="0"/>
    <circle cx="320" cy="120" r="30" fill="none" stroke="#a855f7" strokeWidth="8" opacity="0.8" 
            strokeDasharray="47 94" strokeDashoffset="-47"/>
    
    {/* Data Points */}
    <circle cx="80" cy="150" r="3" fill="#6366f1"/>
    <circle cx="110" cy="130" r="3" fill="#8b5cf6"/>
    <circle cx="140" cy="110" r="3" fill="#a855f7"/>
    <circle cx="170" cy="90" r="3" fill="#c084fc"/>
    <circle cx="200" cy="120" r="3" fill="#6366f1"/>
    <circle cx="230" cy="100" r="3" fill="#8b5cf6"/>
    <circle cx="260" cy="140" r="3" fill="#a855f7"/>
  </svg>
);

export const TeamIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Team Members */}
    <circle cx="150" cy="120" r="25" fill="#6366f1" opacity="0.8"/>
    <circle cx="250" cy="120" r="25" fill="#8b5cf6" opacity="0.8"/>
    <circle cx="200" cy="180" r="25" fill="#a855f7" opacity="0.8"/>
    
    {/* Connection Lines */}
    <line x1="150" y1="120" x2="200" y2="180" stroke="#6366f1" strokeWidth="2" opacity="0.6"/>
    <line x1="250" y1="120" x2="200" y2="180" stroke="#8b5cf6" strokeWidth="2" opacity="0.6"/>
    <line x1="150" y1="120" x2="250" y2="120" stroke="#a855f7" strokeWidth="2" opacity="0.6"/>
    
    {/* Collaboration Icons */}
    <circle cx="200" cy="100" r="8" fill="#c084fc" opacity="0.6"/>
    <circle cx="180" cy="150" r="6" fill="#6366f1" opacity="0.6"/>
    <circle cx="220" cy="150" r="6" fill="#8b5cf6" opacity="0.6"/>
  </svg>
);

export const InnovationIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Light Bulb */}
    <path d="M200 80 L180 120 L220 120 Z" fill="#6366f1" opacity="0.8"/>
    <circle cx="200" cy="100" r="15" fill="#8b5cf6" opacity="0.8"/>
    <rect x="195" y="120" width="10" height="20" fill="#a855f7" opacity="0.8"/>
    
    {/* Innovation Rays */}
    <line x1="200" y1="80" x2="200" y2="40" stroke="#6366f1" strokeWidth="2" opacity="0.6"/>
    <line x1="200" y1="80" x2="160" y2="60" stroke="#8b5cf6" strokeWidth="2" opacity="0.6"/>
    <line x1="200" y1="80" x2="240" y2="60" stroke="#a855f7" strokeWidth="2" opacity="0.6"/>
    <line x1="200" y1="80" x2="180" y2="40" stroke="#c084fc" strokeWidth="2" opacity="0.6"/>
    <line x1="200" y1="80" x2="220" y2="40" stroke="#6366f1" strokeWidth="2" opacity="0.6"/>
    
    {/* Technology Elements */}
    <rect x="120" y="200" width="60" height="40" fill="#6366f1" opacity="0.6" rx="5"/>
    <rect x="220" y="200" width="60" height="40" fill="#8b5cf6" opacity="0.6" rx="5"/>
    <rect x="170" y="220" width="60" height="40" fill="#a855f7" opacity="0.6" rx="5"/>
    
    {/* Connection Dots */}
    <circle cx="150" cy="220" r="3" fill="#c084fc"/>
    <circle cx="250" cy="220" r="3" fill="#6366f1"/>
    <circle cx="200" cy="240" r="3" fill="#8b5cf6"/>
  </svg>
);

export const MobileAppIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mobile Phone */}
    <rect x="180" y="80" width="40" height="80" fill="#1f2937" opacity="0.8" rx="5"/>
    <rect x="185" y="85" width="30" height="70" fill="#374151" opacity="0.6" rx="3"/>
    
    {/* App Icons */}
    <rect x="190" y="95" width="10" height="10" fill="#6366f1" opacity="0.8" rx="2"/>
    <rect x="205" y="95" width="10" height="10" fill="#8b5cf6" opacity="0.8" rx="2"/>
    <rect x="190" y="110" width="10" height="10" fill="#a855f7" opacity="0.8" rx="2"/>
    <rect x="205" y="110" width="10" height="10" fill="#c084fc" opacity="0.8" rx="2"/>
    <rect x="190" y="125" width="10" height="10" fill="#6366f1" opacity="0.8" rx="2"/>
    <rect x="205" y="125" width="10" height="10" fill="#8b5cf6" opacity="0.8" rx="2"/>
    
    {/* App Content */}
    <rect x="190" y="140" width="20" height="8" fill="#6366f1" opacity="0.6" rx="2"/>
    <rect x="190" y="150" width="15" height="3" fill="#8b5cf6" opacity="0.6" rx="1"/>
    <rect x="190" y="155" width="12" height="3" fill="#a855f7" opacity="0.6" rx="1"/>
    
    {/* Floating Elements */}
    <circle cx="120" cy="150" r="8" fill="#6366f1" opacity="0.4"/>
    <circle cx="280" cy="150" r="8" fill="#8b5cf6" opacity="0.4"/>
    <circle cx="200" cy="200" r="8" fill="#a855f7" opacity="0.4"/>
  </svg>
);

export const ContactIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Envelope */}
    <rect x="150" y="120" width="100" height="60" fill="#6366f1" opacity="0.8" rx="5"/>
    <path d="M150 120 L200 150 L250 120" fill="#8b5cf6" opacity="0.8"/>
    <rect x="160" y="130" width="80" height="40" fill="#a855f7" opacity="0.6" rx="3"/>
    
    {/* Message Lines */}
    <line x1="170" y1="145" x2="230" y2="145" stroke="#c084fc" strokeWidth="2"/>
    <line x1="170" y1="155" x2="210" y2="155" stroke="#6366f1" strokeWidth="2"/>
    <line x1="170" y1="165" x2="220" y2="165" stroke="#8b5cf6" strokeWidth="2"/>
    
    {/* Contact Icons */}
    <circle cx="120" cy="180" r="15" fill="#6366f1" opacity="0.6"/>
    <circle cx="280" cy="180" r="15" fill="#8b5cf6" opacity="0.6"/>
    
    {/* Connection Lines */}
    <line x1="150" y1="180" x2="120" y2="180" stroke="#a855f7" strokeWidth="2" opacity="0.4"/>
    <line x1="250" y1="180" x2="280" y2="180" stroke="#c084fc" strokeWidth="2" opacity="0.4"/>
  </svg>
);

// Export all illustrations as a single object for easy importing
export const Illustrations = {
  AiTechnology: AiTechnologyIllustration,
  Education: EducationIllustration,
  Dashboard: DashboardIllustration,
  Team: TeamIllustration,
  Innovation: InnovationIllustration,
  MobileApp: MobileAppIllustration,
  Contact: ContactIllustration,
}; 