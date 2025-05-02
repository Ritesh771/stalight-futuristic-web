
import React, { useState, useEffect, useRef } from 'react';
import CanvasRevealCard from './CanvasRevealCard';

const demoImages = [
  {
    src: "/lovable-uploads/2614e848-c95d-4948-8ef6-d595f235c187.png",
    title: "Faculty Dashboard Overview"
  },
  {
    src: "/lovable-uploads/a134a1df-8d92-49c6-8531-7e380127b7cc.png",
    title: "Attendance Management"
  },
  {
    src: "/lovable-uploads/3fcd3005-6fc2-4dc6-b80f-e5e023b5bc53.png",
    title: "Leave Management Portal"
  },
  {
    src: "/lovable-uploads/832f5d4e-c0ba-40b0-ab9f-2615135f3dc7.png",
    title: "Student Assignment Interface"
  },
  {
    src: "/lovable-uploads/efa6578d-d8f4-4e45-b1f5-d88501de1eff.png",
    title: "Internal Marks Tracker"
  },
  {
    src: "/lovable-uploads/904a99d9-9437-400c-9d5c-be969f43a002.png",
    title: "Admin Notifications Panel"
  },
  {
    src: "/lovable-uploads/e67c8bb8-4937-4d34-88a3-4057ffe0cf00.png",
    title: "Analytics & Reports Dashboard"
  }
];

const DashboardShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % demoImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!showcaseRef.current) return;
    
    const rect = showcaseRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    
    setMousePosition({ x, y });
  };
  
  return (
    <section id="dashboard-showcase" className="py-24 relative overflow-hidden bg-gradient-to-b from-stalight-dark to-black">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="aurora-bg w-full h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Our Application Showcase
          </h2>
          <p className="text-xl text-white/80">
            Explore our powerful dashboard solutions and interfaces
          </p>
        </div>
        
        <div 
          className="marquee-3d perspective-[1000px] scroll-reveal-item"
          ref={showcaseRef}
          onMouseMove={handleMouseMove}
        >
          <div 
            className="marquee-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transform-style-3d"
            style={{ 
              transform: `rotateX(${-mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`
            }}
          >
            {demoImages.map((image, idx) => (
              <CanvasRevealCard
                key={idx}
                imageSrc={image.src}
                title={image.title}
                spotlight={true}
                className={`transition-all duration-700 ${
                  idx === activeIndex ? "scale-105 ring-2 ring-stalight-primary" : "opacity-80"
                }`}
              >
                <p className="text-white/70 text-sm">
                  Interactive dashboard interface with real-time data visualization.
                </p>
              </CanvasRevealCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
