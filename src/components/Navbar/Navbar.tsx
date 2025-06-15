import Logo from "../../assets/ColorPalatte.svg";
import { NavbarItems } from "./NavbarItems";

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
    <div className="w-full flex items-center bg-amber-300 justify-center">
      <div className="w-[1300px] flex items-center">
        <div className="p-2 flex items-center justify-center flex-1">
          <img src={Logo} className="w-[50px]" />
          <h1 className="pl-1 font-extrabold text-2xl">PixelDB</h1>
        </div>

        <NavbarItems item={item} />

        <div className="p-2 flex items-center justify-center text-xl font-medium flex-1">
          <a>Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
