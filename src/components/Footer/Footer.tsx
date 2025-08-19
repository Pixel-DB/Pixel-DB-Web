import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="w-full flex items-center bg-primary justify-center p-4 text-center mt-auto border-t-1 border-gray-500">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between">
        <FooterCopyright />

        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
