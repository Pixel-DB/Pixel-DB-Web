import FeaturesBox from "./FeaturesBox";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturesContainer = () => {
  gsap.registerPlugin(ScrollTrigger);
  const section = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".Box", { opacity: 0, y: 100 });
      gsap.to(".Box", {
        stagger: 0.1,
        scrollTrigger: ".Box",
        duration: 0.3,
        opacity: 1,
        y: 0,
      });
    },
    { scope: section }
  );

  return (
    <section
      ref={section}
      id="features"
      className="flex justify-center bg-background-secondary"
    >
      <div className="max-w-[1100px] w-full mx-auto m-5 place-items-center flex flex-col gap-15 p-5">
        <div>
          <h1 className="text-4xl font-bold text-center">
            What can PixelDB do?
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center justify-items-center items-center gap-5">
          <div className="Box">
            <FeaturesBox
              color="amber-500"
              title="Upload & Share"
              subtitle="Upload your pixel art and instantly share it with the community"
            />
          </div>
          <div className="Box">
            <FeaturesBox
              color="blue-500"
              title="Profiles"
              subtitle="Create your profile, showcase your work, and grow your audience."
            />
          </div>
          <div className="Box">
            <FeaturesBox
              color="green-500"
              title="Powerful API"
              subtitle="Upload, fetch, and organize pixel arts with a simple REST API."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesContainer;
