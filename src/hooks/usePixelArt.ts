import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

interface PixelArtItem {
  ID: string;
  CreatedAt: string;
  URL: string;
  OwnerID: string;
  Filename: string;
  Name: string;
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

const usePixelArt = () => {
  const [PixelArtData, setPixelArtData] = useState<PixelArtResponse | null>(
    null
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPixelArt = async () => {
      try {
        const response = await apiClient.get<PixelArtResponse>(
          "/pixelart?page=" + page
        );
        console.log(response.data);
        setPixelArtData(response.data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchPixelArt();
  }, [page]);

  return { PixelArtData, setPage, page };
};

export default usePixelArt;
