
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle2,
  Activity,
  FlaskConical,
  Target,
  HeartHandshake,
  Factory,
  Microscope,
  Shield,
  Globe,
  Snowflake
} from "lucide-react";

export default function ProductsPage() {
  // ANIMATION SETTINGS: Smooth fade and slide up
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#0a5c57] selection:text-white overflow-hidden pb-20">
      
      {/* 1. FULL-WIDTH HERO SECTION (Dark Theme) */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 px-6 lg:px-20 text-white overflow-hidden bg-[#052b29]">
        {/* Background Image (Vials) aligned to the right without heavy blending */}
        <motion.div
          className="absolute right-0 top-0 w-full lg:w-[65%] h-full bg-cover bg-center opacity-80"
          style={{
            backgroundImage: 'url("product-hero-image.png")'
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Gradients: Solid dark on the left fading to transparent on the right */}
        <div className="absolute inset-0 bg-linear-to-r from-[#052b29] via-[#052b29]/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#052b29]/60 via-transparent to-transparent z-10" />

        {/* Hero Content */}
        <motion.div
          className="relative z-20 max-w-350 mx-auto flex flex-col lg:flex-row items-center"
          initial="hidden"
          animate="visible"
          variants={heroContainerVariant}
        >
          <div className="lg:w-3/5">
            <motion.div
              className="flex items-center gap-2 text-[#4ae0c7] text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
              variants={heroItemVariant}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-4 h-4" />
              </motion.div>
              <span>WHO-GMP Certified Manufacturing</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight"
              variants={heroItemVariant}
            >
              Precision Oncology Therapeutics Portfolio
            </motion.h1>

            <motion.p
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl"
              variants={heroItemVariant}
            >
              Advancing patient outcomes through a comprehensive range of
              high-efficacy oncology solutions, developed with clinical
              precision and manufactured under global quality standards.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* 2. THERAPEUTIC CATEGORIES GRID */}
      <motion.section
        className="py-16 md:py-24 px-6 lg:px-20 max-w-350 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariant}
      >
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Therapeutic Categories
          </h2>
          <div className="w-16 h-0.75 bg-[#0a5c57]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top Wide Card: Hormonal Therapy */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  Hormonal Therapy
                </h3>
                <Activity className="w-6 h-6 text-[#0a5c57]" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg mb-8">
                Targeting hormone-sensitive cancers with high-selectivity oral
                and injectable solutions for endocrine oncology management.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#e0f5f3] text-[#0a5c57] text-[11px] font-bold px-4 py-1.5 rounded-full">
                Breast Cancer
              </span>
              <span className="bg-[#e0f5f3] text-[#0a5c57] text-[11px] font-bold px-4 py-1.5 rounded-full">
                Prostate Care
              </span>
              <span className="bg-[#e0f5f3] text-[#0a5c57] text-[11px] font-bold px-4 py-1.5 rounded-full">
                Endocrine Control
              </span>
            </div>
          </div>

          {/* Top Card: Quality Assurance (Light Theme as per mockup) */}
          <div className="lg:col-span-1 bg-[#eef7f6] border border-[#d5ece9] rounded-sm shadow-sm p-8 text-gray-900 relative overflow-hidden flex flex-col justify-center transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4 tracking-tight relative z-10">
              Quality Assurance
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 relative z-10">
              Our facilities maintain 100% compliance with WHO-GMP standards,
              ensuring every batch meets rigorous international purity
              benchmarks.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0a5c57]" />
                ISO 9001:2015 Certified
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0a5c57]" />
                Real-time Batch Monitoring
              </li>
            </ul>
            {/* QA Watermark */}
            <div className="absolute -bottom-4 -right-2 text-8xl font-black text-[#0a5c57]/5 select-none z-0">
              QA
            </div>
          </div>

          {/* Bottom Card 1: Chemotherapy */}
          <div className="col-span-1 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full group">
            <FlaskConical className="w-6 h-6 text-[#0a5c57] mb-6" />
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Chemotherapy Range
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              A robust portfolio of cytotoxic agents including antimetabolites,
              vinca alkaloids, and taxanes.
            </p>
          </div>

          {/* Bottom Card 2: Targeted Therapy */}
          <div className="col-span-1 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full group">
            <Target className="w-6 h-6 text-[#0a5c57] mb-6" />
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Targeted Therapy
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Next-generation tyrosine kinase inhibitors and monoclonal
              antibodies for personalized patient treatment.
            </p>
          </div>

          {/* Bottom Card 3: Supportive Care (Dark Theme) */}
          <div className="col-span-1 relative overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full group text-white">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1576091160550-2173ff9e8eb4?auto=format&fit=crop&q=80")'
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#101e30] via-[#101e30]/90 to-[#101e30]/70 group-hover:via-[#101e30]/85 transition-colors duration-300" />

            <div className="relative z-10 flex flex-col h-full">
              <HeartHandshake className="w-6 h-6 text-[#4ae0c7] mb-6" />
              <h3 className="text-lg font-bold mb-3 tracking-tight">
                Supportive Care
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Essential supportive oncology solutions focusing on nausea
                management, neutropenia, and bone health.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. MANUFACTURING & ETHICS */}
      <motion.section
        className="py-20 px-6 lg:px-20 bg-[#f8fafc]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
      >
        <div className="max-w-350 mx-auto">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Precision Manufacturing & Quality Ethics
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We operate with the conviction that quality is a clinical
              imperative. Our state-of-the-art facilities leverage automation
              and zero-contamination protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#e0f5f3] flex items-center justify-center rounded mb-6">
                <Factory className="w-5 h-5 text-[#0a5c57]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                WHO-GMP Facility
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Fully automated manufacturing lines ensuring consistency and
                eliminating human error in production.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#e0f5f3] flex items-center justify-center rounded mb-6">
                <Microscope className="w-5 h-5 text-[#0a5c57]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                In-house R&D
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Continuous pipeline development focusing on bioavailability and
                patient compliance optimization.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#e0f5f3] flex items-center justify-center rounded mb-6">
                <Shield className="w-5 h-5 text-[#0a5c57]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                Patient Safety
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Rigorous pharmacovigilance and stability testing that exceeds
                standard regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. GLOBAL DISTRIBUTION - OUR GLOBAL VISION */}
      <motion.section
        className="py-20 px-6 lg:px-20 bg-[#f8fafc]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
      >
        <div className="max-w-350 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Global Vision
            </h2>
            <p className="text-xl text-[#0a5c57] font-semibold">
              Future Distribution Network
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Side - Image */}
            <div className="lg:w-2/5 w-full relative group overflow-hidden rounded-sm shadow-xl border border-gray-100">
              <img
                src="product-image.png"
                alt="Scientist in Laboratory"
                className="w-full h-75 md:h-100 lg:h-125 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-[#0a5c57]/10 mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-t from-[#052b29]/20 to-transparent pointer-events-none" />
            </div>

            {/* Right Side - Cards Grid */}
            <div className="lg:w-3/5 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Expanding Across 25+ Countries */}
              <motion.div
                className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">🌍</div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    Expanding Across 25+ Countries
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our long-term vision is to build a robust international distribution network that ensures innovative oncology therapies reach patients worldwide with speed, reliability, and regulatory compliance.
                </p>
              </motion.div>

              {/* Card 2: Advanced Cold Chain Infrastructure */}
              <motion.div
                className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">❄️</div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    Advanced Cold Chain Infrastructure
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We aim to establish validated temperature-controlled logistics capabilities to support the global delivery of biologics, biosimilars, and precision medicines while maintaining product integrity throughout the supply chain.
                </p>
              </motion.div>

              {/* Card 3: Strategic Global Partnerships */}
              <motion.div
                className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">🤝</div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    Strategic Global Partnerships
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Collaborating with leading healthcare organizations, distributors, and research institutions to expand access to life-saving therapies across emerging and developed markets.
                </p>
              </motion.div>

              {/* Card 4: Integrated Supply Chain Excellence */}
              <motion.div
                className="bg-white p-6 border border-gray-100 shadow-sm rounded-sm hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">📦</div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    Integrated Supply Chain Excellence
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Developing a digitally enabled supply chain ecosystem that enhances transparency, traceability, and operational efficiency from manufacturing to patient delivery.
                </p>
              </motion.div>

              {/* Card 5: Patient-Centric Access Programs - Full Width */}
              <motion.div
                className="md:col-span-2 bg-gradient-to-br from-[#0a5c57] to-[#084844] text-white p-6 shadow-lg rounded-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">🏥</div>
                  <h3 className="text-xl font-bold tracking-tight">
                    Patient-Centric Access Programs
                  </h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Committed to improving treatment accessibility through innovative patient support initiatives and sustainable healthcare solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. VISION STATEMENT BANNER */}
      <motion.section
        className="relative py-24 px-6 lg:px-20 overflow-hidden bg-gradient-to-br from-[#0a5c57] via-[#084844] to-[#052b29]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-[#4ae0c7]/10 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative Icon */}
            <motion.div
              className="inline-block mb-6"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Globe className="w-16 h-16 text-[#4ae0c7] mx-auto" />
            </motion.div>

            {/* Quote Marks */}
            <motion.div
              className="text-[#4ae0c7]/30 text-6xl font-serif mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              "
            </motion.div>

            {/* Main Text with Letter Animation */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Building a global healthcare network that delivers innovative cancer therapies to{" "}
              <motion.span
                className="text-[#4ae0c7] relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                every patient, everywhere
                {/* Underline Animation */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#4ae0c7]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.span>
              .
            </motion.h2>

            {/* Closing Quote */}
            <motion.div
              className="text-[#4ae0c7]/30 text-6xl font-serif mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              "
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Our commitment to transforming oncology care through accessibility, innovation, and compassion.
            </motion.p>
          </motion.div>
        </div>

        {/* Animated Bottom Border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4ae0c7] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.2 }}
        />
      </motion.section>
    </div>
  );
}