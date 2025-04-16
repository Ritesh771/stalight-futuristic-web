
import React from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of AI in Education",
    excerpt: "Explore how artificial intelligence is reshaping the educational landscape and creating new opportunities for personalized learning.",
    date: "April 10, 2025",
    image: "/placeholder.svg", // Replace with actual image when available
    category: "Technology"
  },
  {
    title: "Blockchain Technology in Academic Credentials",
    excerpt: "Learn how blockchain is revolutionizing the way academic credentials are verified and maintained in educational institutions.",
    date: "April 5, 2025",
    image: "/placeholder.svg", // Replace with actual image when available
    category: "Innovation"
  },
  {
    title: "Transforming Student Assessment with AI",
    excerpt: "Discover innovative methods of student assessment that leverage artificial intelligence to provide better insights into student performance.",
    date: "March 28, 2025",
    image: "/placeholder.svg", // Replace with actual image when available
    category: "Education"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-stalight-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-stalight-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Latest Insights
          </h2>
          <p className="text-xl text-white/80">
            Stay updated with our latest articles on educational technology and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <GlassmorphicCard key={index} className="flex flex-col h-full">
              <div className="rounded-lg overflow-hidden mb-4 h-48 bg-gradient-to-br from-stalight-primary/20 to-stalight-blue/20">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-stalight-primary text-sm">{post.category}</span>
                  <span className="text-white/60 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-poppins text-white">
                  {post.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {post.excerpt}
                </p>
              </div>
              <Button variant="ghost" className="text-stalight-primary hover:text-stalight-primary/80 hover:bg-white/5 p-0 flex items-center gap-2 mt-2">
                Read more <ArrowRight className="h-4 w-4" />
              </Button>
            </GlassmorphicCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-stalight-primary hover:bg-stalight-primary/80 text-white glass-card-hover">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
