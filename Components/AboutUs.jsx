import React from "react";
import Image from "next/image"
import HomeLogo from "./HomeLogo.png"
export default function AboutUs() {
    return (
        <section className="  flex justify-center md:h-full items-center relative" >
          
          <div className="flex flex-col center w-4/5 h-full md:pb-24  bg-gray-700 rounded-t-2xl mb-8 md:mb-24   " >
            <div className="bg-black h-10 w-full bg-opacity-40 rounded-t-2xl">
              <div className="flex h-full items-center w-16 justify-around ml-4">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
              </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-center text-gray-300 text-3xl md:text-5xl underline underline-offset-4   font-bold mt-8 font-[Elianto-Regular]" >
                  About Us
                </h1>
                <p className="text-gray-400 text-sm pb-4 md:text-xl p-4 md:p-12 font-[Nidsans-webfont]  text-justify" >
                The family of innovative and creative minds, VIBHAV is the departmental team of Electronics and Communication Engineering that works for one of the largest technical fest of North India - NIMBUS of NIT-Hamirpur. 
Our primary aim is to bring innovation that can make people explore beyond infinity. We at VIBHAV work with great euphoria and enthusiasm as it consists of highly energetic members who put strenuous efforts to make a change. 
                </p>
              </div>
            
        </div>
      </section>
    );
};


