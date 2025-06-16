import Mario from "../../assets/Mario.svg";

const Banner = () => {
  return (
    <div className="h-[80vh] max-w-[1000px] w-full flex items-center justify-between px-2">
      <div className="flex flex-col space-y-1 max-w-xl">
        <h1 className="text-6xl font-normal text-green-500">
          Welcome to <br />
          <span className="text-8xl font-extrabold text-blue-700 leading-tight">
            PixelDB
          </span>
        </h1>
        <p className="text-xl text-gray-700">
          The ultimate database for all your pixel art and color palette needs.
          Organize, explore, and share your creations with the world.
        </p>
      </div>
      <div className="flex items-center justify-center">
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
