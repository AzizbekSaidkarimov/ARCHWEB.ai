// import React from 'react';



// const Navbar = () => {
//   return (
//     <header className="w-full sticky top-0 z-50 bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-lg font-semibold tracking-tight text-gray-900">
//           ARCHWEB.<span className="text-blue-600">AI</span>
//         </div>

//         <div>
//           <a
//             href="/"
//             className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition"
//           >
//             Start generating
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ARCHWEB</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="signup-btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;