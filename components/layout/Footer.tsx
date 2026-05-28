import { Microscope } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 md:pt-16 pb-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 border-b border-gray-200 pb-12 mb-8">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-[#0a5c57] font-bold text-xl mb-4 md:mb-6">
            <Microscope className="w-6 h-6" />
            <span>Hahobal Lifesciences</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Advancing human health through groundbreaking genomic science and precision clinical research.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4 md:mb-6">Company</h4>
          <ul className="space-y-3 md:space-y-4 text-sm text-gray-500">
            <li><Link href="/about" className="hover:text-[#0a5c57] transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-[#0a5c57] transition-colors">Products</Link></li>
            <li><Link href="/social-responsibility" className="hover:text-[#0a5c57] transition-colors">Corporate Social Responsibility</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4 md:mb-6">Contact</h4>
          <div className="text-sm text-gray-500 space-y-2">
            <p>NO 201 Swaroop Aditya Avenue</p>
            <p>Marol Pipeline Road, Andheri East</p>
            <p>Mumbai - 400 059, Maharashtra, India</p>
            <a href="mailto:info@hahoballifesciences.com" className="text-[#0a5c57] hover:underline mt-2 md:mt-4 inline-block">info@hahoballifesciences.com</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
        <p>© {new Date().getFullYear()} Hahobal Lifesciences. All rights reserved. Precision Oncology for Life.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link>
          <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-gray-900 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}