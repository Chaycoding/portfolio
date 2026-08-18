import React from "react";
import { Link } from "react-router-dom";

// 1. Centralized Data Structure

const aiProjects = [
  {
    id: 17,
    title: "Toxicity Prediction Engine",
    subtitle: "Machine Learning / Cheminformatics",
    skills: "Python, DeepChem, RDKit, Matplotlib, Pandas, Scikit-Learn, streamlit, fastapi",
    imageClass: "bg-aitox", 
    detailsLink: "/projectpage/17",
    demoLink: "https://toxicity-ai-qnytt7jxxnfmtmwxwynukm.streamlit.app/", 
    tag: "AI & Science",
  },
  {
    id: 16,
    title: "Japanese tutor",
    subtitle: "Fullstack",
    skills: "NEXT.JS, Gemini API, TailwindCSS, Javascript",
    imageClass: "bg-japai",
    detailsLink: "/projectpage/16",
    demoLink: "https://nihongo-ai-six.vercel.app/",
    tag: "Web + AI",
  },
];

const intermediateProjects = [
  {
    id: 1,
    title: "Blogsite",
    subtitle: "Fullstack",
    skills: "React, MongoDB, Mongoose, Express.js, Node.js, JavaScript, Firebase, Tailwind, CSS",
    imageClass: "bg-blogsite",
    detailsLink: "/projectpage/1",
    demoLink: "https://chaycoding.github.io/Project_4-Blog_frontend/",
    tag: "Web",
  },
  {
    id: 2,
    title: "Compassion Project",
    subtitle: "Fullstack",
    skills: "React, MongoDB, Express.js, Node.js, CSS, Bootstrap",
    imageClass: "bg-compassion",
    detailsLink: "/projectpage/2",
    demoLink: "https://chaycoding.github.io/Project_3-compassion/",
    tag: "Web",
  },
  {
    id: 3,
    title: "Weather App",
    skills: "React, JavaScript, Tailwind, CSS, APIs",
    imageClass: "bg-weather",
    detailsLink: "/projectpage/3",
    demoLink: "https://chaycoding.github.io/weather-app/",
    tag: "Web",
  },
];

const beginnerProjects = [
  {
    id: 4,
    title: "Task Manager App",
    skills: "Flutter",
    imageClass: ["bg-fluttertask1", "bg-fluttertask2", "bg-fluttertask3"],
    detailsLink: "/projectpage/4",
    tag: "Flutter",
  },
  {
    id: 5,
    title: "Notes App",
    skills: "Flutter",
    imageClass: ["bg-flutternotes1", "bg-flutternotes2", "bg-flutternotes3"],
    detailsLink: "/projectpage/9",
    tag: "Flutter",
  },
  {
    id: 6,
    title: "Drawing App",
    skills: "Flutter",
    imageClass: ["bg-flutterdraw1", "bg-flutterdraw2", "bg-flutterdraw3"],
    detailsLink: "/projectpage/12",
    tag: "Flutter",
  },
  {
    id: 7,
    title: "Japan Birth Rate Analysis",
    skills: "Python, Pandas, Matplotlib",
    imageClass: "bg-japanbirth2",
    detailsLink: "/projectpage/10",
    tag: "Data Analysis",
  },
  {
    id: 8,
    title: "Stock Charts",
    skills: "Django, React, Python, Matplotlib, Pandas, REST API",
    imageClass: "bg-djangostock3",
    detailsLink: "/projectpage/13",
    tag: "Django",
  },
  {
    id: 9,
    title: "Aus Happiness Index Analysis",
    skills: "Python, Pandas, Matplotlib",
    imageClass: "bg-auhappy",
    detailsLink: "/projectpage/11",
    tag: "Data Analysis",
  },
  {
    id: 10,
    title: "C++ To-Do List",
    skills: "C++, wxWidgets",
    imageClass: "bg-CTodo1",
    detailsLink: "/projectpage/15",
    tag: "C++",
  },
  {
    id: 11,
    title: "C++ Minesweeper",
    skills: "C++, wxWidgets",
    imageClass: "bg-cmine1",
    detailsLink: "/projectpage/14",
    tag: "C++",
  },
  {
    id: 12,
    title: "Rock Paper Scissors",
    skills: "HTML, CSS, JavaScript, React",
    imageClass: "bg-rps",
    detailsLink: "/projectpage/5",
    demoLink: "/rps", 
    tag: "Web",
  },
  {
    id: 13,
    title: "JS Image Particles",
    skills: "HTML, CSS, JavaScript",
    imageClass: "bg-imageparticle",
    detailsLink: "/projectpage/6",
    demoLink: "https://chaycoding.github.io/rukiaimageparticle/",
    tag: "Web",
  },
  {
    id: 14,
    title: "Conway's Game Of Life",
    skills: "HTML, CSS, JavaScript",
    imageClass: "bg-gamoflife",
    detailsLink: "/projectpage/7",
    demoLink: "https://chaycoding.github.io/game-of-life/",
    tag: "Web",
  },
  {
    id: 15,
    title: "Calculator",
    skills: "HTML, CSS, JavaScript, React",
    imageClass: "bg-calculator",
    detailsLink: "/projectpage/8",
    demoLink: "https://chaycoding.github.io/react-calculator/",
    tag: "Web",
  },
];

