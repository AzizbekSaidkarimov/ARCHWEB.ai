import React from 'react';
import { MessageSquare, Cpu, Image, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Describe Your Vision",
      description: "Tell us about your ideal space using natural language. Be as detailed or simple as you like."
    },
    {
      icon: Cpu,
      number: "02", 
      title: "AI Processing",
      description: "Our advanced AI analyzes your requirements and generates multiple design concepts."
    },
    {
      icon: Image,
      number: "03",
      title: "3D Visualization",
      description: "Review photorealistic 3D renderings of your space from multiple angles."
    },
    {
      icon: Download,
      number: "04",
      title: "Download & Implement",
      description: "Get high-resolution images, 3D models, and detailed specifications for your project."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From concept to completion in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-slate-200">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-200 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;