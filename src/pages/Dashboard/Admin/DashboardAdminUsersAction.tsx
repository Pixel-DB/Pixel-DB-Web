import SearchInput from "@/components/ui/SearchInput/SearchInput";

const DashboardAdminUsersAction = () => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-1/3">
        <SearchInput placeholder="Search for User" />
      </div>
    </div>
  );
};

export default DashboardAdminUsersAction;
