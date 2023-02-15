import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function CC() {
  return (
    <div className=''>



<h1 className="title-font sm:text-5xl text-3xl flex justify-center font-[Elianto-Regular]  bg-[#1A1A1D] font-black  text-white mt-48">Core-cordinators
</h1>
      <div className="flex pt-8 items-center justify-center bg-[#1A1A1D]">
  <div className="flex flex-col md:flex-row justify-center items-center gap-14 ">
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute  inset-0 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white mt-72 ">Bhavneesh</h1>
        {/* <div className='flex flex-row '>
      <a href='https://github.com' >
      <FaGithub className=" bg-gray-800 mx-1 text-white rounded-full w-8 h-8" />
      </a>
      <a href='https://linkedin.com' >
      <FaLinkedin className="bg-[#0072b1] p-0.5 text-white rounded-full font w-8 h-8 " />
      
      </a>
      </div>   */}
      </div>
    </div>
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white mt-72 ">Agrim Kaundal</h1>
      
        {/* <div className='flex flex-row '>
      <a href='https://github.com' >
      <FaGithub className=" bg-gray-800 mx-1 text-white rounded-full w-8 h-8" />
      </a>
      <a href='https://linkedin.com' >
      <FaLinkedin className="bg-[#0072b1] p-0.5 text-white rounded-full w-8 h-8 " />
      
      </a>
      </div> */}
     
      </div>
    </div>
    
  </div>
  {/* <div className="fixed bottom-16">
    <p className="font-com text-2xl font-semibold text-white">All Images are from <a href="https://unsplash.com" className="text-blue-500">Unsplash.com</a></p>
  </div> */}
</div>

    </div>
  )
}



