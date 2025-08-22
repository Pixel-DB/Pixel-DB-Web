import LoginButton from "./LoginButton";
import { NavbarItems } from "./NavbarItems";
import NavbarLogo from "./NavbarLogo";
import ProfileButton from "./ProfileButton";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useUserContext } from "@/context/UserContext";

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
    link: "/#about",
  },
  {
    name: "Docs",
    link: "/docs",
  },
];

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);
  const { user } = useUserContext();

  const handeClick = () => {
    setIsClosed(!isClosed);
    console.log(isClosed);
  };

  return (
    <div className="w-full flex items-center bg-primary justify-center z-60 border-b-1 border-gray-500">
      {/* Big Devices */}
      <div className="flex flex-row justify-between items-center max-w-[1200px] w-full px-4">
        <div className="flex justify-start w-full p-2">
          <NavbarLogo />
        </div>

        <div className="flex justify-center w-full gap-12">
          <NavbarItems name="Explore" link="/pixelart" />
          <NavbarItems name="Dashboard" link="/dashboard" />
          <NavbarItems name="About" link="/about" />
          <NavbarItems name="Docs" link="/docs" />
        </div>

        <div className="flex justify-end w-full p-2">
          {user ? (
            <ProfileButton>{user.Username}</ProfileButton>
          ) : (
            <LoginButton />
          )}
        </div>

        <div className="md:hidden text-3xl p-5" onClick={handeClick}>
          {isClosed ? <IoMenu /> : <IoIosClose />}
        </div>
      </div>

      {/* Small Devices */}
      {!isClosed && (
        <div className="md:hidden block bg-primary absolute w-full gap-4">
          <div className="px-2">
            <NavbarItems item={item} />
          </div>
          <div className="w-full py-2 px-4">
            {user ? (
              <ProfileButton>{user.Username}</ProfileButton>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
