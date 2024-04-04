import React from "react";
import SocialMedia from "./SocialMedia";
import { useForm, ValidationError } from "@formspree/react";
import { MdOutlineDownloadDone } from "react-icons/md";
export default function Contact({}) {
  const [state, handleSubmit] = useForm("xzbqvrrv");
  if (state.succeeded) {
    return (
      <div className="relative mt-24 overflow-x-hidden rounded-2xl flex pt-8 md:mt-12 md:bg-[#1a1a1d] md:bg-opacity-50 md:flex-row flex-col justify-around w-4/5 mx-auto  ">
        <div className="py-4 mb-12 lg:py-16   rounded-xl md:bg-transparent bg-[#1a1a1d] z-10 bg-opacity-50  max-w-screen-md basis-1/2 md:w-12 ">
          <h2 className="text-[#e9d59ae4]  text-4xl mb-12 tracking-tight font-[Elianto-Regular] font-extrabold text-center dark:text-white">
            Contact Us
          </h2>
          <div className="flex items-center justify-center w-full text-xl text-sky-100 ">
            <div className="flex p-2 pl-8 pr-8 m-3 bg-gray-700 rounded-xl ">
              <MdOutlineDownloadDone className="w-8 h-8 mr-1 text-blue-400 " />
              Thanks for Messaging
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:bg-transparent mr-6  bg-[#1a1a1d] rounded-xl z-10 bg-opacity-50 text-white px-2 sm:pl-3 pb-12 md:pl-24 justify-center items-center max-w-screen-md py-4 lg:py-16">
          <h2 className="text-4xl pb-4 pl-4 font-extrabold  tracking-wide text-[#e9d59ae4] items-center font-[Elianto-regular]">
            Vibhav
          </h2>
          <div className="pl-2 mb-4 md:mb-12">
            <p className="  text-left  text-sky-100  font-[Hero-Bold] text-md md:text-xl">
              Team Vibhav is a dynamic team of the electronics and communication
              department at the National Institute of Technology, Hamirpur. Our
              main objective is to organize and execute the annual technical
              festival of the institute.
            </p>
          </div>
          <div className="sm:mr-24">
            <SocialMedia />
          </div>
          <div className="flex flex-col justify-center mt-12 text-white md:flex-row ">
            <span className="text-xl text-center md:text-2xl">Email : </span>
            <a
              aria-label="Mail"
              className="text-xl text-center break-all duration-100 delay-100 md:text-2xl hover:text-red-400 "
              href="mailto: vibhav.nimbus@nith.ac.in?subject = Feedback&body = Message"
            >
              vibhav.nimbus@nith.ac.in
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="z-10 flex mt-12">
      <div className="relative overflow-x-hidden rounded-2xl flex pt-8 mt-20   my-20 rounded-[20px] p-8 bg-gray-900 bg-opacity-30 shadow-[0_20px_40px_rgba(0,0,0,.4)] md:flex-row flex-col justify-around w-4/5 mx-auto   ">
        <div className=" lg:py-16  mb-12  rounded-xl mt-4 lg:px-6 lg:bg-gray-800 z-10 bg-opacity-50  max-w-screen-md basis-1/2 lg:w-12">
          <h2 className="mb-4 text-[#e9d59ae4]  text-4xl tracking-tight font-[Quicksand] font-extrabold text-center dark:text-[#e9d59ae4]">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className=" mb-2 font-[Hero-Bold] text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm  focus:ring-primary-500 focus:border-primary-500 bg-gray-600 dark:border-gray-600  text-white "
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
                htmlFor="subject"
                className="block mb-2 text-sm font-[Hero-Bold] font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm  focus:ring-primary-500 focus:border-primary-500 bg-gray-600 dark:border-gray-600  text-white "
                required
              />
            </div>
            <div className="sm:col-span-2 ">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-[Hero-bold] font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm  focus:ring-primary-500 focus:border-primary-500 bg-gray-600 dark:border-gray-600  text-white "
              ></textarea>
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              name="Submit Contact us Form"
              className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={state.submitting}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
