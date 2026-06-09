'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {
  MapPin,
  Building2,
  Phone,
  Map,
  ChevronRight,
  ChevronLeft,
  MessageCircle
} from 'lucide-react';

// High-Quality Official WhatsApp Vector
const WhatsAppIcon = (props:any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.42 21.814a9.882 9.882 0 0 1-5.029-1.375l-.358-.211-3.737.979.994-3.641-.232-.368A9.852 9.852 0 0 1 1.547 11.93c0-5.449 4.435-9.884 9.884-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413zM17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
);

// High-Quality Official Facebook Vector (Circle Variant)
const FacebookIcon = (props:any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// High-Quality Official Instagram Vector
const InstagramIcon = (props:any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.873 5.873 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126 5.842 5.842 0 0 0-2.126-1.384C18.925.333 18.055.131 16.777.072 15.5-.012 15.093 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.402-2.757-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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

    {/* Social Media Section */}
    <div className="flex items-center gap-4 mt-4">
  <a href="https://wa.me/919840070222" target="_blank" rel="noopener noreferrer" className="text-[#006a63] hover:scale-110 transition-transform">
    <WhatsAppIcon className="w-6 h-6" />
  </a>
  <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#006a63] hover:scale-110 transition-transform">
    <FacebookIcon className="w-6 h-6" />
  </a>
  <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#006a63] hover:scale-110 transition-transform">
    <InstagramIcon className="w-6 h-6" />
  </a>
</div>
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