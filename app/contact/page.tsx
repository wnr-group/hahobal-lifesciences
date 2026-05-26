'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { 
  MapPin, 
  Building2, 
  Phone, 
  Map, 
  ArrowUpRight, 
  Clock, 
  Navigation,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- Shared Animation Config ---
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
  }
};

// --- Sub-Components ---

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel Data
  const slides = [
    {
      id: 1,
      image: 'contact-slider1.jpeg',
      title: 'Connect with the future of Oncology.',
      description: 'Whether you are a researcher, a patient, or a professional looking to join our mission, we are here to provide the information you need.',
    },
    {
      id: 2,
      image: 'contact-slider2.jpeg',
      title: 'Pioneering Precision Medicine.',
      description: 'Our state-of-the-art facilities are dedicated to accelerating the development of life-saving therapeutics for patients worldwide.',
    },
    {
      id: 3,
      image: 'contact-slider3.jpeg',
      title: 'Global Clinical Excellence.',
      description: 'Partnering with leading health organizations to ensure equitable access to next-generation genomic treatments across the globe.',
    },
      {
      id: 4,
      image: 'contact-slider4.jpeg',
      title: 'Global Clinical Excellence.',
      description: 'Partnering with leading health organizations to ensure equitable access to next-generation genomic treatments across the globe.',
    }
  ];

  // Navigation Handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play functionality (Changes slide every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-125 lg:min-h-150 flex items-center bg-white mb-20 overflow-hidden group">
      
      {/* Animated Background Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url("${slides[currentSlide].image}")` }}
        />
      </AnimatePresence>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/20 to-transparent z-10" />
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className="w-full md:w-2/3 lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg text-[#44474d] max-w-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows (Hidden on mobile, visible on hover on desktop) */}
      <div className="absolute inset-y-0 left-0 z-30 hidden md:flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/50 hover:bg-white backdrop-blur-sm text-[#000d21] shadow-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 ml-0.5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 z-30 hidden md:flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/50 hover:bg-white backdrop-blur-sm text-[#000d21] shadow-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 mr-0.5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full h-2 ${
              currentSlide === index 
                ? "w-8 bg-[#006a63]" 
                : "w-2 bg-[#006a63]/30 hover:bg-[#006a63]/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
};
const ContactForm = () => (
  <motion.div 
    className="bg-white p-8 border border-[#c4c6ce] rounded-lg shadow-sm"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUpVariant}
  >
    <h3 className="text-3xl font-bold text-[#000d21] mb-6">General Inquiry</h3>
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#44474d]">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#006a63] transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#44474d]">Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#006a63] transition-all"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#44474d]">Inquiry Type</label>
        <select className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#006a63] bg-white transition-all">
          <option>Clinical Partnership</option>
          <option>Investor Relations</option>
          <option>Medical Affairs</option>
          <option>Career Information</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#44474d]">Message</label>
        <textarea 
          rows={4} 
          placeholder="How can we assist you today?" 
          className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#006a63] transition-all resize-none"
        />
      </div>
      
      <button 
        type="submit" 
        className="bg-[#006a63] text-white px-8 py-3 rounded text-sm font-medium hover:bg-[#00504a] transform hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto shadow-sm hover:shadow-md"
      >
        Submit Inquiry
      </button>
    </form>
  </motion.div>
);

const LocalizedMap = () => (
  <motion.div 
    className="relative h-64 rounded-lg overflow-hidden border border-[#c4c6ce]"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUpVariant}
    transition={{ delay: 0.2 }}
  >
    {/* Monochrome Styled Map Background */}
    <img 
      alt="Monochrome map of Cambridge Medical District" 
      className="w-full h-full object-cover grayscale brightness-90 contrast-125" 
      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
    />
    
    {/* Prominent Teal Pin Marker */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <MapPin className="w-10 h-10 text-[#0D9488] drop-shadow-md animate-bounce" fill="currentColor" />
      <div className="bg-[#000d21] text-white text-[10px] px-2 py-1 rounded shadow-lg mt-1 font-bold whitespace-nowrap">
        Innovation Park, Suite 400
      </div>
    </div>
  </motion.div>
);

