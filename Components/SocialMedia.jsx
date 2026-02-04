"use client";

import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export default function SocialMedia() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // hide after first screen height
      setShow(window.scrollY < window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <>
      <style>{`
        .social-container {
          position: absolute;
          left: 50%;
          top: 47%;
          transform: translate(-50%, -50%);
          z-index: 999;
        }

        .social-bar {
          display: flex;
          gap: 28px;
        }

        .icon {
          font-size: 36px;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .icon:hover {
          transform: scale(1.25);
        }

        .github:hover { color: #ffffff; }
        .instagram:hover { color: #e1306c; }
        .facebook:hover { color: #1877f2; }
        .discord:hover { color: #5865f2; }
        .linkedin:hover { color: #0a66c2; }
      `}</style>

      <div className="social-container">
        <div className="social-bar">

          <a href="https://github.com/Team-Vibhav" target="_blank" rel="noreferrer">
            <FaGithub className="icon github" />
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="icon instagram" />
          </a>

          <a href="https://m.facebook.com/262566097142744/" target="_blank" rel="noreferrer">
            <FaFacebook className="icon facebook" />
          </a>

          <a href="https://discord.gg/cc3j3GbCrX" target="_blank" rel="noreferrer">
            <FaDiscord className="icon discord" />
          </a>

          <a href="https://www.linkedin.com/company/team-vibhav" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon linkedin" />
          </a>

        </div>
      </div>
    </>
  );
}

// "use client";

// import React from "react";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaFacebook,
//   FaInstagram,
//   FaDiscord,
// } from "react-icons/fa";

// export default function SocialLinks() {
//   return (
//     <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
//       <div className="flex flex-wrap justify-center">

//         <a
//           aria-label="Github"
//           className="flex items-center justify-center p-1.5 rounded-full bg-white text-black mt-4 hover:text-white hover:bg-[#303033] ease-in-out duration-200 hover:scale-125"
//           href="https://github.com/Team-Vibhav"
//           target="_blank"
//         >
//           <FaGithub className="w-7 h-7 md:w-10 md:h-10" />
//         </a>

//         <a
//           className="flex items-center justify-center p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-gradient-to-tr hover:from-[#fa7e1e] hover:to-[#962fbf] ease-in-out duration-200 hover:scale-125"
//           aria-label="Instagram"
//           href="https://www.instagram.com/team_vibhav/"
//           target="_blank"
//         >
//           <FaInstagram className="w-7 h-7 md:w-10 md:h-10" />
//         </a>

//         <a
//           className="flex items-center justify-center p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-blue-600 ease-in-out duration-200 hover:scale-125"
//           aria-label="Facebook"
//           href="https://m.facebook.com/262566097142744/"
//           target="_blank"
//         >
//           <FaFacebook className="w-7 h-7 md:w-10 md:h-10" />
//         </a>

//         <a
//           aria-label="Discord"
//           className="flex items-center justify-center p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-[#576fbf] ease-in-out duration-200 hover:scale-125"
//           href="https://discord.gg/cc3j3GbCrX"
//           target="_blank"
//         >
//           <FaDiscord className="w-7 h-7 md:w-10 md:h-10" />
//         </a>

//         <a
//           className="flex items-center justify-center p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-[#0072b1] ease-in-out duration-200 hover:scale-125"
//           aria-label="LinkedIn"
//           href="https://www.linkedin.com/company/team-vibhav"
//           target="_blank"
//         >
//           <FaLinkedin className="w-7 h-7 md:w-10 md:h-10" />
//         </a>

//       </div>
//     </div>
//   );
// }
