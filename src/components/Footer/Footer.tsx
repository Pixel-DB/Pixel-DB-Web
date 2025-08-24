import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="w-full z-60 flex items-center bg-primary justify-center text-center border-t-1 border-gray-500 bottom-0 left-0">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between">
        <FooterCopyright />
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
