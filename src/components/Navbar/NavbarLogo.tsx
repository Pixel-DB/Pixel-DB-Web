import { Link } from "react-router-dom";
import Logo from "../../assets/ColorPalatte.svg";

const NavbarLogo = () => {
  return (
    <Link className="p-2 flex items-center justify-center flex-1" to={"/"}>
      <img src={Logo} className="w-[50px]" />
      <h1 className="pl-1 font-extrabold text-2xl">PixelDB</h1>
    </Link>
  );
};

export default NavbarLogo;
