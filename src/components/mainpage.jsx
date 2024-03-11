import React, { Suspense } from "react";
import EntranceAni from "./transitionAnimation/entranceAni";
import PageSwitchAni from "./transitionAnimation/pageAni";
import Newestposts from "./newestPosts";

function Mainpage({ isFirstMount }) {
  return (
    <div className="bg-gray-900 -mt-[5rem] pb-[150rem]">
      {isFirstMount ? <EntranceAni /> : <PageSwitchAni />}
      <div className="h-[100rem]">
        <div className="w-full h-screen bg-balloons bg-cover bg-center flex  justify-center bg-main">
          <div className="mt-44  text-white text-center glass-effect absolute ">
            <h1 className="text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Publish your passions
            </h1>
            <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-2 text-2xl">
              Colour the page with your words
            </p>
          </div>
        </div>

        <div className="mt-7 text-white">
          <h1 className="text-5xl ml-20 ">
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
