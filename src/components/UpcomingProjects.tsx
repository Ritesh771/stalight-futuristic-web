
import React, { useState, useRef, useEffect } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Brain, Headset, Gamepad2, Bot, Monitor, Smartphone, Route, PenTool } from 'lucide-react';

const projects = [
  {
    icon: <Brain className="h-10 w-10 text-stalight-primary" />,
    title: "NeuroCampus AI Platform",
    description: "A unified AI-powered platform for personalized learning, analytics, and student success tracking across institutions.",
  },
  {
    icon: <Monitor className="h-10 w-10 text-stalight-primary" />,
    title: "Smart Assessment Suite",
    description: "Automated, adaptive assessment tools with instant feedback and deep learning analytics for educators and students.",
  },
  {
    icon: <Headset className="h-10 w-10 text-stalight-primary" />,
    title: "Immersive VR Labs",
    description: "Virtual reality science and engineering labs for hands-on, safe, and scalable practical learning experiences.",
  },
  {
    icon: <Bot className="h-10 w-10 text-stalight-primary" />,
    title: "24/7 AI Academic Assistant",
    description: "Conversational AI assistant for students and faculty, providing real-time help, scheduling, and resource discovery.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-stalight-primary" />,
    title: "Mobile Learning Hub",
    description: "A next-gen mobile app for seamless access to courses, assignments, and collaboration tools on the go.",
  },
  {
    icon: <Route className="h-10 w-10 text-stalight-primary" />,
    title: "Adaptive Learning Pathways",
    description: "AI-driven personalized learning journeys that adapt in real time to each learner’s strengths and needs.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-stalight-primary" />,
    title: "Digital Credentialing & Blockchain",
    description: "Secure, verifiable digital certificates and transcripts powered by blockchain for global recognition.",
  },
  {
    icon: <Gamepad2 className="h-10 w-10 text-stalight-primary" />,
    title: "Gamified STEM Challenges",
    description: "Competitive, gamified STEM problem-solving events and leaderboards to boost engagement and innovation.",
  }
];

const UpcomingProjects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!isHovered) {
      const autoSlideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(autoSlideInterval);
    }
  }, [currentSlide, totalSlides, isHovered]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Removed animated background accents for smoothness */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Upcoming Projects
          </h2>
          <p className="text-xl text-white/80">
            Discover our cutting-edge innovations in educational technology currently in development
          </p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation buttons */}
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-stalight-dark/50 hover:bg-stalight-primary/30 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-stalight-dark/50 hover:bg-stalight-primary/30 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
          
          {/* Carousel container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden mx-12"
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Group projects into slides */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex flex-wrap justify-center gap-6">
                  {projects.slice(
                    slideIndex * itemsPerSlide, 
                    (slideIndex + 1) * itemsPerSlide
                  ).map((project, projectIndex) => (
                    <GlassmorphicCard 
                      key={projectIndex}
                      className="flex-1 min-w-[250px] max-w-[300px] text-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] group"
                    >
                      <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-stalight-light">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 font-poppins text-white">
                        {project.title}
                      </h3>
                      <p className="text-white/70 transform transition-opacity duration-300 group-hover:text-white/90">
                        {project.description}
                      </p>
                      <div className="h-1 w-0 bg-gradient-to-r from-stalight-primary to-stalight-blue mt-4 mx-auto group-hover:w-20 transition-all duration-500"></div>
                    </GlassmorphicCard>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-stalight-primary w-6 shadow-[0_0_10px_rgba(155,135,245,0.7)]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
