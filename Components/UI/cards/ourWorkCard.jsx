import React, { useState } from "react";
import Image from "next/image";
import ourWork from "../../ourwork.json";
//import style from "../../../styles/work.module.css";

export default function ProjectCard({ card }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex max-w-[22.5rem] h-[30rem] justify-center bg-neutral-800">
      <div className="group rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-full">
          <Image
            className="rounded-t-lg h-full object-cover cover"
            src={card.images}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] text-white hover:text-yellow-500 flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold ">{card.name}</h1>
          <p className="mb-3 text-justify italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {card.content}
          </p>
          <>
            <button
              className="bg-gray-700 hover:bg-yellow-700 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Read More
            </button>
          </>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-opacity-80 bg-gray-600 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-gray-200 font-semibold">{card.name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 font-[Hero-Bold] text-xl flex-auto">
                  <h1 className="my-4 text-gray-300 leading-relaxed">
                    {card.round1head}
                  </h1>
                  <h1 className="my-4 text-gray-300 leading-relaxed">
                    {card.round1}
                  </h1>
                  <h1 className="my-4 text-gray-300 leading-relaxed">
                    {card.round2head}
                  </h1>
                  <h1 className="my-4 text-gray-300 leading-relaxed">
                    {card.round2}
                  </h1>
                  <h1 className="my-4 text-gray-300 leading-relaxed">
                    {card.round3head}
                  </h1>
                  <h1 className="my-4 text-gray-300 leading-relaxed">
                    {card.round3}
                  </h1>
                  <h1 className="my-4 text-gray-300 leading-relaxed">
                    {card.round4head}
                  </h1>
                  <h1 className="my-4 text-gray-300 leading-relaxed">
                    {card.round4}
                  </h1>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="bg-gray-700 text-white active:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
