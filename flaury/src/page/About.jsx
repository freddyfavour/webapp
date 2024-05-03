import React from "react";
import Hero from "../components/about/Hero";
import Intro from "../components/about/Intro";
import Needs from "../components/about/Needs";
import Whyflaury from "../components/about/Whyflaury";
import Introflauryb from "../components/about/Introflauryb";
import Flauryapp from "../components/about/Flauryapp";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
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
