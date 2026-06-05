"use client";
import {motion, Variants} from "framer-motion";
import {FileText, Users, Globe, Dna, Activity, TestTube2, Microscope, ChevronRight, Lightbulb, ShieldCheck, ArrowLeftRight, HeartPulse} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    // Smooth scroll-reveal animations
    const fadeUpVariant: Variants = {
        hidden: {opacity: 0, y: 40},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.8, ease: "easeOut"},
        },
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
        <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800 selection:bg-[#0a5c57] selection:text-white overflow-hidden pb-20">
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 px-6 lg:px-20 text-white overflow-hidden bg-[#031513]">
                {/* Natural Background Image (No heavy color blending) */}
                <motion.div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
                    style={{
                        backgroundImage: 'url("home-hero-image.png")',
                    }}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <div className="absolute inset-0 bg-linear-to-r from-[#031513] via-[#031513]/80 to-transparent z-10" />

                <div className="absolute inset-0 bg-[#031513]/30 z-10" />

                {/* Hero Content */}
                <motion.div
                    className="relative z-20 max-w-350 mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={heroContainerVariant}
                >
                    <div className="max-w-2xl">
                        {/* The exact bright cyan pill from the screenshot */}
                        <motion.div
                            className="inline-block bg-[#4ae0c7] text-[#021613] text-[11px] font-bold px-4 py-1.5 mb-6 rounded-sm uppercase tracking-wider"
                            variants={heroItemVariant}
                        >
                            Leading with Science
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-4xl lg:text-[4.2rem] font-bold text-white leading-[1.1] mb-6 tracking-tight"
                            variants={heroItemVariant}
                        >
                            Precision Oncology for a Healthier Tomorrow
                        </motion.h1>

                        <motion.p
                            className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
                            variants={heroItemVariant}
                        >
                            We are committed to transforming cancer care through high-quality oncology medicines, scientific innovation, and patient-focused healthcare solutions. Our mission is to make advanced cancer therapies accessible, affordable, and trusted across global markets.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={heroItemVariant}
                        >
                            <Link href="/products" className="bg-[#0a5c57] hover:bg-[#084844] text-white px-8 py-3.5 rounded-sm font-semibold transition-colors text-sm w-full sm:w-auto text-center shadow-lg border border-[#0a5c57]">
                                View Products
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* 2. WHY HAHOBAL SECTION */}
            <motion.section
                className="py-20 md:py-32 px-6 lg:px-20 max-w-350 mx-auto bg-[#f8fafc]"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.15}}
                variants={fadeUpVariant}
            >
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Text & Icons */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                            Why Hahobal Lifesciences?
                        </h2>
                        <p className="text-xl font-semibold text-[#0a5c57] mb-12">Excellence in Oncology</p>

                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 bg-[#eef7f6] text-[#0a5c57] rounded-sm flex items-center justify-center">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Quality You Can Trust</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Every product undergoes rigorous quality testing to ensure safety, efficacy, and compliance with international pharmaceutical standards.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 bg-[#eef7f6] text-[#0a5c57] rounded-sm flex items-center justify-center">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Oncology Expertise</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        We focus specifically on oncology, enabling us to provide specialized and advanced therapeutic solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 bg-[#eef7f6] text-[#0a5c57] rounded-sm flex items-center justify-center">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Reliable Partnerships</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        We collaborate with healthcare providers, distributors, hospitals, and institutions to strengthen cancer care accessibility.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 bg-[#eef7f6] text-[#0a5c57] rounded-sm flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Innovation Driven</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        We continuously work toward improving formulations, patient convenience, and therapeutic effectiveness.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 bg-[#eef7f6] text-[#0a5c57] rounded-sm flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Ethical Business Practices</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Transparency, integrity, and compliance remain at the heart of our operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: DNA Image with Overlapping Card */}
                    <div className="relative mt-10 lg:mt-0">
                        <div
                            className="w-full aspect-4/5 md:aspect-square rounded-sm shadow-xl bg-cover bg-center border border-gray-100"
                            style={{backgroundImage: 'url("home-dna-image.png")'}}
                        />
                        {/* The exact overlapping card from the mockup */}
                        <div className="absolute -bottom-6 -left-6 right-6 md:right-10 md:left-10 bg-[#f8fbfb] p-6 shadow-xl border border-gray-100 rounded-sm border-l-4 border-l-[#0a5c57]">
                            <p className="text-gray-600 italic text-sm mb-3 leading-relaxed">
                                "Our commitment is to eliminate the 'one size fits all' approach in oncology treatment."
                            </p>
                            <p className="font-bold text-[#0a5c57] text-[11px] uppercase tracking-wide">
                                — Dr. Elena Vance, Chief Scientific Officer
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 3. THERAPEUTIC FOCUS */}
           <motion.section
      // Adjusted outer padding for tighter mobile screens
      className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 bg-gray-50/50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUpVariant}
    >
      {/* HEADER SECTION */}
      <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Therapeutic Focus
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mx-auto leading-relaxed px-2">
          At HAHOBAL Biopharmaceuticals, we are committed to advancing innovative therapies that address critical unmet medical needs. Our research and development efforts focus on oncology, hematological malignancies, and supportive care solutions designed to improve patient outcomes and quality of life.
        </p>
      </div>

      {/* 2x2 GRID FOR MAXIMUM CONTENT SPACE */}
      {/* 1 column on mobile, 2 columns on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        
        {/* CARD 1: ONCOLOGY */}
        {/* Heights adapt to prevent text overflow on narrow screens */}
        <div className="group h-[480px] md:h-[500px] lg:h-[450px] [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-[1200ms] ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
            
            {/* Front Side */}
            {/* Padding scales from p-6 on mobile to p-10 on desktop */}
            <div className="absolute inset-0 bg-white border border-gray-100 border-t-4 border-t-[#0a5c57] p-6 md:p-8 lg:p-10 rounded-xl shadow-sm flex flex-col [backface-visibility:hidden]">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#e0f5f3] text-[#0a5c57] rounded-full flex items-center justify-center mb-5 md:mb-6 shrink-0">
                <Microscope className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">Oncology</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed grow">
                Cancer remains one of the world’s most significant healthcare challenges. We are dedicated to developing targeted therapies and precision medicines that address the molecular drivers of cancer progression. By leveraging advances in genomics, molecular biology, and translational medicine, we aim to deliver safer and more effective treatment options for patients worldwide.
              </p>
              <div className="inline-flex items-center text-sm font-semibold text-[#0a5c57] mt-4 pt-2">
                <span>View pipeline focus</span>
                <ArrowLeftRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-[#0a5c57] text-white p-6 md:p-8 lg:p-10 rounded-xl shadow-lg flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
              <h3 className="text-lg md:text-xl font-bold mb-4 border-b border-white/20 pb-3 shrink-0">Our Oncology Pipeline Focuses On:</h3>
              <div className="overflow-y-auto pr-2 pb-2 space-y-3 text-white/90 text-sm md:text-base scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                <ul className="list-disc pl-5 space-y-2 marker:text-white/70">
                  <li>Precision oncology and biomarker-driven therapies</li>
                  <li>Targeted small molecules</li>
                  <li>Monoclonal antibodies</li>
                  <li>Immuno-oncology approaches</li>
                  <li>Combination treatment strategies</li>
                  <li>Personalized cancer medicine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: SOLID TUMORS */}
        <div className="group h-[480px] md:h-[500px] lg:h-[450px] [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-[1200ms] ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
            
            {/* Front Side */}
            <div className="absolute inset-0 bg-white border border-gray-100 border-t-4 border-t-[#0a5c57] p-6 md:p-8 lg:p-10 rounded-xl shadow-sm flex flex-col [backface-visibility:hidden]">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#e0f5f3] text-[#0a5c57] rounded-full flex items-center justify-center mb-5 md:mb-6 shrink-0">
                <Dna className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">Solid Tumors</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed grow">
                Solid tumors account for the majority of cancer diagnoses and represent a major area of unmet medical need. Our research programs are focused on identifying novel therapeutic targets and developing innovative treatments for patients with advanced and difficult-to-treat cancers.
              </p>
              <div className="inline-flex items-center text-sm font-semibold text-[#0a5c57] mt-4 pt-2">
                <span>View interests & approach</span>
                <ArrowLeftRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-[#0a5c57] text-white p-6 md:p-8 lg:p-10 rounded-xl shadow-lg flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
              <div className="overflow-y-auto pr-2 pb-2 text-white/90 text-sm scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                <h3 className="text-base md:text-lg font-bold mb-3 border-b border-white/20 pb-2 text-white">Areas of Interest</h3>
                <ul className="list-disc pl-5 space-y-1.5 mb-5 md:mb-6 marker:text-white/70">
                  <li>Breast Cancer</li>
                  <li>Lung Cancer</li>
                  <li>Colorectal Cancer</li>
                  <li>Gastric Cancer</li>
                  <li>Ovarian Cancer</li>
                  <li>Prostate Cancer</li>
                  <li>Head & Neck Cancer</li>
                  <li>Hepatocellular Carcinoma</li>
                  <li>Pancreatic Cancer</li>
                </ul>

                <h3 className="text-base md:text-lg font-bold mb-3 border-b border-white/20 pb-2 text-white">Scientific Approach</h3>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-white/70">
                  <li>Molecular profiling</li>
                  <li>Targeted therapies</li>
                  <li>Tumor microenvironment research</li>
                  <li>Immunotherapy strategies</li>
                  <li>Companion diagnostics</li>
                  <li>Precision medicine approaches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: HEMATOLOGY */}
        <div className="group h-[480px] md:h-[500px] lg:h-[450px] [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-[1200ms] ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
            
            {/* Front Side */}
            <div className="absolute inset-0 bg-white border border-gray-100 border-t-4 border-t-[#0a5c57] p-6 md:p-8 lg:p-10 rounded-xl shadow-sm flex flex-col [backface-visibility:hidden]">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#e0f5f3] text-[#0a5c57] rounded-full flex items-center justify-center mb-5 md:mb-6 shrink-0">
                <Activity className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">Hematology</h3>
              <div className="text-gray-600 text-sm md:text-base leading-relaxed grow space-y-3 md:space-y-4">
                <p>Hematologic malignancies are complex diseases affecting blood, bone marrow, and lymphatic systems. We are developing innovative therapies designed to improve treatment outcomes and address resistance mechanisms associated with current standards of care.</p>
                <p>Our goal is to provide transformative therapies that improve survival and quality of life for patients living with hematological cancers.</p>
              </div>
              <div className="inline-flex items-center text-sm font-semibold text-[#0a5c57] mt-4 pt-2">
                <span>View focus & platforms</span>
                <ArrowLeftRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-[#0a5c57] text-white p-6 md:p-8 lg:p-10 rounded-xl shadow-lg flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
              <div className="overflow-y-auto pr-2 pb-2 text-white/90 text-sm scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                <h3 className="text-base md:text-lg font-bold mb-3 border-b border-white/20 pb-2 text-white">Focus Areas</h3>
                <ul className="list-disc pl-5 space-y-1.5 mb-5 md:mb-6 marker:text-white/70">
                  <li>Acute Myeloid Leukemia (AML)</li>
                  <li>Acute Lymphoblastic Leukemia (ALL)</li>
                  <li>Chronic Lymphocytic Leukemia (CLL)</li>
                  <li>Multiple Myeloma</li>
                  <li>Non-Hodgkin Lymphoma</li>
                  <li>Hodgkin Lymphoma</li>
                  <li>Myelodysplastic Syndromes (MDS)</li>
                </ul>

                <h3 className="text-base md:text-lg font-bold mb-3 border-b border-white/20 pb-2 text-white">Scientific Platforms</h3>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-white/70">
                  <li>Targeted therapies</li>
                  <li>Cell signaling pathway inhibitors</li>
                  <li>Immunotherapeutic approaches</li>
                  <li>Precision diagnostics</li>
                  <li>Novel biologics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4: SUPPORTIVE CARE */}
        <div className="group h-[480px] md:h-[500px] lg:h-[450px] [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-[1200ms] ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
            
            {/* Front Side */}
            <div className="absolute inset-0 bg-white border border-gray-100 border-t-4 border-t-[#0a5c57] p-6 md:p-8 lg:p-10 rounded-xl shadow-sm flex flex-col [backface-visibility:hidden]">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#e0f5f3] text-[#0a5c57] rounded-full flex items-center justify-center mb-5 md:mb-6 shrink-0">
                <HeartPulse className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">Supportive Care</h3>
              <div className="text-gray-600 text-sm md:text-base leading-relaxed grow space-y-3 md:space-y-4">
                <p>Effective cancer management extends beyond tumor control. Supportive care plays a critical role in reducing treatment-related complications, enhancing patient well-being, and enabling optimal therapeutic outcomes.</p>
                <p>We are committed to developing innovative supportive care therapies that help patients maintain quality of life throughout their treatment journey while improving adherence to life-saving cancer therapies.</p>
              </div>
              <div className="inline-flex items-center text-sm font-semibold text-[#0a5c57] mt-4 pt-2">
                <span>View key areas</span>
                <ArrowLeftRight className="w-4 h-4 ml-2" />
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 bg-[#0a5c57] text-white p-6 md:p-8 lg:p-10 rounded-xl shadow-lg flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
              <h3 className="text-lg md:text-xl font-bold mb-4 border-b border-white/20 pb-3 shrink-0">Key Areas</h3>
              <div className="overflow-y-auto pr-2 pb-2 space-y-3 text-white/90 text-sm scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                <ul className="list-disc pl-5 space-y-2 marker:text-white/70">
                  <li>Chemotherapy-induced nausea and vomiting (CINV)</li>
                  <li>Cancer-related pain management</li>
                  <li>Anemia management</li>
                  <li>Neutropenia support</li>
                  <li>Infection prevention</li>
                  <li>Nutritional support</li>
                  <li>Fatigue management</li>
                  <li>Bone health</li>
                  <li>Palliative care solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.section>

            {/* 4. MISSION & STATS BLOCK */}
            <motion.section
                className="py-20 px-6 lg:px-20 bg-[#f8fafc]"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.15}}
                variants={fadeUpVariant}
            >
                <div className="max-w-350 mx-auto bg-[#0b1e36] rounded-sm shadow-xl overflow-hidden relative p-10 md:p-16 text-white">
                    {/* Huge Faint Background Microscope Watermark */}
                    <Microscope className="absolute -right-16 top-1/2 -translate-y-1/2 w-80 h-80 md:w-112.5 md:h-112.5 text-white/3 pointer-events-none stroke-1" />

                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                            Our Mission: Precision for Life
                        </h2>
                        <p className="text-[#8ba2be] leading-relaxed text-sm md:text-base mb-16">
                            At Hahobal, we believe the future of cancer care is personal. Our mission is to accelerate the discovery and development of precision medicines that target the unique molecular drivers of each patient’s disease. Through cutting-edge science, advanced biotechnology, and patient-centered innovation, we strive to transform cancer from a life-threatening diagnosis into a disease that can be effectively prevented, managed, and ultimately cured.
                        </p>
                    </div>
                </div>
            </motion.section>

        </div>
    );
}
