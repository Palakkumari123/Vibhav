import React from "react";
import Image from "next/image"
export default function AboutUs() {
    return (
        <section className="  flex justify-center md:h-full items-center relative" >
          
          <div className="flex flex-col w-4/5 h-full mb-8 bg-gray-700 center md:pb-24 rounded-t-2xl md:mb-24 " >
            <div className="w-full h-10 bg-black bg-opacity-40 rounded-t-2xl">
              <div className="flex items-center justify-around w-16 h-full ml-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>

              </div>
              </div>
              <div className="flex  flex-col">
                <h1 className="text-center text-gray-300 text-3xl md:text-5xl    font-bold mt-8 font-[Elianto-Regular]" >
                  About Us
                </h1>
                <p className="text-gray-400 text-sm pb-4 md:text-xl p-4 md:p-12 font-[Hero-Bold]  text-justify" >
                The family of innovative and creative minds, VIBHAV is the departmental team of Electronics and Communication Engineering that works for one of the largest technical fest of North India - NIMBUS of NIT-Hamirpur. 
Our primary aim is to bring innovation that can make people explore beyond infinity. We at VIBHAV work with great euphoria and enthusiasm as it consists of highly energetic members who put strenuous efforts to make a change. 
                </p>
              </div>
            
        </div>
      </section>
    );
};


