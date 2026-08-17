import { Link } from "react-router-dom";
import { useScrollPosition } from "./hooks/useScrollPosition";
import CV from "../assets/CV.pdf";

function Header() {
  const scrollPosition = useScrollPosition();
  
  // Creates a clean, glassmorphic blur only when the user scrolls down
  const scrollHeaderStyle = scrollPosition > 10 
    ? "bg-[#050B14]/80 backdrop-blur-md border-b border-slate-800 shadow-sm" 
    : "bg-transparent border-b border-transparent";

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollHeaderStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo & Name */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full border-2 border-slate-700 bg-tower bg-cover bg-center group-hover:border-[#0ea5e9] transition-all duration-300"></div>
          <h1 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors">
            Chasith C. Hordagoda
          </h1>
        </Link>

        {/* Right: Navigation & Actions */}
        <div className="hidden sm:flex items-center gap-8">
          <Link
            to="/contact"
            className="text-sm font-mono tracking-wider text-slate-400 hover:text-[#0ea5e9] transition-colors"
          >
            Contact
          </Link>
          
          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-300 bg-slate-900/50 border border-slate-700 rounded-lg hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300"
          >
            Download CV
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;