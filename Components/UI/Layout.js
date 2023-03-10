import React from 'react'

import Header from "./Header";
import Footer from "./Footer";
export default function Layout({children}) {
  return (
    <div>
      <Header className="fixed top-0 left-0"/>
      {children}
      <Footer/>
      
    </div>
  )
}
