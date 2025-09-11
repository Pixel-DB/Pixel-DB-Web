import { useUserContext } from "@/context/UserContext";
import apiClient from "@/services/api-client";
import { SuccessToast, ErrorToast } from "@/utils/toast";

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
        SuccessToast("Login successful!");
        setUser(response.data.Data);
        localStorage.setItem("token", response.data.Token);
      })
      .catch(() =>
        ErrorToast("Failed to login, please check your credentials.")
      );
  };

  return { login };
};

export default useLogin;
