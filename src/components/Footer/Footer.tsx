import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="w-full flex items-center bg-amber-400 justify-center p-4 text-center">
      <div className="max-w-[1300px] flex items-center justify-between">
        <FooterCopyright />

        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
