import React, { Suspense } from "react";
import EntranceAni from "./transitionAnimation/entranceAni";
import PageSwitchAni from "./transitionAnimation/pageAni";
import Newestposts from "./newestPosts";
import Card from "./card2";
import Card3 from "./card3";
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";

import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm";
import { useEffect } from "react";

function Mainpage({ isFirstMount }) {
  useEffect(() => {
    (async () => {
      await loadAll(tsParticles);

      await tsParticles.addPreset("lightdark", {
        fullScreen: {
          enable: false,
        },
        particles: {
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
          number: {
            value: 40,
          },
          opacity: {
            value: { min: 0.3, max: 1 },
          },
          shape: {
            type: ["circle", "square", "triangle", "polygon"],
            options: {
              polygon: [
                {
                  sides: 5,
                },
                {
                  sides: 6,
                },
                {
                  sides: 8,
                },
              ],
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      });

      await tsParticles.load({
        id: "dark",
        options: {
          preset: "lightdark",
          particles: {
            color: {
              value: "#E0FFFF",
            },
            links: {
              color: "#E0FFFF",
            },
          },
        },
      });
    })();
  }, []);
  const items1 = ["Pandas", "Numpy", "Seaborn", "Matplotlib"];
  const items12 = ["ExpressJs", "NodeJs", "MongooseJs"];

  const items2 = ["Mongodb", "Firebase"];
  const items22 = ["CSS3", "TailwindCSS", "Bootstrap"];
  // const items = ["React", "Tailwind", "CSS"];
  // const items3 = ["Mongodb", "Django"];

  return (
    <div className=" -mt-[5rem]  w-full">
      {isFirstMount ? <EntranceAni /> : <PageSwitchAni />}

      <div>
        <div className="w-full h-screen relative  ">
          <div id="dark" className="h-screen absolute w-full  "></div>
          <div className="h-full w-full   absolute flex  items-center">
            <div className="grid grid-cols-3 w-full ">
              <div className=" flex flex-col w-full h-full justify-center overflow-hidden ">
                <div className="flex w-full h-full  items-center justify-center">
                  <div className="relative z-10 flex w-[21rem] h-[21rem]  items-center justify-center overflow-hidden rounded-full  ">
                    <div className="circleanimation  absolute  inset-0 h-full w-full rounded-full  bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
                    <div className="relative w-80 h-80 z-20 flex  rounded-full bg-slate-900 p-2 bg-tower bg-cover"></div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 px-10">
                <div className="grid grid-cols-3  w-full">
                  <div className="grid grid-cols-1  w-full">
                    <div className="flex items-center justify-center h-40 gap-3 ">
                      <Card text={"Python"} speed="2" />
                      <div className="grid grid-cols-1 gap-y-2">
                        {items1.map((item, i) => (
                          <Card3 key={i} text={item} speed={2.2 + i / 10} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center h-40 gap-3">
                      <Card text={"Javascript"} speed="2" />
                      <div className="grid grid-cols-1 gap-y-2">
                        {items12.map((item, i) => (
                          <Card3 key={i} text={item} speed={2.2 + i / 10} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 w-full">
                    <div className="flex items-center justify-center h-40 gap-3">
                      <Card text={"Databases"} speed="2" />
                      <div className="grid grid-cols-1 gap-y-2">
                        {items2.map((item, i) => (
                          <Card3 key={i} text={item} speed={2.5 + i / 10} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center h-40 gap-3">
                      <Card text={"CSS"} speed="2" />
                      <div className="grid grid-cols-1 gap-y-2">
                        {items22.map((item, i) => (
                          <Card3 key={i} text={item} speed={2.5 + i / 10} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-y-8 w-full">
                    <Card text={"React"} speed="3" />
                    <Card text={"Django"} speed="3.2" />
                    <Card text={"Flutter"} speed="3.4" />
                    <Card text={"HTML5"} speed="3.6" />
                    <Card text={"GIT"} speed="3.6" />
                    <Card text={"Dart"} speed="3.8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 text-white">
          <h1 className="text-5xl  ">
            <Suspense fallback={<div>Loading..</div>}>
              <Newestposts />
            </Suspense>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
