'use client';

import React, { useState } from 'react';
import { Microscope, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 lg:px-6 py-4 bg-white border-b border-gray-100 z-50">
        <div className="flex items-center gap-2 text-[#0a5c57] font-bold text-lg lg:text-xl shrink-0">
          <Microscope className="w-5 h-5 lg:w-6 lg:h-6" />
          <span>Hahobal Lifesciences</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-[#0a5c57] border-b-2 border-[#0a5c57] pb-1">Home</a>
          <a href="#" className="hover:text-[#0a5c57] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#0a5c57] transition-colors">Products</a>
          <a href="#" className="hover:text-[#0a5c57] transition-colors flex-shrink-0">Social Responsibility</a>
          <a href="#" className="hover:text-[#0a5c57] transition-colors flex-shrink-0">Manufacturing & R&D</a>
        </div>

        <button className="hidden lg:block bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-2 rounded text-sm font-medium transition-colors shrink-0">
          Contact Us
        </button>

        <button 
          className="lg:hidden text-gray-600 hover:text-[#0a5c57] transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg z-40 flex flex-col px-6 py-4 gap-4 animate-in slide-in-from-top-2">
          <a href="#" className="text-[#0a5c57] font-medium py-2">Home</a>
          <a href="#" className="text-gray-600 hover:text-[#0a5c57] font-medium py-2">About Us</a>
          <a href="#" className="text-gray-600 hover:text-[#0a5c57] font-medium py-2">Products</a>
          <a href="#" className="text-gray-600 hover:text-[#0a5c57] font-medium py-2">Social Responsibility</a>
          <a href="#" className="text-gray-600 hover:text-[#0a5c57] font-medium py-2">Manufacturing & R&D</a>
          <button className="bg-[#0a5c57] text-white px-5 py-3 rounded text-sm font-medium mt-2 w-full">
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}