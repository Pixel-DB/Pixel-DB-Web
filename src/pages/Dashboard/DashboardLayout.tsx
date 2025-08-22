import DashboardSideBar from "@/components/Dashboard/DashboardSideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-full w-full">
      <aside className="z-30 max-w-[200px] w-full shadow-xl/30 h-screen mr-2 border-r-1 border-gray-700 bg-background-secondary">
        <DashboardSideBar />
      </aside>
      <div className="absolute flex w-full justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
