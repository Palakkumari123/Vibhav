"use client";
import { useEffect, useState } from "react";
import Team from "../../../data/team.json";
import ProfileCard, { SkeletonProfileCard } from "../../../Components/UI/cards/ProfileCard";
import Layout from "../../../Components/UI/Layout";

const CurrentTeam = () => {
  const [selectedYear, setSelectedYear] = useState("SuperFinal Year");
  const [loading, setLoading] = useState(true);
  const [showProfiles, setShowProfiles] = useState(false); // New state to delay profile rendering
  const [isOpen, setIsOpen] = useState(false);

  const yearLabels = {
    "SuperFinal Year": "Super Final Year Members",
    "Final Year": "Final Year Members",
    "Third Year": "Third Year Members",
    "Second Year": "Second Year Members",
    "First Year": "First Year Members",
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setLoading(true);
    setShowProfiles(false); // Hide profiles immediately

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    setTimeout(() => {
      setShowProfiles(true); // Show profiles with delay
    }, 1000);
  };

  const handleOptionClick = (option) => {
    setSelectedYear(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowProfiles(true);
    }, 500);
  }, []);

  return (
    <Layout>
      <div className="p-4 mx-0 pt-20 sm:pt-32 relative text-white">
        <div className="fixed bottom-0 top-0 left-0 w-full bg-black/75 pointer-events-none z-[-1]"></div>
        <video
          src="/Assets/backvd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        />
        <h1 className="sm:text-5xl text-2xl font-extrabold text-center mb-7 font-batman">
          Current Team
        </h1>

        <div className="flex flex-col items-center">
          <div className="w-[95vw] flex items-center justify-center mb-12 absolute">
            <div className="flex justify-evenly backdrop-blur max-md:hidden rounded-[90px] px-7 py-6 gap-12 items-center backdrop-brightness-75 opacity-90 bg-zinc-900/50 border-1 border-gray-200 relative">
              {Object.keys(Team).map((year) => (
                <button
                  key={year}
                  className={`px-4 py-2 rounded-3xl text-white ${
                    selectedYear === year ? "bg-black" : "bg-gray-800"
                  } transition-all duration-500 ease-in-out hover:bg-black hover:scale-110 z-10 font-chakraBold`}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-20 sm:mt-28">
            <div className="sm:text-3xl text-2xl text-white font-chakraBold flex justify-center mb-4 text-center p-1">
              <h1>{yearLabels[selectedYear]}</h1>
            </div>

            <div className="p-4 flex justify-center flex-wrap gap-12">
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonProfileCard key={index} />
                  ))
                : showProfiles &&
                  Team[selectedYear].map((member, index) => (
                    <ProfileCard
                      key={index}
                      name={member.Name}
                      position={member.Position}
                      profileImg={member.Profile}
                      backgroundImg={member.Profile}
                      githubLink={member.Github}
                      linkdinLink={member.LinkedIn}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CurrentTeam;
