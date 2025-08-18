import useUser from "@/hooks/useUser";
import LoginButton from "./LoginButton";
import { NavbarItems } from "./NavbarItems";
import NavbarLogo from "./NavbarLogo";
import ProfileButton from "./ProfileButton";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const item = [
  {
    name: "Explore",
    link: "/pixelart",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
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
  const { isAuthenticated } = useUser();
  const [isClosed, setIsClosed] = useState(true);

  const handeClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className="w-full flex items-center bg-primary justify-center">
      <div className="w-[1300px] flex flex-row justify-between items-center">
        <div>
          <NavbarLogo />
        </div>

        <div className="hidden sm:block">
          <NavbarItems item={item} />
        </div>

        <div className="sm:hidden text-3xl p-5" onClick={handeClick}>
          <IoMenu />
        </div>

        <div className="hidden sm:block">
          {isAuthenticated ? <ProfileButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
