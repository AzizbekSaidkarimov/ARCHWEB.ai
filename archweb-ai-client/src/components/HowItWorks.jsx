import React from 'react';
// import { MessageSquare, Cpu, Image, Download } from 'lucide-react';

const HowItWorks = () => {
  // const steps = [
  //   {
  //     icon: MessageSquare,
  //     number: "01",
  //     title: "Describe Your Vision",
  //     description: "Tell us about your ideal space using natural language. Be as detailed or simple as you like."
  //   },
  //   {
  //     icon: Cpu,
  //     number: "02", 
  //     title: "AI Processing",
  //     description: "Our advanced AI analyzes your requirements and generates multiple design concepts."
  //   },
  //   {
  //     icon: Image,
  //     number: "03",
  //     title: "3D Visualization",
  //     description: "Review photorealistic 3D renderings of your space from multiple angles."
  //   },
  //   {
  //     icon: Download,
  //     number: "04",
  //     title: "Download & Implement",
  //     description: "Get high-resolution images, 3D models, and detailed specifications for your project."
  //   }
  // ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
              <div id="how-it-works" class="bg-[#F9F7F5] py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-base font-semibold text-[#8D7B68] tracking-wide uppercase">How It Works</h2>
                    <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Three simple steps</p>
                    <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Creating stunning 3D designs has never been easier. Our AI handles all the complex work for you.</p>
                </div>
    
                <div class="mt-16">
                    <div class="relative">
                      <div class="hidden absolute top-12 w-full h-0.5 bg-gray-200 lg:block" aria-hidden="true"></div>
                        
                        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">

                            <div class="relative">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[#8D7B68] text-white mx-auto">
                                    <span class="text-lg font-bold">1</span>
                                </div>
                                <h3 class="mt-6 text-xl font-bold text-gray-900 text-center">Describe Your Vision</h3>
                                <p class="mt-2 text-base text-gray-500 text-center">Type in what you want using natural language. Be as specific or general as you like.</p>
                            </div>
    
                            <div class="relative">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[#8D7B68] text-white mx-auto">
                                    <span class="text-lg font-bold">2</span>
                                </div>
                                <h3 class="mt-6 text-xl font-bold text-gray-900 text-center">AI Generates Design</h3>
                                <p class="mt-2 text-base text-gray-500 text-center">Our advanced AI processes your request and creates a detailed 3D design in seconds.</p>
                            </div>
    
                            <div class="relative">
                                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-[#8D7B68] text-white mx-auto">
                                    <span class="text-lg font-bold">3</span>
                                </div>
                                <h3 class="mt-6 text-xl font-bold text-gray-900 text-center">Download or Refine</h3>
                                <p class="mt-2 text-base text-gray-500 text-center">Use the design as is or make adjustments until it's exactly what you want.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="mt-16 flex justify-center">
                    <a href="#!" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8D7B68] hover:bg-[#7D6E5D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8D7B68]">
                        Try It Now
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HowItWorks;