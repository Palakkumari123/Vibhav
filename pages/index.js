import Head from "next/head";
<<<<<<< HEAD
import Layout from "../Components/UI/Layout";
import FAQs from "../Components/UI/FAQs";
import Contact from "../Components/Contact";
import Gallery from "../Components/homepage/components/home/Gallery";
import LandingPage from "../Components/homepage/components/home/LandingPage";
import AboutUs from "../Components/homepage/components/home/AboutUs";
import CC from "../Components/homepage/components/home/CC";
=======
import Image from "next/image";
import * as basicScroll from "basicscroll";
import Layout from "../Components/UI/Layout";
import HomePage from "../Components/HomePage";
import AboutUs from "../Components/AboutUs";
import FAQs from "../Components/UI/FAQs";
import Cc from "../Components/UI/CC";
import { useEffect } from "react";
import Footer from "../Components/UI/Footer";
import Contact from "../Components/Contact";
>>>>>>> d0904fc9c58ed2865530298188777360725fd6ba

export default function Home() {
  return (
    <>
      <Head>
        <title> Team Vibhav</title>
        <meta
          name="description"
          content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur"
        />
        <meta
          name="keywords"
<<<<<<< HEAD
          content="Projects , Eventsnew , Workshops , Our Team , Our Work , Alumni "
=======
          content="Projects , Events , Workshops , Our Team , Our Work , Alumni "
>>>>>>> d0904fc9c58ed2865530298188777360725fd6ba
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main>
        <Layout>
<<<<<<< HEAD
          <div className="z-50 flex flex-col">
            <LandingPage />
            <AboutUs />
            <Gallery />
            <CC />
            <FAQs />
            <Contact />
            {/* <Logof /> */}
            {/* <AboutUs /> */}
            {/* <CC /> */}
=======
          <Image
            alt="homePage Parallax"
            loading="lazy"
            src="/Assets/4x/MobileHeroSection.webp"
            className="fixed top-0 left-0 flex object-cover h-screen opacity-40"
            width={7921}
            height={7921}
          ></Image>
          <div className="z-50 flex flex-col">
            <HomePage />
            <AboutUs />
            <Cc />
            <FAQs />
            <Contact />
>>>>>>> d0904fc9c58ed2865530298188777360725fd6ba
          </div>
        </Layout>
      </main>
    </>
  );
}
