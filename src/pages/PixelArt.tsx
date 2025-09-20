import PixelArtCard from "@/components/PixelArtCard/PixelArtCard";
import Button from "@/components/ui/Button/Button";
import usePixelArt from "@/hooks/usePixelArt";
import { useState } from "react";

const PixelArt = () => {
  const { PixelArtData, page, setPage } = usePixelArt();
  const [BackDisabled] = useState(false);
  const [NextDisabled] = useState(false);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <div className="flex flex-col items-center pt-5">
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
          {PixelArtData?.Data.items.map((item) => (
            <PixelArtCard
              key={item.ID}
              title={item.Title}
              description={item.Description}
              id={item.ID}
            />
          ))}
        </div>
        <div className="m-10 flex gap-6 items-center justify-center">
          <Button
            w-full
            color="blue"
            onClick={handlePreviousPage}
            disabled={PixelArtData?.Data.first}
          >
            Back
          </Button>
          <h1 className="text-xl font-bold">{page}</h1>
          <Button
            wFull
            color="amber"
            onClick={handleNextPage}
            disabled={PixelArtData?.Data.last}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PixelArt;
