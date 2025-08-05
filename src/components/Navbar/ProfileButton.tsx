import useUser from "@/hooks/useUser";
import Button from "../ui/Button/Button";

const LoginButton = () => {
  const { userData } = useUser();
  return (
    <div className="p-2 flex items-center justify-center text-xl font-medium flex-1">
      <Button color="accent" href="/auth/login">
        {userData?.Username}
      </Button>
    </div>
  );
};

export default LoginButton;
