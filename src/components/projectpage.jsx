import { Link } from "react-router-dom";
import ImageCarousel from "./imagecarousel";

function ProjectPage() {
  // 1. Refactored into a clean, structured object
  const projectData = {
    1: {
      title: "Blogsite",
      subtitle: "Fullstack",
      skills: "React, MongoDB, Mongoose, Express.js, Node.js, JavaScript, Firebase, Tailwind, CSS",
      note: "PLEASE NOTE - The backend of the site is hosted on Render's free tier, which takes about 2 minutes to boot up.",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            This is a project I worked on for quite a while. I absolutely love writing, so this interested me a lot. It integrates many different technologies in the frontend and backend, with security aspects heavily considered.
          </p>
          <p>
            <strong>Frontend:</strong> Users can view blogs posted by authorized accounts. Authentication is handled through Firebase. The blog paragraphs are formatted dynamically. I also added a small browser game to keep users entertained while the Render backend spins up!
          </p>
          <p>
            <strong>Backend:</strong> The Node.js server receives the blog content, user info, and timestamps. Images are optimized and converted to WebP for faster load times. The backend saves images in Firebase Storage and stores the structural text and reference links in MongoDB.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-blogsite bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>,
      demoLink: "https://chaycoding.github.io/Project_4-Blog_frontend/"
    },
    2: {
      title: "Compassion Project",
      subtitle: "Fullstack",
      skills: "React, MongoDB, Express.js, Node.js, CSS, Bootstrap",
      note: "PLEASE NOTE - The backend of the site is hosted on Render's free tier, which takes about 2 minutes to boot up.",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            This was my first proper full-stack application. The primary goal was to learn how to host and connect a custom backend rather than relying solely on serverless solutions like Firebase.
          </p>
          <p>
            The platform is essentially a social feed dedicated to cats. In this hypothetical universe, I run a project that takes care of stray cats, and the website allows users to post and share their own cat stories—similar to a specialized, account-free Twitter.
          </p>
          <p>
            <strong>Post-Mortem:</strong> During development, I lacked a deep understanding of image compression, which impacted initial load times. I have since mastered these optimizations, though this early project remains untouched as a benchmark of my progress.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-compassion bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>,
      demoLink: "https://chaycoding.github.io/Project_3-compassion/"
    },
    3: {
      title: "Weather App",
      skills: "React, JavaScript, Tailwind, CSS, REST APIs",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            While a weather app is a classic developer milestone, it is one of the most effective ways to master asynchronous API fetching. This project was built specifically to refine my ability to handle, parse, and display external JSON data.
          </p>
          <p>
            It interfaces with the OpenWeather API to fetch real-time location data and a 5-day predictive forecast. I focused heavily on the UI/UX, implementing smooth transitions and a dynamic clock that syncs with the user's localized time and geographical coordinates.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-weather bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>,
      demoLink: "https://chaycoding.github.io/weather-app/"
    },
    4: {
      title: "Task Manager",
      skills: "Flutter, Dart",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            This application was my introduction to the Flutter ecosystem and the Dart programming language. I built it to understand Flutter's widget tree architecture and state management.
          </p>
          <p>
            It features local storage persistence, ensuring that all tasks and lists remain saved across application restarts.
          </p>
        </div>
      ),
      visual: <ImageCarousel id={4} list={["fluttertask1", "fluttertask2", "fluttertask3"]} />,
    },
    5: {
      title: "Rock Paper Scissors",
      skills: "HTML, CSS, JavaScript, React",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            One of my earliest coding projects. Originally written in vanilla HTML and JavaScript, I later refactored it into React to learn component structuring and basic state handling.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-rps bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>,
      demoLink: "/rps",
      isInternalLink: true
    },
    6: {
      title: "JavaScript Image Particles",
      skills: "HTML5 Canvas, CSS, JavaScript",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            A graphical experiment utilizing the HTML5 Canvas API. It parses image data and generates interactive particles that scatter and reform based on mouse proximity and hover events. This project solidified my understanding of Object-Oriented Programming (OOP) in JavaScript and render loops.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-imageparticle bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>,
      demoLink: "https://chaycoding.github.io/rukiaimageparticle/"
    },
    7: {
      title: "Conway's Game of Life",
      skills: "HTML, CSS, JavaScript",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            An algorithmic implementation of Conway's famous cellular automaton. Developing the grid logic and neighbor-checking algorithms provided a massive leap in my understanding of foundational programming concepts, nested loops, and matrix traversal.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-gamoflife bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>,
      demoLink: "https://chaycoding.github.io/game-of-life/"
    },
    8: {
      title: "React Calculator",
      skills: "React, JavaScript, Tailwind",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            The origin story for many developers. While the concept is simple, this was my first deep dive into advanced React hooks. 
          </p>
          <p>
            I architected the math and state logic entirely around the <code>useReducer</code> hook, creating a highly predictable and scalable state management system for the various calculator operations.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-calculator bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>,
      demoLink: "https://chaycoding.github.io/react-calculator/"
    },
    9: {
      title: "Notes App",
      skills: "Flutter, Dart",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            An evolution of my earlier Task Manager. This is a more profound, feature-rich application designed for robust note-taking and state management within the Flutter ecosystem.
          </p>
        </div>
      ),
      visual: <ImageCarousel id={9} list={["flutternotes2", "flutternotes3", "flutternotes1"]} />,
    },
    10: {
      title: "Japan Birth Rate Analysis",
      skills: "Python, Pandas, Matplotlib",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            An analytical deep-dive into Kaggle's demographic dataset regarding births in Japan. With Japan's declining population acting as a global economic indicator, this analysis tracks statistical trajectories to estimate future critical thresholds.
          </p>
          <p>
            The data was cleaned and visualized using Pandas and Matplotlib to identify the primary variables impacting birth rates over time.
          </p>
        </div>
      ),
      visual: <ImageCarousel datatruth={true} list={["bg-japanbirth2", "bg-japanbirth1", "bg-japanbirth3", "bg-japanbirth4", "bg-japanbirth5"]} />,
      customLinks: (
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="https://www.kaggle.com/code/geraltgurusinghe/japan-birth-statistic-analysis" target="_blank" rel="noreferrer" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 bg-slate-900/80 border border-slate-700 rounded-lg hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition-all text-center">
            View Source Code
          </a>
          <a href="https://www.kaggle.com/datasets/webdevbadger/japan-birth-statistics" target="_blank" rel="noreferrer" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#0ea5e9] bg-transparent border border-[#0ea5e9]/30 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition-all text-center">
            View Dataset
          </a>
        </div>
      )
    },
    11: {
      title: "Australian Happiness Index Analysis",
      skills: "Python, Pandas, Matplotlib",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            A statistical analysis investigating the macroeconomic and social factors that influence the happiness index in Australia. The project parses multi-year datasets to correlate happiness rankings with economic stability, healthcare metrics, and family infrastructure.
          </p>
        </div>
      ),
      visual: <ImageCarousel datatruth={true} list={["bg-auhappy"]} />,
      customLinks: (
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="https://lnkd.in/gkszeE3z" target="_blank" rel="noreferrer" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 bg-slate-900/80 border border-slate-700 rounded-lg hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition-all text-center">
            View Source Code
          </a>
          <a href="https://lnkd.in/gJ-bXTve" target="_blank" rel="noreferrer" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#0ea5e9] bg-transparent border border-[#0ea5e9]/30 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition-all text-center">
            View Dataset
          </a>
        </div>
      )
    },
    12: {
      title: "Drawing App",
      skills: "Flutter, Dart",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            A mobile canvas application built in Flutter. While it successfully captures touch inputs for basic drawing, the project served as an important lesson in rendering optimization. Processing complex brush strokes and high-frequency touch events required deeper architectural changes to maintain 60FPS.
          </p>
        </div>
      ),
      visual: <ImageCarousel id={12} list={["flutterdraw2", "flutterdraw3", "flutterdraw1"]} />,
    },
    13: {
      title: "Financial Stock Charts",
      skills: "Django, React, Python, Pandas, Matplotlib, REST APIs",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            A full-stack financial dashboard. The backend is powered by a Django REST framework that scrapes real-time and historical market data from Yahoo Finance based on a requested ticker symbol.
          </p>
          <p>
            The Python server processes the raw financial data using Pandas, generates precise candlestick charts and technical overlays using <code>mpl_finance</code> and Matplotlib, and serves the optimized data visual back to the React frontend.
          </p>
        </div>
      ),
      visual: <ImageCarousel datatruth={true} list={["bg-djangostock3", "bg-djangostock4", "bg-djangostock2", "bg-djangostock1"]} />,
    },
    14: {
      title: "C++ Minesweeper",
      skills: "C++, wxWidgets",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            A complete recreation of the classic Minesweeper game built in C++. This project was developed to master lower-level memory management, strict Object-Oriented Programming principles, and native GUI development using the wxWidgets framework.
          </p>
        </div>
      ),
      visual: <ImageCarousel datatruth={true} list={["bg-cmine1", "bg-cmine2", "bg-cmine3"]} />,
    },
    
    15: {
      title: "C++ To-Do List",
      skills: "C++, wxWidgets",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            A native desktop application built to solidify my grasp on C++ GUI architecture. Handling local state, event listeners, and dynamic memory allocation in a strictly typed, compiled language provided a profound contrast to modern web development.
          </p>
        </div>
      ),
      visual: <ImageCarousel datatruth={false} id={15} list={["CTodo1", "CTodo2"]} />,
    },


    
    18: {
  title: "Book Boutique",
  subtitle: "Mobile",
  skills: "Flutter, Dart, Isar (local DB), Google Books REST API, share_plus, file_picker",
  description: (
    <div className="space-y-4 text-slate-300">
      <p>
        A personal library manager built in Flutter, letting users search the Google Books API, save titles to an "Own It" or "Wishlist" shelf, and track reading status (Not Started / Reading / Finished) with a local Isar database.
      </p>
      <p>
        <strong>Notable engineering decisions:</strong> mid-project I migrated from the original Isar package to the actively-maintained <code>isar_community</code> fork after the original was abandoned and broke under newer Android Gradle Plugin requirements. I also caught and fixed a hardcoded API key exposure by moving it to a restricted, environment-loaded key via <code>flutter_dotenv</code>.
      </p>
      <p>
        The app supports full offline resilience with cached cover images, a JSON export/import system for backing up a user's library, and a custom Material 3 theme with Hero transitions between the library grid and book detail views.
      </p>
    </div>
  ),
visual: (
  <iframe
    className="w-full h-64 rounded-2xl"
    src="https://www.youtube.com/embed/jMDRAQ6Pi5M?feature=share"
    title="Book Boutique demo"
    allowFullScreen
  ></iframe>
),
  demoLink: "https://github.com/chaycoding/book-boutique",
},


    16: {
      title: "Japanese AI Tutor",
      subtitle: "Fullstack / LLM Integration",
      skills: "Next.js, Gemini API, Tailwind CSS, JavaScript",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            An AI-powered language tutor built to facilitate dynamic Japanese conversation practice. By leveraging the Gemini API and Next.js, the application generates context-aware responses in real-time.
          </p>
          <p>
            The integration of LLMs directly into the Next.js server actions provides an immersive, low-latency learning environment while keeping API keys completely secure from the client.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-japai bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"></div>,
      demoLink: "https://nihongo-ai-six.vercel.app/"
    },
    17: {
      title: "Toxicity Prediction Engine",
      subtitle: "Machine Learning / Cheminformatics",
      skills: "Python, DeepChem, RDKit, Scikit-Learn",
      description: (
        <div className="space-y-4 text-slate-300">
          <p>
            This project serves as the core of my final-year Chemistry Honours research, supervised by Dr. R. Dushanan. It is a computational chemistry pipeline designed to predict chemical toxicity through advanced machine learning algorithms.
          </p>
          <p>
            To optimize feature extraction from the molecular SMILES strings, the architecture strictly relies on MACCS keys rather than standard Morgan fingerprints. By utilizing RDKit and DeepChem to process this molecular data, the predictive models achieve highly precise toxicity screenings.
          </p>
        </div>
      ),
      visual: <div className="w-full bg-aitox bg-center rounded-2xl h-64 bg-cover border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"><span className="text-slate-500 font-mono text-sm">Model Architecture Visualization</span></div>,
    }
  };

  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#0ea5e9] font-mono text-xl">
        MODULE NOT FOUND
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Main Content Area */}
        <div className="lg:col-span-7">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-mono tracking-widest uppercase mb-4">
              {project.subtitle || "Development Project"}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-400 font-mono text-sm mt-4 leading-relaxed">
              <span className="text-slate-500">Tech_Stack:</span> {project.skills}
            </p>
          </div>

          <div className="prose prose-invert prose-slate max-w-none">
            {project.description}
          </div>
        </div>

        {/* Right: Sidebar / Visual Area */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-28 bg-[#0B1221]/80 backdrop-blur-md border border-slate-800/80 p-4 rounded-3xl shadow-lg">
            
            {/* Media Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-700/50">
              {project.visual}
            </div>

            {/* Warning / Note Banner */}
            {project.note && (
              <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/80 text-xs font-mono leading-relaxed">
                <strong className="text-amber-500 block mb-1">SYSTEM ALERT</strong>
                {project.note}
              </div>
            )}

            {/* Standard Project Buttons */}
            {project.demoLink && (
              <div className="mt-6 flex gap-4">
                {project.isInternalLink ? (
                  <Link
                    to={project.demoLink}
                    className="w-full px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 bg-slate-900/80 border border-slate-700 rounded-lg hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition-all text-center"
                  >
                    Launch Module
                  </Link>
                ) : (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 bg-slate-900/80 border border-slate-700 rounded-lg hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all text-center"
                  >
                    View Live Deployment
                  </a>
                )}
              </div>
            )}

            {/* Custom Overrides (Kaggle Links) */}
            {project.customLinks}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;