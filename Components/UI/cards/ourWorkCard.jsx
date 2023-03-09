import React, { useState } from "react";
import Image from "next/image";
import ourWork from "../../ourwork.json";
//import style from "../../../styles/work.module.css";

export default function ProjectCard({ card }) {
  const [readMoreState, setReadMoreState] = useState(100);
  return (
    <div className="flex h-screen justify-center bg-neutral-800">
      <div className="w-full group rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-full w-full">
          <Image
            className="rounded-t-lg w-full h-full object-cover cover"
            src={card.images}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">
            {card.name}
          </h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {card.content}
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
