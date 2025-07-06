import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Model from "./Model";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import PlayerControls from './PlayerControls'; 
import Focus from "./Focus";

const Header = () => {
  return (
    <header className="hero ">
      <div class="relative overflow-hidden bg-[#F1EBE4] hero-pattern">
        <div class="absolute inset-0 z-0 opacity-20">
          <svg
            class="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="url(#hero-gradient)"
            ></path>
          </svg>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="lg:col-span-6">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span>Transform your ideas into</span>
                <span class="gradient-text"> stunning 3D designs</span>
              </h1>
              <p class="mt-6 text-xl text-gray-600">
                Our AI-powered 3D renderer turns your concepts into beautiful,
                realistic 3D designs in seconds. No technical skills required.
              </p>
              <div class="mt-10">
                <form id="design-form" class="sm:flex">
                  <label for="design-input" class="sr-only">
                    Describe your design
                  </label>
                  <div class="w-full">
                    <input
                      id="design-input"
                      name="design"
                      type="text"
                      required
                      class="w-full px-5 py-4 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md input-gradient focus:outline-none focus:ring-2 focus:ring-[#8D7B68]"
                      placeholder="Describe the 3D design you want..."
                    />
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      class="w-full flex items-center justify-center px-5 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#8D7B68] hover:bg-[#7D6E5D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8D7B68]"
                    >
                      Generate
                      <svg
                        class="ml-2 -mr-1 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                <p class="mt-3 text-sm text-gray-500">
                  Try: "Modern kitchen with island" or "Futuristic gaming setup"
                </p>
              </div>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-6">
              <div class="relative h-64 sm:h-72 md:h-96 lg:h-full">
                <div class="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
                  <div class="h-full flex items-center justify-center p-6">
                    <div class="w-full h-full relative">
                      <div class="embed-container">
                        {/* <iframe 
                                            title="A 3D model" 
                                            frameborder="0" 
                                            allowfullscreen 
                                            mozallowfullscreen="true" 
                                            webkitallowfullscreen="true" 
                                            allow="autoplay; fullscreen; xr-spatial-tracking" 
                                            xr-spatial-tracking 
                                            execution-while-out-of-viewport 
                                            execution-while-not-rendered 
                                            web-share 
                                            width="640" 
                                            height="480" 
                                            src="https://sketchfab.com/models/b5f511f4bbcc43e7a7624b5923dec997/embed">
                                          </iframe> */}
                        <Canvas camera={{ zoom: 10, position: [100, 30, 4] }}>
                          <ambientLight intensity={0.6} />
                          <directionalLight position={[5, 5, 5]} />
                          <React.Suspense fallback={null}>
                            <Model scale={1.5} />
                            <OrbitControls />
                            <Environment preset="sunset" />
                          </React.Suspense>
                          <PlayerControls />
                          <Focus/>
                        </Canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F1EBE4] to-transparent"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#A4907C] opacity-10"></div>
        <div class="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#8D7B68] opacity-10"></div>
      </div>
    </header>
  );
};

export default Header;
