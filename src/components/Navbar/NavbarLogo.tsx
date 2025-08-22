import { Link } from "react-router-dom";
import Logo from "../../assets/ColorPalatte.svg";

const NavbarLogo = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={Logo} className="w-[50px]" />
      <Link to="/" className="pl-1 font-extrabold text-2xl">
        PixelDB
      </Link>
    </div>
  );
};

export default NavbarLogo;
