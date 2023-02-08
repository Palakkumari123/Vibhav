import React, { useState } from "react";
import {FaGithub} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import ourwork from "../Components/tabs.json";

export default function OurWork2() {
  const [cardState, setCarState] = useState(0);
  const tabs = ["Last Year Events", "Last Year Departmental"];
  return (
    <div>
      <div className="flex justify-center flex-col">
        <div className="grid lg:grid-cols-2 sm:grid-col-1 justify-center">
          {tabs.map((tab, ind) => {
            return (
              <button
                type="button"
                key={ind}
                className={`text-2xl py-2 bg-gray-800 text-white rounded-md focus:bg-white focus:text-gray-800 font-bold h-12 px-10 m-2
                xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs -${
                  ind === cardState ? " bg-white text-gray-800" : undefined
                }
            `}
                onClick={() => setCarState(ind)}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {ourwork[tabs[cardState]].map((card, ind) => {
            return (
              <div key={ind} className="py-5 px-10">
                <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <Image
                      className="rounded-t-lg w-full"
                      src={"/HomeLogo.png"}
                      alt="images"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {card.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {card.content}
                    </p>
                    <Link
                      href={card.github}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <FaGithub  className="m-1" size={20} />
                      Github
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


