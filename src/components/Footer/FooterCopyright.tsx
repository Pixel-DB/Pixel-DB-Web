import Logo from "../../assets/ColorPalatte.svg";

const FooterCopyright = () => {
  return (
    <div className="p-2">
      <span className="flex items-center gap-2 text-sm md:text-base">
        <span>© 2025</span>
        <img
          src={Logo}
          className="h-7 hidden md:inline-block"
          alt="PixelDB Logo"
        />
        <span>PixelDB. All pixel rights reserved.</span>
      </span>
    </div>
  );
};

export default FooterCopyright;
