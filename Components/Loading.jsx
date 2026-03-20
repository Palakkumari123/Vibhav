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

// "use client";

// import { motion } from "framer-motion";

// export default function Loading() {
//   return (
//     <div className="relative h-screen w-full overflow-hidden flex justify-center items-center">
      
//       {/* Background */}
//       <img
//         src="/Assets/loading1.png"
//         alt="background"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/75 -z-0" />

//       {/* 🚀 Spaceship Animation */}
//       {/* <motion.img
//         src="/Assets/loadingSpaceship.png"
//         alt="spaceship"
//         className="absolute w-28"
//         initial={{ x: -200, y: "80vh", rotate: -20 }}
//         animate={{ x: "120vw", y: "-40vh", rotate: 20 }}
//         transition={{
//           duration: 3,
//           ease: "linear",
//           repeat: Infinity
//         }}
//       /> */}

//       {/* 🌌 Animated Team Vibhav Image */}
//       <div className="relative z-10 flex justify-center items-center mb-32">
//         <div className="relative overflow-hidden">
          
//           {/* We turn the image into a motion.img and animate its clipPath directly */}
//           <motion.img
//             src="/Assets/spacefont.png"
//             alt="Team Vibhav"
//             className="w-[550px] sm:w-[900px] block"
//             initial={{ clipPath: 'inset(0 100% 0 0)' }} // 100% cropped from the right (hidden)
//             animate={{ clipPath: 'inset(0 0% 0 0)' }}   // 0% cropped (fully visible)
//             transition={{
//               duration: 1.5, // Decreased to 1.5 seconds for a faster, cleaner write-on effect
//               ease: "linear",
//             }}
//           />

//           {/* Glowing Scanline that follows the reveal */}
//           <motion.div 
//             className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_3px_#fff]"
//             initial={{ left: "0%", opacity: 1 }}
//             animate={{ left: "100%", opacity: 0 }} // Fades out at the end
//             transition={{ 
//               duration: 1.5, // Must match the image duration exactly
//               ease: "linear",
//               // We add a specific transition for opacity to only fade at the very end
//               opacity: { delay: 1.4, duration: 0.1 } 
//             }}
//           />
          
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { motion } from "framer-motion";

// export default function Loading() {
//   const duration = 3.5;

//   return (
//     <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      
//       {/* 🌌 Background */}
//       <img
//         src="/Assets/loading1.png"
//         alt="background"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* 🌑 Overlay */}
//       <div className="absolute inset-0 bg-black/75 -z-0" />

//       {/* 🚀 Content */}
//       <div className="relative z-10 flex justify-center items-center mb-32">
        
//         <div className="relative">
          
//           {/* ✨ Reveal using scaleX (NO CLIPPING) */}
//           <motion.div
//             className="origin-left will-change-transform"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{
//               duration: duration,
//               ease: "linear",
//               delay: 0.2,
//             }}
//           >
//             <img
//               src="/Assets/spacefont.png"
//               alt="Team Vibhav"
//               className="w-[550px] sm:w-[900px] block"
//             />
//           </motion.div>

//           {/* ⚡ Scanline */}
//           <motion.div
//             className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_20px_5px_#fff]"
//             initial={{ left: "0%" }}
//             animate={{ left: "100%" }}
//             transition={{
//               duration: duration,
//               ease: "linear",
//               delay: 0.2,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }