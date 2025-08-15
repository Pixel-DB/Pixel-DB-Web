import { Link } from "react-router-dom";

const DashboardSideBar = () => {
  return (
    <div className="flex flex-col gap-8 p-4 text-xl text-gray-800">
      <h1 className="text-2xl font-bold py-4 text-black">Dashboard</h1>
      <Link to="/Dashboard">Home</Link>
      <Link to="/Dashboard/profile">Profile</Link>
      <Link to="/Dashboard/pixelarts/upload">Upload</Link>
      <Link to="/Dashboard/profile">Profile</Link>
      <Link to="/Dashboard/settings">Settings</Link>
      <Link to="/Dashboard/license">License</Link>
    </div>
  );
};

export default DashboardSideBar;
