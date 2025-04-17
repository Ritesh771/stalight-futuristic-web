
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight, ExternalLink } from 'lucide-react';
import GlassmorphicButton from './GlassmorphicButton';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const parallaxEffect = () => {
      const scrollValue = window.scrollY;
      
      if (heroRef.current) {
        // Apply parallax effect to hero content
        heroRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`;
        heroRef.current.style.opacity = `${1 - scrollValue * 0.002}`;
      }

      // Animate floating elements
      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.children;
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i] as HTMLElement;
          const speed = 0.05 + (i * 0.02);
          const yPos = -scrollValue * speed;
          const xPos = (i % 2 === 0) ? scrollValue * 0.1 : -scrollValue * 0.1;
          const rotation = scrollValue * (i % 2 === 0 ? 0.05 : -0.05);
          element.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) rotate(${rotation}deg)`;
        }
      }
      
      // Animate wave patterns
      if (waveRef.current) {
        waveRef.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
      }
    };

    // Initialize scroll reveal animation
    const initScrollReveal = () => {
      const revealItems = document.querySelectorAll('.scroll-reveal-item');
      
      const revealCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      };
      
      const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });
      
      revealItems.forEach(item => {
        revealObserver.observe(item);
      });
    };

    window.addEventListener('scroll', parallaxEffect);
    initScrollReveal();
    
    return () => {
      window.removeEventListener('scroll', parallaxEffect);
    };
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
      
      {/* Wave background lines inspired by the reference image */}
      <div ref={waveRef} className="absolute inset-0 pointer-events-none overflow-hidden wavy-background">
        <div className="wave-lines"></div>
        <div className="wave-curved"></div>
      </div>
      
      {/* 3D Floating elements with perspective */}
      <div className="absolute inset-0 perspective-[1000px]">
        <div ref={floatingElementsRef} className="relative h-full w-full">
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-stalight-primary/20 blur-3xl animate-float parallax-element" data-speed="0.3"></div>
          <div className="absolute bottom-1/4 right-1/5 w-40 h-40 rounded-full bg-stalight-blue/20 blur-3xl animate-float parallax-element" data-speed="0.5" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-stalight-accent/10 blur-3xl animate-float parallax-element" data-speed="0.2" style={{ animationDelay: '-1.5s' }}></div>
          
          {/* 3D floating elements with scroll transformations */}
          <div className="absolute top-1/3 left-1/3 w-16 h-16 glass-card rounded-xl animate-float transform rotate-12 transform-style-3d scroll-transform" 
               data-transform="rotate" data-speed="0.1" data-max-value="45" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 glass-card rounded-xl animate-float transform -rotate-12 transform-style-3d scroll-transform" 
               data-transform="skew" data-speed="0.05" data-max-value="15" style={{ animationDelay: '-4s' }}></div>
          
          {/* Additional 3D elements */}
          <div className="absolute top-2/3 left-1/4 w-24 h-24 glass-card rounded-full animate-float-slow backdrop-blur-lg bg-white/5 border border-white/20 shadow-xl scroll-zoom" 
               data-scale-rate="0.001" data-max-scale="1.3" style={{ animationDelay: '-1s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 animate-rotate-slow transform-style-3d scroll-transform"
               data-transform="rotate" data-speed="0.2" data-max-value="360">
            <div className="absolute inset-0 glass-pyramid transform-style-3d"></div>
          </div>
          <div className="absolute bottom-1/5 left-1/3 w-32 h-32 animate-float-reverse transform-style-3d scroll-layer" 
               data-speed="-0.1" data-direction="horizontal" style={{ animationDelay: '-2.5s' }}>
            <div className="absolute inset-0 glass-cube transform-style-3d"></div>
          </div>
          
          {/* New futuristic 3D elements */}
          <div className="absolute top-1/2 right-1/5 w-36 h-36 animate-float-slow transform-style-3d scroll-layer" 
               data-speed="0.15" data-direction="vertical" style={{ animationDelay: '-3.5s' }}>
            <div className="absolute inset-0 glass-helix transform-style-3d"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/6 w-48 h-48 animate-pulse-glow transform-style-3d opacity-30 scroll-zoom"
               data-scale-rate="0.0005" data-max-scale="1.2">
            <div className="absolute inset-0 glass-sphere transform-style-3d"></div>
          </div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-20">
        <div ref={heroRef} className="text-center max-w-5xl mx-auto scroll-reveal-item">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins text-gradient">
            Revolutionize Education with Stalight Technology
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            Empowering educators and students with cutting-edge AI and blockchain solutions for a smarter, more connected learning experience in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center z-50 relative">
            <GlassmorphicButton 
              onClick={() => scrollToSection('about')}
              className="bg-stalight-primary text-white font-medium py-6 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.7)]"
              glowEffect={true}
            >
              <span className="relative z-10">Get Started</span>
              <ChevronRight className="ml-2 h-5 w-5 relative z-10" />
            </GlassmorphicButton>
            <GlassmorphicButton 
              variant="outline" 
              onClick={() => scrollToSection('products')}
              className="border-white/20 hover:bg-white/10 text-white font-medium py-6 px-8 rounded-full glass-card transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Learn More
            </GlassmorphicButton>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white/70">Trusted by leading institutions worldwide</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="h-6 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <span className="text-white/80 text-sm">University Partners</span>
              </div>
              <div className="h-6 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <span className="text-white/80 text-sm">Corporate Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          className="text-white/60 hover:text-white glass-card rounded-full p-2 hover:bg-white/5 transition-all duration-300" 
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="h-8 w-8 animate-pulse-soft" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </div>
      
      {/* Scroll progress indicator */}
      <div className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center opacity-0 scroll-progress-indicator transition-opacity duration-300">
        <div className="scroll-progress-circle">
          <svg className="w-10 h-10">
            <circle className="text-gray-300" strokeWidth="2" stroke="currentColor" fill="transparent" r="18" cx="20" cy="20" />
            <circle className="text-stalight-primary scroll-progress-circle-bar" strokeWidth="2" stroke="currentColor" fill="transparent" r="18" cx="20" cy="20" />
          </svg>
          <span className="absolute text-xs text-white scroll-progress-percentage">0%</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
