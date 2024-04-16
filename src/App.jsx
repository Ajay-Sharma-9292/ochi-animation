import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marqueee from "./components/Marqueee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen text-white bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marqueee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
      </div>
    </>
  );
};

export default App;
