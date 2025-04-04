import { Link } from "react-router-dom";
import ImageCarousel from "./imagecarousel";

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
        world applications this would not exist. <br />
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
      <ImageCarousel
        key="3"
        id={4}
        list={["fluttertask1", "fluttertask2", "fluttertask3"]}
      />,
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
    9: [
      "Notes app",
      "Skills used - Flutter",
      "",
      <p key="2" className="text-lg">
        This is more of an extended version of my tasks app. It is a more
        profound, simple and rather useful app I needed.
      </p>,

      <ImageCarousel
        key="3"
        id={9}
        list={["flutternotes2", "flutternotes3", "flutternotes1"]}
      />,
    ],
    12: [
      "Drawing app",
      "Skills used - Flutter",
      "",
      <p key="2" className="text-lg">
        I like drawing. I've had a knack for it since I was small. This app is a
        rather simple app. I wanted to make the app a lot more smoother and add
        brushes, however I lack suffient knowledge to optimize the app enough
        for the brushes to work without lagging the entire app.
      </p>,

      <ImageCarousel
        key="3"
        id={9}
        list={["flutterdraw2", "flutterdraw3", "flutterdraw1"]}
      />,
    ],
    10: [
      "Data analysis on the birth rate in Japan",
      "Skills used - Python, Pandas, Matplotlib",
      "",
      <div key="2" className="text-lg">
        This is an analysis of the dataset presented on kaggle on the births in
        Japan. With Japan's declining population knowing the rate at which the
        population is going down will greatly aid in estimating when critical
        levels will reached in the future. Understanding population statistics
        will in identification of the variables that impact the rate of births.
        <br />
        <br />
        <br />
        The analysis was done in a very simple manner using matplotlib and
        pandas. A kaggle notebook is available to view the code -
        <div className="flex justify-between mt-10">
          <a
            href="https://www.kaggle.com/code/geraltgurusinghe/japan-birth-statistic-analysis"
            target="_blank"
            rel="noreferrer"
            className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
          >
            <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative font-bold text-lg">
                Check the code!
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
          <a
            href="https://www.kaggle.com/datasets/webdevbadger/japan-birth-statistics"
            target="_blank"
            rel="noreferrer"
            className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
          >
            <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative font-bold text-lg">
                Check the dataset!
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>,

      <ImageCarousel
        key="3"
        datatruth={true}
        list={[
          "bg-japanbirth2",
          "bg-japanbirth1",
          "bg-japanbirth3",
          "bg-japanbirth4",
          "bg-japanbirth5",
        ]}
      />,
    ],
    11: [
      "Data analysis on the happiness index in Australia",
      "Skills used - Python, Pandas, Matplotlib",
      "",
      <div key="2" className="text-lg">
        Happiness is something everyone's looking for. Based upon the data
        present the happiness of the people present in a country is dependent on
        the economy, family and the health. This is an analysis of the happiness
        ranking and other factors of Australia through the years. I hope this
        has been helpful for those looking into countries for work and others.
        <br />
        <br />
        <br />A kaggle notebook is availableto view the code -
        <div className="flex justify-between mt-10">
          <a
            href="https://lnkd.in/gkszeE3z"
            target="_blank"
            rel="noreferrer"
            className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
          >
            <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative font-bold text-lg">
                Check the code!
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
          <a
            href="https://lnkd.in/gJ-bXTve"
            target="_blank"
            rel="noreferrer"
            className="relative inline-block  group hover:cursor-pointer bottom-1 text-sm   transition-all duration-[200ms]"
          >
            <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-3 py-1 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative font-bold text-lg">
                Check the dataset!
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>,

      <ImageCarousel key="3" datatruth={true} list={["bg-auhappy"]} />,
    ],
    13: [
      "Stock market charts",
      "Skills used - Django, React, Python, Matplotlib, Pandas, mpl_finance, REST API",
      "",
      <div key="2" className="text-lg">
        This site has a react frontend and a Django backend. The Django backend
        essentially acts as an API supplying the data requested by the frontend.
        Essentially you can give the ticker of the company you'd like to see
        stock data on and the backend will make beautiful charts and produce it
        to the frontend.
        <br />
        <br />
        This is done using the data of the stock data scraped off of yahoo
        finance which is then made into charts using matplotlib and mpl finance.
        <br />
      </div>,

      <ImageCarousel
        key="3"
        datatruth={true}
        list={[
          "bg-djangostock3",
          "bg-djangostock4",
          "bg-djangostock2",
          "bg-djangostock1",
        ]}
      />,
    ],
    14: [
      "C++ minesweeper",
      "Skills used - C++, wxwidgets",
      "",
      <div key="2" className="text-lg">
        There's not a whole lot to say with regards to this one. I made it to
        familiarise myself with c++ and thus for this purpose I figured using
        wxwidgets, despite it's difficulty for a starter, would be good as this
        helped me solidify my understanding when it comes to object oriented
        programming.
        <br />
        <br />
      </div>,

      <ImageCarousel
        key="3"
        datatruth={true}
        list={["bg-cmine1", "bg-cmine2", "bg-cmine3"]}
      />,
    ],
    15: [
      "C++ To-Do List",
      "Skills used - C++, wxwidgets",
      "",
      <div key="2" className="text-lg">
        There's not a whole lot to say with regards to this one. I made it to
        familiarise myself with c++ and thus for this purpose I figured using
        wxwidgets, despite it's difficulty for a starter, would be good as this
        helped me solidify my understanding when it comes to object oriented
        programming.
        <br />
        <br />
      </div>,

      <ImageCarousel
        key="3"
        datatruth={false}
        id={15}
        list={["CTodo1", "CTodo2"]}
      />,
    ],
  };
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);

  return (
    <div className="text-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="col-span-2">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
            {projects[id][0]}
          </h1>
          <p className="text-base sm:text-lg font-mono leading-relaxed mt-2 sm:mt-3">
            {projects[id][1]}
          </p>
          <div className="mt-8 sm:mt-10 pr-0 sm:pr-10 lg:pr-20">
            {projects[id][3]}
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="mt-0">
          <div className="sticky top-4">
            {projects[id][4]}
            <div className="mt-4 sm:mt-6">{projects[id][5]}</div>
          </div>
          <p className="mt-6 sm:mt-8 text-sm font-mono">{projects[id][2]}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
