import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function EntranceAni() {
  const [displayitem, setdisplayitem] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setdisplayitem("hidden");
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const topDoor = {
    initial: { y: 0 },
    animate: {
      y: "-100vh",
      transition: { delay: 2.2, duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const bottomDoor = {
    initial: { y: 0 },
    animate: {
      y: "100vh",
      transition: { delay: 2.2, duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // Fade the SVG out before the massive scale to prevent GPU lag
  const svgFade = {
    initial: { opacity: 1 },
    animate: {
      opacity: 0,
      transition: { delay: 1.8, duration: 0.2 },
    },
  };

  // Scale only the simple div (hardware accelerated)
  const coreFlash = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 0.8, 40],
      opacity: [0, 1, 1, 0],
      transition: { 
        delay: 1, 
        duration: 1.2, 
        times: [0, 0.6, 0.8, 1], 
        ease: "circIn" 
      },
    },
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col pointer-events-none ${displayitem}`}
    >
      <motion.div
        className="h-1/2 w-full bg-[#030712] border-b border-slate-800 flex items-end justify-center"
        variants={topDoor}
        initial="initial"
        animate="animate"
        style={{ willChange: "transform" }}
      />

      <motion.div
        className="h-1/2 w-full bg-[#030712] border-t border-slate-800 flex items-start justify-center"
        variants={bottomDoor}
        initial="initial"
        animate="animate"
        style={{ willChange: "transform" }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <motion.svg
            width="140"
            height="140"
            viewBox="0 0 100 100"
            className="drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]"
            variants={svgFade}
            initial="initial"
            animate="animate"
          >
            <motion.polygon
              points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="1.5"
              variants={drawLine}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
          
          <motion.div
            variants={coreFlash}
            initial="initial"
            animate="animate"
            style={{ willChange: "transform, opacity" }}
            className="absolute w-8 h-8 bg-[#0ea5e9] rounded-full shadow-[0_0_20px_#0ea5e9]"
          />
        </div>
      </div>
    </div>
  );
}

export default EntranceAni;