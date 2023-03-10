import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from '../Components/UI/Layout'
import Image from "next/image";
import TeamPhotos from "../Components/team.json";
import TeamCard from "../Components/UI/cards/TeamCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1
  }
};

export default function Posts() {
  const team = [{}, {}, {}, {}, {}, {}];
  console.log("This is the imported data", TeamPhotos)
  return (
    <Layout>
      <div className="m-4 sm:m-8 mt-24 pt-5">
        <h1 className=" text-5xl    rounded-md text-[#dab971] p-2 
          md:text-5xl flex justify-center items-center font-[Elianto-Regular] mt-10 animate-pulse " > TEAM MEMEBERS </h1>
        <div>
          <h1 className="  text-3xl mt-12 ml-12  text-[#a18240] font-[AvenirLTProHeavy] ">SUPER FINAL YEAR MEMBERS</h1>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}

            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            partialVisbile

          >
            {TeamPhotos["Super Final Year"].map((post, ind) => {
              return <TeamCard key={ind} data={post} />
            })}
          </Carousel>
          <h1 className="text-[#a18240] text-3xl mt-12 ml-14 font-[AvenirLTProHeavy]" >
            FINAL YEAR MEMBERS</h1>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}

            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {TeamPhotos["Final Year"].map((post, ind) => {
              return <TeamCard key={ind} data={post} />
            })}
          </Carousel>

          <h1 className="text-[#a18240] text-3xl mt-12 ml-14 font-[AvenirLTProHeavy]" >COORDINATOR</h1>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}

            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {TeamPhotos["Third Year"].map((post, ind) => {
              return <TeamCard key={ind} data={post} />
            })}
          </Carousel>

          <h1 className="text-[#a18240] text-3xl mt-12 ml-14 font-[AvenirLTProHeavy]" >EXECUTIVE MEMBERS</h1>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}

            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {TeamPhotos["Second Year"].map((post, ind) => {
              return <TeamCard key={ind} data={post} />
            })}
          </Carousel>

          <h1 className="text-[#a18240] text-3xl mt-12 ml-14 font-[AvenirLTProHeavy]" >VOLUNTEERS</h1>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}

            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {TeamPhotos["First Year"].map((post, ind) => {
              return <TeamCard key={ind} data={post} />
            })}
          </Carousel>
        </div>

      </div>
    </Layout>







  );
}