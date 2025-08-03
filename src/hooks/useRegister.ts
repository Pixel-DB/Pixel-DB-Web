import apiClient from "@/services/api-client";
import { useState } from "react";

interface RegisterData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
}

const useRegister = () => {
  const [statusCode, setStatusCode] = useState<number | null>(null);

  const register = async (credentials: RegisterData) => {
    await apiClient
      .post("/user", {
        email: credentials.email,
        password: credentials.password,
        username: credentials.username,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
      })
      .then(function (response) {
        console.log(response);
        setStatusCode(response.status);
      })
      .catch(function (error) {
        setStatusCode(error.status);
      });
  };

  return { register, statusCode };
};

export default useRegister;
