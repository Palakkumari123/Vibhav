"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/assets/Homepage/t1.webp",
  "/assets/Homepage/t2.webp",
  "/assets/Homepage/t3.webp",
  "/assets/Homepage/t4.webp",
  "/assets/Homepage/t5.webp",
  "/assets/Homepage/t6.webp",
  "/assets/Homepage/t7.webp",
  "/assets/Homepage/t8.webp",
  "/assets/Homepage/t9.webp",
  "/assets/Homepage/t10.webp",
];

const SPRING = {
  type: "spring",
  stiffness: 170,
  damping: 28,
};

export default function True3DPhotoFrameCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 2800);
    return () => clearInterval(id);
  }, []);

  
  const getCircularIndex = (i) => (i + images.length) % images.length;

  return (
    <div className="relative w-full h-[400px] bg-black overflow-hidden">
     
      <div className="absolute inset-0 flex items-center justify-center [perspective:1600px]">

        <AnimatePresence initial={false}>
       
          {[...Array(5)].map((_, i) => {
            const offset = i - 2; 
            const imgIndex = getCircularIndex(index + offset);
            const isCenter = offset === 0;

       
            const xOffset = offset * 180;

            return (
              <motion.div
                key={imgIndex}
                className="absolute"
                transition={SPRING}
                style={{ transformStyle: "preserve-3d", zIndex: 100 - Math.abs(offset) }}
                animate={{
                  x: xOffset,
                  rotateY: offset * -30,
                  z: isCenter ? 300 : -200,
                  scale: isCenter ? 1 : 0.8,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
              >
              
                <div className="relative w-[160px] h-[240px] [transform-style:preserve-3d]">

                 
                  <div
                    className="absolute -inset-[3px] bg-[#111111] rounded-md border border-white"
                    style={{
                      transform: "translateZ(-15px)",
                      boxShadow: `
                        0 0 20px rgba(168,85,247,0.4),
                        0 0 40px rgba(168,85,247,0.3),
                        0 0 60px rgba(168,85,247,0.2)
                      `,
                    }}
                  />

                  <img
                    src={images[imgIndex]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-md border border-white"
                    style={{
                      transform: "translateZ(15px)",
                      boxShadow: `
                        0 0 15px rgba(168,85,247,0.4),
                        0 0 30px rgba(168,85,247,0.3)
                      `,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}















// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = [
//   "/assets/Homepage/t1.webp",
//   "/assets/Homepage/t2.webp",
//   "/assets/Homepage/t3.webp",
//   "/assets/Homepage/t4.webp",
//   "/assets/Homepage/t5.webp",
//   "/assets/Homepage/t6.webp",
//   "/assets/Homepage/t7.webp",
//   "/assets/Homepage/t8.webp",
//   "/assets/Homepage/t9.webp",
//   "/assets/Homepage/t10.webp",
// ];

// const SPRING = {
//   type: "spring",
//   stiffness: 160,
//   damping: 26,
// };

// export default function GlideImageCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((i) => (i + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(id);
//   }, []);

//   const paginate = (dir) => {
//     setIndex((p) => (p + dir + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full h-[560px] overflow-hidden bg-[#05070b] flex items-center justify-center">

//       {/* cinematic background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-black to-black -z-10" />

//       {/* perspective camera */}
//       <div className="[perspective:2600px] w-full h-full flex items-center justify-center">

//         <AnimatePresence initial={false}>
//           {images.map((img, i) => {
//             const offset = i - index;
//             if (Math.abs(offset) > 4) return null;

//             const isCenter = offset === 0;

//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,

//                   x: offset * 280,
//                   rotateY: offset * -42,
//                   z: isCenter ? 320 : -280,
//                   scale: isCenter ? 1.05 : 0.9,
//                 }}
//                 exit={{ opacity: 0 }}
//                 transition={SPRING}
//                 style={{
//                   transformStyle: "preserve-3d",
//                   zIndex: 100 - Math.abs(offset),
//                 }}
//                 className="absolute"
//               >
//                 {/* ================= 3D PHOTO FRAME ================= */}
//                 <div
//                   className="
//                     relative
//                     w-[260px]
//                     h-[380px]
//                     rounded-xl
//                     bg-[#0a0f1f]
//                     shadow-[0_40px_120px_rgba(0,0,0,0.9)]
//                   "
//                   style={{
//                     transformStyle: "preserve-3d",
//                   }}
//                 >
//                   {/* frame depth */}
//                   <div
//                     className="absolute inset-0 rounded-xl bg-[#05080f]"
//                     style={{
//                       transform: "translateZ(-22px)",
//                     }}
//                   />

//                   {/* image layer */}
//                   <img
//                     src={img}
//                     alt=""
//                     className="
//                       absolute inset-0
//                       w-full h-full
//                       object-cover
//                       rounded-xl
//                     "
//                     style={{
//                       transform: "translateZ(12px)",
//                     }}
//                   />

//                   {/* glass reflection */}
//                   <div
//                     className="
//                       absolute inset-0 rounded-xl
//                       bg-gradient-to-br
//                       from-white/20
//                       via-white/5
//                       to-transparent
//                       pointer-events-none
//                     "
//                     style={{
//                       transform: "translateZ(16px)",
//                     }}
//                   />

//                   {/* neon border glow */}
//                   <div
//                     className="
//                       absolute inset-0 rounded-xl
//                       border border-cyan-400/20
//                       shadow-[0_0_40px_rgba(56,189,248,0.25)]
//                     "
//                     style={{
//                       transform: "translateZ(18px)",
//                     }}
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>

//       {/* arrows */}
//       <button
//         onClick={() => paginate(-1)}
//         className="absolute left-8 z-50 w-11 h-11 rounded-full border border-white/30 text-white text-2xl flex items-center justify-center hover:bg-white/10"
//       >
//         ‹
//       </button>

//       <button
//         onClick={() => paginate(1)}
//         className="absolute right-8 z-50 w-11 h-11 rounded-full border border-white/30 text-white text-2xl flex items-center justify-center hover:bg-white/10"
//       >
//         ›
//       </button>
//     </div>
//   );
// }




// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = [
//   "/assets/Homepage/t1.webp",
//   "/assets/Homepage/t2.webp",
//   "/assets/Homepage/t3.webp",
//   "/assets/Homepage/t4.webp",
//   "/assets/Homepage/t5.webp",
//   "/assets/Homepage/t6.webp",
//   "/assets/Homepage/t7.webp",
//   "/assets/Homepage/t8.webp",
//   "/assets/Homepage/t9.webp",
//   "/assets/Homepage/t10.webp",
// ];

// const SPRING = {
//   type: "spring",
//   stiffness: 260,
//   damping: 28,
// };

// export default function DribbbleCarousel() {
//   const [index, setIndex] = useState(0);

//   // autoplay timing (matches Dribbble feel)
//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((i) => (i + 1) % images.length);
//     }, 2800);
//     return () => clearInterval(id);
//   }, []);

//   const paginate = (dir) => {
//     setIndex((prev) => (prev + dir + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full h-[520px] overflow-hidden flex items-center justify-center bg-[#070709]">
      
//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black -z-10" />

//       {/* PERSPECTIVE */}
//       <div className="[perspective:1400px] w-full h-full flex items-center justify-center">
//         <AnimatePresence initial={false}>
//           {images.map((img, i) => {
//             const offset = i - index;
//             if (Math.abs(offset) > 2) return null;

//             return (
//               <motion.div
//                 key={i}
//                 drag="x"
//                 dragConstraints={{ left: 0, right: 0 }}
//                 dragElastic={0.2}
//                 onDragEnd={(_, info) => {
//                   if (info.offset.x < -120) paginate(1);
//                   if (info.offset.x > 120) paginate(-1);
//                 }}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{
//                   opacity: 1,
//                   x: offset * 360,      // SPACE BETWEEN CARDS
//                   rotateY: offset * -22,
//                   scale: offset === 0 ? 1 : 0.92,
//                 }}
//                 exit={{ opacity: 0, scale: 0.85 }}
//                 transition={SPRING}
//                 style={{
//                   zIndex: 20 - Math.abs(offset),
//                   transformStyle: "preserve-3d",
//                 }}
//                 className="absolute"
//               >
//                 {/* FRAME */}
//                 <div className="relative">
                  
//                   {/* OUTER GLOW */}
//                   <div className="absolute inset-0 rounded-xl border border-white/20 shadow-[0_0_35px_rgba(255,255,255,0.08)]" />

//                   {/* CARD */}
//                   <div className="relative w-[320px] h-[440px] rounded-xl border border-white/30 bg-gradient-to-br from-[#0c0c10] to-[#050507]">

//                     {/* INNER PANEL */}
//                     <div className="absolute inset-2 rounded-lg bg-black overflow-hidden">
//                       <img
//                         src={img}
//                         alt=""
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* EDGE LIGHT */}
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>

//       {/* ARROWS */}
//       <button
//         onClick={() => paginate(-1)}
//         className="absolute left-6 z-50 w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition"
//       >
//         ‹
//       </button>

//       <button
//         onClick={() => paginate(1)}
//         className="absolute right-6 z-50 w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition"
//       >
//         ›
//       </button>
//     </div>
//   );
// }




// ALSO NEEDED:
//
// KEYFRAME ANIMATION:
//
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         scrollX: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-100%)" }
//         },
//         scrollY: {
//           "0%": { transform: "translateY(0)" },
//           "100%": { transform: "translateY(-100%)" }
//         }
//       },
//       animation: {
//         scrollX: "scrollX var(--duration) linear infinite",
//         scrollY: "scrollY var(--duration) linear infinite"
//       }
//     }
//   },
//   plugins: []
// };
//
// LAYER UTILITY SNIPPET:
//
// @layer utilities {
//   .mask-horizontal {
//     @apply [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]
//            [mask-size:cover]
//            [mask-repeat:no-repeat];
//   }

//   .mask-vertical {
//     @apply [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]
//            [mask-size:cover]
//            [mask-repeat:no-repeat];
//   }

//   .paused .animate-scrollX,
//   .paused .animate-scrollY {
//     animation-play-state: paused !important;
//   }

//   .reverse-x {
//     animation-direction: reverse;
//     animation-delay: -3s;
//   }
// }