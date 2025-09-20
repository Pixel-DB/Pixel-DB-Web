import DetailBox from "@/components/DetailBox/DetailBox";
import DetailImage from "@/components/DetailImage/DetailImage";
import { useGetPixelArtDetail } from "@/hooks/usePixelArt";

const PixelArtDetail = () => {
  const { PixelArtDetailData } = useGetPixelArtDetail();
  return (
    <div className="flex w-full h-full justify-center items-center flex-row gap-24">
      <div className="w-[600px] h-[600px] objekt-cover my-20">
        <DetailImage
          url={`${import.meta.env.VITE_API_URL}/pixelart/${
            PixelArtDetailData?.Data.ID
          }/picture`}
        />
      </div>
      <DetailBox
        Name={PixelArtDetailData?.Data.Title}
        Description={PixelArtDetailData?.Data.Description}
        CreatedAt={PixelArtDetailData?.Data.CreatedAt}
        ID={PixelArtDetailData?.Data.ID}
      />
    </div>
  );
};

export default PixelArtDetail;
