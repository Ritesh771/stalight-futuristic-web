import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import DashboardShowcase from '@/components/DashboardShowcase';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DownloadApp from '@/components/DownloadApp';
// import FloatingDock from '@/components/FloatingDock'; // Removed for cleaner design
import GrowvoAd from '@/components/GrowvoAd';
// import ScrollManager from '@/utils/scrollManager'; // Disabled for better performance

const Index: React.FC = () => {
  // Removed ScrollManager initialization for better performance

  return (
    <div className="min-h-screen relative">
      {/* Simple Background - Removed complex animations */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
      </div>

      {/* Removed floating particles for better performance */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/10 to-background/90" />
      </div>

      <ThreeBackground />
      <Navbar />

      {/* Main Sections - Removed entrance animations */}
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <DashboardShowcase />
      </div>
      <div>
        <DownloadApp />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      {/* <FloatingDock /> */} {/* Removed for cleaner design */}
      <GrowvoAd />
    </div>
  );
};

export default Index;
