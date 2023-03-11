import React from "react";
import { FaLinkedin, FaGithub , FaFacebook , FaInstagram , FaDiscord } from "react-icons/fa";
export default function SocialLinks  ()  {
    return (
      <div className="flex flex-wrap justify-center items-center ">
       
            <a
              className=" flex items-center justify-center  p-1.5 rounded-full bg-white text-black mt-4 hover:text-white hover:bg-[#303033] ease-in-out duration-200 hover:scale-125"
              
              href="https://github.com/Team-Vibhav" target={"_blank"} 
            >
              <FaGithub className="  w-7 h-7 md:w-10 md:h-10" />
            </a>
            


            <a
              className="flex items-center justify-center  p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-gradient-to-tr hover:from-[#fa7e1e] hover:to-[#962fbf] ease-in-out duration-200 hover:scale-125"
              
              href="https://www.instagram.com/team_vibhav/"
            >
              <FaInstagram className="w-7 h-7 md:w-10 md:h-10"/>
            </a>



            <a
              className=" flex items-center justify-center  p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-blue-600 transition-color  delay-250 ease-in-out duration-200 hover:scale-125"
              
              href="https://m.facebook.com/262566097142744/"
            >
              <FaFacebook className="w-7 h-7 md:w-10 md:h-10" />
            </a>

          

            <a
              className="flex items-center justify-center  p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-[#576fbf] ease-in-out duration-200 hover:scale-125"
              
              href="https://discord.gg/cc3j3GbCrX"
            >
              <FaDiscord className="w-7 h-7 md:w-10 md:h-10" />
            </a>

            <a
              className="flex items-center justify-center  p-1.5 rounded-full bg-white text-black ml-5 md:ml-7 mt-4 hover:text-white hover:bg-[#0072b1] ease-in-out duration-200 hover:scale-125 "
              
              href="https://www.linkedin.com/company/team-vibhav"
            >
              <FaLinkedin className="w-7 h-7 md:w-10 md:h-10" />
            </a>



         
      </div>
    );
  };