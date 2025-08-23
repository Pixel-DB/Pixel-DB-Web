import { NavLink } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
  end?: boolean;
  icon: React.ReactNode;
}

const DashboardSideBarButtons = ({ children, to, end, icon }: Props) => {
  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <span
          className={
            isActive
              ? "bg-gray-300 px-4 py-2 flex rounded-md"
              : "px-4 py-2 flex hover:bg-gray-100 rounded-md"
          }
        >
          <div className="items-center flex flex-row gap-2">
            {icon}
            {children}
          </div>
        </span>
      )}
    </NavLink>
  );
};

export default DashboardSideBarButtons;
