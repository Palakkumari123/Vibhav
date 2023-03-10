import '../styles/globals.css'
import "../styles/HomePage.css";
import "../styles/hacked.css";
import Loading from '../Components/Loading';
import { useState,useEffect } from 'react';
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(function setLader(){
      setLoading(false)
    }, 5000);
  },[])
  return loading ? <Loading /> : <Component {...pageProps} />
  // return 
}
