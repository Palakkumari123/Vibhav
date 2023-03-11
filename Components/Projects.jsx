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
    quan: "Quantum Computing"
  };
  return (
    <div className="p-3 pt-24 justify-center">
      <div className="text-white justify-center flex p-5 font-[Azonix] text-5xl font-black">
        {tabs[id]}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 font-[Azonix] sm:grid-cols-2 gap-6 px-12">
        {projects[tabs[id]]?.map((card, ind) => {
          return (
            <div key={ind} className="justify-center">
              <ProjectCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
