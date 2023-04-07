import React, { useState } from "react";
import projects from "./tabs.json";
import ProjectCard from "./UI/cards/projectCard";

export default function Projects({ id }) {
  const [cardState, setCarState] = useState(0);
  const tabs = {
    ai: "AI/ML",
    ar: "AR/VR",
    iot: "IoT",
    es: "EMBEDDED SYSTEMS",
    dsp: "DSP",
    quan: "QUANTUM COMPUTING"
  };
  return (
    <div className="p-3 pt-24 justify-center">
      <h1 className="text-[#dab971] mt-10 justify-center flex text-5xl md:text-6xl md:p-0 p-2 font-[Azonix]">Projects</h1>
      {/* <div className="grid lg:grid-cols-5 sm:grid-cols-1">
          {tabs.map((tab, ind) => {
            return (
              <button
                type="button"
                key={ind}
                className={`border-8 border-transparent truncate text-2xl bg-gray-800 text-white rounded-md focus:bg-white focus:text-gray-800 font-bold h-12 m-2 ${
                  ind === cardState ? " bg-white text-gray-800" : undefined
                }
            `}
                onClick={() => setCarState(ind)}
              >
                {tab}
              </button>
            );
          })}
        </div> */}
      <div className="text-[#dab971] animate-pulse justify-center flex mt-6 mb-8 font-[Azonix] text-5xl font-black">
        {tabs[id]}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 font-[Azonix] sm:grid-cols-2 lg:gap-6 md:gap-3 sm:gap-2 lg:px-6 md:px-4 sm:px-2">
        {projects[tabs[id]]?.map((card, ind) => {
          return (
            <div key={ind} className="justify-center mb-3">
              <ProjectCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
