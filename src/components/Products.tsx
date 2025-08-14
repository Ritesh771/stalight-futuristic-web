import React from 'react';
import { Brain, Shield, Zap, ArrowRight, Bot, BookOpen, Users, Camera, AlertTriangle, GitBranch, MessageSquare, Sparkles } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/10 via-transparent to-blue-950/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
           
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 font-bungee bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
              Our Products
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto px-4 font-inter">
              Innovative solutions designed to transform education, safety, and development workflows
            </p>
          </div>

          {/* Flagship Product */}
          <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl mb-8 lg:mb-12 relative">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch lg:items-center">
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-primary">NEURO CAMPUS™</h3>
                  <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-primary/20 text-primary rounded-full self-start">Flagship Product</span>
                </div>
                <p className="text-white/80 mb-4 lg:mb-6 text-sm sm:text-base">
                  A next-generation academic platform designed to streamline campus operations while integrating cutting-edge AI, blockchain, and automation features.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">NEURA Chatbot</h4>
                    </div>
                    <p className="text-sm text-white/70">AI assistant for instant PDF summaries and Q&A using LLMs</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">NebulaSuggests AI</h4>
                    </div>
                    <p className="text-sm text-white/70">Smart recommendation engine for personalized DSA problems</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">AI Rank Prediction</h4>
                    </div>
                    <p className="text-sm text-white/70">Predicts student rankings and flags performance issues</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Blockchain Validation</h4>
                    </div>
                    <p className="text-sm text-white/70">Tamper-proof, verifiable academic certificates</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Role-Based Dashboards</h4>
                    </div>
                    <p className="text-sm text-white/70">Web + Native App dashboards for admin, faculty, and students</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Face Recognition</h4>
                    </div>
                    <p className="text-sm text-white/70">AI-based attendance with manual fallback</p>
                  </div>
                </div>

                <button
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                  onClick={() => {
                    const el = document.getElementById('dashboard-showcase');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center w-full lg:w-auto">
                <div className="relative">
                  <img 
                    src="/svg/undraw_dashboard_p93p.svg"
                    alt="Dashboard Analytics"
                    className="w-full max-w-lg opacity-90 hover:opacity-100 transition-opacity duration-300 mb-6"
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden glass-card hover:scale-105 transition-transform w-full max-w-md">
                  <img 
                    src="/images/neuro-campus-dashboard.png" 
                    alt="Neuro Campus Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-4 inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4 4h-4a1 1 0 01-1-1v-1h6v1a1 1 0 01-1 1z' /></svg>
                  Available on Web & Mobile
                </span>
                <a
                  href="https://neurocampus.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:scale-105 hover:from-accent hover:to-primary transition-all duration-300"
                >
                  Access the demo
                </a>
              </div>
            </div>
          </div>

          {/* Upcoming Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SafeSpace™ */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-accent" />
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">SafeSpace™</h3>
                  <p className="text-sm text-accent">AI-Powered Women's Safety Platform</p>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <img 
                  src="/svg/undraw_mobile-analytics_bz2a.svg"
                  alt="Safety Analytics"
                  className="w-32 h-24 opacity-70"
                />
              </div>
              <p className="text-white/80 mb-4">
                Advanced safety system for public spaces and campuses with real-time monitoring and emergency response.
              </p>
              <div className="space-y-4 mb-6">
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                    Emergency Response
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      One-tap emergency alerts
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Auto-connects to emergency services
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-primary" />
                    AI Surveillance
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      AI-integrated CCTV monitoring
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Real-time police notifications
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* GitSolveAI */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-primary">GitSolveAI</h3>
                  <p className="text-sm text-purple-400">Smart GitHub Issue Resolution</p>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <img 
                  src="/svg/undraw_developer-avatar_f6ac.svg"
                  alt="Developer Tools"
                  className="w-32 h-24 opacity-70"
                />
              </div>
              <p className="text-white/80 mb-4">
                AI-powered platform that automates GitHub issue resolution and streamlines CI/CD workflows.
              </p>
              <div className="space-y-4 mb-6">
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    Smart Automation
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Automated issue resolution
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Smart PR generation
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    CI/CD Integration
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Automated testing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Smart deployment workflows
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* AI CCTV Surveillance */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
                <Camera className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">AI CCTV Surveillance</h3>
                  <p className="text-sm text-primary">Advanced Campus Security</p>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <img 
                  src="/svg/undraw_firmware_3fxd.svg"
                  alt="Security System"
                  className="w-32 h-24 opacity-70"
                />
              </div>
              <p className="text-white/80 mb-4">
                Next-generation surveillance system using Computer Vision for enhanced campus security.
              </p>
              <div className="space-y-4 mb-6">
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Threat Detection
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Ragging & bullying detection
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Unauthorized gathering alerts
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Real-time Response
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Instant alert system
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Real-time evidence collection
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

              {/* Chat2DB */}
              <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="flex items-center gap-2 mb-4">
                  
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Chat2DB</h3>
                    <p className="text-sm text-blue-400">Natural Language Database Chat</p>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <img 
                    src="/svg/undraw_analytics_6mru.svg"
                    alt="Chat2DB"
                    className="w-32 h-24 opacity-70"
                  />
                </div>
                <p className="text-white/80 mb-4">
                  Access and query your databases by chatting in plain English. Our software securely converts your requests to SQL, fetches data with proper authentication, and supports memory chat and multiple database connections.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="glass-card p-4 rounded-lg bg-white/5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Natural Language to SQL
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Chat with your database in normal English
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Automatic conversion to secure SQL queries
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-4 rounded-lg bg-white/5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Secure & Flexible
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Safe data access with authentication
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Supports memory chat and multiple database connections
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <span>Coming Soon</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

            {/* AR-Based Remote Technical Support */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-4">
               
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">AR-Based Technical Support</h3>
                  <p className="text-sm text-green-400">Industry: Manufacturing, IoT, AR/VR</p>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <img 
                  src="/svg/undraw_virtual-reality_rkzg.svg"
                  alt="AR Remote Support"
                  className="w-32 h-24 opacity-70"
                />
              </div>
              <p className="text-white/80 mb-4">
                An augmented reality platform for field technicians to receive real-time, hands-free guidance from remote experts while repairing or maintaining industrial equipment. AR overlays, live video, and IoT integration create a fully immersive, data-driven support experience.
              </p>
              <div className="space-y-4 mb-6">
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-primary" />
                    AR Overlays
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Step-by-step visual instructions and 3D models of equipment
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Remote Collaboration
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Live video and audio support from experts
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Experts can draw annotations in technician’s field of view
                    </li>
                  </ul>
                </div>
                <div className="glass-card p-4 rounded-lg bg-white/5">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    IoT Integration
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Connects to equipment sensors for real-time diagnostics
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Predictive maintenance alerts
                    </li>
                  </ul>
                </div>
                 
              </div>
               <div className="flex items-center gap-2 text-primary">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* AI Lawyer for Everyday Legal Issues */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-purple-500" />
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">AI Lawyer</h3>
                    <p className="text-sm text-purple-500">Legal Help for Everyday Issues</p>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <img 
                    src="/svg/undraw_contact-us_kcoa.svg"
                    alt="AI Lawyer"
                    className="w-32 h-24 opacity-70"
                  />
                </div>
                <p className="text-white/80 mb-4">
                  Get affordable, accessible legal advice for common issues like rent agreements and traffic fines. The AI Lawyer chatbot drafts and reviews contracts, predicts legal outcomes, and connects you to human lawyers for complex cases.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="glass-card p-4 rounded-lg bg-white/5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Contract Drafting & Review
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Drafts and reviews rental agreements and other contracts in plain language
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-4 rounded-lg bg-white/5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      Legal Outcome Prediction
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Predicts likely outcomes (e.g., notice periods, fines)
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-4 rounded-lg bg-white/5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Human Lawyer Connection
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Connects to affordable lawyers for complex cases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary mt-auto">
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
