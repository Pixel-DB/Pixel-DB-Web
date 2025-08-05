import PixelArtCard from "@/components/PixelArtCard/PixelArtCard";
import usePixelArt from "@/hooks/usePixelArt";

const PixelArt = () => {
  const { PixelArtData } = usePixelArt();
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 gap-6">
        <PixelArtCard />
        {PixelArtData?.Message}
      </div>
    </div>
  );
};

export default PixelArt;
