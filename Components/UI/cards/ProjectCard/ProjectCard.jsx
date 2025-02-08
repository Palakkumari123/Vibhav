import React, { useState } from "react";
import { motion } from "framer-motion";
import { Popup } from "./ProjectModal";

export const SkeletonProjectCard = () => {
  return (
    <motion.div
      className="select-none border border-white/10 bg-[#282c34] 
        bg-gradient-to-t from-[#161c18] to-[#1f1f1f80] shadow-[0_7px_20px_5px_rgba(0,0,0,0.5)] 
        rounded-lg backdrop-blur-lg overflow-hidden transition-all duration-500 h-auto w-auto"
      whileHover={{ scale: 1.05 }}
    >
      {/* Skeleton Image Placeholder */}
      <div className="relative w-full h-80 flex items-center justify-center p-5 rounded-md">
        <div className="w-full h-full bg-gray-700/20 animate-pulse rounded-md"></div>
      </div>

      {/* Skeleton Content */}
      <div className="p-4 text-center">
        {/* Title Placeholder */}
        <div className="w-3/4 h-5 bg-gray-700/20 animate-pulse mx-auto rounded-md"></div>

        {/* Button Placeholder */}
        <motion.div whileHover={{ scale: 1.1 }} className="mt-3">
          <div className="w-24 h-8 bg-gray-700/20 animate-pulse mx-auto rounded-lg"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
    <motion.div
      className="select-none border border-white/10 bg-[#282c34] 
  bg-gradient-to-t from-[#161c18] to-[#1f1f1f80] shadow-[0_7px_20px_5px_rgba(0,0,0,0.5)] 
  rounded-lg backdrop-blur-lg overflow-hidden transition-all duration-500 h-auto w-auto"
      whileHover={{ scale: 1.05 }}
    >
      {/* Card Image */}
      <div className="relative w-full h-68 flex items-center justify-center  p-5 rounded-md">
        <img
          src={project.images}
          alt={project.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-10 rounded-md"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 text-center">
        <h4 className="text-white text-lg font-semibold">{project.name}</h4>

        {/* Explore Button */}
        <motion.div whileHover={{ scale: 1.1 }} className="mt-3 ">
         
            <button className=" px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-lg hover:bg-blue-500 transition-all duration-300   bg-gradient-to-t from-[#282c34] to-[#11002080] shadow-[0_7px_20px_5px_rgba(0,0,0,0.5)] " onClick={openPopup}>
              EXPLORE
            </button>
          
        </motion.div>
      </div>
    </motion.div>
      {isPopupOpen && (
        <Popup
          title={project.name}
          description={project.content}
          image={project.images}
          github={project.github || ""}
          onClose={closePopup}
        />
      )}</>
  );
};

export default ProjectCard;
