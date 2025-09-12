import SearchInput from "@/components/ui/SearchInput/SearchInput";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FieldValues {
  search?: string;
}

interface Props {
  onSearchChange: (value: string) => void;
}

const DashboardAdminUsersAction = ({ onSearchChange }: Props) => {
  const { register, watch } = useForm<FieldValues>();
  const search = watch("search", "");

  useEffect(() => {
    onSearchChange(search || "");
  }, [search, onSearchChange]);

  return (
    <div className="w-full flex flex-row">
      <div className="w-1/3">
        <SearchInput placeholder="Search for User" {...register("search")} />
      </div>
    </div>
  );
};

export default DashboardAdminUsersAction;
