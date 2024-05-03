import Features from "../components/landingPage/Features";
import Features2 from "../components/landingPage/Features2";
import Flaurybusiness from "../components/landingPage/Flaurybusiness";
import Footer from "../Footer";
import Getstarted from "../components/landingPage/Getstarted";
import Hero from "../components/landingPage/Hero";
import Services from "../components/landingPage/Services";
import Testimonials from "../components/landingPage/Testimonials";
import Whatyouget from "../components/landingPage/Whatyouget";

const Home = () => {
  return (
    <div>
      <Hero />
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
