import React, { useState } from "react";
import { motion } from "framer-motion";
import { Popup } from "./ProjectModal";

/* =======================
   SKELETON CARD
======================= */
export const SkeletonProjectCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        relative w-[300px]
        bg-[#050d14]
        border border-purple-700/30
        rounded-xl
        overflow-hidden
        shadow-[0_0_20px_#9b59b644,0_0_40px_#9b59b644]
      "
    >
      {/* grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(#9b59b622_1px,transparent_1px),linear-gradient(90deg,#9b59b622_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative p-5">
        <div className="h-[260px] bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 animate-pulse rounded-md" />
        <div className="mt-4 h-5 w-3/4 mx-auto bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 animate-pulse rounded" />
        <div className="mt-3 h-8 w-24 mx-auto bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 animate-pulse rounded" />
      </div>
    </motion.div>
  );
};

/* =======================
   PROJECT CARD
======================= */
const ProjectCard = ({ project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: `
            0 0 15px #9b59b644,
            0 0 40px #9b59b666,
            0 0 80px #9b59b688
          `,
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="
          relative w-[300px]
          bg-[#050d14]
          border border-purple-700/40
          rounded-xl
          overflow-hidden
          backdrop-blur-xl
          shadow-[0_0_15px_#9b59b644,0_0_40px_#9b59b666]
        "
      >
        {/* ================= GRID BACKGROUND ================= */}
        <div className="absolute inset-0 bg-[linear-gradient(#9b59b622_1px,transparent_1px),linear-gradient(90deg,#9b59b622_1px,transparent_1px)] bg-[size:26px_26px]" />

        {/* ================= HUD CORNERS ================= */}
        <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/70" />
        <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400/70" />
        <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400/70" />
        <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/70" />

        {/* ================= IMAGE ================= */}
        <div className="relative z-10 p-5 flex justify-center">
          <img
            src={project.images}
            alt={project.name}
            className="h-[260px] w-[260px] object-contain rounded-md"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 text-center pb-5">
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 text-lg font-bold tracking-wider">
            {project.name}
          </h4>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsPopupOpen(true)}
            className="
              mt-4 px-5 py-2 text-sm font-bold
              text-purple-300
              border border-purple-400
              rounded-md
              hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-purple-400/20
              transition-all
              tracking-widest
            "
          >
            EXPLORE
          </motion.button>
        </div>
      </motion.div>

      {/* ================= POPUP ================= */}
      {isPopupOpen && (
        <Popup
          title={project.name}
          description={project.content}
          image={project.images}
          github={project.github || ""}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Popup } from "./ProjectModal";

// /* =======================
//    SKELETON CARD
// ======================= */
// export const SkeletonProjectCard = () => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       className="
//         relative w-[300px]
//         bg-[#050d14]
//         border border-purple-700/30
//         rounded-xl
//         overflow-hidden
//         shadow-[0_0_20px_#9b59b644,0_0_40px_#9b59b644]
//       "
//     >
//       {/* grid bg */}
//       <div className="absolute inset-0 bg-[linear-gradient(#9b59b622_1px,transparent_1px),linear-gradient(90deg,#9b59b611_1px,transparent_1px)] bg-[size:24px_24px]" />

//       <div className="relative p-5">
//         <div className="h-[260px] bg-purple-500/20 animate-pulse rounded-md" />
//         <div className="mt-4 h-5 w-3/4 mx-auto bg-purple-500/20 animate-pulse rounded" />
//         <div className="mt-3 h-8 w-24 mx-auto bg-purple-500/20 animate-pulse rounded" />
//       </div>
//     </motion.div>
//   );
// };

// /* =======================
//    PROJECT CARD
// ======================= */
// const ProjectCard = ({ project }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   return (
//     <>
//       <motion.div
//         whileHover={{
//           scale: 1.05,
//           boxShadow: `
//             0 0 15px #9b59b644,
//             0 0 25px #9b59b655,
//             0 0 40px #9b59b666,
//             0 0 60px #9b59b677,
//             0 0 80px #9b59b688,
//             0 0 100px #9b59b699
//           `,
//         }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="
//           relative w-[300px]
//           bg-[#050d14]
//           border border-purple-700/40
//           rounded-xl
//           overflow-hidden
//           backdrop-blur-xl
//           shadow-[0_0_15px_#9b59b644,0_0_25px_#9b59b655,0_0_40px_#9b59b666,0_0_60px_#9b59b677]
//         "
//       >
//         {/* ================= GRID BACKGROUND ================= */}
//         <div className="absolute inset-0 bg-[linear-gradient(#9b59b622_1px,transparent_1px),linear-gradient(90deg,#9b59b611_1px,transparent_1px)] bg-[size:26px_26px]" />

//         {/* ================= HUD CORNERS ================= */}
//         <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/70" />
//         <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/70" />
//         <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/70" />
//         <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/70" />

//         {/* ================= IMAGE ================= */}
//         <div className="relative z-10 p-5 flex justify-center">
//           <img
//             src={project.images}
//             alt={project.name}
//             className="h-[260px] w-[260px] object-contain rounded-md"
//           />
//         </div>

//         {/* ================= CONTENT ================= */}
//         <div className="relative z-10 text-center pb-5">
//           <h4 className="text-transparent bg-clip-text bg-purple-400 text-lg font-bold tracking-wider">
//             {project.name}
//           </h4>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             onClick={() => setIsPopupOpen(true)}
//             className="
//               mt-4 px-5 py-2 text-sm font-bold
//               text-purple-300
//               border border-purple-400
//               rounded-md
//               hover:bg-purple-500/20
//               transition-all
//               tracking-widest
//             "
//           >
//             EXPLORE
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* ================= POPUP ================= */}
//       {isPopupOpen && (
//         <Popup
//           title={project.name}
//           description={project.content}
//           image={project.images}
//           github={project.github || ""}
//           onClose={() => setIsPopupOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default ProjectCard;






// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Popup } from "./ProjectModal";

// /* =======================
//    SKELETON CARD
// ======================= */
// export const SkeletonProjectCard = () => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       className="
//         relative w-[300px]
//         bg-[#050d14]
//         border border-cyan-400/30
//         rounded-xl
//         overflow-hidden
//         shadow-[0_0_25px_#00ffff55]
//       "
//     >
//       {/* grid bg */}
//       <div className="absolute inset-0 bg-[linear-gradient(#00ffff15_1px,transparent_1px),linear-gradient(90deg,#00ffff15_1px,transparent_1px)] bg-[size:24px_24px]" />

//       <div className="relative p-5">
//         <div className="h-[260px] bg-cyan-500/10 animate-pulse rounded-md" />
//         <div className="mt-4 h-5 w-3/4 mx-auto bg-cyan-500/10 animate-pulse rounded" />
//         <div className="mt-3 h-8 w-24 mx-auto bg-cyan-500/10 animate-pulse rounded" />
//       </div>
//     </motion.div>
//   );
// };

// /* =======================
//    PROJECT CARD
// ======================= */

// const ProjectCard = ({ project }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   return (
//     <>
//       <motion.div
//         whileHover={{
//           scale: 1.06,
//           boxShadow: "0 0 40px #00ffff",
//         }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="
//           relative w-[300px]
//           bg-[#050d14]
//           border border-cyan-400/40
//           rounded-xl
//           overflow-hidden
//           backdrop-blur-xl
//           shadow-[0_0_30px_#00ffff55]
//         "
//       >
//         {/* ================= GRID BACKGROUND ================= */}
//         <div className="absolute inset-0 bg-[linear-gradient(#00ffff10_1px,transparent_1px),linear-gradient(90deg,#00ffff10_1px,transparent_1px)] bg-[size:26px_26px]" />

//         {/* ================= HUD CORNERS ================= */}
//         <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
//         <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
//         <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
//         <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

//         {/* ================= IMAGE ================= */}
//         <div className="relative z-10 p-5 flex justify-center">
//           <img
//             src={project.images}
//             alt={project.name}
//             className="h-[260px] w-[260px] object-contain rounded-md"
//           />
//         </div>

//         {/* ================= CONTENT ================= */}
//         <div className="relative z-10 text-center pb-5">
//           <h4 className="text-cyan-300 text-lg font-bold tracking-wider">
//             {project.name}
//           </h4>

//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             onClick={() => setIsPopupOpen(true)}
//             className="
//               mt-4 px-5 py-2 text-sm font-bold
//               text-cyan-300
//               border border-cyan-400
//               rounded-md
//               hover:bg-cyan-400/20
//               transition-all
//               tracking-widest
//             "
//           >
//             EXPLORE
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* ================= POPUP ================= */}
//       {isPopupOpen && (
//         <Popup
//           title={project.name}
//           description={project.content}
//           image={project.images}
//           github={project.github || ""}
//           onClose={() => setIsPopupOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default ProjectCard;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Popup } from "./ProjectModal";

// export const SkeletonProjectCard = () => {
//   return (
//     <motion.div
//       className="select-none border border-white/10 bg-[#282c34] 
//         bg-gradient-to-t from-[#161c18] to-[#1f1f1f80] shadow-[0_7px_20px_5px_rgba(0,0,0,0.5)] 
//         rounded-lg backdrop-blur-lg overflow-hidden transition-all duration-500 h-auto w-[300px]"
//       whileHover={{ scale: 1.05 }}
//     >
//       {/* Skeleton Image Placeholder */}
//       <div className="relative w-full h-80 flex items-center justify-center p-5 rounded-md">
//         <div className="w-[260px] h-[260px] bg-gray-700/20 animate-pulse rounded-md"></div>
//       </div>

//       {/* Skeleton Content */}
//       <div className="p-4 text-center">
//         {/* Title Placeholder */}
//         <div className="w-3/4 h-5 bg-gray-700/20 animate-pulse mx-auto rounded-md"></div>

//         {/* Button Placeholder */}
//         <motion.div whileHover={{ scale: 1.1 }} className="mt-3">
//           <div className="w-24 h-8 bg-gray-700/20 animate-pulse mx-auto rounded-lg"></div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const ProjectCard = ({ project }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const openPopup = () => setIsPopupOpen(true);
//   const closePopup = () => setIsPopupOpen(false);

//   return (
//     <>
//     <motion.div
//       className="select-none border border-white/10 bg-[#282c34] 
//   bg-gradient-to-t from-[#161c18] to-[#1f1f1f80] shadow-[0_7px_20px_5px_rgba(0,0,0,0.5)] 
//   rounded-lg backdrop-blur-lg overflow-hidden transition-all duration-500 h-auto w-[300px]"
//       whileHover={{ scale: 1.05 }}
//     >
//       {/* Card Image */}
//       <div className="relative w-full  flex items-center justify-center  p-5 rounded-md">
//         <img
//           src={project.images}
//           alt={project.name}
//           className=" h-[262px] w-[262px] object-contain transition-transform duration-300 group-hover:scale-10 rounded-md"
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-4 text-center">
//         <h4 className="text-white text-lg font-semibold">{project.name}</h4>

//         {/* Explore Button */}
//         <motion.div whileHover={{ scale: 1.1 }} className="mt-3 w-full  flex justify-center">
         
//             <button className=" px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-lg hover:bg-blue-500 transition-all duration-300   bg-gradient-to-t from-[#282c34] to-[#11002080] shadow-[0_7px_20px_5px_rgba(0,0,0,0.5)]   " onClick={openPopup}>
//               EXPLORE
//             </button>
          
//         </motion.div>
//       </div>
//     </motion.div>
//       {isPopupOpen && (
//         <Popup
//           title={project.name}
//           description={project.content}
//           image={project.images}
//           github={project.github || ""}
//           onClose={closePopup}
//         />
//       )}</>
//   );
// };

// export default ProjectCard;
