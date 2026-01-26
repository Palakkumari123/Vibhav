import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

/* =====================================================
   POPUP MODAL
===================================================== */

export function Popup({ title, description, image, onClose, github }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">

      {/* MODAL CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 40 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          relative sm:w-3/4 w-[95%]
          max-h-[85vh]
          p-1
          rounded-2xl
          bg-[#050d14]
          border border-cyan-400/40
          shadow-[0_0_45px_#00ffff66]
          overflow-hidden
        "
      >
        {/* GRID BACKGROUND */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(#00ffff12_1px,transparent_1px),
            linear-gradient(90deg,#00ffff12_1px,transparent_1px)]
            bg-[size:28px_28px]
          "
        />

        {/* HUD CORNERS */}
        <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-400" />
        <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cyan-400" />
        <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-cyan-400" />
        <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cyan-400" />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-50
            text-cyan-300 text-xl
            hover:text-white
            hover:scale-125
            transition-all
          "
        >
          ✕
        </button>

        {/* CONTENT */}
        <div className="relative z-10 py-8 px-6 text-white flex flex-col items-center text-center">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-widest text-cyan-300 mb-4"
          >
            {title}
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="
              text-gray-200 text-lg
              w-[95%] sm:w-[88%]
              max-h-[450px]
              overflow-y-auto
              font-chakra
            "
          >
            <p className="p-2 text-justify leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* GITHUB BUTTON */}
          {github && (
            <Link href={github} target="_blank" className="mt-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="
                  flex gap-3 items-center
                  px-6 py-3
                  border border-cyan-400
                  text-cyan-300
                  rounded-xl
                  hover:bg-cyan-400/20
                  transition-all
                  shadow-[0_0_20px_#00ffff66]
                "
              >
                <span>GitHub</span>
                <FaGithub className="w-6 h-6" />
              </motion.div>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* =====================================================
   OPTIONAL STEP COMPONENT
===================================================== */

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

/* =====================================================
   CHECK ICON — HUD STYLE
===================================================== */

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0 drop-shadow-[0_0_6px_#00ffff]"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0-.432.002-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579c-.005.098-.01.198-.013.299l-.017.616l-.004.318l-.001.324c0 .218.002.432.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034c.098.005.198.01.299.013l.616.017l.642.005l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579c.005-.098.01-.198.013-.299l.017-.616l.005-.642l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004l-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094l-4 4a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497l.094.083l1.293 1.292l3.293-3.292z"
        fill="currentColor"
      />
    </svg>
  );
};


// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";

// import Link from "next/link";

// export function Popup({ title, description, image, onClose, github }) {
//   return (
//     <div className="fixed top-0 pt-10 inset-0 z-50 flex items-center justify-center bg-black backdrop-opacity-100 bg-opacity-75  rounded-2xl">
//       <div className="h-fit max-h-3/5 p-1 sm:w-3/4 w-[95%] fixed rounded-2xl bg-gray-900/90 bg-gradient-to-t from-[#222932] to-[#0a0e0c80]  py-7">
//         <button
//           className="absolute top-5 right-5 text-gray-200 hover:text-white transition-all duration-300 ease-in-out hover:scale-125 hover:bg-gray-900 rounded-3xl px-[6px]"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//         <motion.div className=" flex flex-col justify-center items-center text-center p-1 max-sm:mt-5 text-white ">
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="sm:text-3xl text-2xl font-bold my-3 mt-0 text-center w-fit"
//           >
//             <div>{title}</div>
//           </motion.div>
//           <motion.div className="text-gray-200 text-lg w-[95%] sm:w-[88%] max-h-[490px] text-justify   overflow-y-auto font-chakra">
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className="p-2 text-justify"
//             >
//               {description}
//             </motion.p>
//           </motion.div>
//         </motion.div>
//         <Link href={github} className=" flex justify-center font-sans">
//           <div className="flex gap-3 bg-gradient-to-t from-[#282c34] to-[#2f2e2e80] transition-all duration-100 ease-in-out hover:bg-gray-900 p-3 rounded-2xl hover:scale-105">
//             <div>Github</div>
//             <FaGithub className="w-[1.6rem] h-[1.6rem]" />
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// const Step = ({ title }) => {
//   return (
//     <li className="flex gap-2 items-start">
//       <CheckIcon />
//       <p className="text-white">{title}</p>
//     </li>
//   );
// };

// const CheckIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path
//         d="M12 2c-.218 0-.432.002-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579c-.005.098-.01.198-.013.299l-.017.616l-.004.318l-.001.324c0 .218.002.432.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034c.098.005.198.01.299.013l.616.017l.642.005l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579c.005-.098.01-.198.013-.299l.017-.616l.005-.642l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004l-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094l-4 4a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497l.094.083l1.293 1.292l3.293-3.292z"
//         fill="currentColor"
//         strokeWidth="0"
//       />
//     </svg>
//   );
// };
