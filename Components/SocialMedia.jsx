import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center justify-center bottom-3">
      <div className="flex flex-col items-center space-y-4">

        {/* GitHub */}
        <a
          aria-label="Github"
          className="flex items-center justify-center p-1.5 rounded-full bg-[##0abdc6] text-white hover:bg-[#303033] transition-all duration-200 hover:scale-125"
          href="https://github.com/Team-Vibhav"
          target="_blank"
        >
          <FaGithub className="w-7 h-7 md:w-10 md:h-10" />
        </a>

        {/* Instagram */}
        <a
          aria-label="Instagram"
          className="flex items-center justify-center p-1.5 rounded-full bg-[##0abdc6] text-white hover:bg-[#303033] transition-all duration-200 hover:scale-125"
          target="_blank"
        >
          <FaInstagram className="w-7 h-7 md:w-10 md:h-10" />
        </a>

        {/* Facebook */}
        <a
          aria-label="Facebook"
          className="flex items-center justify-center p-1.5 rounded-full bg-[##0abdc6] text-white hover:bg-[#303033] transition-all duration-200 hover:scale-125"
          href="https://m.facebook.com/262566097142744/"
          target="_blank"
        >
          <FaFacebook className="w-7 h-7 md:w-10 md:h-10" />
        </a>

        {/* Discord */}
        <a
          aria-label="Discord"
          className="flex items-center justify-center p-1.5 rounded-full bg-[##0abdc6] text-white hover:bg-[#303033] transition-all duration-200 hover:scale-125"
          href="https://discord.gg/cc3j3GbCrX"
          target="_blank"
        >
          <FaDiscord className="w-7 h-7 md:w-10 md:h-10" />
        </a>

        {/* LinkedIn */}
        <a
          aria-label="LinkedIn"
         className="flex items-center justify-center p-1.5 rounded-full bg-[##0abdc6] text-white hover:bg-[#303033] transition-all duration-200 hover:scale-125"
          href="https://www.linkedin.com/company/team-vibhav"
          target="_blank"
        >
          <FaLinkedin className="w-7 h-7 md:w-10 md:h-10" />
        </a>

      </div>
    </div>
  );
}

