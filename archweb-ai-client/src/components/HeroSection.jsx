import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <span className="text-amber-600 font-medium">AI-Powered Interior Design</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Transform Your Space with
            <span className="text-amber-500 block">3D AI Design</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Describe your dream interior and watch our AI create stunning 3D designs in minutes. 
            Professional-quality results that bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
              <span>Start Designing</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="text-slate-600 hover:text-slate-800 transition-colors font-medium text-lg">
              View Sample Designs
            </button>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-2xl mx-auto">
            <p className="text-slate-500 text-sm mb-4">Try it now - Type your design prompt:</p>
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-left">
              <p className="text-slate-800 font-medium">
                "Modern minimalist living room with white walls, wooden floors, 
                large windows, and cozy seating area"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;