import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

const Gallery = () => {
  const designs = [
    {
      title: "Modern Living Room",
      prompt: "Minimalist living room with natural light",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Cozy Bedroom",
      prompt: "Warm bedroom with wooden accents",
      image: "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Scandinavian Kitchen",
      prompt: "Clean white kitchen with island",
      image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Industrial Office",
      prompt: "Modern workspace with exposed brick",
      image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Luxury Bathroom",
      prompt: "Spa-like bathroom with marble finishes",
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Design Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore stunning 3D interiors created by our AI from simple text prompts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                <p className="text-white/90 text-sm mb-4">"{design.prompt}"</p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">Save</span>
                  </button>
                  <button className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium">
            View More Designs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;