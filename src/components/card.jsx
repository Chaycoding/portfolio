import React from "react";
import { motion } from "framer-motion";

function Card({ text, index }) {
  let durationspeed;
  if (index % 3) {
    durationspeed = 5;
  } else if (index % 2) {
    durationspeed = 4;
  } else {
    durationspeed = 3;
  }
  return (
    <motion.div
      className="card hover:outline-1 relative mt-16 transition-all h-96 hover:outline hover:outline-blue-400 rounded-lg flex p-2"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: -50,
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          type: "spring",
          bounce: 0.7,
          duration: durationspeed, // Animation duration
        },
      }}
    >
      {text}
    </motion.div>
  );
}

export default Card;
