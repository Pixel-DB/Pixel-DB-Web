import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { ErrorToast, SuccessToast } from "@/utils/toast";

interface UserData {
  CreatedAt: string;
  Email: string;
  FirstName: string;
  ID: string;
  LastName: string;
  Role: string;
  Username: string;
}
interface UserResponse {
  Data: UserData;
  Message: string;
  Status: string;
}

interface UpdateUserData {
  Email?: string;
  Username?: string;
  FirstName?: string;
  LastName?: string;
  Password?: string;
}

const useGetUser = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      setisLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await apiClient.get<UserResponse>("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setUserData(response.data.Data);
        setIsAuthenticated(true);
      } catch (error) {
        console.log("error");
        setIsAuthenticated(false);
      } finally {
        setisLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { userData, isAuthenticated, isLoading };
};

const useUpdateUser = () => {
  const token = localStorage.getItem("token");
  const updateUser = async (userData: UpdateUserData) => {
    await apiClient
      .patch(
        "/user",
        {
          email: userData.Email,
          username: userData.Username,
          firstName: userData.FirstName,
          lastName: userData.LastName,
          password: userData.Password,
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

export { useGetUser, useUpdateUser };
