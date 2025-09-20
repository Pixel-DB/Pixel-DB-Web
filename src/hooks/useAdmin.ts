import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { ErrorToast, SuccessToast } from "@/utils/toast";

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
    if (!deleteUserID) return;

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
        SuccessToast("Deleted User successful");
      } catch (error) {
        console.error(error);
        ErrorToast("Failed to delete user");
      }
    };
    deleteUser();
  }, [deleteUserID]);
  return { deleteUserID, setDeleteUserID };
};

const useBanUser = () => {
  const token = localStorage.getItem("token");
  const [banUserID, setBanUserID] = useState<string>("");

  useEffect(() => {
    if (!banUserID) return;

    const banUser = async () => {
      try {
        const response = await apiClient.patch<UserResponse>(
          "/admin/user/" + banUserID + "/ban",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        SuccessToast("Banned User successful");
      } catch (error) {
        console.error(error);
        ErrorToast("Failed to ban user");
      }
    };
    banUser();
  }, [banUserID]);
  return { banUserID, setBanUserID };
};

export { useUserList, useDeleteUser, useBanUser };
