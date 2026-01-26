"use client";
import { useEffect, useState } from "react";
import Team from "../../../data/team.json"; 
import ProfileCard, { SkeletonProfileCard } from "../../../Components/UI/cards/ProfileCard";
import Layout from "../../../Components/UI/Layout";

const CurrentTeam = () => {
  const [selectedYear, setSelectedYear] = useState("SuperFinal Year");
  const [loading, setLoading] = useState(true);
  const [showProfiles, setShowProfiles] = useState(false);

  const yearLabels = {
    "SuperFinal Year": "Super Final Year Members",
    "Final Year": "Final Year Members",
    "Third Year": "Third Year Members",
    "Second Year": "Second Year Members",
    "First Year": "First Year Members",
  };

  const handleYearChange = (year) => {
    if (year === selectedYear) return;
    setSelectedYear(year);
    setLoading(true);
    setShowProfiles(false);

    setTimeout(() => {
      setLoading(false);
      setShowProfiles(true);
    }, 800);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowProfiles(true);
    }, 500);
  }, []);

  return (
    <Layout>
      {/* Reduced pt-20 to pt-12 for better visibility on phones */}
      <div className="p-4 mx-0 pt-12 sm:pt-32 relative text-white min-h-screen">
      
        <div className="fixed inset-0 bg-black/75 pointer-events-none z-[-1]"></div>
        <video
          src="/Assets/backvd.mp4"
          autoPlay loop muted playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        />

        {/* Responsive Heading */}
        <h1 className="text-2xl sm:text-6xl font-extrabold text-center mb-6 sm:mb-16 font-batman tracking-widest uppercase">
          Current Team
        </h1>

        <div className="flex flex-col items-center">
       
          {/* Navigation Section */}
          <div className="w-full flex items-center justify-center mb-8 sm:mb-24 px-4">
            
            {/* HUD Dropdown for Mobile */}
            <div className="sm:hidden w-full max-w-[280px] relative">
              <select 
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="w-full bg-zinc-900/90 text-[#5b8ef3] border border-[#5b8ef3]/50 rounded-lg px-4 py-3 font-chakraBold appearance-none focus:outline-none"
              >
                {Object.keys(Team).map((year) => (
                  <option key={year} value={year} className="bg-zinc-900 text-white">
                    {year}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#5b8ef3] text-xs">▼</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center bg-zinc-900/40 backdrop-blur-md rounded-full border border-white/10 px-10 py-5 gap-10">
              {Object.keys(Team).map((year) => (
                <button
                  key={year}
                  className={`px-8 py-3 rounded-full text-lg font-chakraBold transition-all duration-300 ${
                    selectedYear === year 
                    ? "bg-[#5b8ef3] text-black shadow-[0_0_20px_#5b8ef3]" 
                    : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Section Heading - Smaller for mobile */}
          <div className="text-xl sm:text-4xl text-[#5b8ef3] font-chakraBold flex justify-center mb-10 text-center uppercase tracking-normal drop-shadow-[0_0_10px_rgba(91,142,243,0.8)] px-6">
            <h1>{yearLabels[selectedYear]}</h1>
          </div>

          {/* Grid - Reduced gap for mobile */}
          <div className="w-full max-w-[1500px] px-6 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-24 justify-items-center">
              {loading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonProfileCard key={index} />
                  ))
                : showProfiles &&
                  Team[selectedYear].map((member, index) => (
                    <ProfileCard
                      key={index}
                      name={member.Name}
                      position={member.Position}
                      profileImg={member.Profile}
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
