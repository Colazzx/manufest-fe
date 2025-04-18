import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { client } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { Fade } from "react-awesome-reveal";

const Client = () => (
  <Section crosses id="projects">
    <div className="container md:pb-10">
      <Fade>
        <Heading
          tag="Ready to get started"
          title="Here’s How We’ve Made an Impact"
        />
      </Fade>

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {client.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div
                    className={`w-full max-w-[350px] mx-auto ${
                      item.rounded ? "rounded-2xl overflow-hidden" : ""
                    }`}
                  >
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={700}
                      height={700}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4 mt-10">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Client;
