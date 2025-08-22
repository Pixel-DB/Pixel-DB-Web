import LoginButton from "./LoginButton";
import { NavbarItems } from "./NavbarItems";
import NavbarLogo from "./NavbarLogo";
import ProfileButton from "./ProfileButton";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useUserContext } from "@/context/UserContext";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);
  const { user } = useUserContext();

  const handeClick = () => {
    setIsClosed(!isClosed);
    console.log(isClosed);
  };

  return (
    <div className="w-full flex flex-col items-center bg-primary justify-center z-60 border-b-1 border-gray-500 relative">
      {/* Big Devices */}
      <div className="flex flex-row justify-between items-center max-w-[1200px] w-full px-4">
        <div className="flex justify-start w-full p-2">
          <NavbarLogo />
        </div>

        <div className="hidden md:flex justify-center flex-row w-full gap-12">
          <NavbarItems name="Explore" link="/pixelart" />
          <NavbarItems name="Dashboard" link="/dashboard" />
          <NavbarItems name="About" link="#about" hashlink />
          <NavbarItems name="Docs" link="/docs" />
        </div>

        <div className="hidden md:flex justify-end w-full p-2">
          <div className="w-full max-w-[200px]">
            {user ? (
              <ProfileButton>{user.Username}</ProfileButton>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>

        <div className="md:hidden text-3xl p-5" onClick={handeClick}>
          {isClosed ? <IoMenu /> : <IoIosClose />}
        </div>
      </div>

      {/* Small Devices */}
      {!isClosed && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary gap-4 z-60 border-b-1 border-gray-500">
          <div className="px-2">
            <NavbarItems name="Explore" link="/pixelart" />
            <NavbarItems name="Dashboard" link="/dashboard" />
            <NavbarItems name="About" link="/about" />
            <NavbarItems name="Docs" link="/docs" />
          </div>
          <div className="w-full py-2 p-2">
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
