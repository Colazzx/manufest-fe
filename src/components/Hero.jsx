import React from "react";
import Section from "./Section";
import { TypeAnimation } from "react-type-animation";
import { analytics } from "../assets";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BottomLine, Gradient } from "./design/Hero.jsx";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] lg:pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <Fade direction="up">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={700} factor={4} fade speed={4} />
          </Canvas>
        </div>

        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6 mt-[4rem] md:mt-0">
              <TypeAnimation
                sequence={[
                  "Custom Development for Businesses",
                  1000,
                  "ERP Solutions Tailored for You",
                  1000,
                  "Professional Website Development",
                  1000,
                  "AI-Powered Analytics for Growth",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Empower your business with AI-driven ERP solutions. Streamline
              operations, forecast with precision, and optimize resources
              effortlessly.
            </p>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/440]">
                  <img
                    src={analytics}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[10%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>
                </div>
              </div>

              <Gradient />
            </div>
          </div>
        </div>

        <BottomLine />
      </Fade>
    </Section>
  );
};

export default Hero;
