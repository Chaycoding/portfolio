import React from "react";
import { Link } from "react-router-dom";

function Newestposts() {
  return (
    <div className="mt-10 grid grid-cols-1 mx-20 ">
      <div>img</div>
      <div
        className="h-24 w-24"
        style={{ backgroundImage: `url(/rps.jpg)` }}
      ></div>
      <div className="hover:outline-1 hover:outline hover:outline-blue-400 rounded-lg flex p-2">
        <Link to="/rps" className="flex">
          <div className="basis-4/6">
            <h1 className="text-2xl">A very simple rock paper scissor game.</h1>
            <p className="text-lg mt-3 ">
              It is honestly one of the simplest ways to make this game. <br />
              This is something I made when I started learning coding. It helped
              me get a basic idea of javascript.
              <br /> Originally written in html but I slightly modified to fit
              react.
            </p>
            <p className="text-lg mt-4 font-mono font-bold">
              Skills used - HTML, CSS, Javascript, React
            </p>
          </div>

          <div className="basis-2/6 text-lg text-red-500">
            <div className="w-full bg-rps rounded-xl h-48 bg-cover "></div>
            <p className="text-center">
              Click me to see the project! I don't bite
            </p>
          </div>
        </Link>
      </div>
      <div className="hover:outline-1 mt-16 hover:outline hover:outline-blue-400 rounded-lg flex p-2">
        <a
          href="https://chaycoding.github.io/rukiaimageparticle/"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <div className="basis-4/6">
            <h1 className="text-2xl">Javascript image particles.</h1>
            <p className="text-lg mt-3 ">
              A small project using canvas to make particles of an image that
              move when you hover over it. I did this quite sometime back to
              learn the essence of object oriented programming and javascript.
              This is indeed a really weird way to do that.
            </p>
            <p className="text-lg mt-4 font-mono font-bold">
              Skills used - HTML, CSS, Javascript
            </p>
          </div>

          <div className="basis-2/6 text-lg text-red-500">
            <div className="w-full bg-imageparticle rounded-xl h-48 bg-cover "></div>

            <p className="text-center">
              Click me to see the project! I don't bite
            </p>
          </div>
        </a>
      </div>
      <div className="hover:outline-1 mt-16 hover:outline hover:outline-blue-400 rounded-lg flex p-2">
        <a
          href="https://chaycoding.github.io/game-of-life/"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <div className="basis-4/6">
            <h1 className="text-2xl">Game of life - Conway.</h1>
            <p className="text-lg mt-3 ">
              A slight modification on the game of life by Conway. It is a
              rather simple way of understanding the basics of particle
              movement. Starting out this project helped me out a lot to
              understand the foundations of programming
            </p>
            <p className="text-lg mt-4 font-mono font-bold">
              Skills used - HTML, CSS, Javascript
            </p>
          </div>

          <div className="basis-2/6 text-lg text-red-500">
            <div className="w-full bg-gamoflife rounded-xl h-48 bg-cover "></div>

            <p className="text-center">
              Click me to see the project! I don't bite
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Newestposts;
