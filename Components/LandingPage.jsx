"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import SocialLinks from "./SocialMedia";
import FloatingGameInfo from "./UI/GameIcon";

export default function LandingPage() {
  return (
    <header className="relative h-screen w-full overflow-hidden">

      {/* ===== FULL SCREEN BLACK OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

      {/* ================= TEAM VIBHAV LOGO ================= */}
       <div className="absolute top-28 left-1/2 -translate-x-1/2 z-50 h-[240px] flex items-center">
  <Image
    src="/images/vibhavfont.png"
    width={800}
    height={400}
    alt="Team Vibhav"
    className="h-full w-auto object-contain"
    style={{
      filter: "saturate(1.5) brightness(1.1) contrast(1.2)",
    }}
  />
</div>




      {/* ================= BUILDINGS ================= */}
      <div className="absolute bottom-0 w-full h-4/5 overflow-hidden z-0">
        <div className="flex w-[200%] h-full animate-scroll">
          <div className="relative w-1/2 h-full">
            <Image
              src="/images/new2ndlayerbuildings.png"
              alt="Buildings"
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src="/images/new2ndlayerbuildings.png"
              alt="Buildings duplicate"
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>

      {/* ================= ROAD ================= */}
      <div className="absolute bottom-0 w-full h-20 z-20 pointer-events-none overflow-visible">

        {/* Road base */}
        <div className="absolute inset-0 road-base z-10" />

        {/* Moving black road layer */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] z-30 overflow-hidden">
          <div className="flex w-[200%] h-full animate-scroll-fast">
            <div className="relative w-1/2 h-full">
              <Image
                src="/images/blacklayer.png"
                alt="Black Road Layer"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="relative w-1/2 h-full">
              <Image
                src="/images/blacklayer.png"
                alt="Black Road Layer Duplicate"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CAR ================= */}
      <div className="absolute bottom-[-25px] left-1/4 z-15 pointer-events-none">
        <Image
          src="/images/car.png"
          alt="Car"
          width={130}
          height={65}
          className="drop-shadow-[0_0_25px_rgba(200,140,255,0.9)]"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-50 h-full flex flex-col items-center justify-center text-center text-white px-4">

        <div className="absolute top-80 left-1/2 transform -translate-x-1/2
                text-2xl font-orbitron
                bg-gradient-to-b from-white to-indigo-700
                bg-clip-text text-transparent">
          <Typewriter
            options={{ loop: true }}
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

        <div className="absolute right-4 top-1/4 flex flex-col">
          <SocialLinks />
        </div>

        <FloatingGameInfo />
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-fast {
          animation: scroll 5s linear infinite;
        }

        .road-base {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95),
            rgba(20, 10, 30, 0.9),
            rgba(40, 20, 60, 0.7)
          );
          filter: blur(1px);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.9),
            0 0 30px rgba(0, 0, 0, 0.6);
          border-top: 2px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </header>
  );
}
















