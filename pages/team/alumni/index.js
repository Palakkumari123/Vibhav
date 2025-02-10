import { useState, useEffect } from "react";
import Alumni from "../../../data/alumni.json";
import ProfileCard from "../../../Components/UI/cards/ProfileCard";
import Layout from '../../../Components/UI/Layout'
const Aluminus = () => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const yearLabels = {
    2019: "2019 Batch",
    2020: "2020 Batch",
    2021: "2021 Batch",
    2022: "2022 Batch",
    2023: "2023 Batch",
    2024: "2024 Batch",
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedYear(option);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleOverflow = () => {
      if (window.innerWidth <= 640 && isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleOverflow();
    window.addEventListener("resize", handleOverflow);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleOverflow);
    };
  }, [isOpen]);

  return (
    <Layout>
      <div className="p-4 mx-0 pt-20 sm:pt-32 relative text-white">
      <div className="fixed bottom-0 top-0 left-0 w-full  bg-black/75 pointer-events-none z-[-1]"></div>
      <video
          src="/Assets/backvd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        />
      <h1 className="sm:text-5xl text-2xl font-extrabold text-center mb-7 font-batman">
          Alumni
        </h1>
        <div className="flex flex-col items-center">
          <div className=" w-[95vw]  flex items-center justify-center mb-12 absolute">
          <div className="flex justify-evenly backdrop-blur max-md:hidden rounded-[90px] px-7 transition-all duration-500 ease-in-out  py-6 w-fit gap-12 items-center backdrop-brightness-75 opacity-90 bg-zinc-900/50 border-1 border-gray-200 relative ">
              {Object.keys(Alumni).map((year) => (
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

 
            <div
              className={`md:hidden z-10 w-[100%] sm:w-[60%] flex flex-col  rounded-[10px] px-7 transition-all duration-500 ease-in-out py-3 gap-12 items-center  h-fit relative bg-black`}
            >
              <div
                className={`relative inline-block text-left w-full transition-all duration-500 ease-in-out`}
              >
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between text-gray-200 font-medium rounded-3xl  focus:outline-none w-full transition-all duration-300 ease-in-out  "
                >
                  <span className="flex-1 text-center font-chakraBold text-sm">
                    {yearLabels[selectedYear]}
                  </span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className={`left-0 z-10 mt-2 w-full rounded-md transition-all duration-500 ease-in-out transform  scale-100 opacity-100 h-96${
                      isOpen
                        ? "scale-100 opacity-100 max-h-96"
                        : "max-h-96 scale-95 opacity-100"
                    }`}
                  >
                    <div className="h-[1px] bg-gray-300 w-full mb-1"></div>
                    <ul className="py-2 flex flex-col gap-3 items-center">
                      {Object.keys(Alumni).map((year) => (
                        <div
                          key={year}
                          className={` text-gray-200 font-medium  rounded-3xl transition-all duration-300 ease-in-out w-full text-center font-chakra text-sm py-1 ${
                            selectedYear === year
                              ? "bg-gray-800 text-white"
                              : "hover:bg-gray-800 hover:text-white"
                          } hover:scale-105 cursor-pointer`}
                          onClick={() => {
                            handleYearChange(year);
                            handleOptionClick(year);
                          }}
                        >
                          {yearLabels[year]}
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-28">
            {/* Display Selected Year */}
            <div className="sm:text-3xl text-2xl text-white  font-chakraBold  flex justify-center mb-4  text-center p-1">
              <h1>{yearLabels[selectedYear]}</h1>
            </div>

            {/* Render Team Members */}
            <div className="p-4 flex justify-center flex-wrap gap-12">
              {Alumni[selectedYear].map((member, index) => (
                <ProfileCard
                  key={index}
                  name={member.Name}
               
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

export default Aluminus;
