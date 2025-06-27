// import React from 'react';
// import { Home, Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header classNameName="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
//       <div classNameName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div classNameName="flex justify-between items-center h-16">
//           <div classNameName="flex items-center space-x-2">
//             <Home classNameName="w-8 h-8 text-slate-800" />
//             <span classNameName="text-xl font-bold text-slate-800">ARCHWEB.ai</span>
//           </div>

//           <nav classNameName="hidden md:flex items-center space-x-8">
//             <a href="#features" classNameName="text-slate-600 hover:text-slate-800 transition-colors">Features</a>
//             <a href="#how-it-works" classNameName="text-slate-600 hover:text-slate-800 transition-colors">How It Works</a>
//             <a href="#gallery" classNameName="text-slate-600 hover:text-slate-800 transition-colors">Gallery</a>
//             <a href="#pricing" classNameName="text-slate-600 hover:text-slate-800 transition-colors">Pricing</a>
//             <button classNameName="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium">
//               Get Started
//             </button>
//           </nav>

//           <button
//             classNameName="md:hidden p-2 text-slate-600 hover:text-slate-800"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? <X classNameName="w-6 h-6" /> : <Menu classNameName="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div classNameName="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
//             <nav classNameName="flex flex-col space-y-4 p-4">
//               <a href="#features" classNameName="text-slate-600 hover:text-slate-800 transition-colors" onClick={toggleMenu}>Features</a>
//               <a href="#how-it-works" classNameName="text-slate-600 hover:text-slate-800 transition-colors" onClick={toggleMenu}>How It Works</a>
//               <a href="#gallery" classNameName="text-slate-600 hover:text-slate-800 transition-colors" onClick={toggleMenu}>Gallery</a>
//               <a href="#pricing" classNameName="text-slate-600 hover:text-slate-800 transition-colors" onClick={toggleMenu}>Pricing</a>
//               <button classNameName="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium text-left">
//                 Get Started
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from "react";

const Header = () => {
  const images = [
    "/images/100,000+ Free Architecture+The+Architecture+ & Architecture Images.jpeg",
    "/images/Old Money Lifestyle.jpeg",
    "/images/Pokar Architects.jpeg",
    "/images/download (21).jpeg"
  ];

  return (
    <header className="hero ">
      <div className="header_left_side ">
      <div className="hero-image">
        <img src="/images/header_image.jpg" alt="3D Interior" />
      </div>
      <div className="hero-text">
        <div className="primary_hero_text">
        <h1 className="TITLE-PRIMARY text-5xl font-semibold text-white md:text-6xl">Revolutionize Your Space with AI-Powered 3D Design</h1>
        <p><i>"From prompt to Reality."</i></p>
        </div>
        <div className="hero_text_desc">
        <div className="text_for_brands">
        <p className="hero_50 border: 1px solid transparent;">50+</p>
        <span className="hero_3dDC">3d Design Companies</span>
        </div>
      <div className="circle-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`circle-${index}`}
          className="circle-image"
          style={{ zIndex: index }}
        />
      ))}
    </div>
        </div>
      </div>
      
      </div>

      <div id="form" className="form">
        <div
          id="heading"
          className="glass glass--gradient glass--heading"
          onClick={() =>
            document.querySelector(".form").classList.toggle("open")
          }
        >
          <span className="form-header">
            <span className="form-icon"></span>
            <span className="form-title">
              What would you like to build today?
            </span>
          </span>
          <button className="form-close-button header_button">✕</button>
        </div>
        <div id="input" className="glass">
          <input
            type="text"
            placeholder="I want a cozy Scandinavian-style bedroom..."
            className="header_input"
          />
          <button className=" ">Generate</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
