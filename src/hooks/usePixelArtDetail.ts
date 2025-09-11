import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { useParams } from "react-router-dom";

interface PixelArtData {
  ID: string;
  CreatedAt: string;
  URL: string;
  OwnerID: string;
  Filename: string;
  Title: string;
  Description: string;
}

interface PixelArtResponse {
  Status: string;
  Message: string;
  Data: PixelArtData;
}

const usePixelArtDetail = () => {
  const [PixelArtDetailData, setPixelArtDetailData] =
    useState<PixelArtResponse | null>(null);
  const { id } = useParams<{ id: string }>();
  console.log(id);

  useEffect(() => {
    const fetchPixelArt = async () => {
      try {
        const response = await apiClient.get<PixelArtResponse>(
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

export default usePixelArtDetail;
