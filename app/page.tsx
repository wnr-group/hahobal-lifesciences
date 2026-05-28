"use client";
import {motion, Variants} from "framer-motion";
import {FileText, Users, Globe, Dna, Activity, TestTube2, Microscope, ChevronRight, Lightbulb, ShieldCheck} from "lucide-react";
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

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-800 selection:bg-[#0a5c57] selection:text-white overflow-hidden pb-20">
            <motion.section
                className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 px-6 lg:px-20 text-white overflow-hidden bg-[#031513]"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
            >
                {/* Natural Background Image (No heavy color blending) */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
                    style={{
                        backgroundImage: 'url("home-hero-image.png")',
                    }}
                />

                <div className="absolute inset-0 bg-linear-to-r from-[#031513] via-[#031513]/80 to-transparent z-10" />

                <div className="absolute inset-0 bg-[#031513]/30 z-10" />

                {/* Hero Content */}
                <div className="relative z-20 max-w-350 mx-auto">
                    <div className="max-w-2xl">
                        {/* The exact bright cyan pill from the screenshot */}
                        <div className="inline-block bg-[#4ae0c7] text-[#021613] text-[11px] font-bold px-4 py-1.5 mb-6 rounded-sm uppercase tracking-wider">
                            Leading with Science
                        </div>

                        <h1 className="text-4xl md:text-4xl lg:text-[4.2rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                            Precision Oncology for a Healthier Tomorrow
                        </h1>

                        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                            We are committed to transforming cancer care through high-quality oncology medicines, scientific innovation, and patient-focused healthcare solutions. Our mission is to make advanced cancer therapies accessible, affordable, and trusted across global markets.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/products" className="bg-[#0a5c57] hover:bg-[#084844] text-white px-8 py-3.5 rounded-sm font-semibold transition-colors text-sm w-full sm:w-auto text-center shadow-lg border border-[#0a5c57]">
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>

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
                className="py-16 md:py-24 px-6 lg:px-20 bg-gray-50/50"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.15}}
                variants={fadeUpVariant}
            >
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                        Therapeutic Focus
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        We concentrate our efforts on high-impact oncology sectors where unmet needs are greatest.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {/* Card 1: Solid Tumors */}
                    <div className="group bg-white border border-gray-100 border-t-2 border-t-[#0a5c57] p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#e0f5f3] text-[#0a5c57] rounded-full flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0a5c57] group-hover:text-white duration-300">
                            <Dna className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Solid Tumors</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed grow">
                            Developing small molecule inhibitors targeting specific genomic alterations in lung, breast,
                            and colorectal cancers.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-sm font-semibold text-[#0a5c57] hover:text-[#084844] transition-colors mt-auto group/link"
                        >
                            <span>Learn more</span>
                            <ChevronRight className="w-4 h-4 ml-1 transform transition-transform group-hover/link:translate-x-1" />
                        </a>
                    </div>

                    {/* Card 2: Hematology */}
                    <div className="group bg-white border border-gray-100 border-t-2 border-t-[#0a5c57] p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#e0f5f3] text-[#0a5c57] rounded-full flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0a5c57] group-hover:text-white duration-300">
                            <Activity className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Hematology</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed grow">
                            Advancing immunotherapies for leukemia and lymphoma that harness the body's own immune
                            system to fight malignant cells.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-sm font-semibold text-[#0a5c57] hover:text-[#084844] transition-colors mt-auto group/link"
                        >
                            <span>Learn more</span>
                            <ChevronRight className="w-4 h-4 ml-1 transform transition-transform group-hover/link:translate-x-1" />
                        </a>
                    </div>

                    {/* Card 3: Rare Cancers */}
                    <div className="group bg-white border border-gray-100 border-t-2 border-t-[#0a5c57] p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#e0f5f3] text-[#0a5c57] rounded-full flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0a5c57] group-hover:text-white duration-300">
                            <TestTube2 className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Rare Cancers</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed grow">
                            Dedicated research tracks for orphan oncology indications that are often overlooked by
                            larger pharmaceutical firms.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-sm font-semibold text-[#0a5c57] hover:text-[#084844] transition-colors mt-auto group/link"
                        >
                            <span>Learn more</span>
                            <ChevronRight className="w-4 h-4 ml-1 transform transition-transform group-hover/link:translate-x-1" />
                        </a>
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
                            At Hahobal Lifesciences, we believe that the future of cancer care is personal. Our mission
                            is to accelerate the arrival of that future by discovering and developing precision
                            medicines that are precisely matched to the unique molecular drivers of each patient's
                            disease. We work tirelessly to transform cancer from a life-threatening diagnosis into a
                            manageable chronic condition.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">12+</div>
                                <div className="text-[10px] md:text-xs tracking-widest text-[#8ba2be] uppercase">
                                    Clinical Trials
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">
                                    450+
                                </div>
                                <div className="text-[10px] md:text-xs tracking-widest text-[#8ba2be] uppercase">
                                    Scientists
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">85%</div>
                                <div className="text-[10px] md:text-xs tracking-widest text-[#8ba2be] uppercase">
                                    Efficacy Rate
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">20+</div>
                                <div className="text-[10px] md:text-xs tracking-widest text-[#8ba2be] uppercase">
                                    Patents
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

        </div>
    );
}
