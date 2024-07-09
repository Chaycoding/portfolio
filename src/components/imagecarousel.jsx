import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageCarousel({ list }) {
  //   let class1 = `${list[0]} rounded-2xl bg-cover h-[30rem] w-full`;
  //   let class2 = `${list[1]} rounded-2xl bg-cover h-[30rem] w-full`;
  //   let class3 = `${list[2]} rounded-2xl bg-cover h-[30rem] w-full`;
  return (
    <div>
      <Carousel className="w-5/6">
        {/* <div>
          <div className="bg-fluttertask1 rounded-2xl bg-cover h-[30rem] w-full"></div>
        </div>

        <div>
          <div className="bg-fluttertask1 bg-cover rounded-2xl h-[30rem] w-full"></div>
        </div>
        
        <div>
          <div className="bg-fluttertask1 bg-cover h-[30rem] rounded-2xl w-full"></div>
        </div> */}

        {list.map((e, i) => {
          return (
            <div key={i}>
              <div
                className={`bg-${e} bg-cover h-[30rem]  rounded-2xl w-full`}
              ></div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
