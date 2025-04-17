import { webdev, check } from "../assets";
import { collabContent, collabText } from "../constants";
import Section from "./Section";
import { Fade, Slide } from "react-awesome-reveal";
import "../index.css";

const webDev = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">Web and Application Development</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="col-md-6 order-lg-2 order-1">
            <Fade>
              <img
                src={webdev}
                className="img-fluid animation -mt-6"
                alt="webdev"
              />
            </Fade>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default webDev;
