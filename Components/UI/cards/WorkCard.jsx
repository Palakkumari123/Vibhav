

// "use client";

// import React from "react";
// import Link from "next/link";
// import { FaEye } from "react-icons/fa";
// import { MdOpenInNew } from "react-icons/md";

// /* Cyberpunk Skeleton Card */
// export const CyberSkeletonCard = () => {
//   return (
//     <div className="relative w-72 h-[24rem] md:w-80 md:h-[26rem] rounded-xl overflow-hidden animate-pulse group">
//       {/* Glow behind the card */}
//       <div className="absolute -inset-2 bg-cyan-500/30 blur-2xl rounded-xl"></div>

//       {/* Neon Border */}
//       <div className="absolute inset-0 border-4 border-cyan-400 border-dashed rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.7)]"></div>

//       {/* Inner background */}
//       <div className="absolute inset-1 rounded-lg bg-gray-900"></div>

//       {/* Eye Icon Placeholder */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <div className="p-3 rounded-2xl bg-cyan-500/30 shadow-[0_0_20px_rgba(0,255,255,0.5)]">
//           <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
//         </div>
//       </div>

//       {/* Bottom Name Placeholder */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 p-2 bg-black bg-opacity-50 backdrop-blur-md rounded-md">
//         <div className="h-5 bg-cyan-400 rounded w-3/4 mx-auto animate-pulse"></div>
//       </div>
//     </div>
//   );
// };

// /* Cyberpunk Work Card */
// const WorkCard = ({ work, type, year }) => {
//   return (
//     <Link href={`/work/${year}/${type}/${work.id}`}>
//       <div className="relative w-72 h-[24rem] md:w-80 md:h-[26rem] rounded-xl overflow-hidden group cursor-pointer">
//         {/* Glow behind card */}
//         <div className="absolute -inset-2 bg-purple-500/30 blur-2xl rounded-xl"></div>

//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center rounded-xl transition-transform duration-300 group-hover:scale-105"
//           style={{ backgroundImage: `url(${work.images[0]})` }}
//         ></div>

//         {/* Neon Border */}
//         <div className="absolute inset-0 border-4 border-dashed border-purple-400 rounded-xl shadow-[0_0_20px_rgba(255,0,255,0.7)]"></div>

//         {/* Hover Eye Icon */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="p-3 rounded-2xl bg-purple-500/30 shadow-[0_0_25px_rgba(255,0,255,0.6)]">
//             <FaEye className="text-white text-3xl" />
//           </div>
//         </div>

//         {/* Bottom Name Section */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 p-2 bg-black bg-opacity-50 backdrop-blur-md rounded-md flex items-center justify-center gap-2">
//           <h3 className="text-white text-lg font-semibold text-center">
//             {work.name}
//           </h3>
//           <MdOpenInNew className="text-white w-5 h-5 hover:scale-110 transition-transform duration-300" />
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default WorkCard;

"use client";

import { FaEye } from "react-icons/fa";
import Link from "next/link"; 
import { IoOpenOutline } from "react-icons/io5";
import { MdOpenInNew } from "react-icons/md";



export const SkeletonWorkCard = () => {
  return (
    <div className="relative bg-gray-300 animate-pulse w-72 h-[22rem] md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      {/* Skeleton Background Image */}
      <div className="absolute inset-0 bg-gray-400"></div>

      {/* Hover Overlay Placeholder */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Eye Icon Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray-500 p-2 rounded-2xl">
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Name Section Placeholder */}
      <div className="absolute bottom-0 left-0 w-full p-0">
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-md p-2">
          <div className="h-5 bg-gray-400 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

const WorkCard = ({ work ,type,year}) => {
  return (
    <Link href={`/work/${year}/${type}/${work.id}`}>
      <div className="group relative bg-cover w-72 h-[23rem] md:w-80 md:h-[25rem] bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer  backdrop:brightness-50">
        
        <div
          className="absolute inset-0 bg-cover bg-center  "
          style={{ backgroundImage: `url(${work.images[0]})` , backgroundSize:"cover"}}
        ></div>

      
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

  
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black p-2 rounded-2xl">
            <FaEye className="text-white text-3xl" />
          </div>
        </div>
    
   
        <div className="absolute bottom-0 left-0 w-full p-0 ">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-md p-2 transition-all duration-300 group-hover:backdrop-blur-md group-hover:bg-opacity-60 flex justify-center items-center">
            <h3 className="text-white text-lg font-semibold text-center p-3">
              {work.name}
            </h3>
            <MdOpenInNew className="h-[1.3rem] w-[1.3rem] z-50  text-white  bottom-[1rem] right-[5.3rem] hover:scale-105" />

            {/* <h4 className="text-center">{work.content}</h4> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
