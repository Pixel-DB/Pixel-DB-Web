import { type AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useData = () => {
  const [data, setData] = useState<AxiosResponse | null>(null);

  useEffect(() => {
    apiClient
      .get("/")
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.error(error));
  }, []);

  return data;
};

export default useData;
