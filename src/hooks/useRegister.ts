import apiClient from "@/services/api-client";
import { SuccessToast, ErrorToast } from "@/utils/toast";

interface RegisterData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
}

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

export default useRegister;
