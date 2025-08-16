import apiClient from "@/services/api-client";
import { Bounce, toast } from "react-toastify";

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
      .then((response) => {
        console.log("Upload successful:", response);
        toast.success("Pixel Art uploaded successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        toast.error("Error uploading Pixel Art!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      });
  };
  return { uploadPixelArt };
};

export default useUploadPixelArt;
