// import { FaEye } from "react-icons/fa";
// import Link from "next/link";
// import { MdOpenInNew } from "react-icons/md";

// /* ---------------- THEME CONFIG ---------------- */
// const themeStyles = {
//   purple: {
//     glow: "from-purple-500 via-fuchsia-500 to-blue-500",
//     eye: "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]",
//     eyeBg: "bg-purple-600/20",
//     footer:
//       "from-indigo-600/50 via-purple-600/50 to-blue-600/50",
//   },
//   blue: {
//     glow: "from-blue-500 via-cyan-500 to-indigo-500",
//     eye: "text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.9)]",
//     eyeBg: "bg-blue-600/20",
//     footer:
//       "from-blue-600/50 via-cyan-600/50 to-indigo-600/50",
//   },
//   cyan: {
//     glow: "from-cyan-400 via-sky-500 to-blue-500",
//     eye: "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]",
//     eyeBg: "bg-cyan-600/20",
//     footer:
//       "from-cyan-600/50 via-sky-600/50 to-blue-600/50",
//   },
// };

// /* ---------------- SKELETON CARD ---------------- */
// export const SkeletonWorkCard = () => {
//   return (
//     <div className="relative bg-gray-300 animate-pulse w-72 h-[22rem] md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
//       <div className="absolute inset-0 bg-gray-400" />
//       <div className="absolute bottom-0 left-0 w-full p-2">
//         <div className="h-5 bg-gray-500 rounded w-3/4 mx-auto" />
//       </div>
//     </div>
//   );
// };

// /* ---------------- WORK CARD ---------------- */
// const WorkCard = ({ work, type, year, theme = "purple" }) => {
//   const currentTheme = themeStyles[theme] || themeStyles.purple;

//   return (
//     <Link href={`/work/${year}/${type}/${work.id}`}>
//       {/* Glow Wrapper */}
//       <div className="group relative w-72 h-[23rem] md:w-80 md:h-[25rem] cursor-pointer">

//         {/* Neon Glow */}
//         <div
//           className={`absolute -inset-[2px] rounded-lg bg-gradient-to-r ${currentTheme.glow}
//           blur-lg opacity-40 group-hover:opacity-70 transition duration-300`}
//         />

//         {/* Actual Card */}
//         <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">

//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${work.images[0]})` }}
//           />

//           {/* Hover Overlay */}
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300" />

//           {/* Eye Icon */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div
//               className={`p-3 rounded-2xl backdrop-blur-md ${currentTheme.eyeBg}`}
//             >
//               <FaEye
//                 className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${currentTheme.eye}`}
//               />
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="absolute bottom-0 left-0 w-full">
//             <div
//               className={`bg-gradient-to-r ${currentTheme.footer}
//               backdrop-blur-sm rounded-md p-3
//               transition-all duration-300
//               group-hover:backdrop-blur-md
//               group-hover:from-indigo-600/70
//               group-hover:to-blue-600/70
//               flex justify-center items-center gap-2`}
//             >
//               <h3 className="text-white text-lg font-semibold text-center">
//                 {work.name}
//               </h3>
//               <MdOpenInNew className="text-white w-5 h-5" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </Link>
//   );
// };

// export default WorkCard;

 import Link from "next/link";

/* ---------------- SKELETON CARD ---------------- */
export const SkeletonWorkCard = () => {
  return (
    <div className="relative bg-gray-300 animate-pulse w-72 h-[22rem] md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gray-400" />
      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="h-5 bg-gray-500 rounded w-3/4 mx-auto mb-3" />
        <div className="h-8 bg-gray-500 rounded w-1/2 mx-auto" />
      </div>
    </div>
  );
};

/* ---------------- WORK CARD ---------------- */
const WorkCard = ({ work, type, year }) => {
  return (
    <Link href={`/work/${year}/${type}/${work.id}`}>
      <div className="group relative w-72 h-[23rem] md:w-80 md:h-[25rem] cursor-pointer">

        {/* CARD GLOW (SOLID COLOR) */}
        <div
          className="absolute -inset-[2px] rounded-lg
          bg-[#7C7CFF]
          blur-lg opacity-30
          group-hover:opacity-60 transition duration-300"
        />

        {/* CARD */}
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${work.images[0]})` }}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

          {/* FOOTER */}
          <div className="absolute bottom-0 left-0 w-full">
            <div
              className=" bg-[#0B0B14]/80 backdrop-blur-md
              rounded-md p-4 flex flex-col items-center gap-4"
            >
              {/* Project Name */}
              <h3 className="text-white text-lg font-semibold text-center">
                {work.name}
              </h3>

              {/* SOLID NEON EXPLORE BUTTON */}
              <div className="relative group/button">

                {/* Button Glow */}
                <div
                  className="absolute -inset-[2px] rounded-xl
                  bg-[#7C7CFF]
                  blur-sm opacity-30
                  group-hover/button:opacity-50transition duration-300"
                />

                {/* Border */}
                <div className="relative rounded-xl p-[1.5px] bg-[#7C7CFF]">
                  {/* Inner Button */}
                  <div
                    className="px-6 py-2 rounded-xl
                    bg-[#0B0B14]
                    text-[#CFCFFF]
                    font-semibold text-sm tracking-wider
                    transition-transform duration-300
                    group-hover/button:scale-105"
                  >
                    EXPLORE
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
          


