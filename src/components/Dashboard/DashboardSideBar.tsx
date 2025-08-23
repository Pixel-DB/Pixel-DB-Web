import DashboardSideBarButtons from "./DashboardSideBarButtons";
import { FaArrowLeft } from "react-icons/fa6";

const DashboardSideBar = () => {
  return (
    <div className="flex flex-col gap-8 p-4 text-xl text-gray-800">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold py-4 text-black">Dashboard</h1>
        <FaArrowLeft className="text-text-secondary mb-1" />
      </div>
      <DashboardSideBarButtons to="/dashboard" end>
        Home
      </DashboardSideBarButtons>
      <DashboardSideBarButtons to="/dashboard/profile">
        Profile
      </DashboardSideBarButtons>
      <DashboardSideBarButtons to="/dashboard/upload">
        Upload
      </DashboardSideBarButtons>
      <DashboardSideBarButtons to="/dashboard/settings">
        Settings
      </DashboardSideBarButtons>
      <DashboardSideBarButtons to="/dashboard/license">
        License
      </DashboardSideBarButtons>
    </div>
  );
};

export default DashboardSideBar;
