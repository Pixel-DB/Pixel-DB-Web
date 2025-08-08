import usePixelArtDetail from "@/hooks/usePixelArtDetail";

const PixelArtDetail = () => {
  const { PixelArtDetailData } = usePixelArtDetail();
  return (
    <div className="flex w-full h-full justify-center items-center flex-row gap-24">
      <div className="w-[600px] h-[600px] objekt-cover border-2 rounded-md my-20">
        <img
          src={`http://localhost:3000/pixelart/${PixelArtDetailData?.Data.ID}/picture`}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div>{PixelArtDetailData?.Data.Name}</div>
        <div>{PixelArtDetailData?.Data.Description}</div>
        <div>{PixelArtDetailData?.Data.CreatedAt}</div>
        <div>{PixelArtDetailData?.Data.ID}</div>
      </div>
    </div>
  );
};

export default PixelArtDetail;
