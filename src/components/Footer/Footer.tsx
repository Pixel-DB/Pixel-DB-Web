import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="w-full z-60 flex items-center bg-primary justify-center p-4 text-center border-t-1 border-gray-500 sticky top-full">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between">
        <FooterCopyright />
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
