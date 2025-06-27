// import React from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Features from './components/Features';
// import PromptSection from './components/PromptSection';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <PromptSection />
//       <HeroSection />
//       <Features />
//     </>
//   );
// }


// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <Features />
      <HowItWorks />
      <Gallery />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;