import React from "react";
import { motion } from "framer-motion";

function Card({ text, speed }) {
  return (
    <motion.div
      className="card2  h-10 relative text-xl transition-all bg-slate-800 px-2 py-2 rounded-md flex "
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
      {text}
    </motion.div>
  );
}

export default Card;
