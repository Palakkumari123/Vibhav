import React, { useState } from "react";
import projects from "./tabs.json";
import ProjectCard from "./UI/cards/projectCard";

export default function Projects({id}) {
  const [cardState, setCarState] = useState(0);
  const tabs = {"ai":"AI/ML", "ar": "AR/VR","iot": "IOT","es": "EMBEDDED SYSTEMS", "dsp":"DSP"};
  // console.log("tabs",tabs[id],id)
  return (
    <div className="p-3 justify-center">
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
        <div className="text-white justify-center flex p-2 text-5xl font-black">{tabs[id]}</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
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
