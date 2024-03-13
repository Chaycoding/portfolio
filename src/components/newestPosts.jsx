import React from "react";
import { Link } from "react-router-dom";

function Newestposts() {
  return (
    <div className="mt-10 grid grid-cols-1 mx-20 ">
      <div
        className="h-24 w-24"
        style={{ backgroundImage: `url(/rps.jpg)` }}
      ></div>
      <div className="text-3xl flex justify-center pb-20">
        <p>Beginner projects (kinda)</p>
      </div>
      <div className="hover:outline-1 hover:outline hover:outline-blue-400 rounded-lg flex p-2">
        <Link to="/rps" className="flex">
          <div className="basis-4/6 pr-5">
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

          <div className="basis-2/6 text-lg text-red-500 flex flex-col justify-center">
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
          <div className="basis-4/6 pr-5">
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

          <div className="basis-2/6 text-lg text-red-500 flex flex-col justify-center">
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
          <div className="basis-4/6 pr-5">
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

          <div className="basis-2/6 text-lg text-red-500 flex flex-col justify-center">
            <div className="w-full bg-gamoflife rounded-xl h-48 bg-cover "></div>

            <p className="text-center">
              Click me to see the project! I don't bite
            </p>
          </div>
        </a>
      </div>
      <div className="hover:outline-1 mt-16 hover:outline hover:outline-blue-400 rounded-lg flex p-2">
        <a
          href="https://chaycoding.github.io/react-calculator/"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <div className="basis-4/6 pr-5">
            <h1 className="text-2xl">Calculator</h1>
            <p className="text-lg mt-3 ">
              Ah yes the origin story of most programmers. The humble yet
              elegant beginner project of them all. This was a project enjoyed a
              lot back then... that is also the only memory I have of it. It has
              been quite a white since I did this project.
              <br /> <br /> The concept is rather simple of course but this was
              also one of the first projects that introduced me React. Quite the
              eye opener. <br /> <br /> The usereducer hook is one that is
              majorly used in this project. Back then going from writing a
              separate javascript file for websites to this felt like a super
              power.
            </p>
            <p className="text-lg mt-4 font-mono font-bold">
              Skills used - HTML, CSS, Javascript, React
            </p>
          </div>

          <div className="basis-2/6 text-lg text-red-500 flex flex-col justify-center ">
            <div className="w-full bg-calculator bg-center rounded-xl h-48 bg-cover "></div>

            <p className="text-center">
              Click me to see the project! I don't bite
            </p>
          </div>
        </a>
      </div>
      <div className="hover:outline-1 mt-16 hover:outline hover:outline-blue-400 rounded-lg flex p-2">
        <a
          href="https://chaycoding.github.io/firsthtmlsite/"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <div className="basis-4/6 pr-5">
            <h1 className="text-2xl">First html kind proper website</h1>
            <p className="text-lg mt-3 ">
              I argued with myself whether I even should include this here
              because it is such simple, wacky and a very messy website. But
              this is indeed how I started out with web development so might as
              well. Plus! it has this really cool thing that you can hover over
              to get more info about the anime. It's pretty nice! Check it out!
            </p>
            <p className="text-lg mt-4 font-mono font-bold">
              Skills used - HTML, CSS
            </p>
          </div>

          <div className="basis-2/6 text-lg text-red-500 flex flex-col justify-center ">
            <div className="w-full bg-fhtml bg-center rounded-xl h-48 bg-cover "></div>

            <p className="text-center">
              Click me to see the project! I don't bite
            </p>
          </div>
        </a>
      </div>
      <div className="text-3xl mt-40 flex justify-center pb-10">
        <p>Intermediate/ solid projects</p>
      </div>
      <div className="hover:outline-1 mt-16 hover:outline hover:outline-blue-400 rounded-lg flex p-2">
        <a
          href="https://chaycoding.github.io/Project_3-compassion/"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <div className="basis-4/6 pr-5  ">
            <h1 className="text-2xl">
              Compassion project <span className="font-bold">(Fullstack)</span>
            </h1>
            <p className="text-lg mt-3 ">
              This was the first proper fullstack website I used. If I remember
              right the most difficult part was finding a place to host the
              backend of the website. The site itself is very basic and in all
              doesn't reqiure a backend. All of the features that use the
              backend can be done using alternatives such as firebase. But I
              wanted to apply the new skills I acquired.
              <br />
              <br />
              Now about the project itself. It's essentially a cat website. In
              my hypothetical universe I'd be running project that takes care of
              stray cats. The website features a section for users to post their
              own cat stories as well. Basically something similar to twitter
              minus the actual user accounts. <br /> You can try adding your own
              story!
              <br /> Additionally It is somewhat optimized for mobile. When this
              project was done I lacked the understanding of how websites look
              on mobile and therefore it is pretty much similar to the desktop
              version albeit the proper alignment to the screen.
              <br /> My shortcomings - I didn't understand the importance of
              compressing images. This impacts the performance of the website.
              I'm extremely happy to say that this issue has since been solved
              although I never did update this site.
              <br />
              <br />
              <span className="text-orange-500">
                PLEASE NOTE - The backend of the site is hosted on render. Due
                to the lack of funding I am using the free tier which takes a
                minute to bootup according to them. (honestly though it takes
                about 2 minutes)
              </span>
            </p>
            <p className="text-lg mt-4 font-mono font-bold">
              Skills used - React, Mongodb, Express.js, Node.js, CSS, Bootstrap
            </p>
          </div>

          <div className="basis-2/6 text-lg text-red-500 flex flex-col justify-center ">
            <div className="w-full bg-compassion bg-center rounded-xl h-48 bg-cover "></div>

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
