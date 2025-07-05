import { type AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";

const [data, setData] = useState<AxiosResponse | null | void>(null);
const useData = () => {
  useEffect(() => {
    apiClient
      .get("/")
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return data;
};

export default useData;
