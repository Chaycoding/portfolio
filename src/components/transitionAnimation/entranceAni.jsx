import { motion } from "framer-motion";
import { useState } from "react";
function EntranceAni() {
  const [displayitem, setdisplayitem] = useState("");
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };
  const text = {
    initial: {
      y: 0,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  setTimeout(() => {
    setdisplayitem("hidden");
  }, 3000);

  let displaything = `absolute h-screen w-screen  inset-0 flex items-end ${displayitem}`;

  return (
    <div className={displaything}>
      <motion.div
        className="absolute z-40  grid grid-col-1 bg-cover bg-pageanimation w-full bg-[#2F2F31]"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.div className=" w-full grid grid-cols-3 ">
          <motion.div className=" overflow-hidden">
            <div className="h-[27rem] w-[27rem] flex items-center justify-center bg-coolcogb bg-cover bg-center cogrotaterevb -ml-[50%] -mt-[50%] outline-black fade-in-image  ">
              <div className="h-60 w-60 bg-coolcog bg-cover p-20 bg-center cogrotate  outline-black fade-in-image  "></div>
            </div>
          </motion.div>
          <motion.div className=" overflow-hidden"></motion.div>
          <motion.div className=" overflow-hidden flex justify-end">
            <div className="h-[27rem] w-[27rem] flex items-center justify-center bg-coolcogb bg-cover bg-center cogrotateb -mr-[50%] -mt-[50%] outline-black fade-in-image  ">
              <div className="h-52 w-52 bg-coolcog bg-cover bg-center cogrotaterev  outline-black fade-in-image  "></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.svg
          variants={textContainer}
          className=" flex items-center justify-center w-full z-40  -mt-5"
        >
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-black"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-white fill-current"
            />
          </pattern>
          <text
            className="text-8xl font-bold text-center "
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Portfolio
          </text>
        </motion.svg>
        <motion.div className="w-full grid grid-cols-3">
          <motion.div></motion.div>

          <motion.div className=" overflow-hidden flex items-end justify-center"></motion.div>
          <motion.div></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default EntranceAni;
