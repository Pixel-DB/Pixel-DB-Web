import { useUserContext } from "@/context/UserContext";
import { RiArrowDropDownLine } from "react-icons/ri";

const LoginButton = () => {
  const { user } = useUserContext();

  const handleClick = () => {};

  return (
    <div className="flex w-full justify-center">
      <div
        className="flex flex-row rounded-md px-2 py-1 hover:bg-amber-100 items-center"
        onClick={handleClick}
      >
        <img
          className="rounded-md"
          src={`https://ui-avatars.com/api/?background=16a34a&name=${user?.Username}&size=35&length=1&font-size=0.6`}
        />
        <RiArrowDropDownLine className="text-3xl text-black" />
      </div>
    </div>
  );
};

export default LoginButton;
