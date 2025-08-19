import { NavLink } from "react-router-dom";

interface NavItem {
  name: string;
  link: string;
}

interface Props {
  item: NavItem[];
}

export const NavbarItems = ({ item }: Props) => {
  return (
    <div className="p-2 flex flex-col sm:flex-row sm:items-center sm:justify-center text-xl font-medium gap-4 sm:gap-12">
      {item.map((item) => (
        <NavLink key={item.name} to={item.link}>
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};
