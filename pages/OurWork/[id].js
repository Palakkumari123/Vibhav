import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
// import styles from '../styles/Home.module.css';
import Projects from "../../Components/Projects";
import { useRouter } from "next/router";
import OurWorkCard from "../../Components/UI/cards/ourWorkCard.jsx";
// import Link from "next/link";
import ourwork from "../../Components/ourwork.json";
import Layout from "../../Components/UI/Layout";

export default function Home() {
  const router = useRouter();
  const [cardState, setCarState] = useState("Events");

  const { id } = router.query;
  const pageState = { Previous: "Previous Years", Current: "Current Years" };
  const tabs = ["Events", "Workshops"];
  const currentPage = pageState[id];
  return (
    <Layout>
      <div className="flex justify-center flex-col mt-28">
        <div className="text-white justify-center flex p-5 font-[Azonix] text-5xl font-black">
          {currentPage}
        </div>
        <div className="flex flex-col sm:flex-row justify-center font-[Azonix]">
          {tabs.map((tab, ind) => {
            return (
              <button
                type="button"
                key={ind}
                className={`border-8 border-transparent w-[20rem] truncate text-2xl bg-gray-800 text-white rounded-md focus:bg-white focus:text-gray-800 font-bold h-12 m-2 ${
                  tab === cardState ? " bg-white text-gray-800" : undefined
                }
            `}
                onClick={() => setCarState(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 font-[Azonix] py-5 lg:gap-6 md:gap-3 lg:px-12 md:px-6 sm:px-3">
          {ourwork
            ? ourwork[id]
              ? ourwork[id][cardState]
                ? ourwork[id][cardState].map((card, ind) => {
                    return (
                      <div key={ind} className="flex justify-center py-2">
                        <OurWorkCard card={card} />
                      </div>
                    );
                  })
                : undefined
              : undefined
            : undefined}
        </div>
      </div>
    </Layout>
  );
}
