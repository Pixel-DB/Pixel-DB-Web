import Button from "../ui/Button/Button";

interface Props {
  children?: React.ReactNode;
}

const LoginButton = ({ children }: Props) => {
  return (
    <Button color="green" href="/auth/login">
      {children}
    </Button>
  );
};

export default LoginButton;
