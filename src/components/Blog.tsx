
import React from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import GlassmorphicButton from './GlassmorphicButton';

const blogPosts = [
  {
    title: "The Future of AI in Education",
    excerpt: "Explore how artificial intelligence is reshaping the educational landscape and creating new opportunities for personalized learning experiences. AI-powered tools are revolutionizing how students learn, providing adaptive content and real-time feedback.",
    date: "April 10, 2025",
    image: "/placeholder.svg", // Replace with actual image when available
    category: "Technology",
    link: "#blog/ai-in-education"
  },
  {
    title: "Blockchain Technology in Academic Credentials",
    excerpt: "Learn how blockchain is revolutionizing the way academic credentials are verified and maintained in educational institutions. This tamper-proof technology ensures the integrity and authenticity of certificates while simplifying verification processes.",
    date: "April 5, 2025",
    image: "/placeholder.svg", // Replace with actual image when available
    category: "Innovation",
    link: "#blog/blockchain-credentials"
  },
  {
    title: "Transforming Student Assessment with AI",
    excerpt: "Discover innovative methods of student assessment that leverage artificial intelligence to provide better insights into student performance and personalized learning paths that adapt to individual strengths and weaknesses.",
    date: "March 28, 2025",
    image: "/placeholder.svg", // Replace with actual image when available
    category: "Education",
    link: "#blog/ai-assessment"
  },
  {
    title: "The Impact of Virtual Reality on Classroom Engagement",
    excerpt: "See how virtual reality is transforming traditional classroom experiences into immersive learning environments that capture students' attention and improve knowledge retention through interactive simulations.",
    date: "March 15, 2025",
    image: "/placeholder.svg",
    category: "Innovation",
    link: "#blog/vr-classroom"
  }
];

const Blog: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'all-articles') {
      // For demonstration, just scroll to the top for now
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // In a real app, this would navigate to a blog listing page
      console.log('Navigating to all articles page');
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If section ID doesn't exist, log for debugging
      console.log(`Section #${sectionId} not found`);
    }
  };

  const handleBlogClick = (url: string) => {
    if (url.startsWith('#')) {
      // Internal navigation - extract the section ID
      const sectionId = url.replace('#', '');
      scrollToSection(sectionId);
      
      // For demonstration, log that we would navigate to a specific blog post
      console.log(`Navigating to blog post: ${sectionId}`);
    } else {
      // External navigation - open in new tab
      window.open(url, '_blank');
    }
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background wave lines inspired by the reference image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="wave-lines"></div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-stalight-primary/10 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-stalight-blue/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/5 w-48 h-48 rounded-full bg-stalight-accent/10 blur-3xl animate-pulse-glow"></div>
      
      {/* 3D animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-16 h-16 glass-card rounded-xl animate-float transform rotate-12 backdrop-blur-lg" style={{ animationDelay: '-1.7s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 glass-card rounded-xl animate-float-reverse transform -rotate-12" style={{ animationDelay: '-3.2s' }}></div>
        <div className="absolute top-2/3 right-1/5 w-20 h-20 glass-card rounded-lg animate-float-slow transform-style-3d" style={{ animationDelay: '-2.5s' }}></div>
        
        {/* New 3D elements */}
        <div className="absolute top-1/3 left-1/4 w-24 h-24 animate-rotate-slow opacity-20">
          <div className="absolute inset-0 glass-pyramid"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 animate-float-slow opacity-30" style={{ animationDelay: '-4.2s' }}>
          <div className="absolute inset-0 glass-cube"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins text-gradient-primary">
            Latest Insights & Trends
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with our latest articles on educational technology innovations and transformative approaches to learning in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="scroll-reveal-item opacity-0 translate-y-10"
              style={{ 
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              <GlassmorphicCard 
                className="flex flex-col h-full hover:scale-105 transition-all duration-500 hover:shadow-[0_0_30px_rgba(155,135,245,0.3)] backdrop-blur-md"
              >
                <div className="rounded-lg overflow-hidden mb-4 h-48 bg-gradient-to-br from-stalight-primary/20 to-stalight-blue/20 group relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-stalight-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-stalight-primary text-sm font-medium px-3 py-1 rounded-full bg-stalight-primary/10 backdrop-blur-sm">{post.category}</span>
                    <span className="text-white/60 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins text-white">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <GlassmorphicButton 
                  variant="link" 
                  className="text-stalight-primary hover:text-stalight-primary/80 p-0 flex items-center gap-2 mt-2 transition-all duration-300 group"
                  onClick={() => handleBlogClick(post.link)}
                >
                  Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </GlassmorphicButton>
              </GlassmorphicCard>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <GlassmorphicButton 
            className="bg-stalight-primary hover:bg-stalight-primary/80 text-white glass-card-hover transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            onClick={() => scrollToSection('all-articles')}
            glowEffect={true}
          >
            View All Articles
          </GlassmorphicButton>
        </div>
      </div>
    </section>
  );
};

export default Blog;
