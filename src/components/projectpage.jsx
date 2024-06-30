import { Link } from "react-router-dom";
function ProjectPage() {
  const projects = {
    1: [
      "Blogsite (Fullstack)",
      "Skills used - React, Mongodb, Mongoose, Express.js, Node.js, Javascript, Firebase, Tailwind, CSS",
      "PLEASE NOTE - The backend of the site is hosted on render. Due to the lack of funding I am using the free tier which takes a minute to bootup according to them. (honestly though it takes about 2 minutes)",
      <p key="1" className="text-lg transition-all">
        This is a project I worked on for quite a while. I absolutely love
        writing and so this is a project that interested me a lot. It integrates
        many different technologies in the frontend as well as the backend.
        Security aspects were considered as well. Frontend - Users can view
        blogs posted by registered users (due to safety measures and limiations
        I made it so only the users I give permission to can post blogs). Users
        can login using their account and post blogs along with images they deem
        fit. The app authentication is done through firebase. Intially I wanted
        to add separate authentication as well however, the idea was scrapped as
        I thought it would be better to spend my time adding other features. The
        blog would have paragraphs separated and arranged appropriately. I added
        in a small game as render takes a while to spin up. Of course in real
        world applications this would not exist.
        <br />
        <br />
        Backend - The backend recieves whatever blog the user has typed along
        with images and other details such as the user info and date-time of
        submission. The image is converted to appropriately for the thumbnail
        and the blogpost. Additionally the image is coverted to webp for faster
        load times. Speed is crucial and therefore I needed to opitmize this to
        the maximum level I could. The backend the saves the images in firebase,
        where they can be used in the image tags in the frontend, and the text
        as well as the reference links to the images are stored in mongodb.
        <br />
        <br />
        Devsec ops - Although it's not to extreme levels I worked on the
        security of the site to a certain extent. The common security concerns
        were addressed.
        <br />
        <br />
        Documentation of the backend and in general was written for this project
        as well.
        <br />
        <br />
        <br />
      </p>,
      <div
        key="2"
        className="w-full bg-blogsite bg-center z-10 transition-all rounded-xl h-48 bg-cover "
      ></div>,
      <a
        key="2"
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
      </a>,
    ],
    2: [
      "Compassion project (Fullstack)",
      "Skills used - React, Mongodb, Express.js, Node.js, CSS, Bootstrap",
      "PLEASE NOTE - The backend of the site is hosted on render. Due to the lack of funding I am using the free tier which takes a minute to bootup according to them. (honestly though it takes about 2 minutes)",
      <p className="text-lg  " key="2">
        This was the first proper fullstack website I used. If I remember right
        the most difficult part was finding a place to host the backend of the
        website. The site itself is very basic and in all doesn't reqiure a
        backend. All of the features that use the backend can be done using
        alternatives such as firebase. But I wanted to apply the new skills I
        acquired.
        <br />
        <br />
        Now about the project itself. It's essentially a cat website. In my
        hypothetical universe I'd be running project that takes care of stray
        cats. The website features a section for users to post their own cat
        stories as well. Basically something similar to twitter minus the actual
        user accounts. <br /> You can try adding your own story!
        <br /> Additionally It is somewhat optimized for mobile. When this
        project was done I lacked the understanding of how websites look on
        mobile and therefore it is pretty much similar to the desktop version
        albeit the proper alignment to the screen.
        <br /> My shortcomings - I didn't understand the importance of
        compressing images. This impacts the performance of the website. I'm
        extremely happy to say that this issue has since been solved although I
        never did update this site.
      </p>,
      <div
        key="2"
        className="w-full bg-compassion bg-center  z-10 transition-all rounded-xl h-48 bg-cover "
      ></div>,
      <a
        key="2"
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
      </a>,
    ],
    3: [
      "Weather app",
      "Skills used - React, Javascript, Tailwind, CSS, APIs",
      "",
      <p key="2" className="text-lg ">
        The cliche generic weather app. Despite it being a rather generic
        project it is one of the best ways to learn how to work with APIs. Now
        being able to an API is an extremely important skill I wanted build.
        This project primarily centers around API usage.
        <br />
        <br />
        The API is the openweather API. I wanted to make this a simple site that
        just fulfills the necessity of getting the weather. The additional
        animations of course make it a sweeter user experience. The clock
        present on the right side of the header is something I am happy about.
        Although it is simple it is very cool to just access the time and the
        location of the user. Of course in the real world this should be
        differently. The site additionally shows a prediction of the weather for
        the next five days as well as more weather details.
      </p>,
      <div
        key="2"
        className="w-full bg-weather bg-center  z-10 transition-all rounded-xl h-48 bg-cover "
      ></div>,
      <a
        key="2"
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
      </a>,
    ],
    4: [
      "Task manager app.",
      "Skills used - Flutter",
      "",
      <p key="2" className="text-lg">
        I made this just to get a grasp of how flutter works. <br />
        It is one of the most simplest apps that I made in about a day-ish. This
        app helped me understand quite a lot about how dart and flutter syntax
        works. Mostly the rather interesting widget system.
        <br />
        You can essentially just add a task and it will add it to the list.
        Additionally the list will be saved in storage such that you can access
        it even after you close and reopen the app.
      </p>,
      <div
        key="2"
        className="w-full grid grid-cols-3 rounded-xl h-40 overflow-hidden"
      >
        <div className=" bg-fluttertask1  z-10  w-28 bg-right-top  bg-cover "></div>
        <div className=" bg-fluttertask2 bg-right-top z-10  w-28  bg-cover "></div>
        <div className=" bg-fluttertask3 bg-right-top z-10   w-28 bg-cover "></div>
      </div>,
      <Link
        key="2"
        to="/fluttertaskapp"
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
      </Link>,
    ],
    5: [
      "A very simple rock paper scissor game",
      "Skills used - HTML, CSS, Javascript, React",
      "",
      <p key="2" className="text-lg">
        It is honestly one of the simplest ways to make this game. <br />
        This is something I made when I started learning coding. It helped me
        get a basic idea of javascript.
        <br /> Originally written in html but I slightly modified to fit react.
      </p>,
      <div
        key="2"
        className="w-full bg-rps bg-center z-10 transition-all rounded-xl h-48 bg-cover "
      ></div>,
      <Link
        key="2"
        to="/rps"
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
      </Link>,
    ],
    6: [
      "Javascript image particles",
      "Skills used - HTML, CSS, Javascript",
      "",
      <p key="2" className="text-lg">
        A small project using canvas to make particles of an image that move
        when you hover over it. I did this quite sometime back to learn the
        essence of object oriented programming and javascript. This is indeed a
        really weird way to do that.
      </p>,
      <div
        key="2"
        className="w-full bg-imageparticle bg-center z-10 transition-all rounded-xl h-48 bg-cover "
      ></div>,
      <a
        key="2"
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
      </a>,
    ],
    7: [
      "Game of life - Conway",
      "Skills used - HTML, CSS, Javascript",
      "",
      <p key="2" className="text-lg">
        A slight modification on the game of life by Conway. It is a rather
        simple way of understanding the basics of particle movement. Starting
        out this project helped me out a lot to understand the foundations of
        programming
      </p>,
      <div
        key="2"
        className="w-full bg-gamoflife bg-center z-10 transition-all rounded-xl h-48 bg-cover "
      ></div>,
      <a
        key="2"
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
      </a>,
    ],
    8: [
      "Calculator",
      "Skills used - HTML, CSS, Javascript, React",
      "",
      <p key="2" className="text-lg">
        Ah yes the origin story of most programmers. The humble yet elegant
        beginner project of them all. This was a project enjoyed a lot back
        then... that is also the only memory I have of it. It has been quite a
        white since I did this project.
        <br /> <br /> The concept is rather simple of course but this was also
        one of the first projects that introduced me React. Quite the eye
        opener. <br /> <br /> The usereducer hook is one that is majorly used in
        this project. Back then going from writing a separate javascript file
        for websites to this felt like a super power.
      </p>,
      <div
        key="2"
        className="w-full bg-calculator bg-center z-10 transition-all rounded-xl h-48 bg-cover "
      ></div>,
      <a
        key="2"
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
      </a>,
    ],
  };
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  // console.log(id);
  return (
    <div className="text-white grid grid-cols-3 px-10">
      <div className="col-span-2 mt-10">
        <h1 className="text-5xl  ">{projects[id][0]}</h1>
        <p className="text-lg  font-mono leading-4 mt-5"> {projects[id][1]}</p>
        <div className="mt-20 pr-20">{projects[id][3]}</div>
      </div>
      <div className="mt-10 ">
        <div className="sticky top-20 ">
          {projects[id][4]}
          <div>{projects[id][5]}</div>
        </div>
        <p className="mt-10 text-sm font-mono">{projects[id][2]}</p>
      </div>
    </div>
  );
}

export default ProjectPage;
