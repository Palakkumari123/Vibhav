import HeroWireFrameInitialImage from "../public/Assets/Homepage/a1.png";
import HeroWireFrameSecondImage from "../public/Assets/Homepage/a2.png";
import MobileWireFrame from "../public/Assets/Homepage/a3.png";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { ParallaxProvider } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

function BackgroundText() {
  const [gap, setGap] = React.useState(100);

  const handleScroll = () => {
    const newGap = window.scrollY * 0.4;
    if (newGap <= 350) {
      setGap(newGap);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky mt-60 hidden md:block">
      <div
        className="absolute top-[128px] font-[Hero-bold] flex w-full items-center justify-center overflow-hidden"
        style={{ gap }}
      >
        <h2 className="w-[50vw] text-right text-[150px] bg-gradient-to-t from-white to-blue-light bg-clip-text text-transparent">
          About&nbsp;&nbsp;
        </h2>
        <h2 className="w-[50vw] text-left text-[150px] bg-gradient-to-t from-white to-blue-light bg-clip-text text-transparent">
          &nbsp;&nbsp;&nbsp;&nbsp;Us!!!
        </h2>
      </div>
    </div>
  );
}

function AboutUsParallax() {
  const { ref } = useParallax({
    translateY: ["0", "-100%"],
    shouldAlwaysCompleteAnimation: true,
  });
  return (
    <Fade>
      <div className="sticky top-[110px] mx-auto w-full max-w-sm">
        <Image
          src={MobileWireFrame}
          className="w-full"
          alt="Mobile wire frame"
        />
        <div className="absolute bottom-[35px] left-[36px] right-[36px] top-[35px] -z-[1] overflow-hidden">
          <Image
            src={HeroWireFrameInitialImage}
            ref={ref}
            alt="App image 1"
            className="absolute -z-10 h-full w-full transform overflow-hidden rounded-[40px] object-cover"
          />
          <Image
            src={HeroWireFrameSecondImage}
            alt="App image 2"
            className="absolute -z-20 h-full w-full overflow-hidden rounded-[40px] object-cover"
          />
        </div>
      </div>
    </Fade>
  );
}

export default function AboutUs() {
  return (
    <div className="relative mb-32 h-screen">
      <BackgroundText />
      <ParallaxProvider>
        <AboutUsParallax />
      </ParallaxProvider>
    </div>
  );
}
