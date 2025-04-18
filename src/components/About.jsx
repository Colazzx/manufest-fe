import Heading from "./Heading";
import Section from "./Section";
import img from "../assets/Web-developer.svg";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Button from "./Button";

const About = () => {
  return (
    <Section id="features" className="relative text-white">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2000} factor={4} fade speed={2} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="About Us" />

        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="fade-up"
          >
            {/* Image Section */}
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <img alt="card img" className="rounded-t float-right" src={img} />
            </div>

            {/* Text Section */}
            <div
              className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <h4 className="h4 mb-4">What can Manufest do?</h4>
              <div>
                <p className="body-2 mb-[3rem] text-n-3">
                  At Manufest, we provide custom web and application development
                  as decision support tools for marketing and operations.
                </p>
              </div>

              <div>
                <p className="body-2 mb-[3rem] text-n-3">
                  We also deliver cutting-edge AI and analytics microservice
                  solutions across industries like manufacturing, retail,
                  production distribution, HR, and logistics—helping businesses
                  make smarter, faster decisions.
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  className="hidden lg:flex items-center"
                  href="#contact-us"
                >
                  <span className="flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
