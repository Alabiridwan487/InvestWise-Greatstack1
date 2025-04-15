import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const links = ['Home', 'Portfolio', 'Markets', 'Insights', 'Contact'];

  return (
    <nav className="w-full px-4 sm:px-6 py-4 bg-gradient-to-b from-gray-900 to-black shadow-2xl border-b border-indigo-500/30 font-[Poppins] relative overflow-hidden text-white z-50">

     
      <div className="absolute hidden md:block -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-white/5 bg-gradient-to-b from-purple-900/20 to-transparent backdrop-blur-xl pointer-events-none z-0"></div>
      <div className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/30 to-transparent blur-2xl opacity-40 animate-pulse z-0"></div>

      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">

        {/* Logo Section */}
        <div className="">
          <img
            src="igwise-bg.png"
            alt="LOGO"
            className=" h-15"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-300 text-transparent bg-clip-text">
            
          </span>
        </div>

        <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                {link}
              </a>
              {/* Replace <a> with <Link to="/path"> if using react-router */}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4 text-center">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 border-b border-white/10 hover:text-indigo-400"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

