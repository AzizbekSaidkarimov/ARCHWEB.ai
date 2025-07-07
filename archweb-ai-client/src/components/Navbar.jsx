import React from 'react';

const Navbar = () => {
  const onclick = () => {
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      const menu = document.getElementById('mobile-menu');
      menu.classNameList.toggle('hidden');
  });

  // Form submission
  document.getElementById('design-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const designInput = document.getElementById('design-input').value;
      if (designInput.trim() !== '') {
          alert('Your design request has been submitted! In a real application, the 3D rendering would begin now.');
          document.getElementById('design-input').value = '';
      }
  });
  }
  return (
    <nav className="shadow-sm" style={{ backgroundColor: '#f4f3ef' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                    <img width={"30"} height={"30"} src="/images/ChatGPT Image Jun 27, 2025, 01_35_41 AM.png" alt="" />
                    <span className="ml-2 text-xl font-bold text-gray-800">ARCHWEB</span>
                </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#8D7B68] transition-colors">Features</a>
                <a href="#how-it-works" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#8D7B68] transition-colors">How It Works</a>
                <a href="#pricing" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#8D7B68] transition-colors">Pricing</a>
                <a href="#!" className="ml-8 px-4 py-2 text-sm font-medium rounded-md text-white bg-[#8D7B68] hover:bg-[#7D6E5D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8D7B68] transition-colors">Sign Up Free</a>
            </div>
            <div className="flex md:hidden items-center">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8D7B68]" id="mobile-menu-button">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  
    <div className="md:hidden hidden" id="mobile-menu" onClick={onclick}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">How It Works</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Pricing</a>
            <a href="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#8D7B68] hover:bg-[#7D6E5D]">Sign Up Free</a>
        </div>
    </div>
</nav>

  );
};

export default Navbar;