
import React, { useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import GlassmorphicButton from './GlassmorphicButton';
import { Download, ArrowRight } from 'lucide-react';
import TypeWriter from './TypeWriter';

const features = [
  {
    title: "AI-Powered Learning",
    description: "Our neural network algorithms adapt to each student's learning style and pace, creating a truly personalized educational experience."
  },
  {
    title: "Immersive Campus Experience",
    description: "Experience campus life in a fully digital environment with virtual classrooms, labs, and social spaces."
  },
  {
    title: "Blockchain Certification",
    description: "Every achievement is securely recorded and verifiable through our blockchain-based certification system."
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive analytics provide insights into student performance, engagement, and areas for improvement."
  }
];

const NeuroCampusReveal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = (platform: 'android' | 'ios') => {
    // In a real app, these would be actual download URLs
    const downloadUrls = {
      android: '/neuro-campus-android.apk',
      ios: '/neuro-campus-ios.ipa'
    };
    
    // Create an anchor element and simulate a click
    const link = document.createElement('a');
    link.href = downloadUrls[platform];
    link.download = `neuro-campus-${platform}`;
    link.click();
    
    setDownloadStarted(true);
    
    // Reset the download state after a delay
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  return (
    <section id="neuro-campus" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-stalight-dark">
      {/* Gradient Backdrop */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="bg-gradient-radial from-stalight-primary/20 via-transparent to-transparent w-full h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins text-gradient-primary">
            <TypeWriter 
              text="Introducing NEURO CAMPUS" 
              speed={70}
              onComplete={() => setTypingComplete(true)}
            />
          </h2>
          <p className="text-xl text-white/80 mt-8">
            {typingComplete && (
              <TypeWriter 
                text="The future of education technology, powered by AI and blockchain" 
                speed={30}
              />
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {features.map((feature, index) => (
            <GlassmorphicCard 
              key={index}
              className="card-spotlight h-full p-8"
              hoverEffect={true}
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                {feature.title}
              </h3>
              <p className="text-lg text-white/80">
                {feature.description}
              </p>
              <div className="mt-6">
                <button className="text-stalight-primary flex items-center text-lg transition-all hover:translate-x-2">
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </GlassmorphicCard>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-20">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="canvas-reveal rounded-2xl overflow-hidden w-full max-w-md aspect-[4/3] card-spotlight">
              <img 
                src={`/lovable-uploads/904a99d9-9437-400c-9d5c-be969f43a002.png`} 
                alt="NEURO CAMPUS AI Education Platform"
                className="w-full h-full object-cover" 
                onError={(e) => {
                  e.currentTarget.src = `/lovable-uploads/e67c8bb8-4937-4d34-88a3-4057ffe0cf00.png`;
                }}
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <GlassmorphicCard className="card-spotlight p-8 h-full">
              <h3 className="text-3xl font-bold mb-6 text-gradient-primary">
                Experience the Future of Learning
              </h3>
              <p className="text-lg text-white/80 mb-8">
                Download our mobile application now and experience the power of AI-driven education on your device. Available for both Android and iOS platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <GlassmorphicButton 
                  onClick={() => handleDownload('android')} 
                  className="group relative"
                  glowEffect={true}
                >
                  <Download className="mr-2" /> 
                  <span>Download for Android</span>
                  {downloadStarted && (
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                      ✓
                    </span>
                  )}
                </GlassmorphicButton>
                
                <GlassmorphicButton 
                  onClick={() => handleDownload('ios')}
                  variant="outline"
                  className="group relative"
                >
                  <Download className="mr-2" /> 
                  <span>Download for iOS</span>
                  {downloadStarted && (
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                      ✓
                    </span>
                  )}
                </GlassmorphicButton>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuroCampusReveal;
