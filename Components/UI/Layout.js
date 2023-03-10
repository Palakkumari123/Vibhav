import React from 'react'
import AboutUs from '../AboutUs';
import FAQs from './FAQs';
import Footer from './Footer';
import Header from "./Header";
export default function Layout({children}) {
  return (
    <div>
      <Header className="fixed top-0 left-0"/>
      {children}
      <Footer/>
      
    </div>
  )
}
