"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [direction, setDirection] = useState("forward");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "forward" ? "reverse" : "forward"));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-center position-absolute items-center bg-black">
      <img
        src="/Assets/loading1.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex justify-center items-center">
        <div className="relative overflow-hidden">
          <motion.img
            key={direction}
            src="/Assets/spacefont.png"
            alt="Team Vibhav"
            className="w-[550px] sm:w-[900px]"
            initial={{
              clipPath:
                direction === "forward"
                  ? "inset(0 100% 0 0)"
                  : "inset(0 0 0 100%)",
            }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1.5, ease: "linear" }}
          />

          <motion.div
            key={`line-${direction}`}
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_3px_#fff]"
            initial={{ left: direction === "forward" ? "0%" : "100%" }}
            animate={{ left: direction === "forward" ? "100%" : "0%", opacity: [1, 1, 0] }}
            transition={{ duration: 1.5, ease: "linear" }}
          />
        </div>
      </div>

      <div className="absolute bottom-10 text-white text-center text-sm opacity-80">
        Loading website content...
      </div>
    </div>
  );
}
