import apiClient from "@/services/api-client";

const useUploadPixelArt = () => {
  const token = localStorage.getItem("token");

  const uploadPixelArt = async (file: File) => {
    const formData = new FormData();
    formData.append("pixelart", file);

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
