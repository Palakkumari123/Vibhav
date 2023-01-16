import React from "react";
import { FaLinkedin, FaGithub , FaFacebook , FaInstagram , FaDiscord } from "react-icons/fa";
export default function SocialLinks  ()  {
    return (
      <div className=" flex xl:mb-24 ">
       
            <a
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-black mt-4 hover:text-white hover:bg-neutral-300 ease-in-out duration-200 hover:scale-125"
              
              href="https://github.com"
            >
              <FaGithub size={25} />
            </a>


            <a
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-black ml-9 mt-4 hover:text-white hover:bg-gradient-to-tr hover:from-[#fa7e1e] hover:to-[#962fbf] ease-in-out duration-200 hover:scale-125"
              
              href="https://instagram.com"
            >
              <FaInstagram size={25} />
            </a>



            <a
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-black ml-9 mt-4 hover:text-white hover:bg-blue-600 transition-color duration-200 delay-250 ease-in-out duration-200 hover:scale-125"
              
              href="https://facebook.com"
            >
              <FaFacebook size={25} />
            </a>

          

            <a
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-black ml-9 mt-4 hover:text-white hover:bg-[#576fbf] ease-in-out duration-200 hover:scale-125"
              
              href="https://discord.com"
            >
              <FaDiscord size={25} />
            </a>

            <a
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-black ml-9 mt-4 hover:text-white hover:bg-[#0072b1] ease-in-out duration-200 hover:scale-125 "
              
              href="https://linkedin.com"
            >
              <FaLinkedin size={25} />
            </a>



         
      </div>
    );
  };