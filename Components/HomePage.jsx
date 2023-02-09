import React, { useRef } from "react";
import HomeLogo from "./HomeLogo.png"
import Image from "next/image"
import SocialLinks from "./SocialMedia";
import { useEffect } from 'react';

import AboutUs from "./AboutUs";


// import bgVideo from "Assets/bgVideo.mp4";
export default function HomePage() {
    
    return (
        <div>

            {/* <video autoPlay="true" muted loop className="absolute r-0 w-full top-0">
                <source src="Assets/bgVideo.mp4" type="video/mp4 "/>
                
            </video> */}
            {/* <video src="Assets/bgVideo.mp4" autoPlay> */}

            <main className=" mb-12 min-h-[100vh] relative">




                <div className="  text-white flex  sm:flex-row flex-col sm:px-16 px-6 text-center  justify-center  ">
                    <div  >
                        <div className=" font-[Azonix] drop-shadow-[0_15px_10px_rgba(180,83,9,1)] delay-150 duration-150 break-words text-5xl md:text-7xl text-amber-500 mt-48  mx-auto  ">
                            VIBHAV
                        </div>
                        <h1  className=" font-[Mylodon-Light] break-words text-2xl md:text-4xl  items-center pt-4  mx-auto  "  >
                            अनंत से भी आगे !
                            
                        </h1>
                        <div><SocialLinks /></div>

                    </div>

                </div>






            </main>


        </div >
    );
}
