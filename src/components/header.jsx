import { Link } from "react-router-dom";
import { useScrollPosition } from "./hooks/useScrollPosition";

function Header() {
  const scrollPosition = useScrollPosition();
  const scrollColour = scrollPosition > 0 ? "anicol" : "aniRevcol ";
  const scrollHeader = `sticky top-0 z-20 duration-[1s] transition-all ${scrollColour}`;

  return (
    <div className={scrollHeader}>
      <div className="w-full h-20 hidden items-center sm:flex ">
        <div className="font-[Open Sans] text-white basis-4/6">
          <div className="w-max">
            <Link to="/">
              <button className="ml-10 flex items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-semibold ">
                <div className="rounded-full border-2 border-white bg-tower bg-cover h-10 w-10"></div>
                <h1 className="text-3xl ml-5">Chasith C. Hordagoda</h1>
              </button>
            </Link>
          </div>
        </div>
        <div className="font-[Open Sans] font-semibold text-white basis-2/6 items-center flex gap-x-5 justify-center h-full">
          <Link
            to="/contact"
            className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-5"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Contact me
            </span>
          </Link>
          <a
            href="#_"
            className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-5"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Download my CV!
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
