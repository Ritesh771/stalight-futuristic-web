
import React, { useState, useEffect, useRef } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ruthu Parinika",
    role: "Intern, Stalight Technology",
    quote: "Working at Stalight Technology has been an incredible journey! The hands-on projects and mentorship have sharpened my skills, and the dynamic work environment keeps me inspired every day.",
    image: "/ruthu.jpeg"
  },
  {
    name: "Shashank",
    role: "Intern, Stalight Technology",
    quote: "At Stalight, I've gained real-world experience in a fast-paced tech environment. The collaborative culture and cutting-edge projects have truly accelerated my professional growth.",
    image: "/shashank.jpeg"
  },
  {
    name: "Praveen V",
    role: "Intern, Stalight Technology",
    quote: "Stalight Technology has given me the opportunity to work on meaningful projects with a talented team. The experience has been invaluable in shaping my career path!",
    image: "/praveen.jpeg"
  },
  {
    name: "Raghuveer",
    role: "Intern, Stalight Technology",
    quote: "Interning at Stalight has been a fantastic learning experience. The supportive team and innovative projects have significantly contributed to my skill development.",
    image: "/raghuveer.jpg"
  }
];

// Dashboard/application demo images
const demoImages = [
  "/lovable-uploads/2614e848-c95d-4948-8ef6-d595f235c187.png",
  "/lovable-uploads/a134a1df-8d92-49c6-8531-7e380127b7cc.png",
  "/lovable-uploads/3fcd3005-6fc2-4dc6-b80f-e5e023b5bc53.png",
  "/lovable-uploads/832f5d4e-c0ba-40b0-ab9f-2615135f3dc7.png",
  "/lovable-uploads/efa6578d-d8f4-4e45-b1f5-d88501de1eff.png",
  "/lovable-uploads/904a99d9-9437-400c-9d5c-be969f43a002.png",
  "/lovable-uploads/e67c8bb8-4937-4d34-88a3-4057ffe0cf00.png"
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    const demoInterval = setInterval(() => {
      setActiveDemoIndex((current) => (current + 1) % demoImages.length);
    }, 3000);
    
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(demoInterval);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!marqueeRef.current) return;
    
    const rect = marqueeRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    
    setMousePosition({ x, y });
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-stalight-dark">
      {/* Enhanced Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="aurora-bg w-full h-full"></div>
      </div>
      
      {/* Wave lines with enhanced opacity */}
      <div className="wave-lines absolute inset-0 z-0 opacity-50"></div>
      <div className="wave-curved absolute inset-0 z-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            What Our Interns Say
          </h2>
          <p className="text-xl text-white/80">
            Hear from the talented individuals who have been part of our journey
          </p>
        </div>
        
        {/* 3D Marquee with Dashboard Images */}
        <div 
          className="marquee-3d mb-20 perspective-[1000px] scroll-reveal-item" 
          ref={marqueeRef}
          onMouseMove={handleMouseMove}
        >
          <div 
            className="marquee-grid grid grid-cols-1 md:grid-cols-3 gap-6 transform-style-3d"
            style={{ 
              transform: `rotateX(${-mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`
            }}
          >
            {demoImages.map((image, idx) => (
              <div 
                key={idx}
                className={`dashboard-preview transform transition-all duration-700 ${
                  idx === activeDemoIndex ? "scale-110 z-20" : "scale-90 opacity-70"
                }`}
              >
                <div className="canvas-reveal overflow-hidden rounded-xl border border-white/20 card-spotlight">
                  <img 
                    src={image} 
                    alt={`Application Demo ${idx + 1}`} 
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                  <div className="canvas-dots absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Animated Testimonials */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4 scroll-reveal-item">
                  <GlassmorphicCard className="relative px-8 py-10 testimonial-card card-spotlight transform hover:scale-[1.02] transition-all duration-500">
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-stalight-primary opacity-40" />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-stalight-primary/20 to-stalight-blue/20 flex-shrink-0 ring-4 ring-white/10 animate-pulse-soft">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg mb-6 italic text-white/90 quote-text">
                          "{testimonial.quote}"
                        </p>
                        <div className="animate-slide-in">
                          <h4 className="text-xl font-semibold font-poppins text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-stalight-primary">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced dots indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-stalight-primary w-6 animate-pulse-glow' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
