'use client'; 
import { motion, Variants } from 'framer-motion'; 
import { 
  Users, 
  GraduationCap, 
  Leaf, 
  Globe2, 
  CheckCircle2, 
  ChevronRight,
  Heart
} from 'lucide-react';

// --- Animation Config ---
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } 
  }
};

// --- Sub-Components ---
const Hero = () => (
  <motion.section 
    className="relative h-162.5 py-25 flex items-center overflow-hidden"
    initial="hidden"
    animate="visible"
    variants={fadeUpVariant}
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0 opacity-100">
      <img 
        className="w-full h-full object-cover object-center" 
        src="social-hero-image.png" 
        alt="Doctor holding patient's hand" 
      />
    </div>
    
    {/* Dark Blue Linear Gradient Overlay matching your HTML */}
    <div 
      className="absolute inset-0 z-10" 
      style={{ background: 'linear-gradient(to right, rgba(12, 35, 64, 0.9), rgba(12, 35, 64, 0.2))' }} 
    />
    
    <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 w-full">
      <div className="max-w-2xl">
        <span className="inline-block px-4 py-1 rounded-full bg-[#90f4e8]/20 text-[#90f4e8] text-sm font-medium mb-2 border border-[#006a63]/30">
          Commitment to Life
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Caring Beyond Medicines
        </h1>
        
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          At Hahobal Lifesciences, we believe that true healing extends past the laboratory. Our compassion-driven initiatives aim to bridge the gap between breakthrough science and patient accessibility.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#006a63] text-white text-sm font-medium px-8 py-3 rounded hover:brightness-110 transition-all shadow-sm">
            Our 2024 Report
          </button>
          <button className="border border-white/30 text-white text-sm font-medium px-8 py-3 rounded hover:bg-white/10 transition-all">
            Support Initiatives
          </button>
        </div>
      </div>
    </div>
  </motion.section>
);

const Pillars = () => (
  <motion.section 
    className="py-20 max-w-7xl mx-auto px-4 md:px-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUpVariant}
  >
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-4">Pillars of Compassion</h2>
      <p className="text-base text-[#44474d] max-w-2xl mx-auto">
        Our CSR framework is built upon three fundamental commitments that drive every patient-centric decision we make.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      
      {/* Large Primary Card */}
      <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-100 bg-white  shadow-sm transition-all hover:shadow-md p-7">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
            src="social-image.png" 
            alt="Patient Assistance" 
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end   bg-linear-to-t from-white via-white/40 to-transparent p-10">
          <Users className="w-9 h-9 text-[#006a63] mb-4" />
          <h3 className="text-2xl font-bold text-[#000d21] mb-3">Patient Assistance Programs</h3>
          <p className="text-[#44474d] max-w-lg">
            We ensure that financial barriers never stand in the way of life-saving oncology treatments. Our global assistance network has supported over 50,000 patients in the last fiscal year.
          </p>
        </div>
      </div>

      {/* Side Card 1 */}
      <div 
        className="md:col-span-4 rounded-xl p-7 flex flex-col justify-between hover:bg-[#90f4e8]/20 transition-all" 
        style={{ backgroundColor: '#f9fcfc', border: '1px solid rgba(15,110,86,0.08)' }}
      >
        <div>
          <GraduationCap className="w-7 h-7 text-[#006a63] mb-4" />
          <h3 className="text-2xl font-bold text-[#000d21] mb-3">Medical Education</h3>
        </div>
        <p className="text-[#44474d] mb-4">
          Empowering the next generation of oncologists with grants, digital resources, and international research fellowships.
        </p>
        <a href="#" className="text-[#006a63] font-bold flex items-center gap-1 group text-sm">
          Explore Fellowships <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Bottom Row Card 1 */}
      <div 
        className="md:col-span-4 rounded-xl p-7 hover:shadow-lg transition-all" 
        style={{ backgroundColor: '#f9fcfc', border: '1px solid rgba(15,110,86,0.08)' }}
      >
        <Leaf className="w-7 h-7 text-[#778bad] mb-4" />
        <h3 className="text-2xl font-bold text-[#000d21] mb-3">Sustainable Science</h3>
        <p className="text-[#44474d]">
          Minimizing our environmental footprint through zero-waste laboratories and carbon-neutral distribution networks.
        </p>
      </div>

      {/* Bottom Row Card 2 */}
      <div 
        className="md:col-span-8 rounded-xl p-7 text-white flex items-center gap-8 relative overflow-hidden" 
        style={{ backgroundColor: '#0d2f4a' }}
      >
        <div className="flex-1 z-10">
          <h3 className="text-2xl font-bold mb-3">Global Health Equity</h3>
          <p className="text-white/80">
            Collaborating with international health organizations to bring clinical trials to underserved regions, ensuring diverse genomic representation in modern oncology.
          </p>
        </div>
        <div className="hidden lg:block z-10">
          <Globe2 className="w-20 h-20 text-[#94f5d7] opacity-40 stroke-1" />
        </div>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#006a63] rounded-full opacity-10"></div>
      </div>

    </div>
  </motion.section>
);

const ImpactGoals = () => {
  const stats = [
    { value: "1M+", label: "Lives Touched by Programs", progress: 75, text: "75% of target reached" },
    { value: "100%", label: "Renewable Energy Goal", progress: 50, text: "50% of target reached" },
    { value: "$2B", label: "R&D Patient Grant Pool", progress: 66, text: "66% of target reached" },
    { value: "40+", label: "Countries Impacted", progress: 100, text: "Target Achieved" },
  ];

  return (
    <motion.section 
      className="bg-[#f2f4f5] py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariant}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-4">CSR Impact Goals: 2030 Vision</h2>
            <p className="text-[#44474d]">
              Our roadmap for a future where oncology care is equitable, sustainable, and universally accessible.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#006a63] font-bold">
            <CheckCircle2 className="w-6 h-6" />
            <span>Third-Party Audited Data</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-7 rounded border text-center flex flex-col justify-center min-h-[90%]" 
              style={{ border: '1px solid rgba(15,110,86,0.08)' }}
            >
              <div className="text-[#006a63] text-5xl font-bold mb-2 tracking-tight">{stat.value}</div>
              <p className="text-sm font-medium text-[#44474d] uppercase tracking-wider mb-6">{stat.label}</p>
              
              <div className="w-full bg-[#eceeef] h-1 rounded-full overflow-hidden mt-auto mb-2">
                <div 
                  className="bg-[#006a63] h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${stat.progress}%` }} 
                />
              </div>
              <p className="text-[12px] text-[#44474d]/60">{stat.text}</p>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};


// --- Main Page Assembly ---

export default function SocialResponsibilityMainContent() {
  return (
    <main className="font-sans text-[#191c1d] bg-[#f8fafb]">
      <Hero />
      <Pillars />
      <ImpactGoals />
    </main>
  );
}