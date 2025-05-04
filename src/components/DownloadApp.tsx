
import React, { useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { Download, Smartphone, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const DownloadApp: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isShowingIosMessage, setIsShowingIosMessage] = useState(false);

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
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="aurora-bg w-full h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            NEURO CAMPUS
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Experience the future of education technology on your mobile device
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <GlassmorphicCard className="card-spotlight p-8 flex flex-col items-center justify-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/e67c8bb8-4937-4d34-88a3-4057ffe0cf00.png" 
                alt="Android App" 
                className="w-full max-w-[240px] mx-auto rounded-lg shadow-lg" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Android Version</h3>
            <p className="text-lg text-white/80 mb-6 text-center">
              Download our NEURO CAMPUS app for Android and transform your learning experience today.
            </p>
            <Button 
              onClick={handleAndroidDownload} 
              className="bg-stalight-primary hover:bg-stalight-primary/80 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
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
          
          <GlassmorphicCard className="card-spotlight p-8 flex flex-col items-center justify-center">
            <div className="mb-6 relative">
              <img 
                src="/lovable-uploads/e67c8bb8-4937-4d34-88a3-4057ffe0cf00.png" 
                alt="iOS App" 
                className="w-full max-w-[240px] mx-auto rounded-lg shadow-lg opacity-70" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-stalight-primary/80 px-4 py-2 rounded-lg rotate-12 text-white font-bold">
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
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
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
