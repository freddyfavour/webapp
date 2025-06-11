import React, { useEffect } from "react";
import Hero from "../components/landingPage/about/Hero";
import Intro from "../components/landingPage/about/Intro";
import Needs from "../components/landingPage/about/Needs";
import Whyflaury from "../components/landingPage/about/Whyflaury";
import Introflauryb from "../components/landingPage/about/Introflauryb";
import Flauryapp from "../components/landingPage/about/Flauryapp";
import Footer from "../components/landingPage/Footer";
import Nav from "../components/landingPage/Nav";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <Hero />
      <Intro />
      <Needs />
      <Whyflaury />
      <Introflauryb />
      <Flauryapp />
      <Footer />
    </div>
  );
};

export default About;
