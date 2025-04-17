import React from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Lightbulb, Star, Target, Zap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
    image: "/ceo.jpg", // Updated path
    initials: "RN"
  },
  {
    name: "Pannaga J A",
    role: "CTO & Co-Founder",
    bio: "Tech visionary with a passion for creating scalable education solutions.",
    image: "/cto.jpg", // Updated path
    initials: "PJ"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-stalight-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-stalight-blue/10 blur-3xl"></div>

      {/* 3D Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/5 w-16 h-16 glass-card rounded-lg animate-float transform rotate-45 backdrop-blur-md" style={{ animationDelay: '-3.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-20 h-20 glass-card rounded-lg animate-float-slow transform -rotate-12" style={{ animationDelay: '-2.7s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-12 h-12 glass-card rounded-full animate-float-reverse transform-style-3d" style={{ animationDelay: '-1.2s' }}></div>
      </div>

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
              className="text-center h-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(155,135,245,0.3)]"
              glowEffect={false}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-stalight-primary/10 backdrop-blur-sm">
                  {value.icon}
                </div>
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
                className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 backdrop-blur-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(155,135,245,0.3)]"
              >
                <div className="flex-shrink-0">
                  <Avatar className="w-24 h-24 border-2 border-stalight-primary shadow-[0_0_15px_rgba(155,135,245,0.5)] animate-pulse-soft">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-stalight-primary/20 text-white text-xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
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
