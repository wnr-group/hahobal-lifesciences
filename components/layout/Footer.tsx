import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 md:pt-16 pb-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 border-b border-gray-200 pb-12 mb-8">
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
          <h4 className="font-bold text-gray-900 mb-4 md:mb-6">Clinical</h4>
          <ul className="space-y-3 md:space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#0a5c57]">Pipeline</a></li>
            <li><a href="#" className="hover:text-[#0a5c57]">Clinical Trials</a></li>
            <li><a href="#" className="hover:text-[#0a5c57]">Patient Support</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 mb-4 md:mb-6">Company</h4>
          <ul className="space-y-3 md:space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#0a5c57]">About Us</a></li>
            <li><a href="#" className="hover:text-[#0a5c57]">Investors</a></li>
            <li><a href="#" className="hover:text-[#0a5c57]">Careers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 mb-4 md:mb-6">Contact</h4>
          <div className="text-sm text-gray-500 space-y-2">
            <p>Innovation Park, Suite 400</p>
            <p>Medical District, Cambridge, MA</p>
            <a href="mailto:info@hahobal.com" className="text-[#0a5c57] hover:underline mt-2 md:mt-4 inline-block">info@hahobal.com</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
        <p>© 2024 Hahobal Lifesciences. All rights reserved. Precision Oncology for Life.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <a href="#" className="hover:text-gray-900">Contact Us</a>
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}