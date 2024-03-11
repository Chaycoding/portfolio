import { Link } from "react-router-dom";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { RiBearSmileFill } from "react-icons/ri";

function Header() {
  const scrollPosition = useScrollPosition();
  const scrollColour = scrollPosition > 0 ? "anicol" : "aniRevcol ";
  const scrollHeader = `sticky top-0 z-10 duration-[1s] transition-all ${scrollColour}`;

  return (
    <div className={scrollHeader}>
      <div className="w-full h-20 hidden items-end sm:flex ">
        <div className="font-[Open Sans] text-white basis-4/6">
          <Link to="/">
            <button className="ml-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-semibold ">
              <RiBearSmileFill className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-4 inline-block text-5xl " />
              <span className="text-4xl ml-2">Portfolio</span>
            </button>
          </Link>
        </div>
        <div className="font-[Open Sans] font-semibold text-white basis-2/6 items-center flex justify-center h-full">
          <h1 className="text-2xl ">Chasith C. Hordagoda</h1>
          <div className="rounded-full border-2 border-white bg-tower bg-cover h-10 w-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
