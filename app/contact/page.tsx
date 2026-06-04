'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {
  MapPin,
  Building2,
  Phone,
  Map,
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
    <section className="relative min-h-125 lg:min-h-125 xl:min-h-137.5 flex items-center bg-white mb-20 overflow-hidden group">

      {/* Animated Background Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover object-right md:object-center"
            style={{ imageRendering: 'auto' }}
          />
        </motion.div>
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Your inquiry has been sent successfully!',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send inquiry. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-white p-8 border border-[#c4c6ce] rounded-lg shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariant}
    >
      <h3 className="text-3xl font-bold text-[#000d21] mb-6">General Inquiry</h3>

      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <p className="text-sm font-medium">{submitStatus.message}</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact inquiry form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-[#44474d]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              aria-required="true"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#006a63] focus:border-[#006a63] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-sm font-medium text-[#44474d]">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              aria-required="true"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#006a63] focus:border-[#006a63] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className="text-sm font-medium text-[#44474d]">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            required
            aria-required="true"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#006a63] focus:border-[#006a63] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-inquiry-type" className="text-sm font-medium text-[#44474d]">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="contact-inquiry-type"
            name="inquiryType"
            required
            aria-required="true"
            value={formData.inquiryType}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#006a63] focus:border-[#006a63] bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select inquiry type</option>
            <option value="Clinical Partnership">Clinical Partnership</option>
            <option value="Investor Relations">Investor Relations</option>
            <option value="Medical Affairs">Medical Affairs</option>
            <option value="Career Information">Career Information</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-[#44474d]">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="How can we assist you today?"
            required
            aria-required="true"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border border-[#74777e] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#006a63] focus:border-[#006a63] transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          aria-label="Submit contact inquiry form"
          className="bg-[#006a63] text-white px-8 py-3 rounded text-sm font-medium hover:bg-[#00504a] focus:outline-none focus:ring-2 focus:ring-[#006a63] focus:ring-offset-2 transform hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            'Submit Inquiry'
          )}
        </button>
      </form>
    </motion.div>
  );
};

const CorporateOffices = () => (
  <motion.div 
    className="bg-[#f2f4f5] p-8 border border-[#c4c6ce] rounded-lg h-full flex flex-col"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUpVariant}
    transition={{ delay: 0.1 }}
  >
    <h3 className="text-3xl font-bold text-[#000d21] mb-8">Corporate Office</h3>

    <div className="space-y-8 grow">
      {/* Corporate Office */}
      <div className="flex gap-4 group">
        <MapPin className="text-[#006a63] w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div>
          <h4 className="text-xl font-bold text-[#000d21]">Hahobal Biopharmaceuticals India Pvt. Ltd.</h4>
          <p className="text-[#44474d] mt-1 leading-relaxed">
            NO 201 Swaroop Aditya Avenue,<br/>
            Marol Pipeline Road, International Airport,<br/>
            Kranti Nagar, Andheri East,<br/>
            Mumbai - 400 059, Maharashtra, India
          </p>
          <a
            href="https://www.google.com/maps/place/4V38%2BXV+Mumbai,+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#006a63] text-sm font-medium mt-2 flex items-center gap-1 hover:underline"
          >
            <Map className="w-4.5 h-4.5" /> View on Map
          </a>
        </div>
      </div>

      {/* Contact Details */}
      <div className="flex gap-4 group">
        <Phone className="text-[#006a63] w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
        <div>
          <h4 className="text-xl font-bold text-[#000d21]">Contact Information</h4>
          <p className="text-[#44474d] mt-1 leading-relaxed">
            Phone: <a href="tel:+919840070222" className="text-[#006a63] hover:underline">+91 98400 70222</a>
          </p>
          <p className="text-[#44474d] mt-1 leading-relaxed">
            Email: <a href="mailto:info@hahoballifesciences.com" className="text-[#006a63] hover:underline">info@hahoballifesciences.com</a>
          </p>
          <p className="text-[#44474d] mt-1 leading-relaxed">
            Sales: <a href="mailto:sales@hahoballifesciences.com" className="text-[#006a63] hover:underline">sales@hahoballifesciences.com</a>
          </p>
          <p className="text-[#44474d] mt-1 leading-relaxed">
            Support: <a href="mailto:support@hahoballifesciences.com" className="text-[#006a63] hover:underline">support@hahoballifesciences.com</a>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main Page Assembly ---

export default function ContactPage() {
  return (
    <main className="font-sans text-[#191c1d] bg-[#f8fafb] overflow-x-hidden">
      <Hero />

      {/* Split Section: Form (Left) / Offices (Right) */}
      <section className="mb-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <ContactForm />
          </div>
          <div>
            <CorporateOffices />
          </div>
        </div>
      </section>
    </main>
  );
}