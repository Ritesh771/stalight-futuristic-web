import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    label: "Email",
    value: "info@stalight.tech",
    link: "mailto:infostalight@gmail.com"
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    label: "Phone",
    value: "+91 8660144040",
    link: "tel:+918660144040"
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    label: "Address",
    value: "StalightTechnology, 12.9330376, 77.560489",
    link: "https://maps.google.com/?q=12.9330376,77.560489"
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    label: "Office Hours",
    value: "Mon-Fri: 4:00 PM - 9:00 PM\nSat: 11:00 AM - 4:00 PM\nSun: Closed",
    link: ""
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/90 to-background/75"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/10 via-transparent to-blue-950/10"></div>
      
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 lg:mb-12">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 font-bungee bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-inter">
              Have questions or want to learn more about our services? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Illustration */}
          <div className="flex justify-center mb-12">
            <img 
              src="/svg/undraw_contact-us_kcoa.svg"
              alt="Contact Us"
              className="w-full max-w-md lg:max-w-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  {info.icon}
                </div>
                <h4 className="font-semibold text-white mb-3 text-lg">{info.label}</h4>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-white/70 hover:text-primary transition-colors text-sm leading-relaxed block"
                    {...(info.link.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white/70 text-sm whitespace-pre-line leading-relaxed">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Site Developed By Button */}
          <div className="text-center">
            <a 
              href="https://riteshn.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 text-white/80 hover:text-white group"
            >
              <span className="text-sm font-medium font-inter">Site Developed by</span>
              <span className="text-primary font-semibold font-inter">riteshn.me</span>
              <ExternalLink className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
