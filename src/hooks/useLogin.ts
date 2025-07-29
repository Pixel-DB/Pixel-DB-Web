import apiClient from "@/services/api-client";
import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

const useLogin = () => {
  const [statusCode, setStatusCode] = useState<number | null>(null);

  const login = async (credentials: LoginData) => {
    await apiClient
      .post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (response) {
        setStatusCode(response.status);
        localStorage.setItem("token", response.data.data.Token);
      })
      .catch(function (error) {
        setStatusCode(error.status);
      });
  };

  return { login, statusCode };
};

export default useLogin;
