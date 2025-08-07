import PixelArtCard from "@/components/PixelArtCard/PixelArtCard";
import Button from "@/components/ui/Button/Button";
import usePixelArt from "@/hooks/usePixelArt";

const PixelArt = () => {
  const { PixelArtData, page, setPage } = usePixelArt();

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
          {PixelArtData?.Data.items.map((item) => (
            <PixelArtCard
              key={item.ID}
              name={item.Name}
              description={item.Description}
            />
          ))}
        </div>
        <div className="mt-10 flex gap-6 items-center justify-center">
          <Button disabled w-full color="blue" onClick={handlePreviousPage}>
            Back
          </Button>
          <h1 className="text-xl font-bold">{page}</h1>
          <Button wFull color="amber" onClick={handleNextPage}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PixelArt;
