import React, { useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import GlassmorphicButton from './GlassmorphicButton';

const blogPosts = [
  {
    title: "AI-Powered Personalization: The Next Wave in EdTech",
    excerpt: "How advanced AI is enabling hyper-personalized learning journeys, boosting student engagement and outcomes across the globe.",
    fullContent: "The future of education is deeply personal. With the rise of AI-powered analytics, educators can now tailor content, pace, and feedback to each learner’s unique needs. Adaptive learning platforms use real-time data to adjust lessons, recommend resources, and even predict when a student might need extra support. This shift is not just improving test scores—it’s fostering lifelong curiosity and resilience. As AI continues to evolve, expect to see even more granular personalization, from voice-driven tutoring to emotion-aware feedback systems, making learning more inclusive and effective than ever before.",
    date: "May 10, 2025",
    image: "/1.jpg",
    category: "AI & Personalization",
    link: "#blog/ai-personalization",
    id: "blog-content-1"
  },
  {
    title: "Blockchain: The Future of Academic Integrity & Credentials",
    excerpt: "Why leading universities and employers are turning to blockchain for secure, verifiable, and portable academic records.",
    fullContent: "Academic fraud and credential verification have long plagued both institutions and employers. Blockchain technology is changing the game by providing a tamper-proof, decentralized ledger for degrees, certificates, and micro-credentials. Students gain full ownership of their achievements, while employers can instantly verify qualifications with a single click. This not only streamlines hiring but also opens the door to global, lifelong learning records that travel with the individual. As adoption grows, expect blockchain to become the gold standard for academic trust and transparency.",
    date: "April 28, 2025",
    image: "/2.jpg",
    category: "Blockchain & Credentials",
    link: "#blog/blockchain-future",
    id: "blog-content-2"
  },
  {
    title: "Immersive Learning: How VR & AR Are Transforming Classrooms",
    excerpt: "Explore the latest breakthroughs in virtual and augmented reality, making learning more interactive, memorable, and accessible.",
    fullContent: "Virtual and augmented reality are no longer just buzzwords—they’re revolutionizing education. From virtual field trips to interactive science labs, VR and AR are breaking down barriers of cost, location, and accessibility. Students can now experience history, science, and art in ways that were previously unimaginable, leading to higher engagement and deeper understanding. As hardware becomes more affordable and content libraries expand, immersive learning will become a staple in classrooms worldwide, preparing students for the digital future.",
    date: "April 15, 2025",
    image: "/3.jpg",
    category: "VR/AR & Innovation",
    link: "#blog/immersive-learning",
    id: "blog-content-3"
  },
  {
    title: "Data-Driven Decision Making in Education: Trends & Best Practices",
    excerpt: "How schools and universities are leveraging big data and analytics to improve teaching, learning, and operational efficiency.",
    fullContent: "Data is the new oil in education. Institutions are harnessing analytics to identify at-risk students, optimize resource allocation, and measure the true impact of teaching strategies. Predictive models help educators intervene early, while dashboards provide real-time insights for administrators. The key to success? Building a culture of data literacy and ethical use, ensuring that analytics empower rather than overwhelm. As data-driven decision making becomes the norm, expect smarter, more agile educational organizations that can adapt to the needs of every learner.",
    date: "April 2, 2025",
    image: "/4.jpg",
    category: "Data & Analytics",
    link: "#blog/data-driven-education",
    id: "blog-content-4"
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const handleBlogClick = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden wavy-background">
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
        <div className="absolute top-1/4 right-1/3 w-16 h-16 glass-card rounded-xl animate-float transform rotate-12 backdrop-blur-lg scroll-transform" 
             data-transform="rotate" data-speed="0.1" data-max-value="30" style={{ animationDelay: '-1.7s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 glass-card rounded-xl animate-float-reverse transform -rotate-12 scroll-transform" 
             data-transform="skew" data-speed="0.05" data-max-value="15" style={{ animationDelay: '-3.2s' }}></div>
        <div className="absolute top-2/3 right-1/5 w-20 h-20 glass-card rounded-lg animate-float-slow transform-style-3d scroll-zoom" 
             data-scale-rate="0.0008" data-max-scale="1.3" style={{ animationDelay: '-2.5s' }}></div>
        
        {/* New 3D elements */}
        <div className="absolute top-1/3 left-1/4 w-24 h-24 animate-rotate-slow opacity-20 scroll-transform" 
             data-transform="rotate" data-speed="0.3" data-max-value="360">
          <div className="absolute inset-0 glass-pyramid"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 animate-float-slow opacity-30 scroll-layer" 
             data-speed="-0.05" data-direction="horizontal" style={{ animationDelay: '-4.2s' }}>
          <div className="absolute inset-0 glass-cube"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
  <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins text-gradient-primary">
            Latest Insights & Trends
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with our latest articles on educational innovations and transformative approaches to learning in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="opacity-100 translate-y-0"
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
                <Button 
                  variant="link" 
                  className="text-stalight-primary hover:text-stalight-primary/80 p-0 flex items-center gap-2 mt-2 transition-all duration-300 group read-more-button"
                  onClick={() => handleBlogClick(post)}
                >
                  Read more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </GlassmorphicCard>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-stalight-dark/95 rounded-2xl p-8 shadow-2xl border border-white/10">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="rounded-lg overflow-hidden mb-6 h-64 bg-gradient-to-br from-stalight-primary/20 to-stalight-blue/20">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-stalight-primary text-sm font-medium px-3 py-1 rounded-full bg-stalight-primary/10 backdrop-blur-sm">
                {selectedPost.category}
              </span>
              <span className="text-white/60 text-sm">{selectedPost.date}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins text-white">
              {selectedPost.title}
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed">
                {selectedPost.fullContent}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
