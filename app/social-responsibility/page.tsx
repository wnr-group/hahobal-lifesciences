'use client'; 
import { motion, Variants } from 'framer-motion'; 
import {
  Users,
  GraduationCap,
  Leaf,
  Globe2,
  CheckCircle2,
  Heart,
  HeartHandshake,
  Lightbulb
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
const Hero = () => {
  return (
    <section className="relative py-32 md:py-40 lg:py-48 flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 opacity-100"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          className="w-full h-full object-cover object-center"
          src="social-hero-image.png"
          alt="Doctor holding patient's hand"
        />
      </motion.div>

      {/* Dark Blue Linear Gradient Overlay matching your HTML */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to right, rgba(12, 35, 64, 0.9), rgba(12, 35, 64, 0.2))' }}
      />

      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 w-full"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariant}
      >
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
            variants={heroItemVariant}
          >
            Caring Beyond Medicines
          </motion.h1>

          <motion.p
            className="text-lg text-white/90 leading-relaxed mb-8"
            variants={heroItemVariant}
          >
            We believe healthcare should create a positive social impact. Through awareness initiatives and healthcare support programs, we contribute toward improving cancer education and patient support.
          </motion.p>

          <motion.div
            className="space-y-6 text-base md:text-lg text-white/85 leading-relaxed"
            variants={heroItemVariant}
          >
            <p>
              At Hahobal Lifesciences, we understand that a cancer diagnosis changes everything—not just for the patient, but for their entire circle of loved ones. We believe that true healing requires more than just advanced chemistry; it requires a steadfast commitment to the human spirit.
            </p>

            <p>
              Our responsibility doesn't end when a life-saving medicine reaches the pharmacy shelf. It begins with the hand held, the question answered, and the community supported. We are dedicated to bridging the gap between clinical treatment and holistic care, ensuring that no one has to walk this path alone.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};


const Pillars = () => (
  <motion.section
    className="py-20 max-w-7xl mx-auto px-4 md:px-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUpVariant}
  >
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-4">Our Pillars of Compassion</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      
      {/* Large Primary Card */}
      <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-100 bg-white shadow-sm transition-all hover:shadow-md p-7">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            src="social-image.png"
            alt="Patient Education"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end bg-linear-to-t from-white via-white/40 to-transparent p-10">
          <Users className="w-9 h-9 text-[#006a63] mb-4" />
          <h3 className="text-2xl font-bold text-[#000d21] mb-3">A Journey Shared (Patient Education)</h3>
          <p className="text-[#44474d] max-w-lg">
            We simplify complex medical journeys. Through tailored education initiatives, we empower patients and caregivers with the information they need to make confident, informed decisions about their health.
          </p>
        </div>
      </div>

      {/* Side Card 1 */}
      <div
        className="md:col-span-4 rounded-xl p-7 flex flex-col justify-between hover:bg-[#90f4e8]/20 transition-all"
        style={{ backgroundColor: '#f9fcfc', border: '1px solid rgba(15,110,86,0.08)' }}
      >
        <div>
          <Lightbulb className="w-7 h-7 text-[#006a63] mb-4" />
          <h3 className="text-2xl font-bold text-[#000d21] mb-3">Empowering Through Knowledge (Cancer Awareness)</h3>
        </div>
        <p className="text-[#44474d]">
          Fear often stems from the unknown. We lead grassroots awareness programs to replace fear with facts, promoting early detection and preventive care that saves lives.
        </p>
      </div>

      {/* Bottom Row Card 1 */}
      <div
        className="md:col-span-4 rounded-xl p-7 hover:shadow-lg transition-all"
        style={{ backgroundColor: '#f9fcfc', border: '1px solid rgba(15,110,86,0.08)' }}
      >
        <HeartHandshake className="w-7 h-7 text-[#778bad] mb-4" />
        <h3 className="text-2xl font-bold text-[#000d21] mb-3">Nurturing the Healers (Support for Healthcare Communities)</h3>
        <p className="text-[#44474d]">
          We stand behind the doctors, nurses, and researchers who give their lives to oncology. By providing resources and emotional support frameworks, we help sustain those who sustain us.
        </p>
      </div>

      {/* Bottom Row Card 2 */}
      <div
        className="md:col-span-8 rounded-xl p-7 text-white flex items-center gap-8 relative overflow-hidden"
        style={{ backgroundColor: '#0d2f4a' }}
      >
        <div className="flex-1 z-10">
          <h3 className="text-2xl font-bold mb-3">Integrity as a Promise (Ethical & Sustainable Practices)</h3>
          <p className="text-white/80">
            Our compassion extends to the world we live in. We operate with the highest ethical standards and sustainable practices, ensuring that our pursuit of health today does not compromise the environment of tomorrow.
          </p>
        </div>
        <div className="hidden lg:block z-10">
          <Leaf className="w-20 h-20 text-[#94f5d7] opacity-40 stroke-1" />
        </div>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#006a63] rounded-full opacity-10"></div>
      </div>

    </div>
  </motion.section>
);

const CSRGoals = () => {
  const goals = [
    { title: "Cancer Awareness Programs", icon: Heart },
    { title: "Patient Education Initiatives", icon: Users },
    { title: "Support for Healthcare Communities", icon: HeartHandshake },
    { title: "Ethical & Sustainable Business Practices", icon: Leaf },
  ];

  return (
    <motion.section
      className="py-20 bg-[#f8fafb]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariant}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
            <Heart className="w-12 h-12 text-[#006a63] mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic mb-6">
              "In the fight against cancer, medicine provides the cure, but compassion provides the strength to endure it. At Hahobal, we are committed to providing both."
            </p>
          </div>
        </div>

        {/* CSR Goals */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-4">Our CSR Goals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-[#e0f5f3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#006a63]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {goal.title}
                </h3>
              </div>
            );
          })}
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
      <CSRGoals />
    </main>
  );
}