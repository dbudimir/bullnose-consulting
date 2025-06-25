import Nav from "@/components/Nav";
import HeroHeader from "@/components/HeroHeader";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroHeader />
      <Features />
      <Contact />
      <About />
      <Footer />
    </>
  );
}
