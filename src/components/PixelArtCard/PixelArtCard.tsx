import Placeholder from "@/assets/ColorPalatte.svg";
import "./PixelArtCard.css";

const PixelArtCard = () => {
  return (
    <div className="rounded-lg shadow m-2">
      <div className="bg-white w-[250px] rounded-lg flex justify-center items-center">
        <img className="p-3" src={Placeholder} alt="PixelArt" />
      </div>
      <div className="px-2 pb-2">
        <h1 className="text-black">Name</h1>
        <p className="text-black text-2xs">Description</p>
      </div>
    </div>
  );
};

export default PixelArtCard;
