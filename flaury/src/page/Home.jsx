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
        {/* <div className="w-4/5 md:w-1/3 mx-auto flex justify-between items-center py-4">
          <h3 className="text-lightprimary text-sm">Trusted By:</h3>
          <ul className="flex gap-4">
            <button className="border border-lightprimary text-xs px-4 py-1 rounded-lg text-lightprimary">
              Wave
            </button>
            <button className="border border-lightprimary text-xs px-4 py-1 rounded-lg text-lightprimary">
              HOE
            </button>
          </ul>
        </div> */}

        <NearbySalon />
        <Services />
      </div>
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
