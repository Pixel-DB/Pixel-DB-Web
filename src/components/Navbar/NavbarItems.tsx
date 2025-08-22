import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  link: string;
}

export const NavbarItems = ({ name, link }: Props) => {
  return (
    <div className="text-xl font-medium">
      <NavLink to={link}>
        <span>{name}</span>
      </NavLink>
    </div>
  );
};
