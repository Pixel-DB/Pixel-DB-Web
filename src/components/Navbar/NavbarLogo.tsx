import Logo from "../../assets/ColorPalatte.svg";

const NavbarLogo = () => {
  return (
    <div className="p-2 flex items-center justify-center flex-1">
      <img src={Logo} className="w-[50px]" />
      <h1 className="pl-1 font-extrabold text-2xl">PixelDB</h1>
    </div>
  );
};

export default NavbarLogo;
