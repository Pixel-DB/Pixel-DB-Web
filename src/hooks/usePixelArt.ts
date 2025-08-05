import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

interface PixelArtData {
  ID: string;
  CreatedAt: string;
  OwnerID: string;
  OwnerUsername: string;
  Filename: string;
  OldFilename: string;
  FileExtension: string;
  PixelArtURL: string;
  PixelArtSize: number;
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

  useEffect(() => {
    const fetchPixelArt = async () => {
      try {
        const response = await apiClient.get<PixelArtResponse>("/pixelart");
        console.log(response.data);
        setPixelArtData(response.data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchPixelArt();
  }, []);

  return { PixelArtData };
};

export default usePixelArt;
