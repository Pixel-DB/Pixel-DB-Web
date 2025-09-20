import { useUserContext } from "@/context/UserContext";
import apiClient from "@/services/api-client";
import { SuccessToast, ErrorToast } from "@/utils/toast";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
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

const useRegister = () => {
  const register = async (credentials: RegisterData) => {
    await apiClient
      .post("/user", {
        email: credentials.email,
        password: credentials.password,
        username: credentials.username,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
      })
      .then(() => SuccessToast("Registration successful! You can now log in."))
      .catch(() => ErrorToast("Failed to register, please try again."));
  };

  return { register };
};

export { useLogin, useRegister };
