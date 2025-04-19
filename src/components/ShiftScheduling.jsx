import React from "react";
import Section from "./Section";
import { shift } from "../assets";
import { TypeAnimation } from "react-type-animation";
import { shiftScheduling } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Heading from "./Heading";
import { Slide } from "react-awesome-reveal";

const ShiftScheduling = () => {
  return (
    <Section id="shift-scheduling">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r bg-[#0a0a23] text-white p-8 lg:p-16">
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          {/* Stars Background */}
          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars radius={50} count={500} factor={4} fade speed={4} />
            </Canvas>
          </div>
          <div className="p-1 rounded-[1.5rem] bg-conic-gradient from-[#0a0a23] to-purple-500">
            <img
              src={shift}
              alt="Shift Scheduling Chart"
              className="w-full h-auto rounded-[1.5rem] img-fluid animation"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left z-10 lg:pl-12">
          <Slide direction="left">
            <h4 className="text-3xl font-bold mb-4">
              <TypeAnimation
                sequence={["Shift Scheduling", 5000]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h4>
            <p className="body-2 mb-[1.5rem] text-n-3">
              Manufest is proud to introduce a groundbreaking HR software system
              designed to streamline workforce scheduling and optimize human
              resource costs in your manufacturing and retail environment.
            </p>
          </Slide>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="px-4 md:px-8 lg:px-16 mt-8">
        <Heading
          title="Key Features"
          className="mt-15 text-2xl font-bold text-center text-white mb-4"
        />

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {shiftScheduling.map((item) => (
            <Slide key={item.id} direction={item.id % 2 === 0 ? "up" : "down"}>
              <div className="w-[24rem] min-h-[26rem] bg-n-8 border border-n-6 rounded-lg shadow-lg p-6 group transition-all duration-300 hover:bg-gray-700 hover:text-white">
                <div className="m-2 text-justify text-sm">
                  <img
                    alt={item.title}
                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                    src={item.imageUrl}
                  />
                  <h2 className="font-semibold my-4 text-lg text-center">
                    {item.title}
                  </h2>
                  <p className="body-2 mb-[1.5rem] text-n-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ShiftScheduling;
