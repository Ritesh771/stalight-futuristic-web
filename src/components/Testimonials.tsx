
import React, { useState, useEffect } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ruthu Parinika",
    role: "Intern, Stalight Technology",
    quote: "Working at Stalight Technology has been an incredible journey! The hands-on projects and mentorship have sharpened my skills, and the dynamic work environment keeps me inspired every day.",
    image: "/placeholder.svg" // Replace with actual image when available
  },
  {
    name: "Shashank",
    role: "Intern, Stalight Technology",
    quote: "At Stalight, I've gained real-world experience in a fast-paced tech environment. The collaborative culture and cutting-edge projects have truly accelerated my professional growth.",
    image: "/placeholder.svg" // Replace with actual image when available
  },
  {
    name: "Praveen V",
    role: "Intern, Stalight Technology",
    quote: "Stalight Technology has given me the opportunity to work on meaningful projects with a talented team. The experience has been invaluable in shaping my career path!",
    image: "/placeholder.svg" // Replace with actual image when available
  },
  {
    name: "Raghuveer",
    role: "Intern, Stalight Technology",
    quote: "Interning at Stalight has been a fantastic learning experience. The supportive team and innovative projects have significantly contributed to my skill development.",
    image: "/placeholder.svg" // Replace with actual image when available
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-stalight-dark">
      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-stalight-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-stalight-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            What Our Interns Say
          </h2>
          <p className="text-xl text-white/80">
            Hear from the talented individuals who have been part of our journey
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <GlassmorphicCard className="relative px-8 py-10">
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-stalight-primary opacity-40" />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-stalight-primary/20 to-stalight-blue/20 flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg mb-6 italic text-white/90">
                          "{testimonial.quote}"
                        </p>
                        <div>
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
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-stalight-primary w-6' 
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
