import PixelArtCard from "@/components/PixelArtCard/PixelArtCard";

const PixelArt = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 gap-6">
        <PixelArtCard />
      </div>
    </div>
  );
};

export default PixelArt;
