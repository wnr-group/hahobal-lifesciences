'use client'; 

import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import { 
  HeartHandshake, 
  GraduationCap, 
  Leaf, 
  Globe, 
  CheckCircle2, 
  ChevronRight,
  Heart
} from 'lucide-react';

export default function SocialResponsibilityPage() {

  // ANIMATION SETTINGS: Smooth fade and slide up
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#0a5c57] selection:text-white overflow-hidden pb-20">
      
      {/* 1. HERO SECTION (Dark Overlay with Compassionate Image) */}
      <motion.section 
        className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 px-6 lg:px-20 text-white overflow-hidden bg-[#052b29]"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        {/* Verified Free Unsplash Image: Doctor comforting a patient */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-luminosity"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#052b29] via-[#052b29]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#052b29] via-transparent to-transparent z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-350 mx-auto">
          <div className="max-w-2xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-[#4ae0c7] text-[10px] font-bold px-4 py-1.5 mb-6 rounded-full uppercase tracking-widest">
              Commitment to Life
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
              Caring Beyond Medicines
            </h1>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              At Hahobal Lifesciences, we believe that true healing extends past the laboratory. Our compassion-driven initiatives aim to bridge the gap between breakthrough science and patient accessibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0a5c57] hover:bg-[#084844] text-white px-8 py-3.5 rounded font-semibold transition-colors text-sm w-full sm:w-auto text-center shadow-lg">
                Our 2024 Report
              </button>
              <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded font-semibold transition-colors text-sm w-full sm:w-auto text-center">
                Support Initiatives
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. PILLARS OF COMPASSION (Alternating Grid) */}
      <motion.section 
        className="py-16 md:py-24 px-6 lg:px-20 max-w-350 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariant}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Pillars of Compassion</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Our CSR framework is built upon three fundamental commitments that drive every patient-centric decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Top Left - Wide Card with subtle faded image */}
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 lg:p-12 relative overflow-hidden group flex flex-col justify-center">
            {/* Faded background image of holding hands */}
            <div 
              className="absolute inset-0 bg-cover bg-right opacity-5 mix-blend-multiply transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1527613426496-2287d1315206?auto=format&fit=crop&q=80")' }}
            />
            <div className="relative z-10">
              <HeartHandshake className="w-8 h-8 text-[#0a5c57] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Patient Assistance Programs</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-lg">
                We ensure that financial barriers never stand in the way of life-saving oncology treatments. Our global assistance network has supported over 50,000 patients in the last fiscal year.
              </p>
            </div>
          </div>

          {/* Top Right - Square Card */}
          <div className="md:col-span-1 bg-[#f8fafc] border border-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full group">
            <GraduationCap className="w-7 h-7 text-[#0a5c57] mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Medical Education</h3>
            <p className="text-sm text-gray-600 leading-relaxed grow mb-8">
              Empowering the next generation of oncologists with grants, digital resources, and international research fellowships.
            </p>
            <a href="#" className="flex items-center text-[12px] font-bold tracking-wider uppercase text-[#0a5c57] group-hover:text-[#084844] transition-colors mt-auto">
              <span>Explore Fellowships</span>
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Bottom Left - Square Card */}
          <div className="md:col-span-1 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full">
            <Leaf className="w-7 h-7 text-[#0a5c57] mb-6 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Sustainable Science</h3>
            <p className="text-sm text-gray-600 leading-relaxed grow">
              Minimizing our environmental footprint through zero-waste laboratories and carbon-neutral distribution networks.
            </p>
          </div>

          {/* Bottom Right - Wide Dark Card */}
          <div className="md:col-span-2 bg-[#101e30] rounded-sm shadow-lg p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center transition-transform duration-300 hover:shadow-xl">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Global Health Equity</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Collaborating with international health organizations to bring clinical trials to underserved regions, ensuring diverse genomic representation in modern oncology.
              </p>
            </div>
            {/* Large faint globe watermark */}
            <Globe className="absolute -bottom-8 -right-8 w-64 h-64 text-white/5 pointer-events-none" />
          </div>

        </div>
      </motion.section>

      {/* 3. CSR IMPACT GOALS (Stats & Progress Bars) */}
      <motion.section 
        className="py-16 md:py-24 px-6 lg:px-20 bg-[#f8fafc]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariant}
      >
        <div className="max-w-350 mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">CSR Impact Goals: 2030 Vision</h2>
              <p className="text-gray-500 text-sm md:text-base max-w-xl">
                Our roadmap for a future where oncology care is equitable, sustainable, and universally accessible.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#0a5c57] bg-[#e0f5f3] px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              <span>Third-Party Audited Data</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm flex flex-col justify-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0a5c57] mb-2 tracking-tighter">1M+</div>
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">Lives Touched By Programs</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#0a5c57] w-[75%] h-full rounded-full" />
              </div>
              <div className="text-xs text-gray-400">75% of target reached</div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm flex flex-col justify-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0a5c57] mb-2 tracking-tighter">100%</div>
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">Renewable Energy Goal</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#4ae0c7] w-[50%] h-full rounded-full" />
              </div>
              <div className="text-xs text-gray-400">50% of target reached</div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm flex flex-col justify-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0a5c57] mb-2 tracking-tighter">$2B</div>
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">R&D Patient Grant Pool</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#0a5c57] w-[66%] h-full rounded-full" />
              </div>
              <div className="text-xs text-gray-400">66% of target reached</div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm flex flex-col justify-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0a5c57] mb-2 tracking-tighter">40+</div>
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 mb-6">Countries Impacted</div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#0a5c57] w-full h-full rounded-full" />
              </div>
              <div className="text-xs text-gray-400">Target Achieved</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. NEWSLETTER CTA SECTION */}
      <motion.section 
        className="py-12 px-6 lg:px-20 max-w-350 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
      >
        <div className="bg-[#084844] rounded-sm shadow-xl p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Background Heart Watermark */}
          <Heart className="absolute left-1/2 md:left-[60%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-64 text-white/5 pointer-events-none" strokeWidth={1} />
          
          <div className="relative z-10 md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Stay Informed on Our Progress</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Subscribe to our quarterly Compassion & Impact newsletter to receive updates on our global CSR initiatives and clinical access programs.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto grow max-w-md">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your professional email" 
                className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:border-[#4ae0c7] transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-[#0a5c57] hover:bg-[#073b37] border border-[#0a5c57] text-white px-6 py-3.5 rounded font-semibold transition-colors shrink-0 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </motion.section>

    </div>
  );
}