import DashboardSideBar from "@/components/Dashboard/DashboardSideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-full w-full">
      <aside className="z-30">
        <DashboardSideBar />
      </aside>
      <div className="absolute flex w-full justify-center p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
