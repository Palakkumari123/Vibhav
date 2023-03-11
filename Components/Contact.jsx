import React from "react";
import SocialMedia from './SocialMedia';
import { useForm, ValidationError } from '@formspree/react';
import { MdOutlineDownloadDone } from 'react-icons/md'
export default function Contact({ }) {
    const [state, handleSubmit] = useForm("xzbqvrrv");
    if (state.succeeded) {

        return (
        <div data-aos="fade-right" className="flex  mt-12 pt-28 md:mt-0  md:flex-row flex-col justify-around w-4/5 mx-auto   " >
            <div   className="py-4 lg:py-16 px-4  max-w-screen-md basis-1/2 ">

                    <h2  data-aos-duration="100" className="mb-4  text-4xl tracking-tight font-[Elianto-Regular] font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <div className="text-sky-100  w-full flex text-xl justify-center items-center pt-4">
                        <div className="bg-gray-700 flex p-2 pl-8 pr-8 rounded-xl " >
                            <MdOutlineDownloadDone className="w-8  text-blue-400 h-8 mr-1 " />
                            Thanks for Messaging
                        </div>

                    </div>
                </div>

            <div className="text-white pl-6 pb-12 pt-28 md:pl-24 justify-center items-center max-w-screen-md py-4 lg:py-16" >
                <h2 className="text-4xl pb-4  font-extrabold tracking-wide  items-center font-[Elianto-regular]" >
                    Vibhav
                </h2>
                <div className=" mb-4 md:mb-12" >
                    <p className=" text-left text-sky-100x md:text-justify font-[Hero-Bold] text-md md:text-xl" >The family of innovative and creative minds, VIBHAV is the departmental team of Electronics and Communication Engineering that works for one of the largest technical fest of North India - NIMBUS of NIT-Hamirpur.
                        Our primary aim is to bring innovation that can make people explore beyond infinity.</p>
                </div>
                <div className="  " >
                    <SocialMedia />
                </div>
                <div className="text-white mt-12 ">
                    <span className="md:text-2xl text-xl" >Contact address : </span>
                    <a className="break-all md:text-2xl text-xl hover:text-red-400 delay-100 duration-100  hover:scale-12F5 " href="mailto: vibhavnimbus2015@gmail.com?subject = Feedback&body = Message">
                        vibhavnimbus2015@gmail.com</a>
                </div>
            </div>
        </div>
        );
    };
    return (
        <div  >
            <div className="flex mt-12 pt-28 md:mt-0  md:flex-row flex-col justify-around w-4/5 mx-auto   " >
                <div data-aos="fade-right" className="py-4 lg:py-16 px-4  max-w-screen-md basis-1/2 ">
                    <h2 className="mb-4  text-4xl tracking-tight font-[Elianto-Regular] font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label
                                for="email"
                                className=" mb-2 font-[Hero-Bold] text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                name="email"
                                required
                            />
                        </div>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <div>
                            <label
                                for="subject"
                                className="block mb-2 text-sm font-[Hero-Bold] font-medium text-gray-900 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"

                                required
                            />
                        </div>
                        <div className="sm:col-span-2 ">
                            <label
                                for="message"
                                className="block mb-2 text-sm font-[Hero-bold] font-medium text-gray-900 dark:text-white"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

                            ></textarea>
                        </div>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            disabled={state.submitting}
                        >
                            Send message
                        </button>
                    </form >
                </div>

                <div data-aos="fade-left" className="text-white pl-6 pb-12 pt-28 md:pl-24 justify-center items-center max-w-screen-md py-4 lg:py-16" >
                    <h2 className="text-4xl pb-4  font-extrabold tracking-wide  items-center font-[Elianto-regular]" >
                        Vibhav
                    </h2>
                    <div className=" mb-4 md:mb-12" >
                        <p className=" text-left text-sky-100x md:text-justify font-[Hero-Bold] text-md md:text-xl" >The family of innovative and creative minds, VIBHAV is the departmental team of Electronics and Communication Engineering that works for one of the largest technical fest of North India - NIMBUS of NIT-Hamirpur.
                            Our primary aim is to bring innovation that can make people explore beyond infinity.</p>
                    </div>
                    <div className="  " >
                        <SocialMedia />
                    </div>
                    <div className="text-white mt-12 ">
                        <span className="md:text-2xl text-xl" >Contact address : </span>
                        <a className="break-all md:text-2xl text-xl hover:text-red-400 delay-100 duration-100  hover:scale-12F5 " href="mailto: vibhavnimbus2015@gmail.com?subject = Feedback&body = Message">
                            vibhavnimbus2015@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
