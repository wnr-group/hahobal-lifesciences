import React from "react";
import {
  Microscope,
  ShieldCheck,
  Lightbulb,
  Award,
  Heart,
  FlaskConical
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#0a5c57] selection:text-white">
      {/* 1. HERO / INTRODUCTION SECTION */}
      <section className="flex flex-col lg:flex-row min-h-[85vh]">
        {/* Left Side: Laboratory Image with Custom Teal Overlay */}
        {/* Left Side: Laboratory Image with Custom Teal Overlay */}
        <div className="relative lg:w-1/2 min-h-100 lg:min-h-full bg-[#05322f] overflow-hidden">
          {/* Base Image: High-quality test tubes/glassware */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-luminosity"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")'
            }}
          />

          {/* THE MAGIC: These overlays force the test tube image to match your exact website color */}
          <div className="absolute inset-0 bg-[#0a5c57]/50 mix-blend-color" />
          <div className="absolute inset-0 bg-linear-to-t from-[#05322f]/90 to-transparent" />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 px-8 py-16 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center">
          <span className="text-[#0a5c57] text-[10px] font-bold tracking-[0.25em] uppercase mb-5 block">
            Leading Innovation
          </span>

          <h1 className="text-4xl md:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-10 tracking-tight">
            Engineering a<br />
            Healthier Tomorrow
          </h1>

          <div className="flex items-center gap-3 mb-5">
            <Microscope className="w-5 h-5 text-[#0a5c57]" />
            <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
              Who We Are
            </h2>
          </div>

          <p className="text-gray-600 text-[15px] leading-relaxed mb-12 max-w-xl">
            Hahobal Lifesciences is a pioneering pharmaceutical organization
            dedicated to the relentless pursuit of breakthroughs in{" "}
            <strong className="text-gray-900 font-semibold">
              oncology and specialty healthcare
            </strong>
            . We combine clinical rigor with agile innovation to tackle the
            world's most challenging medical conditions.
          </p>

          {/* Vision & Mission Cards */}
          <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
            <div className="flex-1 border border-gray-200 p-8 bg-white hover:border-[#0a5c57]/30 transition-colors duration-300">
              <h3 className="text-[11px] font-bold text-gray-900 tracking-[0.15em] uppercase mb-4">
                Our Vision
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                To be recognized as a globally respected oncology pharmaceutical
                company, setting new standards in therapeutic efficacy.
              </p>
            </div>
            <div className="flex-1 border border-gray-200 p-8 bg-white hover:border-[#0a5c57]/30 transition-colors duration-300">
              <h3 className="text-[11px] font-bold text-gray-900 tracking-[0.15em] uppercase mb-4">
                Our Mission
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Ensuring accessibility to high-quality medicines while providing
                steadfast support to medical professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES SECTION */}
      <section className="py-24 px-6 lg:px-12 xl:px-20 bg-[#f4f7f9]">
        <div className="max-w-350 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Core Values
            </h2>
            <div className="w-10 h-0.75 bg-[#0a5c57]"></div>
          </div>

          {/* Values Grid - Strictly 5 Columns on Desktop as per design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-8 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col h-full">
              <ShieldCheck className="w-6 h-6 text-gray-800 mb-8 stroke-[1.25]" />
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight">
                Integrity
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Upholding the highest ethical standards in every clinical trial
                and corporate partnership.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col h-full">
              <Lightbulb className="w-6 h-6 text-gray-800 mb-8 stroke-[1.25]" />
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight">
                Innovation
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Pushing the boundaries of molecular science to discover
                next-generation therapies.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col h-full">
              <Award className="w-6 h-6 text-gray-800 mb-8 stroke-[1.25]" />
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight">
                Quality
                <br />
                Excellence
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Uncompromising rigor in manufacturing and quality control across
                our entire pipeline.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col h-full">
              <Heart className="w-6 h-6 text-gray-800 mb-8 stroke-[1.25]" />
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight">
                Patient
                <br />
                Commitment
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Placing the well-being and outcomes of patients at the heart of
                our scientific journey.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col h-full">
              <FlaskConical className="w-6 h-6 text-gray-800 mb-8 stroke-[1.25]" />
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight">
                Scientific
                <br />
                Responsibility
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Operating with evidence-based precision and accountability to
                the global community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BANNER SECTION */}
      <section className="bg-[#084844] py-20 px-6 lg:px-20 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              15+
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">
              Active Trials
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              200k+
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">
              Patients Reached
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              45
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">
              Global Partners
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              98%
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">
              Quality Rating
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
