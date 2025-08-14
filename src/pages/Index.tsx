import React, { useEffect } from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import DashboardShowcase from '@/components/DashboardShowcase';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DownloadApp from '@/components/DownloadApp';
import FloatingDock from '@/components/FloatingDock';
import ScrollManager from '@/utils/scrollManager';

const Index: React.FC = () => {
  // Removed all progressive reveal and intersection observer logic for instant loading

  return (
    <div className="min-h-screen relative">
      {/* Enhanced Aurora Background for entire site */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="aurora-bg w-full h-full animate-fade-in" />
      </div>

      {/* Additional Background Elements with fade-in and floating particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/10 to-background/90 animate-fade-in" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)
          `
        }}></div>
        {/* Floating Orbs for depth */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/6 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-green-400/20 blur-xl animate-float" />
        <div className="absolute top-1/2 left-3/4 w-20 h-20 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-xl animate-float" />
      </div>

      <ThreeBackground />
      <Navbar />

      {/* Main Sections with entrance animations */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <Hero />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <About />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <Products />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <DashboardShowcase />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <DownloadApp />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Contact />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <Footer />
      </div>
      <FloatingDock />
    </div>
  );
};

export default Index;
