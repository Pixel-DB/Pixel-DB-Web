import apiClient from "@/services/api-client";
import { ErrorToast, SuccessToast } from "@/utils/toast";

interface UpdateUserData {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

const useUpdateUser = () => {
  const token = localStorage.getItem("token");
  const updateUser = async (userData: UpdateUserData) => {
    await apiClient
      .patch(
        "/user",
        {
          email: userData.email,
          username: userData.username,
          firstName: userData.firstName,
          lastName: userData.lastName,
          password: userData.password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => SuccessToast("Updated successfully"))
      .catch(() => ErrorToast("Error updating user"));
  };
  return { updateUser };
};
export default useUpdateUser;
