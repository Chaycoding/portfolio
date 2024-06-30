import React from "react";
import { motion } from "framer-motion";

function Card3({ text, speed }) {
  return (
    <motion.div
      className="card2 h-6 relative w-max transition-all bg-slate-800 px-4  rounded-md flex  py-2"
      initial={{
        opacity: 0,
        x: "-50vh",
      }}
      animate={{
        opacity: 1,

        x: "0vh",
      }}
      transition={{
        delay: speed,
        type: "spring",
        bounce: 0.7,
        duration: 5, // Animation duration
      }}
    >
      <p className="text-slate-200 ">{text}</p>
    </motion.div>
  );
}

export default Card3;
