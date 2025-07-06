import React from 'react';
// import { Check, Star } from 'lucide-react';

const Pricing = () => {
  // const plans = [
  //   {
  //     name: "Starter",
  //     price: "$29",
  //     period: "month",
  //     description: "Perfect for homeowners and small projects",
  //     features: [
  //       "10 AI-generated designs per month",
  //       "Basic 3D visualization", 
  //       "Standard resolution downloads",
  //       "Email support",
  //       "Commercial license"
  //     ],
  //     popular: false
  //   },
  //   {
  //     name: "Professional",
  //     price: "$79",
  //     period: "month", 
  //     description: "Ideal for interior designers and architects",
  //     features: [
  //       "50 AI-generated designs per month",
  //       "Advanced 3D visualization",
  //       "High-resolution downloads",
  //       "Priority support",
  //       "Commercial license",
  //       "Custom style training",
  //       "Collaboration tools"
  //     ],
  //     popular: true
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "Custom",
  //     period: "",
  //     description: "For agencies and large-scale projects",
  //     features: [
  //       "Unlimited AI-generated designs",
  //       "Premium 3D visualization",
  //       "Ultra-high resolution downloads",
  //       "24/7 dedicated support",
  //       "Extended commercial license",
  //       "Custom AI model training",
  //       "White-label solution",
  //       "API access"
  //     ],
  //     popular: false
  //   }
  // ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
              <div id="pricing" class="bg-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h2 class="text-base font-semibold text-[#8D7B68] tracking-wide uppercase">Pricing</h2>
                    <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Plans for every need</p>
                    <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Whether you're a hobbyist or a professional, we have a plan that's right for you.</p>
                </div>
    
                <div class="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">

                    <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div class="flex-1">
                            <h3 class="text-xl font-semibold text-gray-900">Basic</h3>
                            <p class="mt-4 flex items-baseline text-gray-900">
                                <span class="text-5xl font-extrabold tracking-tight">$0</span>
                                <span class="ml-1 text-xl font-semibold">/month</span>
                            </p>
                            <p class="mt-6 text-gray-500">Perfect for beginners and casual users.</p>
    
                            <ul class="mt-6 space-y-4">
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">5 designs per month</p>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">Standard resolution</p>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">Basic export formats</p>
                                </li>
                            </ul>
                        </div>
    
                        <a href="#" class="mt-8 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 text-sm font-semibold text-gray-900 text-center hover:bg-gray-100">Start for free</a>
                    </div>
    
                    <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div class="absolute top-0 inset-x-0 transform translate-y-px">
                            <div class="flex justify-center transform -translate-y-1/2">
                                <span class="inline-flex rounded-full bg-[#8D7B68] px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">Most Popular</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-semibold text-gray-900">Pro</h3>
                            <p class="mt-4 flex items-baseline text-gray-900">
                                <span class="text-5xl font-extrabold tracking-tight">$29</span>
                                <span class="ml-1 text-xl font-semibold">/month</span>
                            </p>
                            <p class="mt-6 text-gray-500">For professionals and small businesses.</p>
    
                            <ul class="mt-6 space-y-4">
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">50 designs per month</p>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">High resolution</p>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">All export formats</p>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">Priority rendering</p>
                                </li>
                            </ul>
                        </div>
    
                        <a href="#" class="mt-8 block w-full bg-[#8D7B68] border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-[#7D6E5D]">Start free trial</a>
                    </div>
    
                    <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                        <div class="flex-1">
                            <h3 class="text-xl font-semibold text-gray-900">Enterprise</h3>
                            <p class="mt-4 flex items-baseline text-gray-900">
                                <span class="text-5xl font-extrabold tracking-tight">$99</span>
                                <span class="ml-1 text-xl font-semibold">/month</span>
                            </p>
                            <p class="mt-6 text-gray-500">For teams and large organizations.</p>
    
                            <ul class="mt-6 space-y-4">
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">Unlimited designs</p>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">Ultra-high resolution</p>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">API access</p>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-base text-gray-500">Dedicated support</p>
                                </li>
                            </ul>
                        </div>
    
                        <a href="#" class="mt-8 block w-full bg-[#8D7B68] border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-[#7D6E5D]">Contact sales</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Pricing;