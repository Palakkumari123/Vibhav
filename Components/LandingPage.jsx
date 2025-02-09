// components/AnimatedLogo.tsx
"use client"; // Required for Framer Motion in Next.js
import SocialLinks from "./SocialMedia";
import Typewriter from "typewriter-effect";
import React from "react";
import { FaStar } from "react-icons/fa";
import GradientText from "./UI/cards/GradientText";
import FloatingGameInfo from "./UI/GameIcon"



import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";





export default function LandingPage() {
  return (
    <header className="relative mx-auto h-full mt-32">
  
      <div className="grid min-h-[70vh] place-items-center text-white">
        <div className="flex w-full flex-col items-center max-sm:gap-5 gap-6 lg:max-w-[100%] relative content-center">
        
        <h2 className="text-center z-50 text-[2.7rem] sm:text-8xl font-batman mt-0 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
  TEAM VIBHAV
</h2>

          {/* <GradientText
            colors={["#00FF00"]}
            animationSpeed={10}
            showBorder={false}
            className=" w-full custom-class text-4xl font-batman sm:text-8xl mt-40 mx-auto z-50"
          >
            TEAM VIBHAV
          </GradientText> */}
          
          <div className="text-2xl font-orbitron text-[#98FF98]">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Beyond the Infinity")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("अनंत से भी आगे")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>

          <div className="flex text-2xl justify-center items-center">
            <FaStar className="mx-2 mt-4"/>
            <FaStar className="mx-2 mt-4"/>
            <FaStar className="mx-2 mt-4"/>
            <FaStar className="mx-2 mt-4"/>
            <FaStar className="animate-pulse text-white mx-2 mt-4" />
          </div>
          <SocialLinks />

        
        </div>

        <FloatingGameInfo/>
      
      </div>
    </header>
  );
}
