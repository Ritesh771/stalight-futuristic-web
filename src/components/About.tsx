import React from 'react';
import { Brain, Shield, Zap, Users, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
  <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-purple-950/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 font-bungee">
              About <span className="text-gradient-stalight">Stalight Technology</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-4 lg:mb-6 max-w-3xl mx-auto px-4 font-inter">
              <span className="text-gradient-stalight font-semibold">Stalight Technology</span> is an AI-first Indian startup focused on building scalable, intelligent, and secure systems across education, public safety, and developer automation.
            </p>
            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 inline-block mx-4">
              <p className="text-sm sm:text-base text-white/70 mb-2 font-inter">Reg No: UDYAM-KR-03-0515698</p>
              <p className="text-sm sm:text-base text-white/70 font-inter">Founded in Bengaluru by a passionate engineering team.</p>
            </div>
          </div>

          {/* Main About Content with Illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-12">
            <div className="px-4 lg:px-0">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6 text-white/90">Our Mission</h3>
              <p className="text-white/70 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
                We envision a future where AI seamlessly integrates into everyday operations, making organizations more efficient, secure, and innovative. Our solutions are designed to solve real-world problems with cutting-edge technology.
              </p>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-white/80 text-sm sm:text-base">Practical AI solutions for real-world challenges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  </div>
                  <span className="text-white/80 text-sm sm:text-base">Human-centered design approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  </div>
                  <span className="text-white/80 text-sm sm:text-base">Continuous innovation and improvement</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center px-4 lg:px-0 mt-6 lg:mt-0">
              <img 
                src="/svg/undraw_team-collaboration_phnf.svg"
                alt="Team Collaboration"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
            <div className="glass-card p-4 sm:p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">AI-Driven Innovation</h3>
              <p className="text-white/70 text-sm sm:text-base">Advanced artificial intelligence and automation for transformative impact across industries</p>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Practical Impact</h3>
              <p className="text-white/70 text-sm sm:text-base">Solutions engineered to address real-world needs and deliver measurable results</p>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure & Scalable by Design</h3>
              <p className="text-white/70 text-sm sm:text-base">Robust, future-ready platforms built for security, compliance, and growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
