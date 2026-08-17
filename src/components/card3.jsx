import React from "react";
import { motion } from "framer-motion";

function Card3({ text, speed }) {
  return (
    <motion.div
      className="relative flex items-center bg-slate-900/60 border border-slate-700/50 px-3 py-1.5 rounded-md w-max"
      initial={{ opacity: 0, scale: 0.95 }} // Start slightly shrunken
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: speed,
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <p className="text-slate-400 font-mono text-xs uppercase tracking-wider">{text}</p>
    </motion.div>
  );
}

export default Card3;