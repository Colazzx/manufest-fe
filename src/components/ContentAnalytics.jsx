import Section from "./Section";
import { chatbot, stars } from "../assets";
import Heading from "./Heading";
import ContentList from "./ContentList";
import { LeftLine, RightLine } from "./design/Pricing";

const ContentAnalytics = () => {
  return (
    <Section className="overflow-hidden -mt-20">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={chatbot}
            className="relative z-1"
            width={500}
            height={500}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading title="Key Features" />

        <div className="relative">
          <ContentList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default ContentAnalytics;
