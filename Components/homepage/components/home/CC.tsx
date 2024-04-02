import AppContentPrivate from "../../assets/p1.png";

import ReceivePayment from "../../assets/p1.png";

import MobileWireFrame from "../../assets/frame.png";
import Image, { type StaticImageData } from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useParallax } from "react-scroll-parallax";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";
import { Container } from "../layout/Container";

type CardProps = {
  starterImage: StaticImageData;
  endImage: StaticImageData;
  description: string;
};

function Card(props: CardProps) {
  const { description, endImage, starterImage } = props;
  const [opacity, setOpacity] = React.useState(1);

  return (
    <Fade bottom distance="30px">
      <div className="flex max-w-sm flex-col gap-12 rounded-[20px] p-8 bg-gray-900 bg-opacity-30 shadow-[0_20px_40px_rgba(0,0,0,.4)]">
        <div className="relative mx-auto  w-full max-w-md overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-auto z-[2] h-[30%] " />
          <div className="relative w-full">
            <Image
              src={starterImage}
              className="w-full"
              alt="Mobile wire frame"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-white">{description}</h2>
        </div>
      </div>
    </Fade>
  );
}

export default function CC() {
  return (
    <div className="mx-auto">
      <SectionWrapper>
        <div className="flex flex-col gap-14 text-white">
          <SectionTitle
            title="CORE COORDINATOR"
            description="Streamlining operations and maximizing efficiency."
            gradient="bg-gradient-to-r from-yellow-light to-yellow-dark"
          />
          <Container>
            <div className="flex flex-col items-center justify-center gap-24 lg:flex-row">
              <Card
                description="Krishna Gambhir"
                starterImage={AppContentPrivate}
                endImage={AppContentPrivate}
              />
              <Card
                description="Parth Tailor"
                starterImage={ReceivePayment}
                endImage={ReceivePayment}
              />
            </div>
          </Container>
        </div>
      </SectionWrapper>
    </div>
  );
}
