import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

interface PixelArtData {
  CreatedAt: string;
  Email: string;
  FirstName: string;
  ID: string;
  LastName: string;
  Role: string;
  Username: string;
}

interface PixelArtResponse {
  Data: PixelArtData;
  Message: string;
  Status: string;
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
