
import React, { useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { 
  Users, BookOpen, BarChart3, Scan, KeyRound, Trophy, Share2, Shield 
} from 'lucide-react';

const products = [
  {
    icon: <Users className="h-10 w-10 text-stalight-primary" />,
    title: "Student Management System",
    description: "A comprehensive solution for managing student data, attendance, and performance tracking.",
    features: [
      "Comprehensive student profiles",
      "Automated attendance tracking",
      "Performance analytics",
      "Parent portal access",
      "Custom report generation"
    ]
  },
  {
    icon: <BookOpen className="h-10 w-10 text-stalight-primary" />,
    title: "Learning Management System",
    description: "An intuitive platform for creating, delivering, and tracking educational content.",
    features: [
      "Interactive course creation",
      "Real-time collaboration",
      "Assessment tools",
      "Progress tracking",
      "Resource library"
    ]
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-stalight-primary" />,
    title: "Smart Dashboards",
    description: "AI-integrated dashboards for students, faculty, and HODs.",
    features: [
      "Real-time data visualization",
      "AI-driven insights",
      "Customizable widgets",
      "Integration with existing systems"
    ]
  },
  {
    icon: <Scan className="h-10 w-10 text-stalight-primary" />,
    title: "AI Face Attendance",
    description: "Snapshot-based AI face attendance system.",
    features: [
      "Accurate face recognition",
      "Real-time attendance tracking",
      "Integration with student management system",
      "Automated reports"
    ]
  },
  {
    icon: <KeyRound className="h-10 w-10 text-stalight-primary" />,
    title: "Blockchain Certificate Evaluation",
    description: "Certificate evaluation with Blockchain technology.",
    features: [
      "Secure certificate verification",
      "Blockchain-based ledger",
      "Tamper-proof records",
      "Easy integration with existing systems"
    ]
  },
  {
    icon: <Trophy className="h-10 w-10 text-stalight-primary" />,
    title: "Student Rank Prediction",
    description: "AI-driven student rank prediction system.",
    features: [
      "Predictive analytics for student performance",
      "Real-time rank updates",
      "Integration with student management system",
      "Customizable prediction models"
    ]
  },
  {
    icon: <Share2 className="h-10 w-10 text-stalight-primary" />,
    title: "Faculty Resource Sharing",
    description: "Platform for faculty resource sharing and internal marks management.",
    features: [
      "Easy resource sharing",
      "Internal marks management",
      "Collaborative tools",
      "Secure access control"
    ]
  },
  {
    icon: <Shield className="h-10 w-10 text-stalight-primary" />,
    title: "AI Surveillance System",
    description: "AI surveillance system that detects unusual activities and alerts the admin instantly.",
    features: [
      "Real-time activity monitoring",
      "AI-driven anomaly detection",
      "Instant alerts for unusual activities",
      "Integration with security systems"
    ]
  }
];

const Products: React.FC = () => {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-gradient-to-b from-stalight-dark to-black">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-stalight-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-stalight-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Our Products
          </h2>
          <p className="text-xl text-white/80">
            Explore our innovative education technology solutions designed to transform learning and 
            institutional management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <GlassmorphicCard 
              key={index}
              className={`transition-all duration-500 ${
                expandedProduct === index 
                  ? 'scale-105 z-10' 
                  : expandedProduct !== null 
                    ? 'scale-95 opacity-50' 
                    : ''
              }`}
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center justify-center mb-4">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins text-white text-center">
                {product.title}
              </h3>
              <p className="text-white/70 mb-4 text-center">
                {product.description}
              </p>
              
              {/* Features list that appears on expand */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedProduct === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <h4 className="text-stalight-primary font-medium mt-4 mb-2">
                  Key Features:
                </h4>
                <ul className="text-white/80 pl-5 space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i} className="list-disc">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center mt-4">
                <span className="text-stalight-primary text-sm">
                  {expandedProduct === index ? 'Click to collapse' : 'Click to learn more'}
                </span>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
