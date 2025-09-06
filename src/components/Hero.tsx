import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import GlassmorphicButton from './GlassmorphicButton';
// import ScrollManager from '@/utils/scrollManager'; // Disabled for better performance

const Hero = () => {
  // Removed useEffect and ScrollManager for better performance

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90"></div>

      {/* Simple Background - Removed animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-purple-500/10" />
      </div>

      {/* Removed floating orbs and particles for better performance */}

      {/* Main Content Container - Improved centering and responsiveness */}
      <div className="relative z-30 w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh]">
          
          {/* Text Content - Balanced responsive text sizing */}
          <div className="order-2 lg:order-1 flex flex-col justify-center py-8 lg:py-12 xl:py-16 2xl:py-20">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 xl:mb-10 font-bungee leading-tight hero-text">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-green-400">
                Igniting Intelligence
              </span>
              <br />
              <span className="text-white/90">through Innovation</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-primary font-semibold mb-3 sm:mb-4 lg:mb-6 xl:mb-8 hero-text font-inter">
              Empowering the Future with Trusted AI Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-white/80 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-2xl lg:max-w-3xl xl:max-w-4xl hero-description leading-relaxed font-inter">
              We build intelligent systems for campuses, safety, and automation that transform how organizations operate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              <GlassmorphicButton
                onClick={() => window.open('https://neurocampus.netlify.app', '_blank')}
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 sm:py-4 lg:py-5 xl:py-6 px-6 sm:px-8 lg:px-10 xl:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] relative z-10 flex items-center justify-center group text-sm sm:text-base lg:text-lg xl:text-xl font-inter"
                glowEffect={true}
              >
                <span className="relative z-10 font-bold text-white">Request a Demo</span>
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 relative z-10 group-hover:translate-x-1 transition-transform" />
              </GlassmorphicButton>
              <GlassmorphicButton
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="hover:bg-white/10 text-white font-medium py-3 sm:py-4 lg:py-5 xl:py-6 px-6 sm:px-8 lg:px-10 xl:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] relative z-10 border-white/20 text-sm sm:text-base lg:text-lg xl:text-xl font-inter"
              >
                Contact Us
              </GlassmorphicButton>
            </div>
          </div>

          {/* Illustration - Improved responsive sizing and centering */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0 py-8 lg:py-12 xl:py-16">
            <div className="relative w-full max-w-[220px] sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl">
              <img 
                src="/svg/undraw_visionary-technology_f6b3.svg"
                alt="Visionary Technology"
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -top-2 sm:-top-4 lg:-top-6 xl:-top-8 -right-2 sm:-right-4 lg:-right-6 xl:-right-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 xl:-bottom-8 -left-2 sm:-left-4 lg:-left-6 xl:-left-8 w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Down Button - Removed animation */}
      <div className="absolute bottom-8 lg:bottom-12 xl:bottom-16 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          className="text-white/60 hover:text-white rounded-full p-3 lg:p-4 hover:bg-white/5 transition-all duration-300 relative z-10"
          onClick={() => scrollToSection('about')}
        >
          <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
