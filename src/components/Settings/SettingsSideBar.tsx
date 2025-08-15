import { Link } from "react-router-dom";

const SettingsSideBar = () => {
  return (
    <div className="flex flex-col gap-8 p-4 text-xl text-gray-800">
      <h1 className="text-2xl font-bold py-4 text-black">Settings</h1>
      <a href="/settings">Home</a>
      <Link to="/settings/profile">Profile</Link>
      <Link to="#">General</Link>
      <Link to="#">Pixel Arts</Link>
      <Link to="#">License</Link>
    </div>
  );
};

export default SettingsSideBar;
