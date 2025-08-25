import { useUserContext } from "@/context/UserContext";
import { NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import DropDownMenuLinks from "./DropDownMenuLinks";

const DropdownMenu = () => {
  const { user } = useUserContext();

  return (
    <div className="flex justify-center flex-col items-center absolute p-4 bg-background-secondary border border-gray-400 rounded-md top-full mt-4">
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-md"
          src={`https://ui-avatars.com/api/?background=16a34a&name=${user?.Username}&size=35&length=1&font-size=0.6`}
        />
        <div className="flex flex-col">
          <h1 className="whitespace-nowrap font-bold">{user?.Username}</h1>
          <h1 className="text-sm text-text-secondary">{user?.Email}</h1>
        </div>
      </div>
      <div className="h-[2px] w-16 rounded-full bg-gray-400 m-3"></div>
      <div className="w-full text-left flex flex-col gap-4">
        <DropDownMenuLinks to="/dashboard/profile" icon={<IoPerson />}>
          Profile
        </DropDownMenuLinks>
        <DropDownMenuLinks to="/dashboard/upload" icon={<FaCloudUploadAlt />}>
          Upload
        </DropDownMenuLinks>
        <DropDownMenuLinks to="/dashboard/settings" icon={<IoSettingsSharp />}>
          Settings
        </DropDownMenuLinks>
      </div>
    </div>
  );
};

export default DropdownMenu;
