import { useEffect, useState } from "react";
import WorkCard, {
  SkeletonWorkCard,
} from "../../../Components/UI/cards/WorkCard";
import ourWorkData from "../../../data/ourwork.json";
import Layout from "../../../Components/UI/Layout";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setTimeout(() => {
      setEvents(ourWorkData.Previous.Events);
      setWorkshops(ourWorkData.Previous.Workshops);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <Layout>
      <div className="container relative text-center mx-auto mt-0 p-1 pt-32 text-white ">
      <div className="fixed bottom-0 top-0 left-0 w-full  bg-black/70 pointer-events-none z-[-1]"></div>
      <video
          src="/Assets/backvd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        />
        <h1 className="sm:text-5xl text-3xl  font-batman ">Our Work</h1>

        <div className="mb-3 md:p-5 xl:p-10 mt-5">
          <div className="sm:text-3xl text-2xl  pb-5 mb-5 font-chakraBold">
            Previous Year Events
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center max-xl:gap-16 px-0">
            {isLoading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <SkeletonWorkCard key={index} />
                ))
              : events.map((item, index) => (
                  <WorkCard
                    key={item.id}
                    index={index}
                    work={item}
                    year="previous-year"
                    type="events"
                  />
                ))}
          </div>
        </div>

        <div className="mt-7 mb-4 pt-7 md:p-5 xl:p-10">
          <div className="sm:text-3xl text-2xl font-bold pb-5 font-chakraBold">
            Previous Year Workshops
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center max-xl:gap-16  mt-5">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonWorkCard key={index} />
                ))
              : workshops.map((item, index) => (
                  <WorkCard
                    key={item.id}
                    work={item}
                    year="previous-year"
                    type="workshops"
                  />
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
