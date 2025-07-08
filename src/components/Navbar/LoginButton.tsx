import Button from "../ui/Button/Button";

const LoginButton = () => {
  return (
    <div className="p-2 flex items-center justify-center text-xl font-medium flex-1">
      <Button sm color="accent" href="/auth/login">
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
