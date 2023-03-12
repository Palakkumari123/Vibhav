import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import faq from "./faq.json";
import { useState } from "react";
export default function FAQs() {
  const [isShow, setIsShown] = useState(-1);
  return (
 
        <div className="w-full px-4 pt-48 " data-aos="zoom-in">
            <h1 className="flex-col text-center pb-4 text-3xl md:text-5xl font-extrabold font-[Elianto-Regular] text-[#e9d59ae4]">Frequently Asked  Questions</h1>

            <div className=" w-4/5 mx-auto   bg-[#1a1a1d]  ">
                {faq.faqs.map((item, index) => {
                    return <Disclosure as="div" className="mt-2" key={index} onMouseEnter={() => setIsShown(index)}
                        onMouseLeave={() => setIsShown(-1)}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex  justify-between text:md  hover:rounded-xl hover:skew-y-1   font-[Hero-Bold] hover:drop-shadow-2xl w-full px-6 py-6 text-md hover:text-sky-200     bg-gray-700   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  hover:bg-[#27272a] text-sky-100 delay-100 duration-200">
                                    <span className="flex">

                                        <Image
                                            className={`  h-8 w-auto mr-4 align-middle ${isShow === index ? 'flex' : 'hidden'} `}
                                            width={500}
                                            height={500}
                                            // objectFit="contain"
                                            src='/Assets/Yellow.png'
                                            alt="Your Company"
                                        />{' '}
                                        {item.question}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                        stroke="currentColor"
                                        className={`${open ? "rotate-180 duration-300 transform" : ""
                                            } h-5 w-5 stroke-0 md:stroke-2   text-sky-100 duration-300 `}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </Disclosure.Button >

                                <Disclosure.Panel className="px-4  pt-4 pb-2 font-[Hero-Bold] text-md text-sky-100"  >

                                   <span>
                                    
                                     {item.answer}
                                   </span>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                })}

            </div>
        </div>
    );
}
