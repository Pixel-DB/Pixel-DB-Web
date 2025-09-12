import Button from "@/components/ui/Button/Button";
import SearchInput from "@/components/ui/SearchInput/SearchInput";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FieldValues {
  search?: string;
}

interface Props {
  onSearchChange: (value: string) => void;
  onBanClick?: () => void;
  onDeleteClick?: () => void;
}

const DashboardAdminUsersAction = ({
  onSearchChange,
  onBanClick,
  onDeleteClick,
}: Props) => {
  const { register, watch } = useForm<FieldValues>();
  const search = watch("search", "");

  useEffect(() => {
    onSearchChange(search || "");
  }, [search, onSearchChange]);

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="w-1/3">
        <SearchInput placeholder="Search for User" {...register("search")} />
      </div>
      <div className="flex flex-row h-9 space-x-4">
        <Button color="amber" onClick={onBanClick}>
          Ban
        </Button>
        <Button color="red" onClick={onDeleteClick}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DashboardAdminUsersAction;
