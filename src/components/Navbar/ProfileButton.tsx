import { useUserContext } from "@/context/UserContext";

const LoginButton = () => {
  const { user } = useUserContext();

  return (
    <div className="flex flex-row items-center w-full justify-center">
      <img
        className="rounded-md"
        src={`https://ui-avatars.com/api/?background=16a34a&name=${user?.Username}&size=35&length=1&font-size=0.6`}
      />
    </div>
  );
};

export default LoginButton;
