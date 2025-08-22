import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface Props {
  name: string;
  link: string;
  hashlink?: boolean;
}

export const NavbarItems = ({ name, link, hashlink }: Props) => {
  if (hashlink) {
    return (
      <div className="text-xl font-medium">
        <HashLink smoth to={link}>
          <span>{name}</span>
        </HashLink>
      </div>
    );
  }

  return (
    <div className="text-xl font-medium">
      <NavLink to={link}>
        <span>{name}</span>
      </NavLink>
    </div>
  );
};
