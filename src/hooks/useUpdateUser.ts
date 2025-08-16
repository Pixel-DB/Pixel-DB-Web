import apiClient from "@/services/api-client";

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
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return { updateUser };
};
export default useUpdateUser;
