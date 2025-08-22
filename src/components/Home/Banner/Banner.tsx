import Mario from "../../../assets/Mario.svg";
import Register from "../CTAButtons/Register";
import StartExploring from "../CTAButtons/StartExploring";

const Banner = () => {
  return (
    <div className="h-[80vh] max-w-[1000px] w-full flex items-center justify-between px-2">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-1 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-normal text-text">
            Welcome to <br />
            <span className="text-7xl md:text-8xl font-extrabold text-highlight leading-tight">
              PixelDB
            </span>
          </h1>
          <p className="text-xl text-gray-700">
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
