import { useEffect } from "react";
import Blogdetails from "../components/landingPage/blog/Blogdetails";
import Flauryapp from "../components/landingPage/blog/Flauryapp";
import Hero from "../components/landingPage/blog/Hero";
import Footer from "../components/landingPage/Footer";
import Nav from "../components/landingPage/Nav";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <Hero />
      <Blogdetails />
      <Flauryapp />
      <Footer />
    </div>
  );
};

export default Blog;
