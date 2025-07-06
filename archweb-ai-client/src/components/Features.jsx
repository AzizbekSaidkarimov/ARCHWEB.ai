import React from 'react';
// import { Zap, Brain, Palette, Clock, Globe, Shield } from 'lucide-react';

const Features = () => {
  // const features = [
  //   {
  //     icon: Brain,
  //     title: "AI-Powered Design",
  //     description: "Advanced AI algorithms understand your style preferences and create personalized designs."
  //   },
  //   {
  //     icon: Zap,
  //     title: "Lightning Fast",
  //     description: "Generate professional 3D interior designs in minutes, not days or weeks."
  //   },
  //   {
  //     icon: Palette,
  //     title: "Style Versatility", 
  //     description: "From modern minimalist to classic traditional - our AI adapts to any design style."
  //   },
  //   {
  //     icon: Clock,
  //     title: "Real-Time Editing",
  //     description: "Modify colors, furniture, and layouts instantly with simple text commands."
  //   },
  //   {
  //     icon: Globe,
  //     title: "Global Inspiration",
  //     description: "Trained on thousands of designs from top interior designers worldwide."
  //   },
  //   {
  //     icon: Shield,
  //     title: "Commercial Ready",
  //     description: "High-resolution outputs perfect for presentations and construction planning."
  //   }
  // ];

  return (
    <section id="features" className="py-20 bg-white">
              <div id="features" class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-base font-semibold text-[#8D7B68] tracking-wide uppercase">Features</h2>
                    <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Everything you need for 3D design</p>
                    <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Our AI-powered platform makes creating professional 3D designs simple and accessible for everyone.</p>
                </div>
    
                <div class="mt-16">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div class="feature-card relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300">
                            <div class="h-12 w-12 rounded-md bg-[#8D7B68] flex items-center justify-center">
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="mt-4 text-lg font-medium text-gray-900">Lightning Fast Rendering</h3>
                            <p class="mt-2 text-base text-gray-500">Get high-quality 3D designs in seconds, not hours. Our AI processes your requests at unprecedented speeds.</p>
                        </div>
    

                        <div class="feature-card relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300">
                            <div class="h-12 w-12 rounded-md bg-[#8D7B68] flex items-center justify-center">
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 class="mt-4 text-lg font-medium text-gray-900">Natural Language Input</h3>
                            <p class="mt-2 text-base text-gray-500">Simply describe what you want in plain English. No technical jargon or 3D modeling knowledge required.</p>
                        </div>
    
                        <div class="feature-card relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300">
                            <div class="h-12 w-12 rounded-md bg-[#8D7B68] flex items-center justify-center">
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="mt-4 text-lg font-medium text-gray-900">Customizable Designs</h3>
                            <p class="mt-2 text-base text-gray-500">Fine-tune every aspect of your 3D design with simple adjustments. Change colors, materials, lighting with ease.</p>
                        </div>
    
                        <div class="feature-card relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300">
                            <div class="h-12 w-12 rounded-md bg-[#8D7B68] flex items-center justify-center">
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </div>
                            <h3 class="mt-4 text-lg font-medium text-gray-900">Export Ready Files</h3>
                            <p class="mt-2 text-base text-gray-500">Download your designs in industry-standard formats compatible with all major 3D software and printing services.</p>
                        </div>
    
                        <div class="feature-card relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300">
                            <div class="h-12 w-12 rounded-md bg-[#8D7B68] flex items-center justify-center">
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 class="mt-4 text-lg font-medium text-gray-900">Style Presets</h3>
                            <p class="mt-2 text-base text-gray-500">Choose from dozens of design styles, from photorealistic to cartoon, minimalist to baroque, and everything in between.</p>
                        </div>
    
                        <div class="feature-card relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300">
                            <div class="h-12 w-12 rounded-md bg-[#8D7B68] flex items-center justify-center">
                                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 class="mt-4 text-lg font-medium text-gray-900">Secure Cloud Storage</h3>
                            <p class="mt-2 text-base text-gray-500">All your designs are securely stored in the cloud, accessible from any device, anywhere in the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
  );
};

export default Features;