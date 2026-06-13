'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  BadgeCheck,
  Wind,
  FlaskConical,
  Snowflake,
  CheckCircle2,
  Globe
} from 'lucide-react';

// --- Shared Animation Config ---
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
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
const Hero = () => (
  <section className="relative w-full min-h-[137.5px] flex items-center bg-cover bg-right md:bg-center overflow-hidden"
    style={{ backgroundImage: 'url("manufacture-hero-image.png")' }}
  >
    <motion.div
      className="absolute inset-0"
      style={{ backgroundImage: 'url("manufacture-hero-image.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent z-0" />

    <motion.div
      className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 relative z-10"
      initial="hidden"
      animate="visible"
      variants={heroContainerVariant}
    >
      <div className="max-w-3xl">
        <motion.p
          className="text-sm font-medium text-[#90f4e8] uppercase tracking-widest mb-4"
          variants={heroItemVariant}
        >
          Precision Infrastructure
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={heroItemVariant}
        >
          Advanced Manufacturing & Scientific Discovery
        </motion.h1>
        <motion.p
          className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
          variants={heroItemVariant}
        >
          Pioneering next-generation oncology therapeutics through a vertically integrated ecosystem of WHO-GMP certified facilities and rigorous research protocols.
        </motion.p>
      </div>
    </motion.div>
  </section>
);

const ManufacturingExcellence = () => (
  <motion.section 
    className="py-20 max-w-7xl mx-auto px-6 md:px-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={fadeUpVariant}
  >
    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21]">Manufacturing Excellence</h2>
      <div className="items-center gap-2 bg-[#90f4e8] px-4 py-1.5 rounded-full inline-flex w-max">
        <BadgeCheck className="text-[#007169] w-4 h-4" />
        <span className="text-xs font-semibold text-[#007169] uppercase tracking-wide">WHO-GMP CERTIFIED</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-8 bg-white border border-[#c4c6ce] p-2 rounded-xl overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow">
        <div className="h-64 mb-6 overflow-hidden rounded-lg">
          <img 
            alt="Automated Sterile Formulation Cleanroom" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="manufacture-excellance-image.png"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#000d21] mb-3 px-4">Automated Sterile Formulation</h3>
        <p className="text-base text-[#44474d] px-4 pb-4">
          Our state-of-the-art facility utilizes closed-loop robotic systems for the production of lyophilized injectables, ensuring zero-contamination environments for oncology treatments.
        </p>
      </div>

      <div className="col-span-1 md:col-span-4 p-8 flex flex-col justify-center rounded-xl bg-[#F0F7FF] border border-[#b3c7ec]/30">
        <span className="text-5xl font-bold mb-2 text-[#006a63]">99.9%</span>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#006a63]">Batch Reliability</p>
        <div className="mt-8 pt-8 border-t border-[#006a63]/20">
          <p className="text-base italic text-[#006a63] font-medium leading-relaxed">
            &quot;Precision at scale is the foundation of patient safety.&quot;
          </p>
        </div>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#90f4e8]/10 border border-[#90f4e8]/30 p-8 rounded-xl hover:bg-[#90f4e8]/20 transition-colors duration-300">
        <Wind className="text-[#006a63] w-8 h-8 mb-5" />
        <h4 className="text-xl font-bold text-[#000d21] mb-3">Air Quality Control</h4>
        <p className="text-[#44474d] leading-relaxed">
          Class 100 HEPA filtration systems maintaining ISO 5 standards across all critical processing zones.
        </p>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#90f4e8]/10 border border-[#90f4e8]/30 p-8 rounded-xl hover:bg-[#90f4e8]/20 transition-colors duration-300">
        <FlaskConical className="text-[#006a63] w-8 h-8 mb-5" />
        <h4 className="text-xl font-bold text-[#000d21] mb-3">API Synthesis</h4>
        <p className="text-[#44474d] leading-relaxed">
          In-house synthesis of high-potency active pharmaceutical ingredients to ensure supply chain resilience.
        </p>
      </div>

      <div className="col-span-1 md:col-span-4 bg-[#90f4e8]/10 border border-[#90f4e8]/30 p-8 rounded-xl hover:bg-[#90f4e8]/20 transition-colors duration-300">
        <Snowflake className="text-[#006a63] w-8 h-8 mb-5" />
        <h4 className="text-xl font-bold text-[#000d21] mb-3">Cold Chain Logistics</h4>
        <p className="text-[#44474d] leading-relaxed">
          IoT-monitored -80°C storage capabilities ensuring biological integrity from lab to patient.
        </p>
      </div>
    </div>
  </motion.section>
);

const QualityAssurance = () => (
  <motion.section 
    className="py-10 max-w-7xl mx-auto px-6 md:px-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUpVariant}
  >
    <div className="bg-[#f2f4f5] p-6 md:p-12 rounded-xl border border-[#c4c6ce] flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-6">Rigorous Quality Assurance</h2>
        <p className="text-lg text-[#44474d] mb-8 leading-relaxed">
          Our QA framework exceeds international regulatory standards, employing a three-tier validation process for every molecule produced.
        </p>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <CheckCircle2 className="text-[#006a63] w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-bold text-[#000d21] block mb-1">Real-time Analytical Monitoring</span>
              <span className="text-base text-[#44474d]">HPLC and Mass Spectrometry during synthesis.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle2 className="text-[#006a63] w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-bold text-[#000d21] block mb-1">LIMS Integration</span>
              <span className="text-base text-[#44474d]">Fully digital Laboratory Information Management Systems.</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-sm group">
        <img 
          alt="Laboratory Quality Control" 
          className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-700" 
          src="manufacture-quality-image.png"
        />
      </div>
    </div>
  </motion.section>
);


// Global Expension Map
const GlobalExpansionMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState('srilanka');
  const [tooltip, setTooltip] = useState({
    visible: false, x: 0, y: 0, year: '', city: '', milestone: '', desc: ''
  });

  useEffect(() => {
    // 1. Declare the animationFrameId at the top of the useEffect block scope
    let animationFrameId: number;

    const hasTopojson = () => 'topojson' in window;

    if (!hasTopojson()) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/topojson-client@3/dist/topojson-client.min.js';
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      initializeMap();
    }

    function initializeMap() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let pathOpacity = 0;
      
      const locations: any[] = [
        { id: 'srilanka', lat: 7.8731, lon: 80.7718, color: '#0f6e56', year: '2027-2028', city: 'Sri Lanka', desc: 'Strategic expansion in South Asian markets.', labelOffset: { x: 0, y: -45 } },
        { id: 'singapore', lat: 1.35, lon: 103.82, color: '#0f6e56', year: '2027-2028', city: 'Singapore', desc: 'Southeast Asia operational hub.', labelOffset: { x: 0, y: -45 } },
        { id: 'uae', lat: 24.4539, lon: 54.3773, color: '#0f6e56', year: '2029-2030', city: 'United Arab Emirates', desc: 'Middle East regional center.', labelOffset: { x: 0, y: -45 } },
        { id: 'europe', lat: 50.8503, lon: 4.3517, color: '#0f6e56', year: '2031', city: 'Europe', desc: 'European network expansion.', labelOffset: { x: 0, y: -45 } }
      ];

      const paths = [
        { from: locations[0], to: locations[1], progress: 0 },        // Sri Lanka → Singapore
        { from: locations[0], to: locations[2], progress: 0.2 },      // Sri Lanka → UAE
        { from: locations[1], to: locations[2], progress: 0.4 },      // Singapore → UAE
        { from: locations[2], to: locations[3], progress: 0.6 },      // UAE → Europe
        { from: locations[1], to: locations[3], progress: 0.8 }       // Singapore → Europe
      ];

      let worldData: any = null;

      async function fetchMapData() {
        try {
          const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
          const topoData = await response.json();
          worldData = (window as any).topojson.feature(topoData, (topoData as any).objects.countries);
        } catch(e) { 
          console.error("Map loading error", e); 
        }
      }

      function project(lat: number, lon: number, w: number, h: number) {
        // Focus on Asia, Africa, Europe
        const minLon = -20;
        const maxLon = 150;
        const minLat = -40;  // Southern Africa
        const maxLat = 70;   // Northern Europe

        const lonRange = maxLon - minLon;
        const latRange = maxLat - minLat;

        const x = ((lon - minLon) / lonRange) * w;
        const y = ((maxLat - lat) / latRange) * h;
        return { x, y };
      }

      function resize() {
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.parentElement?.getBoundingClientRect();
        if (rect) {
          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;
          ctx?.scale(dpr, dpr);
        }
      }

      window.addEventListener('resize', resize);
      resize();
      fetchMapData();

      const drawPin = (x: number, y: number, color: string, opacity: number) => {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.translate(x, y - 24);
        ctx.beginPath(); ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.arc(0, 24, 6, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.fillStyle = color; ctx.moveTo(0, 24); ctx.bezierCurveTo(-10, 16, -10, 10, -10, 8); ctx.arc(0, 8, 10, Math.PI, 0); ctx.bezierCurveTo(10, 10, 10, 16, 0, 24); ctx.fill();
        ctx.beginPath(); ctx.fillStyle = '#178a6d'; ctx.arc(-3, 6, 3, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.fillStyle = '#ffffff'; ctx.arc(0, 8, 4, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      };

      const drawAirplane = (x: number, y: number, angle: number, opacity: number) => {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.translate(x, y); ctx.rotate(angle); ctx.fillStyle = '#0f6e56';
        ctx.beginPath(); ctx.moveTo(14, 0); ctx.bezierCurveTo(12, -2, 8, -2, 6, -2); ctx.lineTo(2, -14); ctx.lineTo(-2, -14); ctx.lineTo(0, -2); ctx.lineTo(-8, -2); ctx.lineTo(-11, -6); ctx.lineTo(-13, -6); ctx.lineTo(-12, 0); ctx.lineTo(-13, 6); ctx.lineTo(-11, 6); ctx.lineTo(-8, 2); ctx.lineTo(0, 2); ctx.lineTo(-2, 14); ctx.lineTo(2, 14); ctx.lineTo(6, 2); ctx.bezierCurveTo(8, 2, 12, 2, 14, 0); ctx.closePath(); ctx.fill();
        ctx.restore();
      };

      const drawFloatingLabel = (x: number, y: number, text: string, offset: any, opacity: number) => {
        ctx.save(); ctx.globalAlpha = opacity;
        const paddingX = 8;
        ctx.font = 'bold 10px Inter, sans-serif';
        const textWidth = ctx.measureText(text).width;
        
        const safeOffset = offset || { x: 0, y: 0 };
        
        const rectX = x + safeOffset.x - (textWidth / 2) - paddingX;
        const rectY = y + safeOffset.y - 14;
        ctx.shadowBlur = 4; ctx.shadowColor = 'rgba(0,0,0,0.1)'; ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.roundRect(rectX, rectY, textWidth + paddingX * 2, 20, 4); ctx.fill();
        ctx.shadowBlur = 0; ctx.fillStyle = '#111827'; ctx.textAlign = 'center'; ctx.fillText(text, x + safeOffset.x, rectY + 14);
        ctx.restore();
      };

      function animate() {
        if (!canvas || !ctx) return;
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);

        if (pathOpacity < 1) pathOpacity += 0.01;

        if (worldData) {
          ctx.beginPath();
          ctx.fillStyle = '#c8d6e0';
          ctx.strokeStyle = '#f8fafb';
          ctx.lineWidth = 1;
          
          worldData.features.forEach((feature: any) => {
            feature.geometry.coordinates.forEach((polygon: any) => {
              const drawPoly = (coords: any[]) => {
                coords.forEach((pt, i) => {
                  const p = project(pt[1], pt[0], w, h);
                  if (i === 0) ctx.moveTo(p.x, p.y);
                  else ctx.lineTo(p.x, p.y);
                });
              };
              if (feature.geometry.type === 'MultiPolygon') polygon.forEach(drawPoly);
              else drawPoly(polygon);
            });
          });
          ctx.fill(); ctx.stroke();
        }

        paths.forEach(path => {
          const start = project(path.from.lat, path.from.lon, w, h);
          const end = project(path.to.lat, path.to.lon, w, h);
          const dx = end.x - start.x; const dy = end.y - start.y; const dist = Math.sqrt(dx*dx + dy*dy);
          const cp = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 - dist * 0.25 };

          ctx.save(); ctx.globalAlpha = pathOpacity; ctx.beginPath();
          const grad = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
          grad.addColorStop(0, '#0f6e56'); grad.addColorStop(1, '#d4af37');
          ctx.strokeStyle = grad; ctx.setLineDash([8, 6]); ctx.lineWidth = 1.5;
          ctx.moveTo(start.x, start.y); ctx.quadraticCurveTo(cp.x, cp.y, end.x, end.y); ctx.stroke();
          ctx.restore();

          path.progress = (path.progress + 0.002) % 1.0;
          const t = path.progress;
          const px = (1-t)*(1-t)*start.x + 2*(1-t)*t*cp.x + t*t*end.x;
          const py = (1-t)*(1-t)*start.y + 2*(1-t)*t*cp.y + t*t*end.y;
          const tx = 2*(1-t)*(cp.x - start.x) + 2*t*(end.x - cp.x);
          const ty = 2*(1-t)*(cp.y - start.y) + 2*t*(end.y - cp.y);
          drawAirplane(px, py, Math.atan2(ty, tx), pathOpacity);
        });

        locations.forEach((loc) => {
          const p = project(loc.lat, loc.lon, w, h);
          drawPin(p.x, p.y, loc.color, pathOpacity);
          drawFloatingLabel(p.x, p.y, loc.city, loc.labelOffset, pathOpacity);
        });

        // This will now work without throwing the ReferenceError
        animationFrameId = requestAnimationFrame(animate);
      }
      
      animate();

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const w = rect.width; const h = rect.height;

        let found: any = null;
        
        locations.forEach(loc => {
          const p = project(loc.lat, loc.lon, w, h);
          const py = p.y - 12;
          if (Math.sqrt((mx-p.x)**2 + (my-py)**2) < 25) found = loc;
        });

        if (found) {
          setActiveNode(found.id);
          const isMobile = w < 768;
          const tooltipWidth = isMobile ? 192 : 240;
          const left = Math.min(w - tooltipWidth - 10, Math.max(10, mx + 20 - tooltipWidth / 2));

          setTooltip({
            visible: true, x: left, y: my + 24,
            year: found.year || '',
            city: found.city || '',
            milestone: '',
            desc: found.desc || ''
          });
        } else {
          setTooltip(prev => ({ ...prev, visible: false }));
        }
      };

      canvas.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('resize', resize);
        canvas.removeEventListener('mousemove', handleMouseMove);
        // Safety check to ensure it's defined before cancelling
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, []);

  const roadmapPills = [
    { id: 'srilanka', year: '2027-2028', city: 'Sri Lanka', label: 'South Asia' },
    { id: 'singapore', year: '2027-2028', city: 'Singapore', label: 'Southeast Asia' },
    { id: 'uae', year: '2029-2030', city: 'United Arab Emirates', label: 'Middle East' },
    { id: 'europe', year: '2031', city: 'Europe', label: 'European Network' }
  ];

  return (
    <motion.section 
      className="py-10 max-w-7xl mx-auto px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariant}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#000d21] mb-4">Global Expansion Roadmap</h2>
        <p className="text-lg text-[#44474d] max-w-2xl mx-auto leading-relaxed">
          Strategically scaling our footprint to ensure high-efficacy oncology care is accessible across emerging and established markets.
        </p>
      </div>

      <div className="relative bg-white rounded-xl overflow-hidden shadow-sm mb-12 border border-[#e1e3e4] max-w-250 mx-auto">
        <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%', minHeight: '300px' }}>
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
          
          <div
            className="absolute bg-white p-3 md:p-4 rounded-lg shadow-xl border-2 border-[#0f6e56] text-left w-48 md:w-60 z-50 pointer-events-none transition-all duration-200"
            style={{
              opacity: tooltip.visible ? 1 : 0,
              transform: tooltip.visible ? 'translateY(0)' : 'translateY(8px)',
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`
            }}
          >
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 text-[#0f6e56]">{tooltip.year}</div>
            <div className="text-xs md:text-sm font-bold text-[#111827] mb-2">{tooltip.city}</div>
            <div className="text-[10px] md:text-xs text-slate-500 leading-relaxed">{tooltip.desc}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-t border-slate-100 bg-white">
          {roadmapPills.map(pill => (
            <div 
              key={pill.id}
              onMouseEnter={() => setActiveNode(pill.id)}
              className={`rounded-lg p-4 text-center cursor-pointer transition-all duration-200 border ${
                activeNode === pill.id 
                  ? 'bg-[#f0faf4] border-[#0f6e56] -translate-y-1 shadow-sm' 
                  : 'bg-[#f7fdf9] border-[#0f6e56]/15 hover:-translate-y-1'
              }`}
            >
              <p className="text-[#0f6e56] font-bold text-sm">{pill.year}</p>
              <p className="text-[#111827] font-bold text-xs mt-1">{pill.city}</p>
              <p className="text-slate-500 text-[11px] mt-1">{pill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- Animated Timeline Component ---

const GlobalExpansionTimeline = () => {
  const timelineData = [
    {
      id: '2027-2028',
      year: '2027-2028',
      countries: [
        { name: 'Srilanka', flag: '🇱🇰' },
        { name: 'Singapore', flag: '🇸🇬' },
        { name: 'Malaysia', flag: '🇲🇾' }
      ],
      color: 'from-[#0f6e56] to-[#178a6d]'
    },
    {
      id: '2029-2030',
      year: '2029-2030',
      countries: [
        { name: 'United Arab Emirates', flag: '🇦🇪' }
      ],
      color: 'from-[#20a084] to-[#4ae0c7]'
    },
    {
      id: '2031',
      year: '2031',
      countries: [
        { name: 'Europe', flag: '🇪🇺' }
      ],
      color: 'from-[#4ae0c7] to-[#6eeddb]'
    }
  ];

  return (
    <motion.section
      className="py-20 max-w-7xl mx-auto px-6 md:px-12 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariant}
    >
      

      {/* Vertical Timeline for All Screen Sizes */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Connecting Line - Behind Everything */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 top-24 bottom-20 w-1 bg-gradient-to-b from-[#0f6e56] to-[#4ae0c7] z-0"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative flex flex-col items-center z-10"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              {/* Year Badge - Floating above */}
              <motion.div
                className="mb-8"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                <div className={`inline-block bg-gradient-to-r ${item.color} text-white px-8 py-3 rounded-full font-bold text-2xl shadow-xl`}>
                  {item.year}
                </div>
              </motion.div>

              {/* Animated Circle on Line */}
              <motion.div
                className="relative z-20 mb-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.4, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      "0 0 30px rgba(15, 110, 86, 0.4)",
                      "0 0 60px rgba(74, 224, 199, 0.7)",
                      "0 0 30px rgba(15, 110, 86, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <Globe className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Content Card with Large Flags */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-xl bg-[#f8fafb] border-l-4 border-[#0f6e56] hover:shadow-2xl transition-all duration-300 max-w-xl mx-auto z-10"
                whileHover={{ y: -6, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute top-0 right-0 w-40 h-40">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`dots-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="#0f6e56" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
                    </svg>
                  </div>
                </div>

                {/* Top Decorative Bar */}
                <div className="absolute top-0 right-0 left-0 h-2 bg-[#0f6e56]/10" />

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 border-t-2 border-r-2 border-[#0f6e56]/20 rounded-tr-xl" />
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 border-b-2 border-l-2 border-[#0f6e56]/20 rounded-bl-xl" />
                </div>

                {/* Globe Icon with Glow */}
                <div className="absolute bottom-6 right-6 opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-20 h-20 text-[#0f6e56]" />
                  </motion.div>
                </div>

                {/* Side Accent Stripe */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#4ae0c7]/30" />

                {/* Content */}
                <div className="relative z-10 p-8 pl-10">
                  <div className="flex flex-col gap-5">
                    {item.countries.map((country, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-between gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 6 }}
                      >
                        <span className="text-xl font-bold text-[#0f6e56]">
                          {country.name}
                        </span>
                        {country.flag && (
                          <motion.span
                            className="text-5xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {country.flag}
                          </motion.span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* End Marker */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-[#0f6e56] to-[#4ae0c7] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 30px rgba(74, 224, 199, 0.4)",
                "0 0 60px rgba(74, 224, 199, 0.6)",
                "0 0 30px rgba(74, 224, 199, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌍 Global Oncology Excellence
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// --- Main Page Assembly ---

export default function ManufacturingPage() {
  return (
    <main className="font-sans text-[#191c1d] bg-[#f8fafb]">
      <Hero />
      <ManufacturingExcellence />
      <QualityAssurance />
      <GlobalExpansionMap/>
      <GlobalExpansionTimeline />
    </main>
  );
}