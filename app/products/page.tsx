"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle2,
  Activity,
  FlaskConical,
  Target,
  HeartHandshake,
  ArrowRight,
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

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#0a5c57] selection:text-white overflow-hidden pb-20">
      {/* 1. FULL-WIDTH HERO SECTION (Dark Theme) */}
      <motion.section
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 px-6 lg:px-20 text-white overflow-hidden bg-[#052b29]"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        {/* Background Image (Vials) fading into the right side */}
        <div
          className="absolute right-0 top-0 w-full lg:w-2/3 h-full bg-cover bg-top-left opacity-50 mix-blend-luminosity"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80")'
          }}
        />
        {/* Gradients to seamlessly blend the image into the dark background */}
        <div className="absolute inset-0 bg-linear-to-r from-[#052b29] via-[#052b29]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#052b29] via-transparent to-transparent z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-350 mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5">
            <div className="flex items-center gap-2 text-[#4ae0c7] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>WHO-GMP Certified Manufacturing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
              Precision Oncology Therapeutics Portfolio
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
              Advancing patient outcomes through a comprehensive range of
              high-efficacy oncology solutions, developed with clinical
              precision and manufactured under global quality standards.
            </p>
          </div>
        </div>
      </motion.section>

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
            <p className="text-sm text-gray-500 leading-relaxed grow mb-8">
              A robust portfolio of cytotoxic agents including antimetabolites,
              vinca alkaloids, and taxanes.
            </p>
            <a
              href="#"
              className="flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-gray-400 group-hover:text-[#0a5c57] transition-colors mt-auto border-t border-gray-100 pt-4"
            >
              <span>Explore 42 SKUs</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Bottom Card 2: Targeted Therapy */}
          <div className="col-span-1 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full group">
            <Target className="w-6 h-6 text-[#0a5c57] mb-6" />
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Targeted Therapy
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed grow mb-8">
              Next-generation tyrosine kinase inhibitors and monoclonal
              antibodies for personalized patient treatment.
            </p>
            <a
              href="#"
              className="flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-gray-400 group-hover:text-[#0a5c57] transition-colors mt-auto border-t border-gray-100 pt-4"
            >
              <span>Explore 18 SKUs</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
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
              <p className="text-sm text-gray-300 leading-relaxed grow mb-8">
                Essential supportive oncology solutions focusing on nausea
                management, neutropenia, and bone health.
              </p>
              <a
                href="#"
                className="flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-white/70 group-hover:text-white transition-colors mt-auto border-t border-white/20 pt-4"
              >
                <span>Explore 12 SKUs</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
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

      {/* 4. GLOBAL DISTRIBUTION */}
      <motion.section
        className="py-20 px-6 lg:px-20 max-w-350 mx-auto flex flex-col lg:flex-row items-center gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
      >
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 tracking-tight">
            Global Distribution Network
          </h2>

          <div className="space-y-10">
            <div className="flex gap-5">
              <div className="shrink-0 mt-1">
                <Globe className="w-6 h-6 text-[#0a5c57]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  25+ Countries Served
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                  Seamless supply chain management ensuring life-saving
                  medicines reach patients globally, without delay.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="shrink-0 mt-1">
                <Snowflake className="w-6 h-6 text-[#0a5c57]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  Cold Chain Excellence
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                  Validated temperature-controlled logistics for sensitive
                  biologicals and targeted therapies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full relative group overflow-hidden rounded-sm shadow-xl border border-gray-100">
          {/* Free, working Unsplash Image */}
          <img
            src="https://unsplash.com/photos/contemporary-chemist-or-researcher-in-gloves-mixing-two-liquid-substances-while-dropping-one-of-them-into-flasks-r148ZfRb6uU"
            alt="Scientist in Laboratory"
            className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-[#0a5c57]/10 mix-blend-color pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#052b29]/20 to-transparent pointer-events-none" />
        </div>
      </motion.section>
    </div>
  );
}
