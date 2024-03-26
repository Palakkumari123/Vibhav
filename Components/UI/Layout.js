import React from "react";
import Footer from "./Footer";
import STT from "../STT";
<<<<<<< HEAD
import Navigation from "./Navigation";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
=======
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div>
      <Header className="fixed top-0 left-0" />
>>>>>>> d0904fc9c58ed2865530298188777360725fd6ba
      {children}
      <Footer />
      <STT />
    </div>
  );
}
