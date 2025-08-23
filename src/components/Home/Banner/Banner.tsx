import Mario from "../../../assets/Mario.svg";
import Register from "../CTAButtons/Register";
import StartExploring from "../CTAButtons/StartExploring";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".Welcome", { opacity: 0.25, x: -200 });
      gsap.set(".PixelDB", { opacity: 0.25, x: 200 });
      gsap.to(".Welcome", { x: 0, duration: 1, ease: "circ.out", opacity: 1 });
      gsap.to(".PixelDB", { x: 0, duration: 1, ease: "circ.out", opacity: 1 });
    },
    { scope: container }
  );

  return (
    <div className="h-[80vh] max-w-[1000px] w-full flex items-center justify-between px-2">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-1 max-w-xl" ref={container}>
          <h2 className="text-5xl md:text-6xl font-normal text-text Welcome ">
            Welcome to
          </h2>
          <h1 className="text-7xl md:text-8xl font-extrabold text-highlight leading-tight PixelDB">
            PixelDB
          </h1>
          <p className="text-xl text-gray-700 Description">
            Pixel-BD is an open-source online platform where anyone can upload,
            share, and showcase their pixel art creations with the community.
          </p>
        </div>
        <div className="max-w-[500px] flex flex-col md:flex-row gap-4 pt-5">
          <StartExploring />
          <Register />
        </div>
      </div>
      <div className="hidden md:block items-center justify-center">
        <img
          src={Mario}
          className="h-[400px] w-auto object-contain animate-float"
          alt="Color Palette"
        />
      </div>
    </div>
  );
};

export default Banner;
