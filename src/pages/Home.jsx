import React from "react";
import Intro from "../Comps/Intro";
import About from "../Comps/About";
import Stack from "../Comps/Stack";
import GithubCalender from "../Comps/GithubCalender";
import Contact from "../Comps/Contact";
import Footer from "../Comps/Footer";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Stack />
      <GithubCalender />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;