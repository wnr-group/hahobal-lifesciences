"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Removed Microscope
import Link from "next/link";
import Image from "next/image"; // Imported Next.js Image component
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Social Responsibility", href: "/social-responsibility" },
    { name: "Manufacturing & R&D", href: "/manufacturing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="relative flex items-center justify-between px-4 lg:px-6 py-4 bg-white border-b border-gray-100 z-50" aria-label="Main navigation">
        
        {/* LOGO SECTION */}
       <Link href="/" className="flex items-center shrink-0" aria-label="Hahobal Lifesciences home">
  <div className="relative flex items-center justify-center w-20 h-10 lg:w-28 lg:h-12 shrink-0">
    <Image 
      src="/hahobal-logo.png" 
      alt="Hahobal Lifesciences Logo" 
      width={112} 
      height={112} 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-28 object-contain"
      priority 
    />
  </div>
  {/* Text visible on all screen sizes */}
  <span className="text-[#0a5c57] font-bold text-base sm:text-lg lg:text-xl -ml-2 lg:-ml-4 relative z-10">
    Hahobal
  </span>
</Link>
        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`${
                  isActive
                    ? "text-[#0a5c57] border-b-2 border-[#0a5c57]"
                    : "text-gray-600 hover:text-[#0a5c57] border-b-2 border-transparent"
                } pb-1 transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-[#0a5c57] focus:ring-offset-2 rounded`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          href="/contact"
          className="hidden lg:block bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-2 rounded text-sm font-medium transition-colors shrink-0 text-center focus:outline-none focus:ring-2 focus:ring-[#0a5c57] focus:ring-offset-2"
        >
          Contact Us
        </Link>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="lg:hidden text-gray-600 hover:text-[#0a5c57] transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[#0a5c57] rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* MOBILE NAVIGATION MENU */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg z-40 flex flex-col px-6 py-4 gap-4 animate-in slide-in-from-top-2"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`${
                  isActive
                    ? "text-[#0a5c57] font-bold"
                    : "text-gray-600 font-medium hover:text-[#0a5c57]"
                } py-2 focus:outline-none focus:ring-2 focus:ring-[#0a5c57] rounded px-2`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* MOBILE CONTACT BUTTON */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-3 rounded text-sm font-medium mt-2 w-full text-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a5c57] focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}