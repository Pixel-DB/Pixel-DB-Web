import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { ErrorToast, SuccessToast } from "@/utils/toast";
import { useParams } from "react-router-dom";

interface PixelArtItem {
  ID: string;
  CreatedAt: string;
  URL: string;
  OwnerID: string;
  Filename: string;
  Title: string;
  Description: string;
}
interface PixelArtData {
  items: PixelArtItem[];
  page: number;
  size: number;
  max_page: number;
  total_pages: number;
  total: number;
  last: boolean;
  first: boolean;
  visible: number;
}
interface PixelArtResponse {
  Status: string;
  Message: string;
  Data: PixelArtData;
}

interface UploadPixelArtData {
  Title: string;
  Description: string;
  UploadPixelArt: FileList;
}

interface PixelArtDetailResponse {
  Status: string;
  Message: string;
  Data: PixelArtItem;
}

const useGetPixelArtList = () => {
  const [PixelArtData, setPixelArtData] = useState<PixelArtResponse | null>(
    null
  );
  const [page, setPage] = useState(0);
  const [max_page, setMax_page] = useState(1);

  useEffect(() => {
    const fetchPixelArtList = async () => {
      try {
        const response = await apiClient.get<PixelArtResponse>(
          "/pixelart?page=" + page
        );
        console.log(response.data);
        setMax_page(response.data.Data.max_page);
        setPixelArtData(response.data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchPixelArtList();
  }, [page]);

  return { PixelArtData, setPage, page, max_page };
};

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

const useGetPixelArtDetail = () => {
  const [PixelArtDetailData, setPixelArtDetailData] =
    useState<PixelArtDetailResponse | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPixelArt = async () => {
      try {
        const response = await apiClient.get<PixelArtDetailResponse>(
          `/pixelart/${id}`
        );
        console.log(response.data);
        setPixelArtDetailData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPixelArt();
  }, []);

  return { PixelArtDetailData };
};

export { useGetPixelArtList, useUploadPixelArt, useGetPixelArtDetail };
