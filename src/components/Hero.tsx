
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const parallaxEffect = () => {
      if (heroRef.current) {
        const scrollValue = window.scrollY;
        // Apply parallax effect to hero content
        heroRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - scrollValue * 0.002}`;
      }
    };

    window.addEventListener('scroll', parallaxEffect);
    return () => window.removeEventListener('scroll', parallaxEffect);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-stalight-dark/60 to-stalight-dark/90"></div>
      
      {/* Animated elements */}
      <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-stalight-primary/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/5 w-40 h-40 rounded-full bg-stalight-blue/20 blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-stalight-accent/10 blur-3xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/3 left-1/3 w-16 h-16 glass-card rounded-xl animate-float transform rotate-12" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 glass-card rounded-xl animate-float transform -rotate-12" style={{ animationDelay: '-4s' }}></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div ref={heroRef} className="text-center max-w-5xl mx-auto animate-reveal">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins text-gradient">
            Revolutionize Education with Stalight Technology
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            Empowering educators and students with cutting-edge technology solutions for a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-stalight-primary hover:bg-stalight-primary/80 text-white font-medium py-6 px-8 rounded-full glass-card-hover transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('products')}
              className="border-white/20 hover:bg-white/10 text-white font-medium py-6 px-8 rounded-full glass-card transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          className="text-white/60 hover:text-white glass-card rounded-full p-2 hover:bg-white/5 transition-all duration-300" 
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
