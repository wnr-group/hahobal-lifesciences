import { Microscope } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
   <footer className="bg-gray-50 pt-12 md:pt-16 pb-8 px-5 sm:px-8 lg:px-16 xl:px-20 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 border-b border-gray-200 pb-12 mb-8">
    
    {/*  Brand & Description */}
    <div className="md:col-span-2">
      <div className="flex items-center gap-2 text-[#0a5c57] font-bold mb-4 lg:mb-6">
        <Microscope className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
        <span className="whitespace-nowrap   lg:text-xl tracking-tight">
          Hahobal Biopharmaceuticals India Pvt Ltd
        </span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed max-w-md">
        Advancing human health through groundbreaking genomic science and precision clinical research.
      </p>
    </div>

    {/*Company Links */}
    <div className="lg:col-span-1">
      <h4 className="font-bold text-gray-900 mb-4 lg:mb-6">Company</h4>
      <ul className="space-y-3 lg:space-y-4 text-sm text-gray-500">
        <li>
          <Link href="/about" className="hover:text-[#0a5c57] transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-[#0a5c57] transition-colors">
            Products
          </Link>
        </li>
        <li>
          <Link href="/social-responsibility" className="hover:text-[#0a5c57] transition-colors">
            Corporate Social Responsibility
          </Link>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="lg:col-span-1">
      <h4 className="font-bold text-gray-900 mb-4 lg:mb-6">Contact</h4>
      <div className="text-sm text-gray-500 space-y-2">
        <p>NO 201 Swaroop Aditya Avenue</p>
        <p>Marol Pipeline Road, Andheri East</p>
        <p>Mumbai - 400 059, Maharashtra, India</p>
        <a 
          href="mailto:info@hahoballifesciences.com" 
          className="text-[#0a5c57] hover:underline mt-2 lg:mt-4 inline-block transition-all"
        >
          info@hahoballifesciences.com
        </a>
      </div>
    </div>
  </div>

  {/* Copyright & Legal */}
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-gray-500 text-center lg:text-left">
    <p>© {new Date().getFullYear()} Hahobal Lifesciences. All rights reserved. Precision Oncology for Life.</p>
    <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6">
      <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link>
      <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
      <Link href="/cookie-policy" className="hover:text-gray-900 transition-colors">Cookie Policy</Link>
    </div>
  </div>
</footer>
  );
}