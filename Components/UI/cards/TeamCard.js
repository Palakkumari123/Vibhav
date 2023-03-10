import React from 'react'
import style from "../../../styles/team.module.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from 'next/link';
export default function TeamCard({ data }) {
    console.log(data)
    return <div className="flex justify-center items-center sm:p-4" >

        <div
            className={style.mainCard + " flex flex-col justify-center py-4 sm:py-2 sm:p-4 rounded-2xl"}
        >
            <div className="flex w-full items-center justify-start px-2 sm:px-4 ">
                <img
                    alt="Post current image"
                    src={data.Profile}
                    className={"rounded-full object-cover h-[50px] w-[50px]"}
                    height={50}
                    width={50}
                />
                <p className="text-2xl font-semibold ml-4 text-white">{data.NickName} </p>
            </div>
            <div className=" p-3 sm:p-4 ">
                <img
                    alt="Post current image"
                    src={data.Profile}
                    className={" h-[400px] w-[400px] object-cover rounded-2xl shadow-2xl "}
                    height={550}
                    width={550}
                />
            </div>
            <div className="p-4 flex flex-col">

                <div className=" flex flex-col text-white">
                    <p className="font-semibold text-xl">{data.Name}</p>
                    <p>{data.Position}</p>
                </div>
                <div className="flex flex-row justify-end ">
                <Link href={data.Github} >
                    <div className="rounded-full cursor-pointer p-2 mr-2 bg-white bg-opacity-50 hover:bg-opacity-100 hover:scale-105">

                        <FiGithub className="h-6 w-6 " />
                        
                    </div>
                    </Link>
                    <Link href={data.LinkedIn} >
                    <div className="rounded-full cursor-pointer p-2 mr-2 bg-white bg-opacity-50 hover:bg-opacity-100 hover:scale-105">

                        <FiLinkedin className="h-6 w-6 " />
                    </div>
                    </Link>

                </div>
            </div>
        </div>
    </div>
}