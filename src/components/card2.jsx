import React from "react";
import { motion } from "framer-motion";

function Card({ text, speed }) {
  return (
    <motion.div
      className="relative flex items-center mt-36 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 text-slate-100 px-4 py-2 rounded-lg text-lg font-semibold shadow-sm w-max"
      initial={{ opacity: 0, x: -15 }} // Short, sharp travel distance
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: speed,
        duration: 0.4,
        ease: "easeOut", // Snaps quickly into place without bouncing
      }}
    >
      {text}
    </motion.div>
  );
}

export default Card;