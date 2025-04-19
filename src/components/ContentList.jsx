import { Slide } from "react-awesome-reveal";
import { check } from "../assets";
import { keyFeatures } from "../constants";

const ContentList = () => {
  return (
    <Slide direction="up">
      <div className="flex gap-[1rem] max-lg:flex-wrap">
        {keyFeatures.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full min-h-[28rem] px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3  flex flex-col justify-between"
          >
            <h4 className="h4 mb-4 text-center">{item.title}</h4>

            <p className="text-center body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>

            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6 justify-start"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Slide>
  );
};

export default ContentList;
