import apiClient from "@/services/api-client";
import { SuccessToast, ErrorToast } from "@/utils/toast";

interface UploadPixelArtData {
  Title: string;
  Description: string;
  UploadPixelArt: FileList;
}

const useUploadPixelArt = () => {
  const token = localStorage.getItem("token");

  const uploadPixelArt = async (Data: UploadPixelArtData) => {
    const formData = new FormData();
    formData.append("pixelart", Data.UploadPixelArt[0]);
    formData.append(
      "meta",
      JSON.stringify({
        PixelArtName: Data.Title,
        PixelArtDescription: Data.Description,
      })
    );

    await apiClient
      .post("pixelart", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        SuccessToast("Pixel Art uploaded successfully!");
      })
      .catch(() => {
        ErrorToast("Failed to upload Pixel Art");
      });
  };
  return { uploadPixelArt };
};

export default useUploadPixelArt;
