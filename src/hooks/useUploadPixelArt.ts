import apiClient from "@/services/api-client";

interface UploadPixelArtData {
  Name: string;
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
        PixelArtName: Data.Name,
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
      .then((response) => {
        console.log("Upload successful:", response);
      })
      .catch((error) => {
        console.error("Upload failed:", error);
      });
  };
  return { uploadPixelArt };
};

export default useUploadPixelArt;
