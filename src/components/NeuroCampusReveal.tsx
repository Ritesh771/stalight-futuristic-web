
import React, { useEffect, useRef, useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { ArrowRight, Brain, GraduationCap, Atom, Layers } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Learning",
    description: "Our neural network algorithms adapt to each student's learning style and pace, creating a truly personalized educational experience.",
    icon: <Brain className="h-6 w-6 text-stalight-primary" />
  },
  {
    title: "Immersive Campus Experience",
    description: "Experience campus life in a fully digital environment with virtual classrooms, labs, and social spaces.",
    icon: <GraduationCap className="h-6 w-6 text-stalight-primary" />
  },
  {
    title: "Blockchain Certification",
    description: "Every achievement is securely recorded and verifiable through our blockchain-based certification system.",
    icon: <Atom className="h-6 w-6 text-stalight-primary" />
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive analytics provide insights into student performance, engagement, and areas for improvement.",
    icon: <Layers className="h-6 w-6 text-stalight-primary" />
  }
];

const NeuroCampusReveal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const animationRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Gemini animation setup
  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas responsive
    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 200;
    const maxDistance = 100;
    const mouseRadius = 100;

    let mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2
    };

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: '#9b87f5',
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Check distance to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          // Repel particles from mouse
          const angle = Math.atan2(dy, dx);
          particle.x -= Math.cos(angle) * 1;
          particle.y -= Math.sin(angle) * 1;
          particle.opacity = Math.min(0.8, particle.opacity + 0.05);
        } else {
          particle.opacity = Math.max(0.2, particle.opacity - 0.01);
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 135, 245, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 135, 245, ${0.1 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollPercentage = 1 - Math.max(0, Math.min(1, rect.bottom / (rect.height + window.innerHeight)));
      const newIndex = Math.min(features.length - 1, Math.floor(scrollPercentage * features.length));
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
      
      if (containerRef.current) {
        const rotateX = scrollPercentage * 20 - 10;
        const rotateY = scrollPercentage * 20 - 10;
        containerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            window.addEventListener('scroll', handleScroll);
          } else {
            setIsVisible(false);
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer.current && containerRef.current) {
        observer.current.unobserve(containerRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section id="neuro-campus" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-stalight-dark">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="aurora-bg w-full h-full"></div>
      </div>
      
      {/* Gemini-style Canvas */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full" 
          style={{ pointerEvents: "auto" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Introducing NEURO CAMPUS
          </h2>
          <p className="text-xl text-white/80">
            The future of education technology, powered by AI and blockchain
          </p>
        </div>
        
        <div className="container-3d-scroll min-h-[80vh]">
          <div ref={containerRef} className="scroll-rotator w-full h-full py-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`scroll-content ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center h-full">
                  <div className="w-full h-full">
                    <GlassmorphicCard className="card-spotlight p-8 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-stalight-primary/10 rounded-lg mr-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gradient-primary">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-lg text-white/80 mb-6">
                        {feature.description}
                      </p>
                      <div className="mt-auto">
                        <button className="text-stalight-primary flex items-center text-lg transition-all hover:translate-x-2">
                          Learn more <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </GlassmorphicCard>
                  </div>
                  <div className="w-full h-full">
                    <div className="canvas-reveal rounded-2xl overflow-hidden w-full aspect-[4/3] card-spotlight bg-white/5 backdrop-blur-sm">
                      <img 
                        src={`/lovable-uploads/93320eb1-ed86-4aaf-ab32-e2038078e54b.png`} 
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-80 mix-blend-lighten" 
                        onError={(e) => {
                          e.currentTarget.src = `/lovable-uploads/e67c8bb8-4937-4d34-88a3-4057ffe0cf00.png`;
                        }}
                      />
                      <div className="canvas-dots absolute inset-0 opacity-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-stalight-primary w-12' : 'bg-white/30'
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    const scrollAmount = index * (containerRef.current?.clientHeight || 0) / features.length;
                    window.scrollTo({
                      top: (containerRef.current?.offsetTop || 0) + scrollAmount,
                      behavior: 'smooth'
                    });
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroCampusReveal;
