import { useUserContext } from "@/context/UserContext";
import apiClient from "@/services/api-client";
import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

const useLogin = () => {
  const { setUser } = useUserContext();

  const login = async (credentials: LoginData) => {
    await apiClient
      .post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.Token);
        setUser(response.data.Data);
      })
      .catch(function (error) {});
  };

  return { login };
};

export default useLogin;
