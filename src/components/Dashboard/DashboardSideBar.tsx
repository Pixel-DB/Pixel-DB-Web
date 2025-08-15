import { NavLink } from "react-router-dom";

const DashboardSideBar = () => {
  return (
    <div className="flex flex-col gap-8 p-4 text-xl text-gray-800">
      <h1 className="text-2xl font-bold py-4 text-black">Dashboard</h1>
      <NavLink to="/Dashboard" end>
        {({ isActive }) => (
          <span className={isActive ? "bg-blue-500" : ""}>Home</span>
        )}
      </NavLink>
      <NavLink to="/Dashboard/profile">
        {({ isActive }) => (
          <span className={isActive ? "bg-blue-500" : ""}>Profile</span>
        )}
      </NavLink>
      <NavLink to="/Dashboard/upload">
        {({ isActive }) => (
          <span className={isActive ? "bg-blue-500" : ""}>Upload</span>
        )}
      </NavLink>
      <NavLink to="/Dashboard/settings">
        {({ isActive }) => (
          <span className={isActive ? "bg-blue-500" : ""}>Settings</span>
        )}
      </NavLink>
      <NavLink to="/Dashboard/license">
        {({ isActive }) => (
          <span className={isActive ? "bg-blue-500" : ""}>License</span>
        )}
      </NavLink>
    </div>
  );
};

export default DashboardSideBar;
