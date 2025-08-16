import apiClient from "@/services/api-client";

interface UpdateUserData {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

const useUpdateUser = () => {
  const login = async (userData: UpdateUserData) => {
    await apiClient
      .patch("/user", {
        email: userData.email,
        username: userData.username,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return { login };
};
export default useUpdateUser;
