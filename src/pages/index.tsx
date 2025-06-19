import Head from "next/head";
import Nav from "../components/Nav";
import HeroHeader from "@/components/HeroHeader";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bullnose Consulting</title>
        <meta name="description" content="Bullnose Consulting " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <HeroHeader />
      <Features />
      <Contact />
      <About />
      <Footer />
    </>
  );
}
