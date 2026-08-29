import TopBar from "../component/layout/TopBar";
import Navbar from "../component/layout/Navbar";

import Hero from "../component/home/Hero";
import BusinessStats from "../component/home/BusinessStats";
import Categories from "../component/home/Categories";
import Brands from "../component/home/Brands";
import WhoWeServe from "../component/home/WhoWeServe";
import WhyChooseUs from "../component/home/WhyChooseUs";
import About from "../component/home/About";
import Contact from "../component/home/Contact";

import Footer from "../component/layout/Footer";
import WhatsAppButton from "../component/layout/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBar />

      <Navbar />

      <Hero />

      <BusinessStats />

      <Categories />

      <Brands />

      <WhoWeServe />

      <WhyChooseUs />

      <About />

      <Contact />

      <Footer />

      <WhatsAppButton />
    </>
  );
}