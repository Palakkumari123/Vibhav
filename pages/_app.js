import "../styles/globals.css";
import Loading from "../Components/Loading";
import { useVideo, VideoProvider } from "../Components/LoadingContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
export default function App({ Component, pageProps }) {
  return (
    <VideoProvider>
      <Component {...pageProps} />
    </VideoProvider>
  );
}
