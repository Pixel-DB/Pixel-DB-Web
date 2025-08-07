import PixelArtCard from "@/components/PixelArtCard/PixelArtCard";
import usePixelArt from "@/hooks/usePixelArt";

const PixelArt = () => {
  const { PixelArtData } = usePixelArt();
  return (
    <div className="flex items-center justify-center">
      <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
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
