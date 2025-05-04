
import React, { useState, useEffect, useRef } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { Download, Smartphone, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const DownloadApp: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isShowingIosMessage, setIsShowingIosMessage] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    
    const text = headingRef.current.innerText;
    headingRef.current.innerText = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        if (headingRef.current) {
          headingRef.current.innerText += text.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        }
      }
    };
    
    setTimeout(() => {
      typeWriter();
    }, 500);
  }, []);

  const handleAndroidDownload = () => {
    setIsDownloading(true);
    // Direct download link for the APK
    const directDownloadLink = "https://drive.google.com/uc?export=download&id=13AkUQSOv3AUR3BkjsHYuuxIiGwoUp6B9";
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = directDownloadLink;
    link.setAttribute('download', 'neuro-campus.apk');
    document.body.appendChild(link);
    
    // Trigger click to start download
    link.click();
    
    // Remove the element after a delay
    setTimeout(() => {
      document.body.removeChild(link);
      setIsDownloading(false);
      toast({
        title: "Download started",
        description: "Your NEURO CAMPUS Android APK download has started."
      });
    }, 1000);
  };

  const handleIOSClick = () => {
    setIsShowingIosMessage(true);
    toast({
      title: "iOS app coming soon",
      description: "The iOS version of NEURO CAMPUS is currently being built."
    });
    
    // Hide the message after 3 seconds
    setTimeout(() => {
      setIsShowingIosMessage(false);
    }, 3000);
  };

  return (
    <section id="neuro-campus" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-stalight-dark">
      {/* Enhanced Aurora Background with extra glow */}
      <div className="absolute inset-0 z-0">
        <div className="aurora-bg w-full h-full opacity-60"></div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-stalight-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-stalight-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            NEURO CAMPUS
          </h2>
          <p className="text-xl text-white/80 mb-8 animate-fade-in">
            Experience the future of education technology on your mobile device
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <GlassmorphicCard className="p-8 flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-stalight-primary/20">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Android App" 
                className="w-full max-w-[240px] mx-auto rounded-lg shadow-lg transition-transform hover:scale-105 duration-700" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Android Version</h3>
            <p className="text-lg text-white/80 mb-6 text-center">
              Download our NEURO CAMPUS app for Android and transform your learning experience today.
            </p>
            <Button 
              onClick={handleAndroidDownload} 
              className="bg-gradient-to-r from-stalight-primary to-stalight-blue hover:from-stalight-blue hover:to-stalight-primary text-white font-semibold py-2 px-6 rounded-full transition-all duration-500"
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </>
              )}
            </Button>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="p-8 flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-stalight-blue/20">
            <div className="mb-6 relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="iOS App" 
                className="w-full max-w-[240px] mx-auto rounded-lg shadow-lg opacity-70 transition-transform hover:scale-105 duration-700" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-r from-stalight-primary/80 to-stalight-blue/80 px-4 py-2 rounded-lg rotate-12 text-white font-bold animate-pulse-soft shadow-lg">
                  Coming Soon
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">iOS Version</h3>
            <p className="text-lg text-white/80 mb-6 text-center">
              Our iOS version is currently under development. Stay tuned for updates!
            </p>
            <Button 
              onClick={handleIOSClick} 
              className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-500"
            >
              {isShowingIosMessage ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Building Soon...
                </>
              ) : (
                <>
                  <Smartphone className="mr-2 h-5 w-5" />
                  iOS Coming Soon
                </>
              )}
            </Button>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
