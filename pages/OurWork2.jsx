import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import OurWorkCard from "../Components/UI/cards/ourWorkCard.jsx";
// import Link from "next/link";
import ourwork from "../Components/ourwork.json";

export default function OurWork2({ id }) {
  const [cardState, setCarState] = useState(0);
  const tabs = { prev: "Previous Years", curr: "Current Year" };
  return (
    <div className="flex justify-center flex-col">
      <div className="text-white justify-center flex p-5 font-[Azonix] text-5xl font-black">
        {tabs[id]}
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-col-1 justify-center">
        {ourwork[tabs[id]]?.map((card, ind) => {
          return (
            <div key={ind} className="justify-center">
              <OurWorkCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
