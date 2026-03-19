"use client";

import { useState, useEffect } from "react";
import { useVideo } from "../Components/LoadingContext";
import Loading from "../Components/Loading";
import Head from "next/head";
import Layout from "../Components/UI/Layout";
import FAQs from "../Components/UI/FAQs";
import Contact from "../Components/Contact";
import LandingPage from "../Components/LandingPage";
import CC from "../Components/CC";
import Gallery from "../Components/Gallery";
import AboutUs from "../Components/AboutUs";
import { scrollToSection } from "../utils/scrollToSection";

export default function Home() {
  const { videoLoaded, setVideoLoaded } = useVideo();
  const [timerDone, setTimerDone] = useState(false);

  // 2-second loader timer on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Safety fallback: if video doesn't load after 6s, force it anyway
  useEffect(() => {
    const fallback = setTimeout(() => {
      setVideoLoaded(true);
    }, 6000);
    return () => clearTimeout(fallback);
  }, [setVideoLoaded]);

  // Scroll to section (from navbar)
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");

    if (target) {
      setTimeout(() => {
        scrollToSection(target);
        sessionStorage.removeItem("scrollTarget");
      }, 100);
    }
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <Head>
        <title>Team Vibhav</title>
        <meta
          name="description"
          content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of NIT Hamirpur"
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      {/* ✅ Hidden preloader video */}
      <video
        src="/Assets/video.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ display: "none" }}
        onLoadedData={handleVideoLoaded}
        onError={handleVideoLoaded}
      />

      {/* Loader */}
      {!(timerDone && videoLoaded) && <Loading />}

      {/* Main Content */}
      {timerDone && videoLoaded && (
        <main>
          <Layout>
            <div className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto">

              {/* Landing */}
              <section className="relative min-h-screen snap-start flex items-center justify-center">
                <video
                  src="/Assets/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover -z-10"
                />

                <div className="w-full">
                  <LandingPage />
                </div>
              </section>

              {/* About */}
              <section className="min-h-screen snap-start flex flex-col justify-center">
                <AboutUs />
              </section>

              {/* Gallery */}
              <section className="min-h-screen snap-start flex flex-col justify-center">
                <Gallery />
              </section>

              {/* CC */}
              <section className="min-h-screen snap-start flex flex-col justify-center">
                <CC />
              </section>

              {/* FAQ */}
              <section className="min-h-screen snap-start flex flex-col justify-center">
                <FAQs />
              </section>

              {/* Contact */}
              <section
                className="min-h-screen snap-start flex flex-col justify-center"
                id="contactUS"
              >
                <Contact />
              </section>

            </div>
          </Layout>
        </main>
      )}
    </>
  );
}