
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ChevronRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const productLinks = [
  { name: 'Student Management System', href: '#products' },
  { name: 'Learning Management System', href: '#products' },
  { name: 'Smart Dashboards', href: '#products' },
  { name: 'AI Face Attendance', href: '#products' },
  { name: 'Blockchain Certificate', href: '#products' },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com', label: 'YouTube' },
];

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      return true;
    }
    return false;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      scrollToSection(href);
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden bg-black">
      {/* Wave background lines inspired by the reference image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="wave-lines"></div>
      </div>
      
      {/* Background accents with enhanced animation */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-stalight-primary/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-stalight-blue/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-stalight-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '-3s' }}></div>
      
      {/* 3D floating elements with enhanced animation */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 glass-card rounded-xl animate-float-slow transform rotate-12" style={{ animationDelay: '-1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 glass-card rounded-xl animate-float-reverse transform -rotate-12" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-10 h-10 glass-card rounded-lg animate-float transform-style-3d" style={{ animationDelay: '-2.5s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="scroll-reveal-item opacity-0 translate-y-10" style={{ transitionDelay: '0.1s' }}>
            <div className="mb-6">
              <a href="#home" className="flex items-center" onClick={(e) => handleLinkClick(e, '#home')}>
                <span className="text-2xl font-bold font-poppins text-gradient-primary">Stalight</span>
                <span className="ml-1 text-xl font-light font-poppins text-white">Technology</span>
              </a>
            </div>
            <p className="text-white/70 mb-6">
              Empowering educators and students with cutting-edge technology solutions for a brighter, more interconnected future of learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  onClick={(e) => handleLinkClick(e, social.href)}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-stalight-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(155,135,245,0.4)] group"
                  aria-label={social.label}
                >
                  <span className="transform transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="scroll-reveal-item opacity-0 translate-y-10" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-stalight-primary"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/70 hover:text-stalight-primary transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-stalight-primary/70 transition-transform duration-300 group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div className="scroll-reveal-item opacity-0 translate-y-10" style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white relative">
              Our Products
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-stalight-primary"></span>
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/70 hover:text-stalight-primary transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-stalight-primary/70 transition-transform duration-300 group-hover:translate-x-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter with enhanced design */}
          <div className="scroll-reveal-item opacity-0 translate-y-10" style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white relative">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-stalight-primary"></span>
            </h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive updates on our latest products and innovations in educational technology.
            </p>
            <form className="flex group relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-white/5 border border-white/10 text-white placeholder:text-white/50 rounded-l-md px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-stalight-primary transition-all duration-300 group-hover:bg-white/10"
              />
              <button 
                type="submit"
                className="bg-stalight-primary hover:bg-stalight-primary/80 text-white px-4 py-2 rounded-r-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(155,135,245,0.4)]"
              >
                Subscribe
              </button>
              <div className="absolute -bottom-2 right-2 w-0 h-0.5 bg-stalight-primary group-hover:w-full group-hover:right-auto group-hover:left-0 transition-all duration-700"></div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} Stalight Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
