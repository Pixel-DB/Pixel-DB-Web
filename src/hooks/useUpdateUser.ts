import apiClient from "@/services/api-client";
import { Bounce, toast } from "react-toastify";

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
      .then(function () {
        toast.success("User updated successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return { updateUser };
};
export default useUpdateUser;
