'use client';

import { motion, Variants } from 'framer-motion';
import { 
  Microscope, 
  ShieldCheck, 
  Lightbulb, 
  Award, 
  Heart, 
  FlaskConical 
} from 'lucide-react';

export default function AboutUsPage() {

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
    <div className="min-h-screen bg-[#f4f7f9] font-sans text-gray-800 selection:bg-[#0a5c57] selection:text-white overflow-hidden pb-0">
      
      {/* 1. HERO SECTION (Corporate Meeting) - UPDATED HEIGHT LOGIC */}
      <motion.section 
        className="relative min-h-125 md:min-h-150 lg:min-h-175 flex items-center justify-center px-6 lg:px-20 text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        {/* Boardroom/Science Meeting Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("about-hero-image.png")',
          }}
        />
        {/* Dark Overlays for Text Readability */}
        <div className="absolute inset-0 bg-[#052b29]/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#052b29]/80 via-transparent to-transparent z-10" />
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-350 mx-auto text-center flex flex-col items-center justify-center">
          <div className="inline-block text-white text-xs font-bold px-4 py-1.5 mb-6 uppercase tracking-[0.3em]">
            Leading Innovation
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight">
            Engineering a Healthier Tomorrow
          </h1>
        </div>
      </motion.section>

      {/* 2. WHO WE ARE SECTION */}
      <motion.section 
        className="py-20 md:py-28 px-6 lg:px-20 max-w-350 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariant}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <Microscope className="w-8 h-8 text-[#0a5c57]" />
          </div>
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-8 tracking-tight">
            Who We Are
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
            Hahobal Lifesciences is a pioneering pharmaceutical organization dedicated to the relentless pursuit of breakthroughs in <span className="font-bold text-gray-900">oncology and specialty healthcare</span>. We combine clinical rigor with agile innovation to tackle the world's most challenging medical conditions.
          </p>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-[11px] font-bold text-[#0a5c57] uppercase tracking-[0.2em] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be recognized as a globally respected oncology pharmaceutical company, setting new standards in therapeutic efficacy.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-[11px] font-bold text-[#0a5c57] uppercase tracking-[0.2em] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensuring accessibility to high-quality medicines while providing steadfast support to medical professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. OUR CORE VALUES SECTION (5-Column Grid) */}
      <motion.section 
        className="py-16 md:py-24 px-6 lg:px-20 max-w-350 mx-auto border-t border-gray-200/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariant}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Core Values
          </h2>
          <div className="w-16 h-0.75 bg-[#0a5c57] mx-auto"></div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
            <ShieldCheck className="w-6 h-6 text-gray-400 group-hover:text-[#0a5c57] transition-colors mb-6 stroke-[1.5]" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Upholding the highest ethical standards in every clinical trial and corporate partnership.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
            <Lightbulb className="w-6 h-6 text-gray-400 group-hover:text-[#0a5c57] transition-colors mb-6 stroke-[1.5]" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Pushing the boundaries of molecular science to discover next-generation therapies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
            <Award className="w-6 h-6 text-gray-400 group-hover:text-[#0a5c57] transition-colors mb-6 stroke-[1.5]" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Quality Excellence</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Uncompromising rigor in manufacturing and quality control across our entire pipeline.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
            <Heart className="w-6 h-6 text-gray-400 group-hover:text-[#0a5c57] transition-colors mb-6 stroke-[1.5]" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Patient Commitment</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Placing the well-being and outcomes of patients at the heart of our scientific journey.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-start hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
            <FlaskConical className="w-6 h-6 text-gray-400 group-hover:text-[#0a5c57] transition-colors mb-6 stroke-[1.5]" />
            <h3 className="text-lg font-bold text-gray-900 mb-3">Scientific Responsibility</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Operating with evidence-based precision and accountability to the global community.
            </p>
          </div>

        </div>
      </motion.section>

      {/* 4. STATS BANNER */}
      <motion.section 
        className="py-16 bg-[#0a5c57] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
      >
        <div className="max-w-350 mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">15+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">Active Trials</div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">200k+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">Patients Reached</div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">45</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">Global Partners</div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">98%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-semibold">Quality Rating</div>
            </div>

          </div>
        </div>
      </motion.section>

    </div>
  );
}