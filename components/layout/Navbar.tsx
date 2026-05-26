// "use client";

// import React, { useState } from "react";
// import { Microscope, Menu, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Products", href: "/products" },
//     { name: "Social Responsibility", href: "/social-responsibility" },
//     { name: "Manufacturing & R&D", href: "/manufacturing" },
//   ];

//   return (
//     // FIX: Replaced fragment <> with a sticky header wrapper
//     <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
//       <nav className="relative flex items-center justify-between px-4 lg:px-6 py-4 bg-white border-b border-gray-100 z-50">
//         <div className="flex items-center gap-2 text-[#0a5c57] font-bold text-lg lg:text-xl shrink-0">
//           <Microscope className="w-5 h-5 lg:w-6 lg:h-6" />
//           <span>Hahobal Lifesciences</span>
//         </div>

//         {/* DESKTOP NAVIGATION */}
//         <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
            
//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`${
//                   isActive
//                     ? "text-[#0a5c57] border-b-2 border-[#0a5c57]" 
//                     : "text-gray-600 hover:text-[#0a5c57] border-b-2 border-transparent" 
//                 } pb-1 transition-colors shrink-0`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* DESKTOP CONTACT BUTTON */}
//         <Link 
//           href="/contact"
//           className="hidden lg:block bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-2 rounded text-sm font-medium transition-colors shrink-0 text-center"
//         >
//           Contact Us
//         </Link>

//         {/* MOBILE HAMBURGER BUTTON */}
//         <button
//           className="lg:hidden text-gray-600 hover:text-[#0a5c57] transition-colors p-2"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? (
//             <X className="w-6 h-6" />
//           ) : (
//             <Menu className="w-6 h-6" />
//           )}
//         </button>
//       </nav>

//       {/* MOBILE NAVIGATION MENU */}
//       {isMobileMenuOpen && (
//         // FIX: Added top-full left-0 so it attaches directly below the sticky nav
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg z-40 flex flex-col px-6 py-4 gap-4 animate-in slide-in-from-top-2">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;

//             return (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={`${
//                   isActive
//                     ? "text-[#0a5c57] font-bold" 
//                     : "text-gray-600 font-medium hover:text-[#0a5c57]" 
//                 } py-2`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
          
//           {/* MOBILE CONTACT BUTTON */}
//           <Link 
//             href="/contact"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-3 rounded text-sm font-medium mt-2 w-full text-center transition-colors"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

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
      <nav className="relative flex items-center justify-between px-4 lg:px-6 py-4 bg-white border-b border-gray-100 z-50">
        
        {/* LOGO SECTION */}
       <Link href="/" className="flex items-center shrink-0">
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
  {/* Added -ml-2 (mobile) and lg:-ml-4 (desktop) to pull the text closer to the image */}
  <span className="text-[#0a5c57] font-bold text-lg lg:text-xl hidden sm:block -ml-2 lg:-ml-4 relative z-10">
    Hahobal Lifesciences
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
                className={`${
                  isActive
                    ? "text-[#0a5c57] border-b-2 border-[#0a5c57]" 
                    : "text-gray-600 hover:text-[#0a5c57] border-b-2 border-transparent" 
                } pb-1 transition-colors shrink-0`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <Link 
          href="/contact"
          className="hidden lg:block bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-2 rounded text-sm font-medium transition-colors shrink-0 text-center"
        >
          Contact Us
        </Link>

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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg z-40 flex flex-col px-6 py-4 gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  isActive
                    ? "text-[#0a5c57] font-bold" 
                    : "text-gray-600 font-medium hover:text-[#0a5c57]" 
                } py-2`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* MOBILE CONTACT BUTTON */}
          <Link 
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#0a5c57] hover:bg-[#084844] text-white px-5 py-3 rounded text-sm font-medium mt-2 w-full text-center transition-colors"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}