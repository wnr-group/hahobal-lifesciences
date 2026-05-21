"use client";

import React, { useState } from "react";
import { Microscope, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); //  Get the current URL path

  // Define links here to keep the code clean
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Social Responsibility", href: "/social-responsibility" },
    { name: "Manufacturing & R&D", href: "/manufacturing" },
  ];

  return (
    <>
      <nav className="relative flex items-center justify-between px-4 lg:px-6 py-4 bg-white border-b border-gray-100 z-50">
        <div className="flex items-center gap-2 text-[#0a5c57] font-bold text-lg lg:text-xl shrink-0">
          <Microscope className="w-5 h-5 lg:w-6 lg:h-6" />
          <span>Hahobal Lifesciences</span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive
                    ? "text-[#0a5c57] border-b-2 border-[#0a5c57]" // Active style
                    : "text-gray-600 hover:text-[#0a5c57] border-b-2 border-transparent" // Inactive style
                } pb-1 transition-colors shrink-0`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button className="hidden lg:block bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-2 rounded text-sm font-medium transition-colors shrink-0">
          Contact Us
        </button>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="lg:hidden text-gray-600 hover:text-[#0a5c57] transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* MOBILE NAVIGATION MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg z-40 flex flex-col px-6 py-4 gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Closes menu on click
                className={`${
                  isActive
                    ? "text-[#0a5c57] font-bold" // Active mobile style
                    : "text-gray-600 font-medium hover:text-[#0a5c57]" // Inactive mobile style
                } py-2`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <button className="bg-[#0a5c57] text-white px-5 py-3 rounded text-sm font-medium mt-2 w-full">
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}