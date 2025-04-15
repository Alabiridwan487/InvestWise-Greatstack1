import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black text-white py-10 font-[Poppins] mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo and Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-300 text-transparent bg-clip-text">
            INVESTWISE
          </h2>
          <p className="mt-2 text-gray-400 text-sm max-w-xs">
            Empowering smart investments with insights, tools, and expert advice.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-indigo-400">Portfolio</Link></li>
            <li><Link to="/markets" className="hover:text-indigo-400">Markets</Link></li>
            <li><Link to="/insights" className="hover:text-indigo-400">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-indigo-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
            <a href="#" className="hover:text-indigo-400"><FaInstagram /></a>
            <a href="#" className="hover:text-indigo-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        © 2025 InvestWise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
