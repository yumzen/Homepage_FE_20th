"use client"

import Head from "next/head";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Kahula band</title>
      </Head>
      <Navbar/>
      <Footer/>
    </div>
  );
}
