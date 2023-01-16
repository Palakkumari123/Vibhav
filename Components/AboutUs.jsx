import React from "react";
import Image from "next/image"
import HomeLogo from "./HomeLogo.png"
export default function AboutUs() {
    return (
        <main className="h-screen">
            <div className="flex flex-row">
                <div className="flex flex-col justify-center pr-24 pb-8 pl-24 lg:w-4/5 ">
                    <Image width={1200} height={600} src={HomeLogo} alt="" ></Image>
                </div>
                <div className="flex flex-row h-screen justify-between mx-16 text-white ">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-7xl flex flex-col items-center font-serif ">About Us</h1>
                        <p className="md:text-2xl w-4/5  sm:text-base text-slate-600 font-Spartan font-medium">Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur.
                        Team Vibhav nurtures intense and genuine commitment. We have a
                            diverse pool of students who are constantly trying to innovate and
                            push the boundaries.
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
};

