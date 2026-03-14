"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex justify-center items-center">
      
      {/* Background */}
      <img
        src="/Assets/loading1.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 -z-0" />

      {/* 🚀 Spaceship Animation */}
      {/* <motion.img
        src="/Assets/loadingSpaceship.png"
        alt="spaceship"
        className="absolute w-28"
        initial={{ x: -200, y: "80vh", rotate: -20 }}
        animate={{ x: "120vw", y: "-40vh", rotate: 20 }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity
        }}
      /> */}

      {/* 🌌 Animated Team Vibhav Image */}
      <div className="relative z-10 flex justify-center items-center mb-32">
        <div className="relative overflow-hidden">
          
          {/* We turn the image into a motion.img and animate its clipPath directly */}
          <motion.img
            src="/Assets/spacefont.png"
            alt="Team Vibhav"
            className="w-[550px] sm:w-[900px] block"
            initial={{ clipPath: 'inset(0 100% 0 0)' }} // 100% cropped from the right (hidden)
            animate={{ clipPath: 'inset(0 0% 0 0)' }}   // 0% cropped (fully visible)
            transition={{
              duration: 1.5, // Decreased to 1.5 seconds for a faster, cleaner write-on effect
              ease: "linear",
            }}
          />

          {/* Glowing Scanline that follows the reveal */}
          <motion.div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_3px_#fff]"
            initial={{ left: "0%", opacity: 1 }}
            animate={{ left: "100%", opacity: 0 }} // Fades out at the end
            transition={{ 
              duration: 1.5, // Must match the image duration exactly
              ease: "linear",
              // We add a specific transition for opacity to only fade at the very end
              opacity: { delay: 1.4, duration: 0.1 } 
            }}
          />
          
        </div>
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
//       <motion.img
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
//       />

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
//               duration: 3.5, // Adjust time as needed
//               ease: "linear", // Fixes the runtime error
//             }}
//           />

//           {/* Glowing Scanline that follows the reveal */}
//           <motion.div 
//             className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_3px_#fff]"
//             initial={{ left: "0%" }}
//             animate={{ left: "100%" }}
//             transition={{ 
//               duration: 3.5, 
//               ease: "linear" 
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
//       <motion.img
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
//       />

//       {/* Team Vibhav Image */}
//       {/* <div className="relative z-10 flex justify-center items-center">
//         <img
//           src="/Assets/spacefont.png"
//           alt="Team Vibhav"
//           className="w-[550px] sm:w-[900px]"
//         />
//       </div> */}
      
//       <div className="relative z-10 flex justify-center items-center mb-32">
//         <img
//           src="/Assets/spacefont.png"
//           alt="Team Vibhav"
//           className="w-[550px] sm:w-[900px]"
//         />
//       </div>

//     </div>
//   );
// }

// animated text
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const fonts = [
//   "Arial, sans-serif",
//   "Georgia, serif",
//   "Courier New, monospace",
//   "Lucida Console, monospace",
//   "Times New Roman, serif",
//   "Verdana, sans-serif",
//   "Comic Sans MS, cursive",
//   "Impact, sans-serif",
// ];

// function AnimatedText({ text }) {
//   const [fontStyles, setFontStyles] = useState([]);

//   useEffect(() => {
//     const changeFonts = () => {
//       setFontStyles(
//         text
//           .split("")
//           .map(() => fonts[Math.floor(Math.random() * fonts.length)])
//       );
//     };

//     changeFonts();
//     const interval = setInterval(changeFonts, 250);

//     return () => clearInterval(interval);
//   }, [text]);

//   return (
//     <div className="flex space-x-1 sm:text-5xl text-4xl font-bold text-white">
//       {text.split("").map((char, index) => (
//         <span key={index} style={{ fontFamily: fontStyles[index] }}>
//           {char}
//         </span>
//       ))}
//     </div>
//   );
// }

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
//       <motion.img
//         src="/Assets/loadingSpaceship.png"
//         alt="spaceship"
//         className="absolute w-28"
//         initial={{ x: -200, y: "80vh", rotate: -20 }}
//         animate={{ x: "120vw", y: "-40vh", rotate: 20 }}
//         transition={{
//           duration: 3,
//           ease: "linear",
//         }}
//       />

//       {/* Text */}
//       <div className="relative z-10">
//         <AnimatedText text="Team Vibhav" />
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";

// export default function Loading() {
//   const fonts = [
//     "Arial, sans-serif",
//     "Georgia, serif",
//     "Courier New, monospace",
//     "Lucida Console, monospace",
//     "Times New Roman, serif",
//     "Verdana, sans-serif",
//     "Comic Sans MS, cursive",
//     "Impact, sans-serif",
//   ];

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, []);

//   const AnimatedText = ({ text }) => {
//     const [fontStyles, setFontStyles] = useState([]);

//     useEffect(() => {
//       const changeFonts = () => {
//         setFontStyles(
//           text
//             .split("")
//             .map(() => fonts[Math.floor(Math.random() * fonts.length)])
//         );
//       };

//       changeFonts();
//       const interval = setInterval(changeFonts, 250);

//       return () => clearInterval(interval);
//     }, [text]);

//     return (
//       <div className="flex space-x-1 sm:text-5xl text-4xl font-bold text-white">
//         {text.split("").map((char, index) => (
//           <span key={index} style={{ fontFamily: fontStyles[index] }}>
//             {char}
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden flex justify-center items-center">
//        <img
//         src="/Assets/loading1.png"
//         alt="background"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />
     
//       <div className="absolute inset-0 bg-black/75 -z-0" />

    
//       {loading && (
//         <div className="relative z-10">
//           <AnimatedText text="Team Vibhav" />
//         </div>
//       )}
//     </div>
//   );
// }