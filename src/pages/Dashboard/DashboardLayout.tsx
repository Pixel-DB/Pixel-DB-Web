import DashboardSideBar from "@/components/Dashboard/DashboardSideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-full w-full">
      <aside className="z-30">
        <DashboardSideBar />
      </aside>
      <div className="absolute flex w-full justify-center">
        <div className="h-full bg-background-primary">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
