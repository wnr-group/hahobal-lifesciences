"use client";

import { Microscope } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Corporate Social Responsibility", href: "/social-responsibility" }
  ];

  const legalLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" }
  ];

  return (
    <footer className="bg-gray-50 pt-12 md:pt-16 pb-8 px-5 sm:px-8 lg:px-16 xl:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 border-b border-gray-200 pb-12 mb-8">

        {/*  Brand & Description */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2 text-[#0a5c57] font-bold mb-4 lg:mb-6 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Microscope className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
            <span className="whitespace-nowrap lg:text-xl tracking-tight transition-colors duration-300 group-hover:text-[#084844]">
              Hahobal Biopharmaceuticals India Pvt Ltd
            </span>
          </motion.div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            Advancing human health through groundbreaking genomic science and precision clinical research.
          </p>
        </motion.div>

        {/*Company Links */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="font-bold text-gray-900 mb-4 lg:mb-6">Company</h4>
          <ul className="space-y-3 lg:space-y-4 text-sm text-gray-500">
            {companyLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="hover:text-[#0a5c57] transition-all duration-300 inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-bold text-gray-900 mb-4 lg:mb-6">Contact</h4>
          <div className="text-sm text-gray-500 space-y-2">
            <p className="hover:text-gray-700 transition-colors">NO 201 Swaroop Aditya Avenue</p>
            <p className="hover:text-gray-700 transition-colors">Marol Pipeline Road, Andheri East</p>
            <p className="hover:text-gray-700 transition-colors">Mumbai - 400 059, Maharashtra, India</p>
            <motion.a
              href="mailto:info@hahoballifesciences.com"
              className="text-[#0a5c57] hover:text-[#084844] mt-2 lg:mt-4 inline-block transition-all duration-300"
              whileHover={{ x: 2 }}
            >
              info@hahoballifesciences.com
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright & Legal */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-gray-500 text-center lg:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p>© {new Date().getFullYear()} Hahobal Lifesciences. All rights reserved. Precision Oncology for Life.</p>
        <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-900 transition-all duration-300 relative group"
            >
              <span className="relative">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}