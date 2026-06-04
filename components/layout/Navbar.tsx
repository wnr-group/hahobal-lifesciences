"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Social Responsibility", href: "/social-responsibility" },
    { name: "Manufacturing & R&D", href: "/manufacturing" },
  ];

  // Detect scroll for backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <nav className="relative flex items-center justify-between px-4 lg:px-6 py-4 border-b border-gray-100 z-50" aria-label="Main navigation">

        {/* LOGO SECTION */}
        <Link
          href="/"
          className="flex items-center shrink-0 group"
          aria-label="Hahobal Lifesciences home"
        >
          <div className="relative flex items-center justify-center w-20 h-10 lg:w-28 lg:h-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/hahobal-logo.png"
              alt="Hahobal Lifesciences Logo"
              width={112}
              height={112}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-28 object-contain"
              priority
            />
          </div>
          <span className="text-[#0a5c57] font-bold text-base sm:text-lg lg:text-xl -ml-2 lg:-ml-4 relative z-10 transition-colors duration-300 group-hover:text-[#084844]">
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
                className="relative pb-1 transition-all duration-300 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#0a5c57] focus:ring-offset-2 rounded group"
              >
                <span className={`${
                  isActive
                    ? "text-[#0a5c57]"
                    : "text-gray-600 group-hover:text-[#0a5c57]"
                } transition-colors duration-300`}>
                  {link.name}
                </span>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#0a5c57]"
                  initial={false}
                  animate={{
                    width: isActive ? "100%" : "0%",
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="/contact"
            className="hidden lg:block bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-2 rounded text-sm font-medium transition-all duration-300 shrink-0 text-center focus:outline-none focus:ring-2 focus:ring-[#0a5c57] focus:ring-offset-2 shadow-sm hover:shadow-md"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* MOBILE HAMBURGER BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-gray-600 hover:text-[#0a5c57] transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[#0a5c57] rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* MOBILE NAVIGATION MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg z-40 overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`${
                        isActive
                          ? "text-[#0a5c57] font-bold bg-[#0a5c57]/5"
                          : "text-gray-600 font-medium hover:text-[#0a5c57] hover:bg-gray-50"
                      } py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#0a5c57] rounded-lg transition-all duration-200 block`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* MOBILE CONTACT BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-3 rounded-lg text-sm font-medium mt-2 w-full text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0a5c57] focus:ring-offset-2 shadow-sm hover:shadow-md block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}