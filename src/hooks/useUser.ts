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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiClient.get<UserResponse>("/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response.data);
        setUserData(response.data.Data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return { userData };
};

export default useUser;
