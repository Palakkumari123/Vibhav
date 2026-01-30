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
          position: fixed;
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
//     <>
//       <style>{`
//         /* =============================
//            POSITION — MIDDLE RIGHT
//         ============================== */
//         .social-container {
//           position: fixed;
//           right: 12px;
//           top: 42%;
//           transform: translateY(-50%);
//           z-index: 999;
//         }

//         /* =============================
//            DARK BACKGROUND BAR
//         ============================== */
//         .social-bar {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 22px;

//           padding: 20px 10px;

//           /* DARK BLACK OVERLAY */
//           background: rgba(0, 0, 0, 0.2);

//           backdrop-filter: blur(14px);

//           /* SHARP EDGES */
//           border-radius: 8px;

//           /* SUBTLE BORDER */
//           border-left: 1px solid rgba(255, 255, 255, 0.15);
//           border-right: 1px solid rgba(255, 255, 255, 0.15);
//         }

//         /* =============================
//            ICON STYLE
//         ============================== */
//         .icon {
//           font-size: 28px;
//           color: #ffffff;
//           cursor: pointer;
//           transition: all 0.25s ease;
//         }

//         .icon:hover {
//           transform: scale(1.25);
//         }

//         .icon:active {
//           transform: scale(1.35);
//         }

//         /* =============================
//            BRAND COLORS
//         ============================== */
//         .github:hover {
//           color: #ffffff;
//         }

//         .instagram:hover {
//           color: #e1306c;
//         }

//         .facebook:hover {
//           color: #1877f2;
//         }

//         .discord:hover {
//           color: #5865f2;
//         }

//         .linkedin:hover {
//           color: #0a66c2;
//         }

//       `}</style>

//       {/* =============================
//           SOCIAL ICON BAR
//       ============================== */}
//       <div className="social-container">
//         <div className="social-bar">

//           <a
//             href="https://github.com/Team-Vibhav"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaGithub className="icon github" />
//           </a>

//           <a target="_blank" rel="noreferrer">
//             <FaInstagram className="icon instagram" />
//           </a>

//           <a
//             href="https://m.facebook.com/262566097142744/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaFacebook className="icon facebook" />
//           </a>

//           <a
//             href="https://discord.gg/cc3j3GbCrX"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaDiscord className="icon discord" />
//           </a>

//           <a
//             href="https://www.linkedin.com/company/team-vibhav"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaLinkedin className="icon linkedin" />
//           </a>

//         </div>
//       </div>
//     </>
//   );
// // }
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
//     <>
//       <style>{`
//         /* =============================
//            CENTER POSITION
//         ============================== */
//         .social-container {
//           position: fixed;
//           left: 50%;
//           top: 47%;
//           transform: translate(-50%, -50%);
//           z-index: 999;
//         }

//         /* =============================
//            NO BACKGROUND BAR
//         ============================== */
//         .social-bar {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           gap: 28px;

//           padding: 0;

//           /* ❌ removed background */
//           background: none;
//           backdrop-filter: none;
//           border: none;
//           border-radius: 0;
//         }

//         /* =============================
//            ICON STYLE
//         ============================== */
//         .icon {
//           font-size: 36px;
//           color: #ffffff;
//           cursor: pointer;
//           // padding:10px 0;
//           transition: all 0.25s ease;
//         }

//         .icon:hover {
//           transform: scale(1.25);
//         }

//         .icon:active {
//           transform: scale(1.35);
//         }

//         /* =============================
//            BRAND COLORS
//         ============================== */
//         .github:hover {
//           color: #ffffff;
//         }

//         .instagram:hover {
//           color: #e1306c;
//         }

//         .facebook:hover {
//           color: #1877f2;
//         }

//         .discord:hover {
//           color: #5865f2;
//         }

//         .linkedin:hover {
//           color: #0a66c2;
//         }
//       `}</style>

//       {/* =============================
//            SOCIAL ICONS
//       ============================== */}
//       <div className="social-container">
//         <div className="social-bar">

//           <a
//             href="https://github.com/Team-Vibhav"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaGithub className="icon github" />
//           </a>

//           <a
//             href="https://www.instagram.com/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaInstagram className="icon instagram" />
//           </a>

//           <a
//             href="https://m.facebook.com/262566097142744/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaFacebook className="icon facebook" />
//           </a>

//           <a
//             href="https://discord.gg/cc3j3GbCrX"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaDiscord className="icon discord" />
//           </a>

//           <a
//             href="https://www.linkedin.com/company/team-vibhav"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaLinkedin className="icon linkedin" />
//           </a>

//         </div>
//       </div>
//     </>
//   );
// }




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
//     <>
//       <style>{`
//         /* =============================
//            CENTER POSITION
//         ============================== */
//         .social-container {
//           position: fixed;
//           left: 50%;
//           top: 50%;
//           transform: translate(-50%, -50%);
//           z-index: 999;
//         }

//         /* =============================
//            DARK GLASS BAR
//         ============================== */
//         .social-bar {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           gap: 28px;

//           padding: 18px 30px;

//           background: rgba(0, 0, 0, 0.25);
//           backdrop-filter: blur(14px);

//           /* sharp edges */
//           border-radius: 8px;

//           /* subtle borders */
//           border-top: 1px solid rgba(255, 255, 255, 0.15);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.15);
//         }

//         /* =============================
//            ICON STYLE
//         ============================== */
//         .icon {
//           font-size: 30px;
//           color: #ffffff;
//           cursor: pointer;
//           transition: all 0.25s ease;
//         }

//         .icon:hover {
//           transform: scale(1.25);
//         }

//         .icon:active {
//           transform: scale(1.35);
//         }

//         /* =============================
//            BRAND COLORS
//         ============================== */
//         .github:hover {
//           color: #ffffff;
//         }

//         .instagram:hover {
//           color: #e1306c;
//         }

//         .facebook:hover {
//           color: #1877f2;
//         }

//         .discord:hover {
//           color: #5865f2;
//         }

//         .linkedin:hover {
//           color: #0a66c2;
//         }
//       `}</style>

//       {/* =============================
//            SOCIAL LINKS
//       ============================== */}
//       <div className="social-container">
//         <div className="social-bar">

//           <a
//             href="https://github.com/Team-Vibhav"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaGithub className="icon github" />
//           </a>

//           <a
//             href="https://www.instagram.com/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaInstagram className="icon instagram" />
//           </a>

//           <a
//             href="https://m.facebook.com/262566097142744/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaFacebook className="icon facebook" />
//           </a>

//           <a
//             href="https://discord.gg/cc3j3GbCrX"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaDiscord className="icon discord" />
//           </a>

//           <a
//             href="https://www.linkedin.com/company/team-vibhav"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FaLinkedin className="icon linkedin" />
//           </a>

//         </div>
//       </div>
//     </>
//   );
// }
