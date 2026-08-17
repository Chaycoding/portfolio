import React, { Suspense, useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import EntranceAni from "./transitionAnimation/entranceAni";
import PageSwitchAni from "./transitionAnimation/pageAni";
import Newestposts from "./newestPosts";

const mlSkills = ["Python", "DeepChem", "RDKit", "Scikit-Learn", "Pandas", "NumPy"];
const webSkills = ["React", "NEXT.js", "Node.js", "TypeScript", "Django", "Tailwind CSS"];

function Mainpage({ isFirstMount }) {
  useEffect(() => {
    (async () => {
      await loadFull(tsParticles);
      await tsParticles.addPreset("lightdark", {
        fullScreen: { enable: false },
        particles: {
          links: { enable: true, color: "#64748b", opacity: 0.15 },
          move: { enable: true, speed: 0.6 },
          number: { value: 30 },
          opacity: { value: { min: 0.1, max: 0.5 } },
          size: { value: { min: 1, max: 2 } },
        },
        pauseOnOutsideViewport: true,
      });

      await tsParticles.load({
        id: "dark",
        options: {
          preset: "lightdark",
          particles: {
            color: { value: "#94a3b8" },
          },
        },
      });
    })();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050B14] text-slate-100 overflow-x-hidden">
      {isFirstMount ? <EntranceAni /> : <PageSwitchAni />}

      
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Background Particles */}
        <div id="dark" className="absolute inset-0 pointer-events-none z-0"></div>

      
        <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
          
          
          <div className="md:col-span-2 md:row-span-2 bg-[#0B1221]/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-center hover:border-[#0ea5e9]/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all duration-500 group">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse"></span>
                Software & Cheminformatics
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
              Chasith C. <br /> Hordagoda
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
              Building high-performance computational tools, bridging the gap between molecular machine learning and full-stack engineering.
            </p>
          </div>

          {/* Tile 2: Avatar (Spans 1 column, 2 rows) */}
          <div className="md:col-span-1 md:row-span-2 relative bg-[#0B1221]/80 backdrop-blur-md border border-slate-800/80 rounded-3xl overflow-hidden hover:border-[#0ea5e9]/40 transition-all duration-500 flex items-center justify-center group aspect-square md:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent z-10 opacity-60"></div>
            {/* Using your existing background image class */}
            <div className="absolute inset-0 bg-tower bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"></div>
          </div>

          {/* Tile 3: Status / Academic */}
          <div className="md:col-span-1 md:row-span-1 bg-[#0B1221]/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-center hover:border-slate-600 transition-all duration-500">
            <svg className="w-6 h-6 text-slate-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-slate-200 font-bold text-sm">B.Sc. Chemistry Honours</h3>
            <p className="text-slate-500 text-xs font-mono mt-1">Finalizing Toxicity Thesis</p>
          </div>

          {/* Tile 4: Location */}
          <div className="md:col-span-1 md:row-span-1 bg-[#0B1221]/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-center hover:border-slate-600 transition-all duration-500 relative overflow-hidden">
            {/* Subtle map-like background grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]"></div>
            <svg className="w-6 h-6 text-slate-500 mb-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-slate-200 font-bold text-sm relative z-10">Colombo, Sri Lanka</h3>
            <p className="text-slate-500 text-xs font-mono mt-1 relative z-10">Based in Nawala</p>
          </div>

          {/* Tile 5: Machine Learning & Chem Stack */}
          <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#0B1221]/90 to-[#0A101C]/90 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#0ea5e9]/30 transition-all duration-500">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">Machine Learning & Data</h3>
            <div className="flex flex-wrap gap-2">
              {mlSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 6: Web & Systems Stack */}
          <div className="md:col-span-2 md:row-span-1 bg-gradient-to-bl from-[#0B1221]/90 to-[#0A101C]/90 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#0ea5e9]/30 transition-all duration-500">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">Software Architecture</h3>
            <div className="flex flex-wrap gap-2">
              {webSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Projects Section Wrapper */}
      <div className="relative z-20 bg-[#050B14]">
        {/* Subtle gradient transition block */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#050B14] pointer-events-none -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <Suspense fallback={<div className="text-center text-[#0ea5e9] py-12 font-mono animate-pulse">Initializing Data...</div>}>
            <Newestposts />
          </Suspense>
        </div>
      </div>

    </div>
  );
}

export default Mainpage;