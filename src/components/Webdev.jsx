import { webdev, check } from "../assets";
import { collabContent, collabText } from "../constants";
import Section from "./Section";
import { Fade, Slide } from "react-awesome-reveal";
import "../index.css";

const webDev = () => {
  return (
    <Section crosses id="webdev">
      <div className="container lg:flex">
        <div className="max-w-[50rem]">
          <Slide>
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
          </Slide>
        </div>

        <div className="lg:ml-auto md:mr-40 xl:w-full mt-4 flex flex-col items-end">
          <Fade>
            <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem]">
              {collabText}
            </p>
          </Fade>

          <div className="col-md-6 order-lg-2 order-1 w-full">
            <Fade>
              <img
                src={webdev}
                className="img-fluid animation -mt-7 w-full h-auto xl:ml-40"
                style={{ maxWidth: "900px" }}
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
