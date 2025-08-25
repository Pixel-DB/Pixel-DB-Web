import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const DropDownMenuLinks = ({ to, icon, children }: Props) => {
  return (
    <NavLink to={to}>
      <span>
        <div className="items-center flex flex-row gap-2">
          <span className="text-xl mb-1 text-text-secondary">{icon}</span>
          <span>{children}</span>
        </div>
      </span>
    </NavLink>
  );
};

export default DropDownMenuLinks;
