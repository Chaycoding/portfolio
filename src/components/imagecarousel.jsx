import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import video from "../assets/fluttertaskapp.webm";
import video1 from "../assets/flutternotes.webm";
// import video2 from "../assets/flutterdraw.webm";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function ImageCarousel({ list, datatruth, id }) {
  // const url = window.location.href;
  // const id = url.substring(url.lastIndexOf("/") + 1);

  let imagecheck = {
    4: video,
    9: video1,
  };

  return (
    <div>
      {datatruth ? (
        <Carousel
          className="w-full "
          infiniteLoop={true}
          showThumbs={false}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-1 opacity-40 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <FaChevronCircleLeft className="w-6 h-6 text-black" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-1 opacity-40 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <FaChevronCircleRight className="w-6 h-6 text-black" />
              </div>
            );
          }}
        >
          {list.map((e, i) => {
            return (
              <div key={i}>
                <div
                  className={`${e} bg-cover  h-[15rem] bg-center  rounded-2xl w-full`}
                ></div>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <Carousel className="w-5/6 " infiniteLoop={true}>
          {list.map((e, i) => {
            return (
              <div key={i}>
                <div
                  className={`bg-${e} bg-cover h-[30rem]  rounded-2xl w-full`}
                ></div>
              </div>
            );
          })}

          {id ? (
            <div className="flex justify-center  items-center">
              <video width="220" height="180" className="rounded-2xl " controls>
                <source src={imagecheck[id]} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}
        </Carousel>
      )}
    </div>
  );
}

export default ImageCarousel;
