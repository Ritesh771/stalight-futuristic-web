import React from 'react';
import CanvasRevealCard from './CanvasRevealCard';
import { useTypewriter } from '@/hooks/useTypewriter';

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
  const { text, ref: typewriterRef, cursor } = useTypewriter("Our Application Showcase", {
    delay: 40, // Faster typing
    startDelay: 500,
    speed: 2,  // Increased speed
    loop: false
  });

  return (
    <section id="dashboard-showcase" className="py-24 relative overflow-hidden bg-gradient-to-b from-stalight-dark to-black">
      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="aurora-bg w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary typewriter-container">
            <span ref={typewriterRef}>{text}</span>
            <span className={`typewriter-cursor ${cursor ? 'opacity-100' : 'opacity-0'}`}>{cursor}</span>
          </h2>
          <p className="text-xl text-white/80 animate-fade-in">
            Explore our powerful dashboard solutions and interfaces
          </p>
        </div>

        <div className="showcase-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoImages.map((image, idx) => (
              <CanvasRevealCard
                key={idx}
                imageSrc={image.src}
                title={image.title}
                spotlight={true}
                className="transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-stalight-primary/20"
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
