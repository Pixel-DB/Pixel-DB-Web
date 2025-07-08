import "./LoginCard.css";
import Input from "../ui/TextInput/Input";
import Button from "../ui/Button/Button";

const LoginCard = () => {
  return (
    <div className="bg-white flex flex-col max-w-[450px] w-full rounded-lg border-2 border-slate-800 border-3d">
      <div className="flex justify-center w-full text-3xl font-extrabold text-slate-800 p-5">
        <h1>Login</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Input type="email" name="email" label="Email" />
        </div>
        <div>
          <Input type="password" name="Password" label="Password" />
        </div>
        <div className="pt-4">
          <Button color="accent" wFull>
            Login
          </Button>
        </div>
      </div>
      <div className="max-w-[400px] w-full flex justify-center pt-3 pb-2 text-gray-700">
        <p>
          Don't have an Account?{" "}
          <a href="/auth/register" className="underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
