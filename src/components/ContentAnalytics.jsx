import Section from "./Section";
import { chatbot, stars } from "../assets";
import Heading from "./Heading";
import ContentList from "./ContentList";
import { LeftLine, RightLine } from "./design/Pricing";
import ShiftScheduling from "./ShiftScheduling";
import Inventory from "./Inventory";
import { Fade, Slide } from "react-awesome-reveal";

const ContentAnalytics = () => {
  return (
    <>
      <Section className="overflow-hidden -mt-20">
        <div className="container relative z-2">
          <Fade>
            <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
              <img
                src={chatbot}
                className="relative z-1 img-fluid animation"
                width={2000}
                height={2000}
                alt="chatbot"
              />
              <div className="absolute top-1/2 left-1/2 w-[150rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <img
                  src={stars}
                  className="w-full"
                  width={1200}
                  height={600}
                  alt="Stars"
                />
              </div>
            </div>
          </Fade>

          <Slide direction="down">
            <Heading title="Key Features" />
          </Slide>

          <div className="relative">
            <ContentList />
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </Section>
      <ShiftScheduling />
      <Inventory />
    </>
  );
};

export default ContentAnalytics;
