import Logo from "../../assets/ColorPalatte.svg";

const FooterCopyright = () => {
  return (
    <div className="flex items-center">
      <span>© 2025</span>
      <img src={Logo} className="h-7 pl-2 pr-1" alt="PixelDB Logo" />
      <span>PixelDB. All pixel rights reserved.</span>
    </div>
  );
};

export default FooterCopyright;
