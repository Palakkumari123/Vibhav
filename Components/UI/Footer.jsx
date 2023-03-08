import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div>
      <footer className=" text-white pt-40 pb-4 footer footer-center p-4 bg-base-300 text-base-content">
  <div >
    <p className='text-xl flex justify-center items-center'>Made with ❤️ by 
    {/* <Link href='/team' className=' cursor-pointer text-red-400 text-2xl'> Team Vibhav </Link> */}
    </p>
  </div>
</footer>
    </div>
  )
}