// 2. Reusable Card Component
const ProjectCard = ({ project }) => {
  const isMultiImage = Array.isArray(project.imageClass);

  return (
    <div className="group relative flex flex-col bg-[#111827]/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-[#0ea5e9]/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 h-full">
      
      {/* Image Container */}
      <div className="h-44 w-full overflow-hidden relative border-b border-slate-800/80">
        {isMultiImage ? (
          <div className="grid grid-cols-3 w-full h-full">
            <div className={`${project.imageClass[0]} bg-cover bg-right-top w-full h-full transition-transform duration-500 group-hover:scale-105`}></div>
            <div className={`${project.imageClass[1]} bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105`}></div>
            <div className={`${project.imageClass[2]} bg-cover bg-right-top w-full h-full transition-transform duration-500 group-hover:scale-105`}></div>
          </div>
        ) : (
          <div className={`${project.imageClass} bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-110`}></div>
        )}
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-90"></div>

        {/* Floating Category Badge */}
        {project.tag && (
          <div className="absolute top-3 right-3 bg-[#0a1120]/80 backdrop-blur-sm border border-slate-700 text-[#0ea5e9] text-xs font-mono px-3 py-1 rounded shadow-sm">
            {project.tag}
          </div>
        )}
      </div>

     
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-100 leading-tight mb-2">
          {project.title} {project.subtitle && <span className="text-[#0ea5e9] font-medium text-lg">- {project.subtitle}</span>}
        </h3>
        
        <p className="text-xs font-mono text-slate-400 mb-6 flex-grow leading-relaxed">
          <span className="text-slate-500">Skills:</span> {project.skills}
        </p>

       
        <div className="flex gap-3 mt-auto">
          <Link 
            to={project.detailsLink} 
            className="flex-1 bg-slate-800 hover:bg-[#0ea5e9] text-slate-300 hover:text-white border border-slate-700 hover:border-[#0ea5e9] transition-all duration-300 text-xs font-bold uppercase tracking-widest py-2.5 text-center rounded-lg"
          >
            Details
          </Link>
          
          
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 bg-transparent hover:bg-slate-800 text-[#0ea5e9] hover:text-slate-200 border border-[#0ea5e9]/30 hover:border-slate-600 transition-all duration-300 text-xs font-bold uppercase tracking-widest py-2.5 text-center rounded-lg"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. Main Export Component
function Newestposts() {
  return (
    <div className="sm:mt-12 mt-32 grid grid-cols-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      {/* AI Projects Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">AI Projects</h2>
          <div className="h-px flex-grow bg-slate-800"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Intermediate Projects Section */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Intermediate Modules</h2>
          <div className="h-px flex-grow bg-slate-800"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {intermediateProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Beginner Projects Section */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Foundational Work</h2>
          <div className="h-px flex-grow bg-slate-800"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beginnerProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Newestposts;