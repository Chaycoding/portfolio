import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";
function Newestposts() {
  const intermediateList = [
    <div key="1" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full bg-blogsite bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">
        Blogsite <span className="font-bold">- Fullstack</span>
      </h1>
      <p className="text-base  font-mono leading-4">
        Skills used - React, Mongodb, Mongoose, Express.js, Node.js, Javascript,
        Firebase, Tailwind, CSS
      </p>
      <div className="flex justify-between h-8  ">
        <Link
          to="/projectpage/1"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
        <a
          href="https://chaycoding.github.io/Project_4-Blog_frontend/"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">See project</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <div className="absolute z-10 right-0 bg-blue-500 rounded-lg text-base w-28 text-center  px-2">
        Web
      </div>
    </div>,
    <div key="2" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full bg-compassion bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">
        Compassion Project <span className="font-bold">- Fullstack</span>
      </h1>
      <p className="text-base  font-mono leading-4">
        Skills used - React, Mongodb, Express.js, Node.js, CSS, Bootstrap
      </p>
      <div className="flex justify-between h-8  ">
        <Link
          to="/projectpage/2"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
        <a
          href="https://chaycoding.github.io/Project_3-compassion/"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">See project</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <div className="absolute z-10 right-0 bg-blue-500 rounded-lg text-base w-28 text-center  px-2">
        Web
      </div>
    </div>,
    <div key="3" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full bg-weather bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">Weather App</h1>
      <p className="text-base  font-mono leading-4">
        Skills used - React, Javascript, Tailwind, CSS, APIs
      </p>
      <div className="flex justify-between h-8  ">
        <Link
          to="/projectpage/3"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
        <a
          href="https://chaycoding.github.io/weather-app/"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">See project</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <div className="absolute z-10 right-0 bg-blue-500 rounded-lg text-base w-28 text-center  px-2">
        Web
      </div>
    </div>,
  ];

  const beginnerProjects = [
    <div key="1" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full grid grid-cols-3 rounded-xl h-40 overflow-hidden">
        <div className=" bg-fluttertask1  z-10  w-28 bg-right-top  bg-cover "></div>
        <div className=" bg-fluttertask2 bg-right-top z-10  w-28  bg-cover "></div>
        <div className=" bg-fluttertask3 bg-right-top z-10   w-28 bg-cover "></div>
      </div>
      <h1 className="text-xl text-center">Task ManagerAapp</h1>
      <p className="text-base  font-mono text-center leading-4">
        Skills used - Flutter
      </p>
      <div className="flex justify-center h-8  ">
        <Link
          to="/projectpage/4"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
      <div className="absolute z-10 right-0 bg-green-500 rounded-lg text-base w-28 text-center  px-2">
        Flutter app
      </div>
    </div>,
    <div key="6" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full grid grid-cols-3 rounded-xl h-40 overflow-hidden">
        <div className=" bg-flutternotes1  z-10  w-28 bg-right-top  bg-cover "></div>
        <div className=" bg-flutternotes2 z-10 bg-center w-28  bg-cover "></div>
        <div className=" bg-flutternotes3 bg-right-top z-10   w-28 bg-cover "></div>
      </div>
      <h1 className="text-xl text-center">Notes App</h1>
      <p className="text-base text-center font-mono leading-4">
        Skills used - Flutter
      </p>
      <div className="flex justify-center h-8  ">
        <Link
          to="/projectpage/9"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
      <div className="absolute z-10 right-0 bg-green-500 rounded-lg text-base w-28 text-center  px-2">
        Flutter app
      </div>
    </div>,
    <div key="9" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full grid grid-cols-3 rounded-xl h-40 overflow-hidden">
        <div className=" bg-flutterdraw1  z-10  w-28 bg-right-top  bg-cover "></div>
        <div className=" bg-flutterdraw2 z-10 bg-center w-28  bg-cover "></div>
        <div className=" bg-flutterdraw3 bg-right-top z-10   w-28 bg-cover "></div>
      </div>
      <h1 className="text-xl text-center">Drawing App</h1>
      <p className="text-base text-center font-mono leading-4">
        Skills used - Flutter
      </p>
      <div className="flex justify-center h-8  ">
        <Link
          to="/projectpage/12"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
      <div className="absolute z-10 right-0 bg-green-500 rounded-lg text-base w-28 text-center  px-2">
        Flutter app
      </div>
    </div>,
    <div key="7" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full bg-japanbirth2 bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">
        Data analysis on the birth rate in Japan
      </h1>
      <p className="text-base text-center font-mono leading-4">
        Skills used - Python, Pandas, Matplotlib
      </p>
      <div className="flex justify-center h-8  ">
        <Link
          to="/projectpage/10"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
      <div className="absolute z-10 right-0 bg-violet-700 rounded-lg text-base w-28 text-center  px-2">
        Data analysis
      </div>
    </div>,
    <div key="10" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full bg-djangostock3 bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">Stock charts</h1>
      <p className="text-base text-center font-mono leading-4">
        Skills used - Django, React, Python, Matplotlib, Pandas, mpl_finance,
        REST API
      </p>
      <div className="flex justify-center h-8  ">
        <Link
          to="/projectpage/13"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
      <div className="absolute z-10 right-0 bg-orange-600 rounded-lg text-base w-28 text-center  px-2">
        Django
      </div>
    </div>,
    <div key="8" className="grid grid-cols-1 relative h-full px-1">
      <div className="w-full bg-auhappy bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">
        Data analysis on the happiness index in Australia
      </h1>
      <p className="text-base text-center font-mono leading-4">
        Skills used - Python, Pandas, Matplotlib
      </p>
      <div className="flex justify-center h-8  ">
        <Link
          to="/projectpage/11"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
      <div className="absolute z-10 right-0 bg-violet-700 rounded-lg text-base w-28 text-center  px-2">
        Data analysis
      </div>
    </div>,
    <div key="2" className="grid grid-cols-1 h-full px-1">
      <div className="w-full bg-rps bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">A Simple Rock Paper Scissor Game</h1>
      <p className="text-base  font-mono leading-4">
        Skills used - HTML, CSS, Javascript, React
      </p>
      <div className="flex justify-between h-8  ">
        <Link
          to="/projectpage/5"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
        <Link
          to="/rps"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">See project</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </div>,

    <div key="3" className="grid grid-cols-1 h-full px-1">
      <div className="w-full bg-imageparticle bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">Javascript Image Particles</h1>
      <p className="text-base  font-mono leading-4">
        Skills used - HTML, CSS, Javascript
      </p>
      <div className="flex justify-between h-8  ">
        <Link
          to="/projectpage/6"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
        <a
          href="https://chaycoding.github.io/rukiaimageparticle/"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">See project</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>,
    <div key="4" className="grid grid-cols-1 h-full px-1">
      <div className="w-full bg-gamoflife bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">Game Of Life - Conway</h1>
      <p className="text-base  font-mono leading-4">
        Skills used - HTML, CSS, Javascript
      </p>
      <div className="flex justify-between h-8  ">
        <Link
          to="/projectpage/7"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
        <a
          href="https://chaycoding.github.io/game-of-life/"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">See project</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>,
    <div key="5" className="grid grid-cols-1 h-full px-1">
      <div className="w-full bg-calculator bg-center z-10 transition-all rounded-xl h-40 bg-cover "></div>
      <h1 className="text-xl text-center">Calculator</h1>
      <p className="text-base  font-mono leading-4">
        Skills used - HTML, CSS, Javascript, React
      </p>
      <div className="flex justify-between h-8  ">
        <Link
          to="/projectpage/8"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">More details</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
        <a
          href="https://chaycoding.github.io/react-calculator/"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
        >
          <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative font-bold">See project</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>,
  ];

  return (
    <div className="mt-10 grid grid-cols-1 mx-28 ">
      <div className="h-24 w-24"></div>
      <div>
        Intermediate projects
        <div className="grid grid-cols-3 gap-y-14 gap-x-10">
          {intermediateList.map((item, i) => (
            <Card key={i} text={item} index={i} />
          ))}
        </div>
      </div>
      <div className=" mt-40">
        Beginner projects
        <div className="grid grid-cols-3 gap-y-14 gap-x-10 ">
          {beginnerProjects.map((item, i) => (
            <Card key={i} text={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newestposts;
