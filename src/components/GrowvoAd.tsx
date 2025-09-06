import React, { useState, useEffect } from 'react';
import { X, Rocket, Bot, FileText, Package, ExternalLink, Sparkles, Zap, Star } from 'lucide-react';

const GrowvoAd = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show ad after a short delay on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-lg w-full">
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent rounded-3xl blur-xl opacity-30 animate-pulse"></div>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-accent animate-pulse"></div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-all duration-300 hover:scale-110 bg-black/20 rounded-full p-1"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header with Sparkles */}
            <div className="text-center mb-6 relative">
              
              

              <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                 Kickstart your ideas with{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Growvo
                </span>
                <br />
                <span className="text-lg">Web, Apps & Careers, all in one place!</span>
              </h2>
              <p className="text-white/90 text-base font-medium italic">
                Affordable. Smart. Built for dreamers, hustlers, and innovators like you.
              </p>
            </div>

            {/* Offer Highlights with Enhanced Styling */}
            <div className="space-y-4 mb-8">
              <div className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <p className="text-white/90 text-sm leading-relaxed">Web & App Development — Launch your project fast with modern designs.</p>
              </div>

              <div className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <p className="text-white/90 text-sm leading-relaxed">AI & Automation Tools — Smart solutions that save time & energy.</p>
              </div>

              <div className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <p className="text-white/90 text-sm leading-relaxed">Career Boost Services — Resume, LinkedIn, and portfolio help to get noticed.</p>
              </div>

              <div className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Package className="w-4 h-4 text-white" />
                </div>
                <p className="text-white/90 text-sm leading-relaxed">Flexible Packages — Small, Medium, Large — pay only for what you need.</p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <a
              href="https://growvo.stalight.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full bg-gradient-to-r from-primary via-purple-500 to-accent text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 animate-pulse"></div>

              <span className="relative z-10 text-lg">Visit Growvo</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 relative z-10" />

              {/* Sparkle Effect */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Zap className="w-3 h-3 text-yellow-300 animate-ping" />
              </div>
            </a>

            {/* Footer Tagline */}
            <p className="text-center text-white/60 text-xs mt-4 italic">
              ✨ Transform your ideas into reality ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowvoAd;
