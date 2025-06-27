import React from 'react';
import { Zap, Brain, Palette, Clock, Globe, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Design",
      description: "Advanced AI algorithms understand your style preferences and create personalized designs."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate professional 3D interior designs in minutes, not days or weeks."
    },
    {
      icon: Palette,
      title: "Style Versatility", 
      description: "From modern minimalist to classic traditional - our AI adapts to any design style."
    },
    {
      icon: Clock,
      title: "Real-Time Editing",
      description: "Modify colors, furniture, and layouts instantly with simple text commands."
    },
    {
      icon: Globe,
      title: "Global Inspiration",
      description: "Trained on thousands of designs from top interior designers worldwide."
    },
    {
      icon: Shield,
      title: "Commercial Ready",
      description: "High-resolution outputs perfect for presentations and construction planning."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Why Choose DesignAI?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful AI technology meets professional interior design expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;