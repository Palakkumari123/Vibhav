"use client";

import Head from "next/head";
import Layout from "../Components/UI/Layout";
import FAQs from "../Components/UI/FAQs";
import Contact from "../Components/Contact";
import LandingPage from "../Components/LandingPage";
import CC from "../Components/CC";
import Gallery from "../Components/Gallery";
import AboutUs from "../Components/AboutUs";
import GameSection from "../Components/GameSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Team Vibhav</title>
        <meta
          name="description"
          content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur"
        />
        <meta
          name="keywords"
          content="Projects, Events, Workshops, Our Team, Our Work, Alumni"
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <main>
        <Layout>
          <div className="flex flex-col">

            {/* ===== HOME SECTION ===== */}
            <section
              id="home"
              className="relative h-screen w-full overflow-hidden"
            >
              {/* Background Image */}
              <img
                src="/Assets/purpleNeoncity.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/2 z-10" />

              {/* Landing Content */}
              <div className="relative z-20">
                <LandingPage />
              </div>
            </section>

            {/* ===== OTHER SECTIONS ===== */}
            <section>
              <AboutUs />
              <Gallery />
              <CC />
              <GameSection />
              <FAQs />
              <Contact />
            </section>

          </div>
        </Layout>
      </main>
    </>
  );
}

// "use client";

// import Head from "next/head";
// import Image from "next/image";
// import Layout from "../Components/UI/Layout";
// import FAQs from "../Components/UI/FAQs";
// import Contact from "../Components/Contact";
// import LandingPage from "../Components/LandingPage";
// import CC from "../Components/CC";
// import Gallery from "../Components/Gallery";
// import AboutUs from "../Components/AboutUs";
// import GameSection from "../Components/GameSection";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Team Vibhav</title>

//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap"
//           rel="stylesheet"
//         />

//         <meta
//           name="description"
//           content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus"
//         />
//         <meta
//           name="keywords"
//           content="Projects, Events, Workshops, Our Team, Our Work, Alumni"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <Layout>
//           <div className="flex flex-col">

//             {/* ================= HOME ================= */}
//             <section
//               id="home"
//               className="relative h-screen w-full overflow-hidden"
//             >
//               <Image
//                 src="/images/background2layer.png"
//                 alt="Background"
//                 fill
//                 className="object-cover"
//                 priority
//               />

//               {/* dark overlay (optional) */}
//               <div className="absolute inset-0 bg-black/40 z-10" />

//               <div className="relative z-20">
//                 <LandingPage />
//               </div>
//             </section>

//             {/* ================= ABOUT ================= */}
//             <section id="about">
//               <AboutUs />
//             </section>

//             {/* ================= GALLERY ================= */}
//             <section id="gallery">
//               <Gallery />
//             </section>

//             {/* ================= CC ================= */}
//             <section id="cc">
//               <CC />
//             </section>

//             {/* ================= GAMES ================= */}
//             <section id="games">
//               <GameSection />
//             </section>

//             {/* ================= FAQ ================= */}
//             <section id="faqs">
//               <FAQs />
//             </section>

//             {/* ================= CONTACT ================= */}
//             <section id="contact">
//               <Contact />
//             </section>

//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// }



// "use client";

// import Head from "next/head";
// import Image from "next/image";
// import Layout from "../Components/UI/Layout";
// import FAQs from "../Components/UI/FAQs";
// import Contact from "../Components/Contact";
// import LandingPage from "../Components/LandingPage";
// import CC from "../Components/CC";
// import Gallery from "../Components/Gallery";
// import AboutUs from "../Components/AboutUs";
// import GameSection from "../Components/GameSection";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Team Vibhav</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap" rel="stylesheet" />
//         <meta
//           name="description"
//           content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur"
//         />
//         <meta
//           name="keywords"
//           content="Projects , Events , Workshops , Our Team , Our Work , Alumni"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <Layout>
//           <div className="flex flex-col">

//             {/* Home Section */}
//             <section id="home" className="relative h-screen w-full ">
//               {/* Background Image */}
//               <Image
//                 src="/images/background2layer.png"
//                 alt="Background"
//                 fill
//                 className="object-cover"
//                 priority
//                 // style={{filter: 'brightness(0.1)'}}
//               />

//               {/* Landing Page */}
//               <LandingPage />
//             </section>

//             {/* Other Sections */}
//             <section>
//               <AboutUs />
//               <Gallery />
//               <CC />
//               <GameSection />
//               <FAQs />
//               <Contact />
//             </section>
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// }




