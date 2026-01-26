"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Icons
import { RiTeamLine, AiOutlineTeam } from "react-icons/ri";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { AudioLines, Box, Cpu, Slack, Wifi, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { name: "AI/ML", href: "/projects/ai-ml", icon: Bot },
  { name: "AR/VR", href: "/projects/ar-vr", icon: Box },
  { name: "IoT", href: "/projects/iot", icon: Wifi },
  { name: "DSP", href: "/projects/dsp", icon: AudioLines },
  { name: "Embedded Systems", href: "/projects/embedded", icon: Cpu },
  { name: "Quantum Computing", href: "/projects/quantum", icon: Slack },
];

const ourwork = [
  { name: "Current Year", href: "/work/current-year", icon: MdWork },
  { name: "Previous Year", href: "/work/previous-year", icon: HiPresentationChartBar },
];

const ourteam = [
  { name: "Current Team", href: "/team/current-team", icon: RiTeamLine },
  { name: "Alumni", href: "/team/alumni", icon: AiOutlineTeam },
];

export default function Navigation() {
  const router = useRouter();
  const navRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => { setShowNavbar(true); }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setActiveMenu(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollToBottom = () => {
    setActiveMenu(null);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    /* Changed top-8 to top-2 to shift the entire bar upwards */
    <div className={`fixed top-2 left-0 right-0 z-[100] transition-all duration-500 font-orbitron ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
      
      {/* External Logos - Changed top-5 to top-3 to align with the new bar height */}
      <Link href="/" className="absolute left-10 top-3">
        <img src="/Assets/Yellow.png" className="h-14 hover:scale-110 transition-transform" alt="Logo" />
      </Link>
      <Link href="https://festnimbus.nith.ac.in" className="absolute right-10 top-3">
        <img src="/Assets/nimbusLogo.png" className="h-14 hover:scale-110 transition-transform" alt="Nimbus" />
      </Link>

      <div ref={navRef} className="mx-auto w-full max-w-6xl flex flex-col items-center">
        {/* Main Navbar */}
        <nav className={`w-full bg-black/85 backdrop-blur-2xl border border-white/20 px-20 py-8 flex justify-center items-center gap-20 shadow-[0_0_60px_rgba(0,0,0,0.9)] transition-all duration-300 ${activeMenu ? 'rounded-t-2xl border-b-white/5' : 'rounded-2xl'}`}>
          
          <p onClick={() => setActiveMenu(activeMenu === 'projects' ? null : 'projects')} 
             className={`cursor-pointer text-[18px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'projects' ? 'underline underline-offset-[14px] decoration-cyan-500' : 'hover:opacity-70'}`}>
            Projects
          </p>

          <p onClick={() => setActiveMenu(activeMenu === 'work' ? null : 'work')} 
             className={`cursor-pointer text-[18px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'work' ? 'underline underline-offset-[14px] decoration-cyan-500' : 'hover:opacity-70'}`}>
            Work
          </p>
          
          <p onClick={() => { setActiveMenu(null); router.push("/"); }} 
             className="cursor-pointer text-[18px] font-medium tracking-[0.1em] text-white hover:opacity-70 transition-colors">
            Home
          </p>
          
          <p onClick={() => setActiveMenu(activeMenu === 'team' ? null : 'team')} 
             className={`cursor-pointer text-[18px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'team' ? 'underline underline-offset-[14px] decoration-cyan-500' : 'hover:opacity-70'}`}>
            Team
          </p>
          
          <button onClick={scrollToBottom} className="text-[18px] font-medium tracking-[0.1em] text-white hover:text-purple-400 transition-colors">
            Contact
          </button>
        </nav>

        {/* Integrated Submenu */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full bg-black/95 backdrop-blur-3xl border-x border-b border-white/10 rounded-b-xl overflow-hidden shadow-2xl"
            >
              <div className="w-[94%] mx-auto h-[1px] bg-white/10 mt-2"></div>

              <div className={`grid py-16 px-16 gap-x-12 gap-y-14 items-center justify-center ${activeMenu === 'projects' ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {(activeMenu === 'projects' ? projects : activeMenu === 'work' ? ourwork : ourteam).map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-center justify-center gap-6 transition-all"
                  >
                    <div className="flex items-center gap-5">
                      {item.icon && <item.icon className="w-8 h-8 text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all" />}
                      <span className="text-[15px] font-medium tracking-[0.1em] text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// import { RiTeamLine } from "react-icons/ri";
// import { AiOutlineTeam } from "react-icons/ai";
// import { HiPresentationChartBar } from "react-icons/hi";
// import { MdWork } from "react-icons/md";

// import {
//   AudioLines,
//   Box,
//   Cpu,
//   Slack,
//   Wifi,
//   Bot,
// } from "lucide-react";

// /* ---------------- DATA ---------------- */

// const projects = [
//   { name: "AI/ML", href: "/projects/ai-ml", icon: Bot },
//   { name: "AR/VR", href: "/projects/ar-vr", icon: Box },
//   { name: "IoT", href: "/projects/iot", icon: Wifi },
//   { name: "DSP", href: "/projects/dsp", icon: AudioLines },
//   { name: "EMBEDDED SYSTEMS", href: "/projects/embedded", icon: Cpu },
//   { name: "QUANTUM COMPUTING", href: "/projects/quantum", icon: Slack },
// ];

// const ourwork = [
//   { name: "Current Year", href: "/work/current-year", icon: MdWork },
//   { name: "Previous Year", href: "/work/previous-year", icon: HiPresentationChartBar },
// ];

// const ourteam = [
//   { name: "Current Team", href: "/team/current-team", icon: RiTeamLine },
//   { name: "Alumni", href: "/team/alumni", icon: AiOutlineTeam },
// ];

// /* ---------------------------------------------------- */

// export default function Navigation() {
//   const router = useRouter();
//   const navRef = useRef(null);

//   const [isMobile, setIsMobile] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);

//   const [ProjectVisible, setProjectVisible] = useState(false);
//   const [WorkVisible, setWorkVisible] = useState(false);
//   const [TeamVisible, setTeamVisible] = useState(false);

//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   /* ---------------- RESPONSIVE ---------------- */

//   useEffect(() => {
//     const resize = () => setIsMobile(window.innerWidth < 768);
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   /* ---------------- SCROLL SHOW / HIDE ---------------- */

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(window.scrollY < lastScrollY);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [lastScrollY]);

//   /* ---------------- CLICK OUTSIDE ---------------- */

//   useEffect(() => {
//     const handler = (e) => {
//       if (navRef.current && !navRef.current.contains(e.target)) {
//         setProjectVisible(false);
//         setWorkVisible(false);
//         setTeamVisible(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   /* ---------------- HELPERS ---------------- */

//   const closeAll = () => {
//     setProjectVisible(false);
//     setWorkVisible(false);
//     setTeamVisible(false);
//   };

//   const scrollToBottom = () => {
//     setTimeout(() => {
//       window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: "smooth",
//       });
//     }, 600);
//   };

//   /* ====================================================== */
//   /* ===================== MOBILE ========================= */
//   /* ====================================================== */

//   if (isMobile) {
//   return (
//     <div className="fixed inset-0 z-[100] font-orbitron">

//       {/* ================= TOP BAR ================= */}
//       <div className="flex justify-between items-center px-4 py-2 bg-black/50 backdrop-blur-lg">

//         {/* Logos */}
//         <div className="flex items-center gap-3">
//           <a href="/">
//             <img src="/Assets/Yellow.png" className="h-10" />
//           </a>

//           <div className="h-8 w-[1px] bg-white/70" />

//           <a href="https://festnimbus.nith.ac.in">
//             <img src="/Assets/nimbusLogo.png" className="h-10" />
//           </a>
//         </div>

//         {/* Hamburger */}
//         <button
//           onClick={() => {
//             setShowNavbar(!showNavbar);
//             document.body.classList.toggle("overflow-hidden");
//           }}
//           className="w-7 h-7 flex flex-col justify-center"
//         >
//           <span
//             className={`h-[3px] bg-white mb-1 transition-all duration-300 ${
//               showNavbar && "rotate-45 translate-y-2"
//             }`}
//           />
//           <span
//             className={`h-[3px] bg-white mb-1 transition-all duration-300 ${
//               showNavbar && "opacity-0"
//             }`}
//           />
//           <span
//             className={`h-[3px] bg-white transition-all duration-300 ${
//               showNavbar && "-rotate-45 -translate-y-2"
//             }`}
//           />
//         </button>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       <div
//         className={`fixed top-[56px] left-0 w-full bg-black/90 backdrop-blur-xl
//         transition-all duration-500
//         ${showNavbar ? "h-full" : "h-0 overflow-hidden"}`}
//       >
//         <div className="flex flex-col px-8 py-10 text-white text-2xl space-y-6">

//           <a href="#home" onClick={closeMenu}>Home</a>
//           <a href="#about" onClick={closeMenu}>About</a>
//           <a href="#gallery" onClick={closeMenu}>Gallery</a>
//           <a href="#cc" onClick={closeMenu}>CC</a>
//           <a href="#games" onClick={closeMenu}>Games</a>
//           <a href="#faqs" onClick={closeMenu}>FAQs</a>
//           <a href="#contact" onClick={closeMenu}>Contact</a>

//         </div>
//       </div>
//     </div>
//   );
// }

// function closeMenu() {
//   setShowNavbar(false);
//   document.body.classList.remove("overflow-hidden");
// }


         

//   /* ====================================================== */
//   /* ===================== DESKTOP ======================== */
//   /* ====================================================== */

//   return (
//     <div
//       className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 font-orbitron
//       ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
//     >
//       {/* Logos */}
//       <Link href="/" className="absolute left-5 top-2 z-50">
//         <img src="/Assets/Yellow.png" className="h-12" />
//       </Link>

//       <Link href="https://festnimbus.nith.ac.in" className="absolute right-5 top-2 z-50">
//         <img src="/Assets/nimbusLogo.png" className="h-12" />
//       </Link>

//       {/* Navbar */}
//       <nav
//         ref={navRef}
//         className="
//           mx-auto mt-6
//           w-[80%] max-w-[1400px]
//           bg-black/30 backdrop-blur-md
//           rounded-2xl shadow-2xl
//           px-8 py-3
//           flex justify-center gap-16
//         "
//       >
//         <a href="#home" className="nav-link">Home</a>
//         <a href="#about" className="nav-link">About</a>
//         <a href="#gallery" className="nav-link">Gallery</a>
//         <a href="#cc" className="nav-link">CC</a>
//         <a href="#games" className="nav-link">Games</a>
//         <a href="#faqs" className="nav-link">FAQs</a>
//         <a href="#contact" className="nav-link">Contact</a>
//         {/* SUBMENUS */}
//         {ProjectVisible && (
//           <div className="grid grid-cols-3 gap-6 p-6 bg-black/70 rounded-xl">
//             {projects.map(item => (
//               <Link key={item.name} href={item.href} onClick={closeAll}>
//                 <item.icon className="mx-auto mb-1" />
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}

//         {WorkVisible && (
//           <div className="grid grid-cols-2 gap-6 p-6 bg-black/70 rounded-xl">
//             {ourwork.map(item => (
//               <Link key={item.name} href={item.href} onClick={closeAll}>
//                 <item.icon className="mx-auto mb-1" />
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}

//         {TeamVisible && (
//           <div className="grid grid-cols-2 gap-6 p-6 bg-black/70 rounded-xl">
//             {ourteam.map(item => (
//               <Link key={item.name} href={item.href} onClick={closeAll}>
//                 <item.icon className="mx-auto mb-1" />
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}

//         {/* MAIN MENU */}
//         <div className="flex justify-evenly p-2 text-white">
//           <p onClick={() => { setProjectVisible(!ProjectVisible); setWorkVisible(false); setTeamVisible(false); }}>Projects</p>
//           <p onClick={() => { setWorkVisible(!WorkVisible); setProjectVisible(false); setTeamVisible(false); }}>Work</p>

//           <Link href="/" className={router.pathname === "/" ? "active" : ""}>
//             Home
//           </Link>

//           <p onClick={() => { setTeamVisible(!TeamVisible); setProjectVisible(false); setWorkVisible(false); }}>Team</p>

//           <button onClick={scrollToBottom}>Contact</button>
//         </div>
//       </nav>
//     </div>
//   );
// }



// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";

// export default function Navigation() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const navRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(window.scrollY < lastScrollY);
//       }
//       setLastScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const toggleNavbar = () => setShowNavbar(!showNavbar);

//   if (isMobile) {
//     return (
//       <div className="fixed top-0 left-0 w-full z-[999] font-orbitron">
//         {/* Top logos outside navbar */}
//         <div className="absolute top-4 left-4 z-50">
//           <Link href="/"><img src="/Assets/Yellow.png" className="h-10" /></Link>
//         </div>
//         <div className="absolute top-4 right-4 z-50">
//           <Link href="https://festnimbus.nith.ac.in"><img src="/Assets/nimbusLogo.png" className="h-10" /></Link>
//         </div>

//         {/* Hamburger */}
//         <ul className="flex items-center justify-between px-4 py-2 bg-black/75 backdrop-blur-lg mt-12">
//           <button onClick={toggleNavbar} className="text-white text-3xl">☰</button>
//         </ul>

//         {showNavbar && (
//           <div className="bg-black/90 backdrop-blur-xl min-h-screen px-6 py-10 space-y-8 flex flex-col items-center">
//             {["Home", "Projects", "Team", "Work", "Contact"].map((item) => (
//               <p
//                 key={item}
//                 className="
//                   text-3xl font-bold text-white
//                   transition-all duration-300
//                   hover:text-transparent
//                   hover:bg-gradient-to-b
//                   hover:from-white
//                   hover:to-purple-900
//                   hover:bg-clip-text
//                   shimmer
//                 "
//               >
//                 {item}
//               </p>
//             ))}
//           </div>
//         )}

//         <style jsx>{`
//           @keyframes shimmer {
//             0% { background-position: 0% 50%; }
//             100% { background-position: 200% 50%; }
//           }
//           .shimmer {
//             background-size: 200% auto;
//             animation: shimmer 2.8s linear infinite;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   /* Desktop */
//   return (
//     <div className="fixed top-0 left-0 w-full z-[999] font-orbitron">
//       {/* Top logos outside navbar */}
//       <div className="absolute top-4 left-4 z-50">
//         <Link href="/"><img src="/Assets/Yellow.png" className="h-12" /></Link>
//       </div>
//       <div className="absolute top-4 right-4 z-50">
//         <Link href="https://festnimbus.nith.ac.in"><img src="/Assets/nimbusLogo.png" className="h-12" /></Link>
//       </div>

//       {/* Navbar */}
//       <nav
//         ref={navRef}
//         className={`
//           mx-auto mt-6  /* distance from top logos */
//           w-[80%] max-w-[1400px]
//           bg-black/30 backdrop-blur-md
//           rounded-2xl shadow-2xl
//           px-8 py-3 flex justify-center gap-16
//           ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
//           transition-all duration-300
//         `}
//       >
//         {["Home", "Projects", "Team", "Work", "Contact"].map((item) => (
//           <span
//             key={item}
//             className={`
//               relative cursor-pointer
//               text-base md:text-lg font-semibold
//               text-white
//               transition-all duration-300
//               hover:text-transparent
//               hover:bg-gradient-to-b
//               hover:from-white
//               hover:to-purple-900
//               hover:bg-clip-text
//               shimmer
//             `}
//           >
//             {item}
//           </span>
//         ))}
//       </nav>

//       <style jsx>{`
//         @keyframes shimmer {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 200% 50%; }
//         }
//         .shimmer {
//           background-size: 200% auto;
//           animation: shimmer 2.8s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }


