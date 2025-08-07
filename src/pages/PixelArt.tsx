import PixelArtCard from "@/components/PixelArtCard/PixelArtCard";
import usePixelArt from "@/hooks/usePixelArt";

const PixelArt = () => {
  const { PixelArtData } = usePixelArt();
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 gap-6">
        {PixelArtData?.Data.items.map((item) => (
          <PixelArtCard
            key={item.ID}
            name={item.Name}
            description={item.Description}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelArt;
