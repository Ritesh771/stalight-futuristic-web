
import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import UpcomingProjects from '@/components/UpcomingProjects';
import ScrollDemo from '@/components/ScrollDemo';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <UpcomingProjects />
      <ScrollDemo />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
