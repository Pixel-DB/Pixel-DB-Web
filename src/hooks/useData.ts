import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface ResponseData {
  TotalRequests: number;
  TotalUsers: number;
  TotalPixelArts: number;
  TotalGithubStars: number;
}

interface Response {
  Status: string;
  Message: string;
  Data: ResponseData;
}

const useData = () => {
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<Response>("/");
        console.log(response);
        setData(response.data.Data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { data };
};

export default useData;
