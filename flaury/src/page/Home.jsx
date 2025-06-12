import Features from "../components/landingPage/Features";
import Features2 from "../components/landingPage/Features2";
import Flaurybusiness from "../components/landingPage/Flaurybusiness";
import Footer from "../components/landingPage/Footer";
import Getstarted from "../components/landingPage/Getstarted";
import Hero from "../components/landingPage/Hero";
import Services from "../components/landingPage/Services";
import Testimonials from "../components/landingPage/Testimonials";
import Whatyouget from "../components/landingPage/Whatyouget";
import NearbySalon from "../components/shared/NearbySalon";
import { useEffect } from "react";
import Nav from "../components/landingPage/Nav";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <Hero />
      <div className="px-4 sm:px-8 lg:px-24">
        <NearbySalon />
      </div>
      <Services />
      <Features />
      <Whatyouget />
      <Flaurybusiness />
      <Getstarted />
      <Testimonials />
      <Features2 />
      <Footer />
    </div>
  );
};

export default Home;
