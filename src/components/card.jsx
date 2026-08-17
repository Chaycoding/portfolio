import React from "react";
import { motion } from "framer-motion";

function Card({ text, index }) {
  return (
    <motion.div
      className="h-full w-full flex"
      initial={{ opacity: 0, y: 30 }} // Start slightly lower
      whileInView={{
        opacity: 1,
        y: 0, // Snap to original position
        transition: {
          duration: 0.5,
          delay: index * 0.1, // Stagger each card by 100ms
          ease: [0.25, 0.1, 0.25, 1], // A professional, snappy deceleration curve
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {text}
    </motion.div>
  );
}

export default Card;