import React from 'react';
import { ArrowRight, Download, Smartphone, Sparkles, Star } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/85 to-background/75"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/15 via-transparent to-blue-950/15" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
            Download NEURO CAMPUS™
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
            Experience the future of campus management with our powerful mobile app. 
            Access all features on the go with enhanced security and real-time updates.
          </p>
          {/* Mobile App Illustration - always first on mobile */}
          <div className="relative flex justify-center w-full my-8 lg:hidden">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <img 
                src="/svg/undraw_mobile-app_qxev.svg"
                alt="Mobile App"
                className="w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile App Illustration for desktop */}
          <div className="relative justify-center w-full mb-8 hidden lg:flex">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img 
                src="/svg/undraw_mobile-app_qxev.svg"
                alt="Mobile App"
                className="w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Features and Download */}
          <div className="space-y-6 lg:space-y-8 px-4 lg:px-0 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10">
                <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
                <p className="text-gray-300">Available for both Android and iOS devices</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <Download className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
                <p className="text-gray-300">Quick installation and seamless onboarding</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Real-time notifications and updates
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Secure authentication and data protection
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Offline access to essential features
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Seamless integration with web platform
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1QX9BTHvKMv4FCsxODy10WlWrFjV3ntQe"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors duration-300"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </a>
              <button
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl opacity-60 cursor-not-allowed"
                disabled
                type="button"
              >
                <Download className="w-5 h-5 mr-2" />
                iOS Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