const CorporateOffices = () => (
  <motion.div 
    className="bg-[#f2f4f5] p-8 border border-[#c4c6ce] rounded-lg h-full flex flex-col"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUpVariant}
    transition={{ delay: 0.1 }}
  >
    <h3 className="text-3xl font-bold text-[#000d21] mb-8">Corporate Offices</h3>
    
    <div className="space-y-8 grow">
      {/* Global HQ */}
      <div className="flex gap-4 group">
        <MapPin className="text-[#006a63] w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div>
          <h4 className="text-xl font-bold text-[#000d21]">Global Headquarters</h4>
          <p className="text-[#44474d] mt-1 leading-relaxed">
            100 Biotech Plaza, Suite 400<br/>Cambridge, MA 02139, USA
          </p>
          <p className="text-[#006a63] text-sm font-medium mt-2 flex items-center gap-1 cursor-pointer hover:underline">
            <Map className="w-4.5 h-4.5" /> View on Map
          </p>
        </div>
      </div>

      {/* EU Hub */}
      <div className="flex gap-4 group">
        <Building2 className="text-[#006a63] w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div>
          <h4 className="text-xl font-bold text-[#000d21]">EU Regulatory Hub</h4>
          <p className="text-[#44474d] mt-1 leading-relaxed">
            Technologiepark 122<br/>B-9052 Gent, Belgium
          </p>
        </div>
      </div>

      {/* Media & Support */}
      <div className="flex gap-4 group">
        <Phone className="text-[#006a63] w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div>
          <h4 className="text-xl font-bold text-[#000d21]">Media & Support</h4>
          <p className="text-[#44474d] mt-1 leading-relaxed">
            General: +1 (617) 555-0192<br/>Clinical Support: +1 (617) 555-0800
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Careers = () => (
  <section className="mb-20 max-w-7xl mx-auto px-6 md:px-12">
    <motion.div 
      className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariant}
    >
      <div>
        <h3 className="text-4xl lg:text-5xl font-bold text-[#000d21] tracking-tight">Join our pursuit of precision.</h3>
        <p className="text-lg text-[#44474d] max-w-2xl mt-3 leading-relaxed">
          We are looking for visionary professionals to help us redefine oncology treatment and patient care.
        </p>
      </div>
      <div className="flex gap-3 shrink-0">
        <button className="px-5 py-2 bg-[#90f4e8] text-[#005140] rounded text-sm font-medium transition-colors duration-300 hover:bg-[#006a63] hover:text-white">
          All Roles
        </button>
        <button className="px-5 py-2 border border-[#74777e] text-[#44474d] rounded text-sm font-medium transition-colors duration-300 hover:bg-[#f2f4f5]">
          Remote Only
        </button>
      </div>
    </motion.div>

    {/* Job List Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sales Role */}
      <motion.div 
        className="bg-white p-6 border border-[#c4c6ce] rounded-lg hover:border-[#006a63] transition-all duration-300 group cursor-pointer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariant}
      >
        <div className="flex justify-between items-start mb-5">
          <span className="bg-[#94f5d7] text-[#002018] px-3 py-1 rounded text-xs font-medium group-hover:bg-[#006a63] group-hover:text-white transition-colors duration-300">
            Sales
          </span>
          <ArrowUpRight className="text-[#c4c6ce] w-5 h-5 group-hover:text-[#006a63] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        <h4 className="text-2xl font-bold text-[#000d21] mb-2">Regional Oncology Lead</h4>
        <p className="text-base text-[#44474d] mb-6 leading-relaxed">
          Drive strategic growth and establish clinical partnerships within the Northeast US territory.
        </p>
        <div className="flex items-center gap-5 text-[#44474d] text-sm font-medium">
          <span className="flex items-center gap-1.5"><Clock className="w-4.5 h-4.5" /> Full-time</span>
          <span className="flex items-center gap-1.5"><Navigation className="w-4.5 h-4.5" /> Boston, MA</span>
        </div>
      </motion.div>

      {/* QA Role */}
      <motion.div 
        className="bg-white p-6 border border-[#c4c6ce] rounded-lg hover:border-[#006a63] transition-all duration-300 group cursor-pointer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariant}
        transition={{ delay: 0.1 }}
      >
        <div className="flex justify-between items-start mb-5">
          <span className="bg-[#94f5d7] text-[#002018] px-3 py-1 rounded text-xs font-medium group-hover:bg-[#006a63] group-hover:text-white transition-colors duration-300">
            QA
          </span>
          <ArrowUpRight className="text-[#c4c6ce] w-5 h-5 group-hover:text-[#006a63] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        <h4 className="text-2xl font-bold text-[#000d21] mb-2">Lead Quality Compliance Auditor</h4>
        <p className="text-base text-[#44474d] mb-6 leading-relaxed">
          Oversee manufacturing quality standards and ensure rigorous regulatory compliance across global sites.
        </p>
        <div className="flex items-center gap-5 text-[#44474d] text-sm font-medium">
          <span className="flex items-center gap-1.5"><Clock className="w-4.5 h-4.5" /> Full-time</span>
          <span className="flex items-center gap-1.5"><Navigation className="w-4.5 h-4.5" /> Remote / Hybrid</span>
        </div>
      </motion.div>

      {/* Medical Affairs Role */}
      <motion.div 
        className="bg-white p-6 border border-[#c4c6ce] rounded-lg hover:border-[#006a63] transition-all duration-300 group cursor-pointer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUpVariant}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-start mb-5">
          <span className="bg-[#94f5d7] text-[#002018] px-3 py-1 rounded text-xs font-medium group-hover:bg-[#006a63] group-hover:text-white transition-colors duration-300">
            Medical Affairs
          </span>
          <ArrowUpRight className="text-[#c4c6ce] w-5 h-5 group-hover:text-[#006a63] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        <h4 className="text-2xl font-bold text-[#000d21] mb-2">Medical Science Liaison</h4>
        <p className="text-base text-[#44474d] mb-6 leading-relaxed">
          Act as a scientific peer to oncologists, translating complex clinical data into actionable insights.
        </p>
        <div className="flex items-center gap-5 text-[#44474d] text-sm font-medium">
          <span className="flex items-center gap-1.5"><Clock className="w-4.5 h-4.5" /> Full-time</span>
          <span className="flex items-center gap-1.5"><Navigation className="w-4.5 h-4.5" /> Gent, Belgium</span>
        </div>
      </motion.div>
    </div>

    <motion.div 
      className="mt-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUpVariant}
    >
      <p className="text-[#44474d] text-base">
        Don't see a role that fits?{' '}
        <a href="#" className="text-[#006a63] font-bold hover:underline transition-all duration-300">
          Submit your CV for general consideration.
        </a>
      </p>
    </motion.div>
  </section>
);

// --- Main Page Assembly ---

export default function ContactPage() {
  return (
    <main className="font-sans text-[#191c1d] bg-[#f8fafb] overflow-x-hidden">
      <Hero />
      
      {/* Split Section: Form & Map (Left) / Offices (Right) */}
      <section className="mb-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <ContactForm />
            <LocalizedMap />
          </div>
          <div>
            <CorporateOffices />
          </div>
        </div>
      </section>

      <Careers />
    </main>
  );
}