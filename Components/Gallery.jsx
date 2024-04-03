import User1 from "../public/Assets/Homepage/t1.jpg";
import User2 from "../public/Assets/Homepage/t2.jpg";
import User3 from "../public/Assets/Homepage/t3.jpg";
import User4 from "../public/Assets/Homepage/t4.jpg";
import User5 from "../public/Assets/Homepage/t5.jpg";
import { Fade } from "react-awesome-reveal";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const usersData = [
  { name: "@MileyTabita", background: User1 },
  { name: "Mark Moss", background: User2 },
  { name: "Tony Robbins", background: User3 },
  { name: "Bitcoin Magazine", background: User4 },
  { name: "Aubrey Marcus", background: User5 },
  { name: "Tony Robbins", background: User3 },
];

function reverseArray(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[array.length - 1 - i];
  }
  return result;
}

function UserCard(props) {
  const { user } = props;
  return (
    <div
      className="flex h-[250px] w-[250px] flex-col items-center rounded-[31px] p-10 sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[500px]"
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${user.background.src}),linear-gradient(138deg,rgba(116,202,255,.8),#f46692 58%,#ffe16a)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

function Row1() {
  const { ref } = useParallax({
    translateX: ["-50%", "0"],
  });
  return (
    <div
      ref={ref}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {usersData.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

function Row2() {
  const { ref } = useParallax({
    translateX: ["0", "-50%"],
  });
  const reversedArray = reverseArray(usersData);
  return (
    <div
      ref={ref}
      className="grid transform grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] gap-x-4"
    >
      {reversedArray.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="bg-black py-20 bg-opacity-25">
      <div className="flex flex-col gap-28 overflow-hidden text-gray-200">
        <div className="mx-auto">
          <Fade>
            <div className="flex flex-col place-items-center gap-4 text-center">
              <h2 className="w-full max-w-6xl font-[Hero-bold] text-3xl sm:text-4xl md:text-5xl lg:text-7xl bg-clip-text  text-gray-200">
                REFLECTING ON THE JOURNEY
              </h2>

              <p className="w-full max-w-lg px-2 text-lg md:max-w-xl">
                A glimpse into our team's past adventures, memories that shape
                our present.
              </p>
            </div>
          </Fade>
        </div>
        <div className="flex rotate-6 transform flex-col gap-4 py-24">
          <ParallaxProvider>
            <Row1 />
            <Row2 />
          </ParallaxProvider>
        </div>
      </div>
    </div>
  );
}
