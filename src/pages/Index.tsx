
import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import UpcomingProjects from '@/components/UpcomingProjects';
import Testimonials from '@/components/Testimonials';
import DashboardShowcase from '@/components/DashboardShowcase';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced Aurora Background for entire site */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="aurora-bg w-full h-full"></div>
      </div>
      
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <DashboardShowcase />
      <UpcomingProjects />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
