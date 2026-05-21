import {
  Dna,
  Activity,
  TestTube2,
  ChevronRight,
  Search,
  Users,
  Globe
} from "lucide-react";

export default function HahobalLandingPage() {
  return (
    <div className="text-gray-800 bg-gray-50">
      {/* HERO SECTION */}
      <header className="relative bg-white pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 px-6 lg:px-20 overflow-hidden">
        <div
          className="hidden md:block absolute right-0 top-0 w-1/2 h-full opacity-20 lg:opacity-30 bg-cover bg-left"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-transparent" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-block bg-[#e0f5f3] text-[#0a5c57] text-xs font-bold px-3 py-1 mb-6 rounded-sm uppercase tracking-wider">
            Leading with Science
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
            Precision Oncology for a Healthier Tomorrow
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 lg:mb-10 leading-relaxed max-w-xl">
            We are pioneering the next generation of targeted therapies,
            bridging the gap between molecular discovery and life-changing
            patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0a5c57] hover:bg-[#084844] text-white px-6 py-3 rounded font-medium transition-colors w-full sm:w-auto text-center">
              View Clinical Pipeline
            </button>
            <button className="bg-white border border-gray-300 hover:border-[#0a5c57] hover:text-[#0a5c57] text-gray-700 px-6 py-3 rounded font-medium transition-colors w-full sm:w-auto text-center">
              Our Research Ethos
            </button>
          </div>
        </div>
      </header>

      {/* WHY HAHOBAL SECTION */}
      <section className="py-16 md:py-24 px-6 lg:px-20 bg-gray-50 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
              Why Hahobal Lifesciences?
            </h2>
            <div className="space-y-8 md:space-y-10">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#e0f5f3] text-[#0a5c57] rounded flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Evidence-Based Discovery
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our research is anchored in rigorous clinical data and
                    peer-reviewed scientific methodologies to ensure therapeutic
                    efficacy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#e0f5f3] text-[#0a5c57] rounded flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Patient-Centric Approach
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every drug in our pipeline is designed with the patient's
                    quality of life as the primary metric of success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#e0f5f3] text-[#0a5c57] rounded flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Global Scientific Network
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Collaborating with the world's leading academic institutions
                    to accelerate the translation of research into reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80"
              alt="Scientific Research"
              className="rounded shadow-xl w-full h-75 md:h-100 object-cover"
            />
            <div className="absolute -bottom-6 left-0 md:-left-6 bg-white p-4 md:p-6 shadow-lg rounded max-w-[90%] md:max-w-sm border-l-4 border-[#0a5c57] mx-6 md:mx-0">
              <p className="text-gray-600 italic text-sm mb-4">
                "Our commitment is to eliminate the 'one size fits all' approach
                in oncology treatment."
              </p>
              <p className="font-bold text-[#0a5c57] text-sm">
                — Dr. Elena Vance, Chief Scientific Officer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THERAPEUTIC FOCUS SECTION */}
      <section className="py-16 md:py-24 px-6 lg:px-20 bg-gray-50/50">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Therapeutic Focus
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We concentrate our efforts on high-impact oncology sectors where
            unmet needs are greatest.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Card 1: Solid Tumors */}
          <div className="group bg-white border border-gray-100 border-t-2 border-t-[#0a5c57] p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="w-12 h-12 bg-[#e0f5f3] text-[#0a5c57] rounded-full flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0a5c57] group-hover:text-white duration-300">
              <Dna className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Solid Tumors
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed grow">
              Developing small molecule inhibitors targeting specific genomic
              alterations in lung, breast, and colorectal cancers.
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
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Hematology
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed grow">
              Advancing immunotherapies for leukemia and lymphoma that harness
              the body's own immune system to fight malignant cells.
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
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Rare Cancers
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed grow">
              Dedicated research tracks for orphan oncology indications that are
              often overlooked by larger pharmaceutical firms.
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
      </section>

      {/* MISSION & STATS SECTION */}
      <section className="py-16 md:py-20 px-6 lg:px-20 bg-[#101e30] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 justify-between items-center mb-12 md:mb-16">
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our Mission: Precision for Life
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                At Hahobal Lifesciences, we believe that the future of cancer
                care is personal. Our mission is to accelerate the arrival of
                that future by discovering and developing precision medicines
                that are precisely matched to the unique molecular drivers of
                each patient's disease. We work tirelessly to transform cancer
                from a life-threatening diagnosis into a manageable chronic
                condition.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end opacity-20 lg:opacity-100">
              <span className="w-32 h-32 md:w-48 md:h-48 text-white/5 block" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-center md:text-left">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">12+</div>
              <div className="text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
                Clinical Trials
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">450+</div>
              <div className="text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
                Scientists
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
              <div className="text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
                Efficacy Rate
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-[10px] md:text-xs tracking-widest text-gray-400 uppercase">
                Patents
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-12 md:py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Stay Updated on Our Research
            </h3>
            <p className="text-gray-600 text-sm">
              Receive quarterly insights into clinical progress and pipeline
              breakthroughs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 border border-gray-300 rounded sm:rounded-r-none w-full sm:w-72 focus:outline-none focus:border-[#0a5c57]"
            />
            <button className="bg-[#0a5c57] hover:bg-[#084844] text-white px-6 py-3 rounded sm:rounded-l-none font-medium transition-colors w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
