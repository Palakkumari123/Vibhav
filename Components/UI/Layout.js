import React from 'react'
import Footer from './Footer';
import STT from '../STT'
import Header from "./Header";
export default function Layout({children}) {

  return (
    <div>
      <Header className="fixed top-0 left-0"/>
      {children}
      <Footer/>   
      <STT/>
    </div>
  )
}
