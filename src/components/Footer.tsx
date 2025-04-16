
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
  { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
];

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden bg-black">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-stalight-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-stalight-blue/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <a href="#home" className="flex items-center">
                <span className="text-2xl font-bold font-poppins text-gradient-primary">Stalight</span>
                <span className="ml-1 text-xl font-light font-poppins text-white">Technology</span>
              </a>
            </div>
            <p className="text-white/70 mb-6">
              Empowering educators and students with cutting-edge technology solutions for a brighter future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-stalight-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-stalight-primary transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-stalight-primary/70" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-stalight-primary transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-stalight-primary/70" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-poppins text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive updates on our latest products and news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-white/5 border border-white/10 text-white placeholder:text-white/50 rounded-l-md px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-stalight-primary"
              />
              <button 
                type="submit"
                className="bg-stalight-primary hover:bg-stalight-primary/80 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
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
