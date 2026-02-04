"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Icons
import { RiTeamLine, AiOutlineTeam } from "react-icons/ri";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { AudioLines, Box, Cpu, Slack, Wifi, Bot,Blocks } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { name: "AI/ML", href: "/projects/ai-ml", icon: Bot },
  { name: "AR/VR", href: "/projects/ar-vr", icon: Box },
  { name: "Quantum Computing", href: "/projects/quantum", icon: Slack },
  // { name: "IoT", href: "/projects/iot", icon: Wifi },
  { name: "DSP", href: "/projects/dsp", icon: AudioLines },
  { name: "Embedded Systems", href: "/projects/embedded", icon: Cpu },
  { name: "BlockChain", href: "/projects/blockchain", icon: Blocks },
  // { name: "Quantum Computing", href: "/projects/quantum", icon: Slack },
  { name: "IoT", href: "/projects/iot", icon: Wifi },
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
    <div className={`fixed top-2 left-0 right-0 z-[100] transition-all duration-500 font-orbitron ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
      
      {/* Reduced logo size to fit the smaller bar */}
      <Link href="/" className="absolute left-10 top-2">
        <img src="/Assets/Yellow.png" className="h-10 hover:scale-110 transition-transform" alt="Logo" />
      </Link>
      <Link href="https://festnimbus.nith.ac.in" className="absolute right-10 top-2">
        <img src="/Assets/nimbusLogo.png" className="h-10 hover:scale-110 transition-transform" alt="Nimbus" />
      </Link>

      <div ref={navRef} className="mx-auto w-full max-w-4xl flex flex-col items-center">
        {/* CHANGES MADE:
            1. py-8 -> py-3 (Vertical padding)
            2. px-20 -> px-10 (Horizontal padding)
            3. gap-20 -> gap-10 (Space between items)
            4. text-[18px] -> text-[14px] (Font size)
        */}
        <nav className={`w-full bg-black/85 backdrop-blur-2xl border border-white/20 px-10 py-3 flex justify-center items-center gap-10 shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-300 ${activeMenu ? 'rounded-t-2xl border-b-white/5' : 'rounded-2xl'}`}>
          
          <p onClick={() => setActiveMenu(activeMenu === 'projects' ? null : 'projects')} 
             className={`cursor-pointer text-[14px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'projects' ? 'underline underline-offset-[8px] decoration-cyan-500' : 'hover:opacity-70'}`}>
            Projects
          </p>

          <p onClick={() => setActiveMenu(activeMenu === 'work' ? null : 'work')} 
             className={`cursor-pointer text-[14px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'work' ? 'underline underline-offset-[8px] decoration-cyan-500' : 'hover:opacity-70'}`}>
            Work
          </p>
          
          <p onClick={() => { setActiveMenu(null); router.push("/"); }} 
             className="cursor-pointer text-[14px] font-medium tracking-[0.1em] text-white hover:opacity-70 transition-colors">
            Home
          </p>
          
          <p onClick={() => setActiveMenu(activeMenu === 'team' ? null : 'team')} 
             className={`cursor-pointer text-[14px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'team' ? 'underline underline-offset-[8px] decoration-cyan-500' : 'hover:opacity-70'}`}>
            Team
          </p>
          
          <button onClick={scrollToBottom} className="text-[14px] font-medium tracking-[0.1em] text-white hover:text-purple-400 transition-colors">
            Contact
          </button>
        </nav>

        {/* Integrated Submenu - slightly tightened padding */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full bg-black/95 backdrop-blur-3xl border-x border-b border-white/10 rounded-b-xl overflow-hidden shadow-2xl"
            >
              <div className="w-[94%] mx-auto h-[1px] bg-white/10 mt-2"></div>

                <div
                  className={`grid py-10 px-10 gap-x-8 gap-y-8 place-items-center ${
                    activeMenu === "projects" ? "grid-cols-3" : "grid-cols-2"
                  }`}
                >

                {(activeMenu === 'projects' ? projects : activeMenu === 'work' ? ourwork : ourteam).map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-center justify-center gap-4 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon className="w-5 h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all" />}
                      <span className="text-[13px] font-medium tracking-[0.1em] text-white transition-colors">
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
// import { useRouter } from "next/navigation";

// // Icons
// import { RiTeamLine, AiOutlineTeam } from "react-icons/ri";
// import { HiPresentationChartBar } from "react-icons/hi";
// import { MdWork } from "react-icons/md";
// import { AudioLines, Box, Cpu, Slack, Wifi, Bot } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const projects = [
//   { name: "AI/ML", href: "/projects/ai-ml", icon: Bot },
//   { name: "AR/VR", href: "/projects/ar-vr", icon: Box },
//   { name: "IoT", href: "/projects/iot", icon: Wifi },
//   { name: "DSP", href: "/projects/dsp", icon: AudioLines },
//   { name: "Embedded Systems", href: "/projects/embedded", icon: Cpu },
//   { name: "Quantum Computing", href: "/projects/quantum", icon: Slack },
// ];

// const ourwork = [
//   { name: "Current Year", href: "/work/current-year", icon: MdWork },
//   { name: "Previous Year", href: "/work/previous-year", icon: HiPresentationChartBar },
// ];

// const ourteam = [
//   { name: "Current Team", href: "/team/current-team", icon: RiTeamLine },
//   { name: "Alumni", href: "/team/alumni", icon: AiOutlineTeam },
// ];

// export default function Navigation() {
//   const router = useRouter();
//   const navRef = useRef(null);
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => { setShowNavbar(true); }, 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const handler = (e) => {
//       if (navRef.current && !navRef.current.contains(e.target)) setActiveMenu(null);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const scrollToBottom = () => {
//     setActiveMenu(null);
//     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//   };

//   return (
//     <div className={`sticky top-2 left-0 right-0 z-[100] transition-all duration-500 font-orbitron ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
      
//       {/* Reduced logo size to fit the smaller bar */}
//       <Link href="/" className="absolute left-10 top-2">
//         <img src="/Assets/Yellow.png" className="h-10 hover:scale-110 transition-transform" alt="Logo" />
//       </Link>
//       <Link href="https://festnimbus.nith.ac.in" className="absolute right-10 top-2">
//         <img src="/Assets/nimbusLogo.png" className="h-10 hover:scale-110 transition-transform" alt="Nimbus" />
//       </Link>

//       <div ref={navRef} className="mx-auto w-full max-w-4xl flex flex-col items-center">
//         {/* CHANGES MADE:
//             1. py-8 -> py-3 (Vertical padding)
//             2. px-20 -> px-10 (Horizontal padding)
//             3. gap-20 -> gap-10 (Space between items)
//             4. text-[18px] -> text-[14px] (Font size)
//         */}
//         <nav className={`w-full bg-black/85 backdrop-blur-2xl border border-white/20 px-10 py-3 flex justify-center items-center gap-10 shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-300 ${activeMenu ? 'rounded-t-2xl border-b-white/5' : 'rounded-2xl'}`}>
          
//           <p onClick={() => setActiveMenu(activeMenu === 'projects' ? null : 'projects')} 
//              className={`cursor-pointer text-[14px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'projects' ? 'underline underline-offset-[8px] decoration-cyan-500' : 'hover:opacity-70'}`}>
//             Projects
//           </p>

//           <p onClick={() => setActiveMenu(activeMenu === 'work' ? null : 'work')} 
//              className={`cursor-pointer text-[14px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'work' ? 'underline underline-offset-[8px] decoration-cyan-500' : 'hover:opacity-70'}`}>
//             Work
//           </p>
          
//           <p onClick={() => { setActiveMenu(null); router.push("/"); }} 
//              className="cursor-pointer text-[14px] font-medium tracking-[0.1em] text-white hover:opacity-70 transition-colors">
//             Home
//           </p>
          
//           <p onClick={() => setActiveMenu(activeMenu === 'team' ? null : 'team')} 
//              className={`cursor-pointer text-[14px] font-medium tracking-[0.1em] transition-all text-white ${activeMenu === 'team' ? 'underline underline-offset-[8px] decoration-cyan-500' : 'hover:opacity-70'}`}>
//             Team
//           </p>
          
//           <button onClick={scrollToBottom} className="text-[14px] font-medium tracking-[0.1em] text-white hover:text-purple-400 transition-colors">
//             Contact
//           </button>
//         </nav>

//         {/* Integrated Submenu - slightly tightened padding */}
//         <AnimatePresence>
//           {activeMenu && (
//             <motion.div 
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="w-full bg-black/95 backdrop-blur-3xl border-x border-b border-white/10 rounded-b-xl overflow-hidden shadow-2xl"
//             >
//               <div className="w-[94%] mx-auto h-[1px] bg-white/10 mt-2"></div>

//               <div className={`grid py-10 px-10 gap-x-8 gap-y-8 items-center justify-center ${activeMenu === 'projects' ? 'grid-cols-3' : 'grid-cols-2'}`}>
//                 {(activeMenu === 'projects' ? projects : activeMenu === 'work' ? ourwork : ourteam).map((item) => (
//                   <Link 
//                     key={item.name} 
//                     href={item.href} 
//                     onClick={() => setActiveMenu(null)}
//                     className="group flex items-center justify-center gap-4 transition-all"
//                   >
//                     <div className="flex items-center gap-3">
//                       {item.icon && <item.icon className="w-5 h-5 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all" />}
//                       <span className="text-[13px] font-medium tracking-[0.1em] text-white transition-colors">
//                         {item.name}
//                       </span>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// // Icons
// import { RiTeamLine, AiOutlineTeam } from "react-icons/ri";
// import { HiPresentationChartBar } from "react-icons/hi";
// import { MdWork } from "react-icons/md";
// import { AudioLines, Box, Cpu, Slack, Wifi, Bot } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const projects = [
//   { name: "AI/ML", href: "/projects/ai-ml", icon: Bot },
//   { name: "AR/VR", href: "/projects/ar-vr", icon: Box },
//   { name: "IoT", href: "/projects/iot", icon: Wifi },
//   { name: "DSP", href: "/projects/dsp", icon: AudioLines },
//   { name: "Embedded Systems", href: "/projects/embedded", icon: Cpu },
//   { name: "Quantum Computing", href: "/projects/quantum", icon: Slack },
// ];

// const ourwork = [
//   { name: "Current Year", href: "/work/current-year", icon: MdWork },
//   { name: "Previous Year", href: "/work/previous-year", icon: HiPresentationChartBar },
// ];

// const ourteam = [
//   { name: "Current Team", href: "/team/current-team", icon: RiTeamLine },
//   { name: "Alumni", href: "/team/alumni", icon: AiOutlineTeam },
// ];

// export default function Navigation() {
//   const router = useRouter();
//   const navRef = useRef(null);

//   const [activeMenu, setActiveMenu] = useState(null);
//   const [visible, setVisible] = useState(true);

//   const lastScrollY = useRef(0);

//   /* ---------------- SCROLL LOGIC (SAFE) ---------------- */
//   useEffect(() => {
//     const onScroll = () => {
//       // 🔒 If menu is open → don't hide navbar
//       if (activeMenu) return;

//       const currentY = window.scrollY;

//       if (currentY > lastScrollY.current && currentY > 80) {
//         setVisible(false);
//       } else if (currentY < lastScrollY.current) {
//         setVisible(true);
//       }

//       lastScrollY.current = currentY;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [activeMenu]);

//   /* ---------------- OUTSIDE CLICK ---------------- */
//   useEffect(() => {
//     const handler = (e) => {
//       if (navRef.current && !navRef.current.contains(e.target)) {
//         setActiveMenu(null);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const scrollToBottom = () => {
//     setActiveMenu(null);
//     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//   };

//   return (
//     <motion.div
//       animate={{ y: visible ? 0 : -120 }}
//       transition={{ duration: 0.35, ease: "easeOut" }}
//       className="fixed top-2 left-0 right-0 z-[9999] font-orbitron"
//     >
//       {/* Logos */}
//       <Link href="/" className="absolute left-10 top-2">
//         <img src="/Assets/Yellow.png" className="h-10 hover:scale-110 transition-transform" />
//       </Link>

//       <Link href="https://festnimbus.nith.ac.in" className="absolute right-10 top-2">
//         <img src="/Assets/nimbusLogo.png" className="h-10 hover:scale-110 transition-transform" />
//       </Link>

//       <div ref={navRef} className="mx-auto w-full max-w-4xl flex flex-col items-center">
//         {/* NAV BAR */}
//         <nav
//           className={`w-full bg-black/85 backdrop-blur-2xl border border-white/20
//           px-10 py-3 flex justify-center items-center gap-10
//           shadow-[0_0_40px_rgba(0,0,0,0.8)]
//           transition-all duration-300
//           ${activeMenu ? "rounded-t-2xl border-b-white/5" : "rounded-2xl"}`}
//         >
//           <p onClick={() => setActiveMenu(activeMenu === "projects" ? null : "projects")}
//              className={`cursor-pointer text-[14px] tracking-[0.1em] text-white
//              ${activeMenu === "projects" ? "underline underline-offset-[8px] decoration-cyan-500" : "hover:opacity-70"}`}>
//             Projects
//           </p>

//           <p onClick={() => setActiveMenu(activeMenu === "work" ? null : "work")}
//              className={`cursor-pointer text-[14px] tracking-[0.1em] text-white
//              ${activeMenu === "work" ? "underline underline-offset-[8px] decoration-cyan-500" : "hover:opacity-70"}`}>
//             Work
//           </p>

//           <p onClick={() => { setActiveMenu(null); router.push("/"); }}
//              className="cursor-pointer text-[14px] tracking-[0.1em] text-white hover:opacity-70">
//             Home
//           </p>

//           <p onClick={() => setActiveMenu(activeMenu === "team" ? null : "team")}
//              className={`cursor-pointer text-[14px] tracking-[0.1em] text-white
//              ${activeMenu === "team" ? "underline underline-offset-[8px] decoration-cyan-500" : "hover:opacity-70"}`}>
//             Team
//           </p>

//           <button onClick={scrollToBottom}
//             className="text-[14px] tracking-[0.1em] text-white hover:text-purple-400">
//             Contact
//           </button>
//         </nav>

//         {/* SUBMENU */}
//         <AnimatePresence>
//           {activeMenu && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="w-full bg-black/95 backdrop-blur-3xl border-x border-b border-white/10 rounded-b-xl overflow-hidden shadow-2xl"
//             >
//               <div className={`grid py-10 px-10 gap-8 justify-center
//                 ${activeMenu === 'projects' ? 'grid-cols-3' : 'grid-cols-2'}`} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }
