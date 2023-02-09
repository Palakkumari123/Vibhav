import React from "react";
import HomeLogo from "./HomeLogo.png"
import Image from "next/image"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SocialLinks from "./SocialMedia";
// import bgVideo from "Assets/bgVideo.mp4";
export default function HomePage() {
    return (
        <div>
            <video autoPlay="true" muted loop className="absolute r-0 w-full top-0  ">
                <source src="Assets/bgVideo.mp4" type="video/mp4 "/>

            </video>
            {/* <video src="Assets/bgVideo.mp4" autoPlay> */}
            
            <main className=" h-screen z-100 relative bg-black  bg-opacity-50  ">

                <div className="flex sm:flex-row flex-col h-full justify-between xl:mx-32">
                    <div className="flex flex-col justify-center ">
                        <h1 className="text-amber-600 text-5xl text-center pl-40 mt-12 pb-4 font-serif md:flex-row flex-col items-center  ">VIBHAV</h1>
                        <h1 className="text-amber-600 text-4xl text-center pl-40 pb-4 font-serif md:flex-row flex-col items-center ">अनंत से भी आगे ! 
                        <SocialLinks className="sm:flex-row flex-col items-center "/>
                        </h1>
                        {/* <h1 class="hidden lg:inline-block"></h1> */}
                        
                    </div>
                    <div className=" lg:max-w-lg pl-32 lg:w-full md:w-1/2 w-5/6  items-center ">
                        <Image width={300} height={400} src={HomeLogo} alt="logo" />

                    </div>
                </div>

            </main>
        </div >
    );
}
