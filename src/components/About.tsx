
import React from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Lightbulb, Star, Target, Zap } from 'lucide-react';

const valueIcons = [
  { 
    icon: <Lightbulb className="h-8 w-8 text-stalight-primary" />, 
    title: "Innovation", 
    description: "We constantly push the boundaries of what's possible in educational technology." 
  },
  { 
    icon: <Star className="h-8 w-8 text-stalight-primary" />, 
    title: "Excellence", 
    description: "We strive for perfection in every solution we develop for our clients." 
  },
  { 
    icon: <Target className="h-8 w-8 text-stalight-primary" />, 
    title: "Impact", 
    description: "Our solutions create meaningful change in educational institutions." 
  },
  { 
    icon: <Zap className="h-8 w-8 text-stalight-primary" />, 
    title: "Empowerment", 
    description: "We empower educators and students with tools for better learning outcomes." 
  },
];

const teamMembers = [
  {
    name: "Ritesh N",
    role: "CEO & Founder",
    bio: "Dynamic leader with a vision to revolutionize education through technology.",
    image: "/placeholder.svg" // Replace with actual image when available
  },
  {
    name: "Pannaga J A",
    role: "CTO & Co-Founder",
    bio: "Tech visionary with a passion for creating scalable education solutions.",
    image: "/placeholder.svg" // Replace with actual image when available
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-stalight-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-stalight-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            About Stalight Technology
          </h2>
          <p className="text-xl text-white/80">
            We're on a mission to transform education through innovative technology solutions. 
            Founded with a passion for improving learning outcomes, Stalight Technology delivers 
            cutting-edge systems that empower educational institutions worldwide.
          </p>
        </div>
        
        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {valueIcons.map((value, index) => (
            <GlassmorphicCard 
              key={index} 
              className="text-center h-full"
              glowEffect={false}
            >
              <div className="mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-white">
                {value.title}
              </h3>
              <p className="text-white/70">
                {value.description}
              </p>
            </GlassmorphicCard>
          ))}
        </div>
        
        {/* Leadership Team */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center font-poppins text-gradient">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <GlassmorphicCard
                key={index}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 sm:mb-0 bg-gradient-to-br from-stalight-primary/20 to-stalight-blue/20 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 font-poppins text-white">
                    {member.name}
                  </h4>
                  <p className="text-stalight-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/70">
                    {member.bio}
                  </p>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
