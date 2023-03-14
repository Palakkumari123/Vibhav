
import Head from "next/head";
import Image from "next/image";
import * as basicScroll from "basicscroll";
// import styles from '../styles/Home.module.css';
import Layout from "../Components/UI/Layout";
import HomePage from "../Components/HomePage";
import AboutUs from "../Components/AboutUs";
import FAQs from "../Components/UI/FAQs";
import Cc from "../Components/UI/CC";
import { useEffect } from "react";
import Footer from "../Components/UI/Footer";
import Contact from "../Components/Contact";


export default function Home() {

  useEffect(() => {
    document.querySelectorAll(".scene").forEach((elem) => {
      const modifier = elem.getAttribute("data-modifier");

      basicScroll
        .create({
          elem: elem,
          from: 0,
          to: 519,
          direct: true,
          props: {
            "--translateY": {
              from: "0",
              to: `${65 * modifier}px`,
            },
          },
        })
        .start();
    });
  }, []);

  return (
    <>
      <Head>
        <title> Team Vibhav</title>
        <meta name="description" content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur" />
        <meta name="keywords" content="Projects , Events , Workshops , Our Team , Our Work , Alumni " />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main>

        <Layout>

       
           <Image alt="homePage Parallax" loading="lazy"   src="/Assets/4x/MobileHeroSection.webp" className="md:hidden flex opacity-40 h-screen object-cover fixed top-0 left-0 " width={7921} height={7921}   ></Image>
            <div >
           <Image alt="homePage Parallax" loading="lazy"   src="/Assets/4x/1.png" className="scene hidden md:flex opacity-40" data-modifier="6"  width={1200} height={7921}   ></Image>

            {/* <Image  alt="homePage Parallax"  loading="lazy" src="/Assets/4x/6.png" className="scene opacity-70 " data-modifier="8"   width={1200} height={7921}   ></Image>  */}
             <Image  alt="homePage Parallax"  loading="lazy" src="/Assets/4x/2.png" className="scene hidden md:flex opacity-40" data-modifier="5"  width={1200} height={7921}   ></Image>
            <Image  alt="homePage Parallax"  loading="lazy" src="/Assets/4x/3.png"className="scene hidden md:flex opacity-40" data-modifier="4"  width={1200} height={7921}   ></Image>
            <Image  alt="homePage Parallax"  loading="lazy" src="/Assets/4x/4.png" className="scene hidden md:flex opacity-40" data-modifier="3"  width={1200} height={7921}   ></Image>
            <Image  alt="homePage Parallax"  loading="lazy" src="/Assets/4x/5.png" className="scene hidden md:flex " data-modifier="2"  width={1200} height={7921}   ></Image>

          </div>


          <div  className="z-50 flex flex-col">
            <HomePage   />
            <AboutUs  />
            <Cc  />
            <FAQs />
            <Contact  />

          </div>
        </Layout>
      </main>
    </>
  );
}

{
  /* <img className="scene" data-modifier="10" src="https://s.electerious.com/parallaxscene/p0.png" />
            <img className="scene" data-modifier="18" src="https://s.electerious.com/parallaxscene/p1.png" />
            <img className="scene" data-modifier="12" src="https://s.electerious.com/parallaxscene/p2.png" />
            <img className="scene" data-modifier="8" src="https://s.electerious.com/parallaxscene/p3.png" />
            <img className="scene" data-modifier="6" src="https://s.electerious.com/parallaxscene/p4.png" />
            <img className="scene" data-modifier="0" src="https://s.electerious.com/parallaxscene/p6.png" />
             */
}
