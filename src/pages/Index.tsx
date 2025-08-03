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
  useEffect(() => {
    // Initialize the scroll manager and set up global optimizations
    const scrollManager = ScrollManager.getInstance();
    
    // Progressive reveal for sections with optimized timing
    const initializeRevealAnimations = () => {
      scrollManager.observeRevealElements('.section-reveal');
      scrollManager.progressiveReveal('.progressive-reveal', 120);
    };

    // Use requestIdleCallback for non-critical initialization
    if (window.requestIdleCallback) {
      window.requestIdleCallback(initializeRevealAnimations);
    } else {
      setTimeout(initializeRevealAnimations, 100);
    }

    // Cleanup on unmount
    return () => {
      scrollManager.cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Enhanced Aurora Background for entire site */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="aurora-bg w-full h-full"></div>
      </div>
      
      {/* Additional Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/10 to-background/90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      <ThreeBackground />
      <Navbar />
      
      {/* Seamless sections with reduced spacing */}
      <section id="home" className="min-h-screen flex items-center relative z-10">
        <Hero />
      </section>
      
      <section id="about" className="py-8 sm:py-12 lg:py-16 relative z-10">
        <About />
      </section>
      
      <section id="products" className="py-8 sm:py-12 lg:py-16 relative z-10">
        <Products />
      </section>
      
      <section className="py-8 sm:py-12 lg:py-16 relative z-10">
        <DashboardShowcase />
      </section>
      
      <section id="neuro-campus" className="py-8 sm:py-12 lg:py-16 relative z-10">
        <DownloadApp />
      </section>
      
      <section id="contact" className="py-8 sm:py-12 lg:py-16 relative z-10">
        <Contact />
      </section>
      
      <Footer />
      <FloatingDock />
    </div>
  );
};

export default Index;
