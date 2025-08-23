import { useState } from "react";
import DashboardSideBarButtons from "./DashboardSideBarButtons";
import { FaArrowLeft } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";

const DashboardSideBar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className="flex flex-col gap-8 p-4 text-xl text-gray-800">
      <div className="flex flex-row items-center justify-between gap-4 py-4">
        <h1
          className={`text-2xl font-bold text-black ${
            isClosed ? "hidden" : ""
          }`}
        >
          Dashboard
        </h1>
        <FaArrowLeft
          className="text-text-secondary mb-1 cursor-pointer justify-center w-full"
          onClick={handleClose}
        />
      </div>
      <DashboardSideBarButtons
        to="/dashboard"
        icon={<FaHome />}
        end
        isClosed={isClosed}
      >
        Home
      </DashboardSideBarButtons>
      <DashboardSideBarButtons
        to="/dashboard/profile"
        icon={<IoPerson />}
        isClosed={isClosed}
      >
        Profile
      </DashboardSideBarButtons>
      <DashboardSideBarButtons
        to="/dashboard/upload"
        icon={<FaCloudUploadAlt />}
        isClosed={isClosed}
      >
        Upload
      </DashboardSideBarButtons>
      <DashboardSideBarButtons
        to="/dashboard/settings"
        icon={<IoSettingsSharp />}
        isClosed={isClosed}
      >
        Settings
      </DashboardSideBarButtons>
      <DashboardSideBarButtons
        to="/dashboard/license"
        icon={<FaBook />}
        isClosed={isClosed}
      >
        License
      </DashboardSideBarButtons>
    </div>
  );
};

export default DashboardSideBar;
