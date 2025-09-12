import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";

interface UserItem {
  ID: string;
  CreatedAt: string;
  Email: string;
  FirstName: string;
  LastName: string;
  Username: string;
  Role: string;
}

interface UserData {
  items: UserItem[];
  page: number;
  size: number;
  max_page: number;
  total_pages: number;
  total: number;
  last: boolean;
  first: boolean;
  visible: number;
}

interface UserResponse {
  Status: string;
  Message: string;
  Data: UserData;
}

const useUserList = () => {
  const [UserData, setUserData] = useState<UserResponse | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [max_page, setMax_page] = useState(1);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiClient.get<UserResponse>(
          "/admin/user/?search=" + search + "&page=" + page,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setMax_page(response.data.Data.max_page);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [page, search]);

  return { UserData, setPage, page, max_page, setSearch };
};

const useDeleteUser = () => {
  const token = localStorage.getItem("token");
  const [deleteUserID, setDeleteUserID] = useState<string>("");

  useEffect(() => {
    const deleteUser = async () => {
      try {
        const response = await apiClient.delete<UserResponse>(
          "/admin/user/" + deleteUserID,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    deleteUser();
  });
  return { deleteUserID, setDeleteUserID };
};

export { useUserList, useDeleteUser };
