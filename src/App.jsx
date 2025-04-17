import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Webdev from "./components/Webdev.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#3b1f73_0%,_#1e1b4b_40%,_#0a0a23_85%,_#000000_100%)] text-white">
        <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <About />
          <Services />
          <Webdev />
        </div>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
