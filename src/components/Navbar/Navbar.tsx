import LoginButton from "./LoginButton";
import { NavbarItems } from "./NavbarItems";
import NavbarLogo from "./NavbarLogo";

const item = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Docs",
    link: "/docs",
  },
];

const Navbar = () => {
  return (
    <div className="w-full flex items-center bg-primary justify-center">
      <div className="w-[1300px] flex items-center">
        <NavbarLogo />

        <NavbarItems item={item} />

        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
