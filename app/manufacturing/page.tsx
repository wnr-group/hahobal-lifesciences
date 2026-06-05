'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  BadgeCheck,
  Wind,
  FlaskConical,
  Snowflake,
  CheckCircle2,
  Globe
} from 'lucide-react';

// --- Shared Animation Config ---
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] }
  }
};

// Hero staggered animation variants
const heroContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const heroItemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// --- Sub-Components ---
const Hero = () => (
  <section className="relative w-full min-h-[137.5px] flex items-center bg-cover bg-right md:bg-center overflow-hidden"
    style={{ backgroundImage: 'url("manufacture-hero-image.png")' }}
  >
    <motion.div
      className="absolute inset-0"
      style={{ backgroundImage: 'url("manufacture-hero-image.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent z-0" />

    <motion.div
      className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 relative z-10"
      initial="hidden"
      animate="visible"
      variants={heroContainerVariant}
    >
      <div className="max-w-3xl">
        <motion.p
          className="text-sm font-medium text-[#90f4e8] uppercase tracking-widest mb-4"
          variants={heroItemVariant}
        >
          Precision Infrastructure
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={heroItemVariant}
        >
          Advanced Manufacturing & Scientific Discovery
        </motion.h1>
        <motion.p
          className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
          variants={heroItemVariant}
        >
          Pioneering next-generation oncology therapeutics through a vertically integrated ecosystem of WHO-GMP certified facilities and rigorous research protocols.
        </motion.p>
      </div>
    </motion.div>
  </section>
);

const ManufacturingExcellence = () => (
  <motion.section 
    className="py-20 max-w-7xl mx-auto px-6 md:px-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeUpVariant}
  >
    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21]">Manufacturing Excellence</h2>
      <div className="items-center gap-2 bg-[#90f4e8] px-4 py-1.5 rounded-full inline-flex w-max">
        <BadgeCheck className="text-[#007169] w-4 h-4" />
        <span className="text-xs font-semibold text-[#007169] uppercase tracking-wide">WHO-GMP CERTIFIED</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-8 bg-white border border-[#c4c6ce] p-2 rounded-xl overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow">
        <div className="h-64 mb-6 overflow-hidden rounded-lg">
          <img 
            alt="Automated Sterile Formulation Cleanroom" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="manufacture-excellance-image.png"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#000d21] mb-3 px-4">Automated Sterile Formulation</h3>
        <p className="text-base text-[#44474d] px-4 pb-4">
          Our state-of-the-art facility utilizes closed-loop robotic systems for the production of lyophilized injectables, ensuring zero-contamination environments for oncology treatments.
        </p>
      </div>

      <div className="col-span-1 md:col-span-4 p-8 flex flex-col justify-center rounded-xl bg-[#F0F7FF] border border-[#b3c7ec]/30">
        <span className="text-5xl font-bold mb-2 text-[#006a63]">99.9%</span>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#006a63]">Batch Reliability</p>
        <div className="mt-8 pt-8 border-t border-[#006a63]/20">
          <p className="text-base italic text-[#006a63] font-medium leading-relaxed">
            &quot;Precision at scale is the foundation of patient safety.&quot;
          </p>
        </div>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#90f4e8]/10 border border-[#90f4e8]/30 p-8 rounded-xl hover:bg-[#90f4e8]/20 transition-colors duration-300">
        <Wind className="text-[#006a63] w-8 h-8 mb-5" />
        <h4 className="text-xl font-bold text-[#000d21] mb-3">Air Quality Control</h4>
        <p className="text-[#44474d] leading-relaxed">
          Class 100 HEPA filtration systems maintaining ISO 5 standards across all critical processing zones.
        </p>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#90f4e8]/10 border border-[#90f4e8]/30 p-8 rounded-xl hover:bg-[#90f4e8]/20 transition-colors duration-300">
        <FlaskConical className="text-[#006a63] w-8 h-8 mb-5" />
        <h4 className="text-xl font-bold text-[#000d21] mb-3">API Synthesis</h4>
        <p className="text-[#44474d] leading-relaxed">
          In-house synthesis of high-potency active pharmaceutical ingredients to ensure supply chain resilience.
        </p>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#90f4e8]/10 border border-[#90f4e8]/30 p-8 rounded-xl hover:bg-[#90f4e8]/20 transition-colors duration-300">
        <Snowflake className="text-[#006a63] w-8 h-8 mb-5" />
        <h4 className="text-xl font-bold text-[#000d21] mb-3">Cold Chain Logistics</h4>
        <p className="text-[#44474d] leading-relaxed">
          IoT-monitored -80°C storage capabilities ensuring biological integrity from lab to patient.
        </p>
      </div>
    </div>
  </motion.section>
);

const QualityAssurance = () => (
  <motion.section 
    className="py-10 max-w-7xl mx-auto px-6 md:px-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUpVariant}
  >
    <div className="bg-[#f2f4f5] p-6 md:p-12 rounded-xl border border-[#c4c6ce] flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-6">Rigorous Quality Assurance</h2>
        <p className="text-lg text-[#44474d] mb-8 leading-relaxed">
          Our QA framework exceeds international regulatory standards, employing a three-tier validation process for every molecule produced.
        </p>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <CheckCircle2 className="text-[#006a63] w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-bold text-[#000d21] block mb-1">Real-time Analytical Monitoring</span>
              <span className="text-base text-[#44474d]">HPLC and Mass Spectrometry during synthesis.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle2 className="text-[#006a63] w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-bold text-[#000d21] block mb-1">LIMS Integration</span>
              <span className="text-base text-[#44474d]">Fully digital Laboratory Information Management Systems.</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm group">
        <img 
          alt="Laboratory Quality Control" 
          className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-700" 
          src="manufacture-quality-image.png"
        />
      </div>
    </div>
  </motion.section>
);

const ResearchPriorities = () => (
  <motion.section 
    className="py-20 max-w-7xl mx-auto px-6 md:px-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUpVariant}
  >
    <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-12">Current Research Priorities</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="group border-l-4 border-[#006a63] p-8 bg-white shadow-sm hover:shadow-md hover:bg-[#90f4e8]/10 transition-all duration-300 rounded-r-xl">
        <h5 className="text-xl font-bold text-[#000d21] mb-3">T-Cell Engineering</h5>
        <p className="text-base text-[#44474d] leading-relaxed">
          Advancing chimeric antigen receptor (CAR) T-cell therapies for refractory hematologic malignancies.
        </p>
      </div>
      <div className="group border-l-4 border-[#006a63] p-8 bg-white shadow-sm hover:shadow-md hover:bg-[#90f4e8]/10 transition-all duration-300 rounded-r-xl">
        <h5 className="text-xl font-bold text-[#000d21] mb-3">Precision Biomarkers</h5>
        <p className="text-base text-[#44474d] leading-relaxed">
          Developing companion diagnostics to predict patient response to targeted biological agents.
        </p>
      </div>
      <div className="group border-l-4 border-[#006a63] p-8 bg-white shadow-sm hover:shadow-md hover:bg-[#90f4e8]/10 transition-all duration-300 rounded-r-xl">
        <h5 className="text-xl font-bold text-[#000d21] mb-3">Nano-drug Carriers</h5>
        <p className="text-base text-[#44474d] leading-relaxed">
          Optimizing lipid nanoparticle delivery systems for enhanced penetration into solid tumor tissues.
        </p>
      </div>
    </div>
  </motion.section>
);

// --- Animated Timeline Component ---

const GlobalExpansionTimeline = () => {
  const timelineData = [
    {
      id: '2027-2028',
      year: '2027-2028',
      countries: [
        { name: 'Srilanka', flag: '🇱🇰' },
        { name: 'Singapore', flag: '🇸🇬' },
        { name: 'Malaysia', flag: '🇲🇾' }
      ],
      color: 'from-[#0f6e56] to-[#178a6d]'
    },
    {
      id: '2029-2030',
      year: '2029-2030',
      countries: [
        { name: 'United Arab Emirates', flag: '🇦🇪' }
      ],
      color: 'from-[#20a084] to-[#4ae0c7]'
    },
    {
      id: '2031',
      year: '2031',
      countries: [
        { name: 'Europe', flag: '🇪🇺' }
      ],
      color: 'from-[#4ae0c7] to-[#6eeddb]'
    }
  ];

  return (
    <motion.section
      className="py-20 max-w-7xl mx-auto px-6 md:px-12 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariant}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-4">Global Expansion Roadmap</h2>
        <p className="text-lg text-[#44474d] max-w-2xl mx-auto leading-relaxed">
          Strategically scaling our footprint to ensure high-efficacy oncology care is accessible across emerging and established markets.
        </p>
      </div>

      {/* Vertical Timeline for All Screen Sizes */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Connecting Line - Behind Everything */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 top-24 bottom-20 w-1 bg-gradient-to-b from-[#0f6e56] to-[#4ae0c7] z-0"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative flex flex-col items-center z-10"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              {/* Year Badge - Floating above */}
              <motion.div
                className="mb-8"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                <div className={`inline-block bg-gradient-to-r ${item.color} text-white px-8 py-3 rounded-full font-bold text-2xl shadow-xl`}>
                  {item.year}
                </div>
              </motion.div>

              {/* Animated Circle on Line */}
              <motion.div
                className="relative z-20 mb-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.4, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      "0 0 30px rgba(15, 110, 86, 0.4)",
                      "0 0 60px rgba(74, 224, 199, 0.7)",
                      "0 0 30px rgba(15, 110, 86, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <Globe className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Content Card with Large Flags */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-xl bg-[#f8fafb] border-l-4 border-[#0f6e56] hover:shadow-2xl transition-all duration-300 max-w-xl mx-auto z-10"
                whileHover={{ y: -6, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute top-0 right-0 w-40 h-40">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`dots-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="#0f6e56" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
                    </svg>
                  </div>
                </div>

                {/* Top Decorative Bar */}
                <div className="absolute top-0 right-0 left-0 h-2 bg-[#0f6e56]/10" />

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 border-t-2 border-r-2 border-[#0f6e56]/20 rounded-tr-xl" />
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 border-b-2 border-l-2 border-[#0f6e56]/20 rounded-bl-xl" />
                </div>

                {/* Globe Icon with Glow */}
                <div className="absolute bottom-6 right-6 opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-20 h-20 text-[#0f6e56]" />
                  </motion.div>
                </div>

                {/* Side Accent Stripe */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#4ae0c7]/30" />

                {/* Content */}
                <div className="relative z-10 p-8 pl-10">
                  <div className="flex flex-col gap-5">
                    {item.countries.map((country, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-between gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 6 }}
                      >
                        <span className="text-xl font-bold text-[#0f6e56]">
                          {country.name}
                        </span>
                        {country.flag && (
                          <motion.span
                            className="text-5xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {country.flag}
                          </motion.span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* End Marker */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-[#0f6e56] to-[#4ae0c7] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 30px rgba(74, 224, 199, 0.4)",
                "0 0 60px rgba(74, 224, 199, 0.6)",
                "0 0 30px rgba(74, 224, 199, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌍 Global Oncology Excellence
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// --- Main Page Assembly ---

export default function ManufacturingPage() {
  return (
    <main className="font-sans text-[#191c1d] bg-[#f8fafb]">
      <Hero />
      <ManufacturingExcellence />
      <QualityAssurance />
      <ResearchPriorities />
      <GlobalExpansionTimeline />
    </main>
  );
}