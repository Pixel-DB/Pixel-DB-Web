import useUser from "@/hooks/useUser";
import Button from "../ui/Button/Button";

const LoginButton = () => {
  const { userData } = useUser();
  return (
    <Button color="green" href="/auth/login">
      {userData?.Username}
    </Button>
  );
};

export default LoginButton;
