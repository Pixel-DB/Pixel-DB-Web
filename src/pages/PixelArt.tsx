import PixelArtCard from "@/components/PixelArtCard/PixelArtCard";
import usePixelArt from "@/hooks/usePixelArt";

const PixelArt = () => {
  const { PixelArtData, page, setPage } = usePixelArt();

  const handleNextPage = () => {
    setPage(page + 1);
  };

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
        {page}
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default PixelArt;
