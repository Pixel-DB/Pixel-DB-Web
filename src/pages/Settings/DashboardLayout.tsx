import SettingsSideBar from "@/components/Settings/SettingsSideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-full w-full">
      <aside className="z-999 max-w-[200px] w-full shadow-xl/30 h-screen mr-2">
        <SettingsSideBar />
      </aside>
      <div className="absolute flex w-full justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
