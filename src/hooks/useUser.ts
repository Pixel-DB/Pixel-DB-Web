import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

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

const useUser = () => {
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
        const response = await apiClient.get<UserResponse>("/user/me", {
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

export default useUser;
