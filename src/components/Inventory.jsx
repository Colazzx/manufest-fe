import React from "react";
import Section from "./Section";
import { inventory } from "../assets";
import { inventoryManagement } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Heading from "./Heading";
import { TypeAnimation } from "react-type-animation";
import { Slide } from "react-awesome-reveal";

const Inventory = () => {
  return (
    <Section id="inventory">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#0a0a23] text-white p-8 lg:p-16 relative">
        <div className="lg:w-1/2 text-center lg:text-left z-10 lg:pr-12 mb-8 lg:mb-0">
          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars radius={50} count={500} factor={4} fade speed={4} />
            </Canvas>
          </div>
          <Slide direction="left">
            <h4 className="text-3xl font-bold mb-4">
              <TypeAnimation
                sequence={["Inventory Management Decision Tool", 5000]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h4>
            <p className="body-2 mb-[1.5rem] text-n-3">
              Manufest's Inventory Management software feature is designed to
              optimize your inventory management processes, ensuring that you
              maintain the right balance between stock availability and cost
              efficiency. This feature leverages advanced algorithms to
              determine the optimal order quantity and timing, reducing both
              holding costs and stockouts.
            </p>
          </Slide>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="p-1 rounded-[1.5rem] bg-conic-gradient from-purple-500 via-blue-500 to-purple-500">
            <img
              src={inventory}
              alt="Inventory Management Chart"
              width={2828}
              height={1650}
              className="w-[40rem] h-auto rounded-[1.5rem] img-fluid animation"
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="px-4 md:px-8 lg:px-16 mt-8">
        <Heading
          title="Key Features"
          className="mt-15 text-2xl font-bold text-center text-white mb-6"
        />

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {inventoryManagement.map((item) => (
            <Slide key={item.id} direction={item.id % 2 === 0 ? "down" : "up"}>
              <div className="w-[20rem] min-h-[24rem] bg-n-8 border border-n-6 rounded-lg shadow-lg p-4 group transition-all duration-300 hover:bg-gray-700 hover:text-white">
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

export default Inventory;
