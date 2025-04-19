import React from "react";
import Section from "./Section";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Slide } from "react-awesome-reveal";
import Heading from "./Heading";
import { TypeAnimation } from "react-type-animation";
import ContentAnalytics from "./ContentAnalytics";

const Analytics = () => {
  return (
    <>
      <Section crosses id="analytics">
        <Slide>
          <Heading title="AI, Analytics and System Integration Solution" />
        </Slide>
        <div className="w-full flex flex-col lg:flex-row items-stretch text-white bg-[#0a0a23]">
          {/* Left Column: Text */}
          <div className="md:mt-15 md:ml-5 lg:w-1/2 p-8 lg:p-16 text-center lg:text-left">
            {/* Background Stars */}
            <div className="absolute inset-0 z-0">
              <Canvas>
                <Stars radius={50} count={500} factor={4} fade speed={4} />
              </Canvas>
            </div>
            <Slide>
              <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                <TypeAnimation
                  sequence={["How Can AI Transform Manufacturing?", 5000]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                />
              </h4>
              <p className="body-2 mb-[1.5rem] text-n-3 md:mt-6">
                Manufest delivers smart manufacturing planning by analyzing your
                Bill of Materials (BoM) and generating daily Material Resource
                Planning (MRP). Our AI-powered forecasts optimize production to
                reduce holding and production costs—while keeping service levels
                high.
              </p>
            </Slide>
          </div>

          {/* Right Column: Background Div */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto cta"></div>
        </div>
      </Section>
      <ContentAnalytics />
    </>
  );
};

export default Analytics;
