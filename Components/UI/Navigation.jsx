import React from "react";
import { useState } from "react";
import Link from "next/link";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  AudioLines,
  BookMarked,
  Box,
  Cpu,
  History,
  Home,
  Mail,
  Slack,
  User,
  Wifi,
} from "lucide-react";
import { Bot } from "lucide-react";
import { useRef } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "AI/ML",
    href: "/projects/ai-ml",
    icon: Bot,
  },
  {
    name: "AR/VR",
    href: "/projects/ar-vr",
    icon: Box,
  },
  {
    name: "IoT",
    href: "/projects/iot",
    icon: Wifi,
  },
  {
    name: "DSP",
    href: "/projects/dsp",
    icon: AudioLines,
  },
  {
    name: "EMBEDDED SYSTEMS",
    href: "/projects/embedded",
    icon: Cpu,
  },

  {
    name: "QUANTUM COMPUTING",
    href: "/projects/quantum",
    icon: Slack,
  },
];
const ourwork = [
  {
    name: "Current Year",
    href: "/work/current-year",
    icon: MdWork,
  },
  {
    name: "Previous Year",
    href: "/work/previous-year",
    icon: HiPresentationChartBar,
  },
];
const ourteam = [
  {
    name: "Current Team",
    href: "/team/current-team",
    icon: RiTeamLine,
  },
  {
    name: "Alumni",
    href: "/team/alumni",
    icon: AiOutlineTeam,
  },
];

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [ProjectVisible, setProjectVisible] = useState(false);
  const [WorkVisible, setWorkVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [TeamVisible, setTeamVisible] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToBottom = () => {
    
    setTimeout(() => {
      if (window.innerWidth <= 640) {
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 100,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 400,
          behavior: "smooth",
        });
      }
    }, 800);
  };

  const toggleNavbar = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (!showNavbar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    setShowNavbar(() => !showNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    setActiveRoute(router.pathname);

    handleResize(); // Call handleResize initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router.pathname]); //for resize

  const toggleProjectVisibility = () => {
    setProjectVisible(!ProjectVisible);
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
    if (ProjectVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleProjectVisibility();
    setWorkVisible(false);
    setTeamVisible(false);
  };

  const toggleWorkVisibility = () => {
    setWorkVisible(!WorkVisible);
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    if (WorkVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleWorkVisibility();
    setProjectVisible(false);
    setTeamVisible(false);
  };

  const toggleTeamVisibility = () => {
    setTeamVisible(!TeamVisible);
  };

  const handleTeamClick = (e) => {
    e.preventDefault();
    if (TeamVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleTeamVisibility();
    setProjectVisible(false);
    setWorkVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };
    // const [blurBack, setBlurBack]=useState(false)
    const handleScroll = () => {
      // Close subnavigation menus when scrolling down
      if (
        window.scrollY > window.scrollY / 2 &&
        (ProjectVisible || WorkVisible || TeamVisible)
      ) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ProjectVisible, WorkVisible, TeamVisible]); //navigation of submenus

  const handleSubmenuClick = () => {
    setProjectVisible(false);
    setWorkVisible(false);
    setTeamVisible(false);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 300) {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return isMobile ? (
    <div
      className={`navbar fixed font-chakra  z-[100] inset-0 flex flex-col w-full h-fit  top-0 z-90 transition-colors duration-300
      ease-in-out  `}
      
    >
      <ul className={`flex items-center   bg-black/20 backdrop-blur-lg justify-between px-3 py-1 mx-auto w-full transition-all duration-500 delay-100 ease-out ${showNavbar? "bg-black/90 bg-blur-xl": "bg-black/20"}`}>
        <li className="z-40 p-1 flex items-center gap-2">
          <Link href="/" className="block">
            <img src="/Assets/Yellow.png" className="h-10  " />
          </Link>
          <div className="h-10 w-[1px] bg-white"></div>

          <Link href="https://festnimbus.nith.ac.in">
            <div className="pl-3 z-50">
              <img src="/Assets/nimbusLogo.png" className="h-10"></img>
            </div>
          </Link>
        </li>

        <li>
          <button
            onClick={toggleNavbar}
            className="relative w-6 h-6 flex flex-col justify-center items-center group"
          >
            <span
              className={`block w-full h-[3px] bg-cyan-400 rounded-md transition-all duration-300 ease-in-out ${showNavbar ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>

            <span
              className={`block w-full h-[3px] bg-cyan-400 rounded-md my-1 transition-all duration-300 ease-in-out ${showNavbar ? "opacity-0" : ""
                }`}
            ></span>

            <span
              className={`block w-full h-[3px] bg-cyan-400 rounded-md transition-all duration-300 ease-in-out ${showNavbar ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>
        </li>
      </ul>

      <div
        className={` transition-all duration-700 delay-100 ease-in-out fixed top-14 bg-black/85 backdrop-blur-lg w-[100%] overflow-y-auto ${showNavbar ? " h-full" : " h-0"
          } `}
      >
        <div className="flex h-screen flex-col justify-between border-e text-gray-100">
          <div className="px-4 py-6">
            <ul className="mt-6 space-y-1 ">
              <li>
                <a
                  href="/"
                  className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/30 hover:text-cyan-400"
                >
                  Home
                </a>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-800/30 hover:text-cyan-400">
                    <span className="text-sm font-medium"> Projects </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href="/projects/ai-ml"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        AI/ML
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/ar-vr"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400 hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        AR/VR
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/iot"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        IOT
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/dsp"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        DSP
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/embedded"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        EMBEDDED SYSTEMS
                      </a>
                    </li>

                    <li>
                      <a
                        href="/projects/quantum"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        QUANTAM COMPUTING
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-800/30 hover:text-cyan-400">
                    <span className="text-sm font-medium"> Team </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href="/team/current-team"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        Current
                      </a>
                    </li>

                    <li>
                      <a
                        href="/team/alumni"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        Alumni
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-800/30 hover:text-cyan-400">
                    <span className="text-sm font-medium"> Work </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href="/work/current-year"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        Current Year
                      </a>
                    </li>

                    <li>
                      <a
                        href="/work/previous-year"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                      >
                        Previous Year
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li
                onClick={() => {
                  document.body.classList.remove("overflow-hidden");
                  setShowNavbar(false);
                  setTimeout(() => {
                    scrollToBottom();
                  }, 800);
                }}
              ><Link href='/' className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100  hover:bg-gray-800/30 hover:text-cyan-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`fixed top-1 left-0 right-0 z-50 flex justify-between p-2 sm:p-3 backdrop:blur-sm backdrop:brightness-75 transition-custom transition-all ease-in-out duration-300 text-3xl sm:text-4xl font-orbitron    ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
    >
      <Link href="/">
        <div className="pl-3 z-50">
          <img src="/Assets/Yellow.png" className=" h-12"></img>
        </div>
      </Link>
      <nav
        ref={navRef}
        className={`fixed top-1 left-0 right-0 z-50 mx-auto w-[95%] sm:w-[85%] md:w-[75%] lg:w-[70%] gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] bg-opacity-60 border  flex-col-reverse flex  max-sm:p-[5px] border-solid border-[#333333] border-opacity-55 transition-custom transition-all ease-in-out duration-300 max-w-[900px] shadow-2xl  ${isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
          } `}
      >
        {ProjectVisible && (
          <div className="max-w-full gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-6 bg-cyan-400/15 border border-cyan-300/50 backdrop-blur-xl flex-col flex overflow-hidden p-3 sm:p-0 rounded-[12px] animateNav transition-custom hover:bg-purple-500/25">
            <div className="gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-4 grid-rows-[auto_auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] justify-items-center grid my-3 sm:my-6 mx-3 sm:mx-6 ">
              {projects.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-center text-xs sm:text-sm  leading-[142.857%] max-sm:leading-none no-underline  transition-all duration-[0.2s] ease-[ease-in-out]"
                  onClick={handleSubmenuClick}
                >
                  <item.icon className="inline mx-2 sm:mx-4 w-4 sm:w-6 h-4 sm:h-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {WorkVisible && (
          <div className="max-w-full gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-6 bg-cyan-400/15 border border-cyan-300/50 backdrop-blur-xl flex-col flex overflow-hidden p-3 sm:p-0 rounded-[12px] animateNav transition-custom hover:bg-purple-500/25">
            <div className="grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-3 sm:my-6 mx-3 sm:mx-6">
              {ourwork.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleSubmenuClick}
                  className="text-white text-center text-xs sm:text-sm leading-[142.857%] max-sm:leading-none no-underline  transition-all duration-[0.2s] ease-[ease-in-out]"
                >
                  <item.icon className="inline mx-2 sm:mx-4 w-4 sm:w-6 h-4 sm:h-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {TeamVisible && (
          <div className="max-w-full gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-6 bg-cyan-400/15 border border-cyan-300/50 backdrop-blur-xl flex-col flex overflow-hidden p-3 sm:p-0 rounded-[12px] animateNav transition-custom hover:bg-purple-500/25">
            <div className="gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-3 sm:my-6 mx-3 sm:mx-6">
              {ourteam.map((item) => (
                <Link
                  onClick={handleSubmenuClick}
                  key={item.name}
                  href={item.href}
                  className="text-white text-center text-xs sm:text-sm  leading-[142.857%] max-sm:leading-none no-underline  transition-all duration-[0.2s] ease-[ease-in-out]"
                >
                  <item.icon className="inline mx-2 sm:mx-4 w-4 sm:w-6 h-4 sm:h-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div
          className={`w-full flex gap-x-0 gap-y-2 rounded-[var(--border-radius--menu-link)] 
    bg-cyan-400/15 border border-cyan-300/50 justify-evenly items-center overflow-auto p-1 max-sm:p-2 
    transition-custom text-lg sm:text-xl md:text-2xl font-orbitron shadow-2xl shadow-cyan-400/20
 backdrop-blur-xl
    ${isVisible ? "backdrop-blur-xl" : ""}`}
        >

          {/* Projects */}
          <p
            onClick={handleProjectClick}
            className={`menuLink ${activeRoute.startsWith("/projects") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2 ">
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/projects/") || ProjectVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"["}
              </span>
              <span className="flex items-center h-full leading-none text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] pt-[1px] transition-colors group-hover:text-purple-500">Projects</span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/projects/") || ProjectVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"]"}
              </span>
            </div>
          </p>

          {/* Work */}
          <p
            onClick={handleWorkClick}
            className={`menuLink ${activeRoute.startsWith("/work/") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2">
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/work/") || WorkVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"["}
              </span>
              <span className="flex items-center h-full leading-none pt-[1px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] transition-colors group-hover:text-purple-500">Work</span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/work/") || WorkVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"]"}
              </span>
            </div>
          </p>

          {/* Home */}
          <Link href="/" className={`menuLink ${location.pathname === "/" ? "active" : ""}`}>
            <div className="group flex items-center gap-2">
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${location.pathname === "/" ? "opacity-100" : "opacity-0 group-hover:opacity-80 "
                  }`}
              >
                {"["}
              </span>
              <span className="flex items-center h-full leading-none pt-[1px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] transition-colors group-hover:text-purple-500">Home</span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${location.pathname === "/" ? "opacity-100" : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"]"}
              </span>
            </div>
          </Link>

          {/* Team */}
          <p
            onClick={handleTeamClick}
            className={`menuLink ${activeRoute.startsWith("/team") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2">
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/team/") || TeamVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"["}
              </span>
              <span className="flex items-center h-full leading-none pt-[1px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] transition-colors group-hover:text-purple-500">Team</span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/team/") || TeamVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"]"}
              </span>
            </div>
          </p>

          {/* Contact */}
          <Link href="/" scroll={false}>
            <p onClick={scrollToBottom} className="menuLink">
              <div className="group flex items-center gap-2">
                <span className="text-3xl opacity-0 group-hover:opacity-80 pb-[1px]">{"["}</span>
                <span className="flex items-center h-full leading-none pt-[1px] text-[1rem] transition-colors group-hover:text-purple-500">Contact</span>
                <span className="text-3xl opacity-0 group-hover:opacity-80 pb-[1px]">{"]"}</span>
              </div>
            </p>
          </Link>
        </div>

      </nav>
      <Link href="https://festnimbus.nith.ac.in">
        <div className="pr-5 z-50">
          <img src="/Assets/nimbusLogo.png" className="h-12"></img>
        </div>
      </Link>
    </div>
  );
}
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// // React Icons
// import { RiTeamLine } from "react-icons/ri";
// import { AiOutlineTeam } from "react-icons/ai";
// import { HiPresentationChartBar } from "react-icons/hi";
// import { MdWork } from "react-icons/md";

// // Lucide Icons
// import {
//   Cpu,
//   Box,
//   Slack,
//   Wifi,
//   Blocks,
//   Home,
//   Mail,
//   Bot,
//   AudioLines,
// } from "lucide-react";

// /* ===== DATA ===== */

// const projects = [
//   { name: "AI / ML", href: "/projects/ai-ml", icon: Bot },
//   { name: "AR / VR", href: "/projects/ar-vr", icon: Box },
//   { name: "Quantum", href: "/projects/quantum", icon: Slack },
//   { name: "DSP", href: "/projects/dsp", icon: AudioLines },
//   { name: "Embedded", href: "/projects/embedded", icon: Cpu },
//   { name: "Blockchain", href: "/projects/blockchain", icon: Blocks },
//   { name: "IoT", href: "/projects/iot", icon: Wifi },
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

//   /* ===== CLOSE MENU ON OUTSIDE CLICK ===== */
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (navRef.current && !navRef.current.contains(e.target)) {
//         setActiveMenu(null);
//       }
//     };
//     document.addEventListener("click", handleClick);
//     return () => document.removeEventListener("click", handleClick);
//   }, []);

//   const scrollToBottom = () => {
//     setActiveMenu(null);
//     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//   };

//   const dockItems = [
//     { key: "projects", label: "PROJECTS", sub: "OUR WORK", icon: Cpu },
//     { key: "work", label: "WORK", sub: "WHAT WE DO", icon: MdWork },
//     { key: "home", label: "HOME", sub: "MAIN HUB", icon: Home },
//     { key: "team", label: "TEAM", sub: "OUR CREW", icon: RiTeamLine },
//     { key: "contact", label: "CONTACT", sub: "REACH US", icon: Mail },
//   ];

//   return (
//     <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] font-orbitron">
//       <div ref={navRef} className="relative flex gap-6">

//         {/* ===== DOCK BUTTONS ===== */}
//         {dockItems.map((item) => (
//           <button
//             key={item.key}
//             type="button"
//             onClick={() => {
//               if (item.key === "home") {
//                 setActiveMenu(null);
//                 router.push("/");
//               } else if (item.key === "contact") {
//                 scrollToBottom();
//               } else {
//                 setActiveMenu((prev) => (prev === item.key ? null : item.key));
//               }
//             }}
//             className="
//               group relative
//               w-[150px] h-[110px]
//               rounded-2xl
//               bg-cyan-400/20 backdrop-blur-sm
//               border border-cyan-400
//               shadow-[0_6px_18px_rgba(0,0,0,0.35)]
//               flex flex-col items-center justify-center gap-2
//               text-white
//               transition-all duration-300
//               hover:scale-105
//               hover:shadow-[0_0_30px_rgba(34,211,238,0.75)]
//             "
//           >
//             <span className="text-xs tracking-[0.25em]">
//               {item.label}
//             </span>

//             <item.icon
//               size={26}
//               className="text-white group-hover:text-cyan-300 transition-colors"
//             />

//             <span className="text-[11px] tracking-[0.25em] text-cyan-300">
//               {item.sub}
//             </span>
//           </button>
//         ))}

//         {/* ===== SUBMENU ===== */}
//         <AnimatePresence>
//           {activeMenu && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               className="
//                 absolute bottom-[140px] left-1/2 -translate-x-1/2
//                 w-[620px]
//                 bg-cyan-400/20 backdrop-blur-sm
//                 border border-cyan-400
//                 rounded-2xl
//                 shadow-2xl
//               "
//             >
//               <div
//                 className={`grid gap-6 px-10 py-8 place-items-center ${
//                   activeMenu === "projects" ? "grid-cols-3" : "grid-cols-2"
//                 }`}
//               >
//                 {(activeMenu === "projects"
//                   ? projects
//                   : activeMenu === "work"
//                   ? ourwork
//                   : ourteam
//                 ).map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => setActiveMenu(null)}
//                     className="flex items-center gap-3 text-white hover:text-cyan-300 transition"
//                   >
//                     <item.icon size={18} />
//                     <span className="text-xs tracking-widest">
//                       {item.name}
//                     </span>
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
