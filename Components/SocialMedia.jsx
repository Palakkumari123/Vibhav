import React from "react";
import { useEffect, useState, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export default function SocialLinks() {
  const [isVisible, setIsVisible] = useState(true);
  const landingPageRef = useRef(null);

  useEffect(() => {
    // Use Intersection Observer for precise landing page detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show social handles only when landing page is in view
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of landing page is visible
      }
    );

    // Get the landing page header element
    const landingPage = document.querySelector("header.relative");
    if (landingPage) {
      observer.observe(landingPage);
    }

    return () => {
      if (landingPage) {
        observer.unobserve(landingPage);
      }
    };
  }, []);

  const iconClass =
    "w-5 h-5 md:w-6 md:h-6 text-cyan-300";

  const wrapperClass =
    "flex items-center justify-center w-12 h-12 rounded-full \
     bg-cyan-900/30 backdrop-blur-md border border-cyan-400/30 \
     shadow-[0_0_15px_rgba(34,211,238,0.6)] \
     hover:shadow-[0_0_30px_rgba(34,211,238,0.9)] \
     hover:scale-110 transition-all duration-300";

  return (
    <div className={`flex items-center justify-center gap-4 mt-8 transition-all duration-500 ${
      isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}>
      
      <a href="https://github.com/Team-Vibhav" target="_blank" aria-label="Github" className={wrapperClass}>
        <FaGithub className={iconClass} />
      </a>

      <a href="https://www.instagram.com/team_vibhav/" target="_blank" aria-label="Instagram" className={wrapperClass}>
        <FaInstagram className={iconClass} />
      </a>

      <a href="https://m.facebook.com/262566097142744/" target="_blank" aria-label="Facebook" className={wrapperClass}>
        <FaFacebook className={iconClass} />
      </a>

      <a href="https://discord.gg/cc3j3GbCrX" target="_blank" aria-label="Discord" className={wrapperClass}>
        <FaDiscord className={iconClass} />
      </a>

      <a href="https://www.linkedin.com/company/team-vibhav" target="_blank" aria-label="LinkedIn" className={wrapperClass}>
        <FaLinkedin className={iconClass} />
      </a>

    </div>
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
