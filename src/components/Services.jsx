import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices } from "../constants";
import { PhotoChatMessage, Gradient } from "./design/Services";
import Button from "./Button";
import { Fade, Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Section crosses id="services">
      <div className="container">
        <Fade direction="up">
          <Heading
            title="Services - What We Provide"
            text="Empowering Manufacturing with Innovation"
          />
        </Fade>

        <div className="relative">
          <Slide direction="up">
            <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                <img
                  className="w-full h-full object-cover md:object-right"
                  width={800}
                  alt="Smartest AI"
                  height={730}
                  src={service1}
                />
              </div>

              <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="h4 mb-4">Web and Application Development</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  We craft responsive websites and custom web apps tailored to
                  your brand or business needs — from sleek profiles to powerful
                  internal tools.
                </p>
                <ul className="body-2">
                  {brainwaveServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6"
                    >
                      <img width={24} height={24} src={check} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-4">
                  <Button
                    className="hidden lg:flex items-center"
                    href="#webdev"
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
          </Slide>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <Slide direction="left">
              <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={service2}
                    className="h-full w-full object-cover"
                    width={630}
                    height={750}
                    alt="robot"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">AI & Analytics</h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Empower your business with AI-driven insights and advanced
                    analytics. Our tools are built to streamline supply chain
                    operations, optimize production, and drive smarter decisions
                    — fast.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      className="hidden lg:flex items-center"
                      href="#analytics"
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
                <PhotoChatMessage />
              </div>
            </Slide>

            <Slide direction="right">
              <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">ERP & System Integration</h4>
                  <p className="body-2 mb-[2rem] text-n-3">
                    Connect and enhance your internal operations with tailored
                    ERP solutions. We build custom modules, synchronize your
                    inventory, and ensure data flows smoothly between your
                    systems — empowering smarter, faster decisions.
                  </p>

                  <div className="flex justify-center">
                    <Button
                      className="hidden lg:flex items-center"
                      href="#analytics"
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

                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                  <img
                    src={service3}
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt="ERP dashboard"
                  />
                  {/* You can add any animations or icons here if needed */}
                </div>
              </div>
            </Slide>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
