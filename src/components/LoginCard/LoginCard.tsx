import "./LoginCard.css";
import Input from "../ui/TextInput/Input";
import Button from "../ui/Button/Button";
import useLogin from "@/hooks/useLogin";
import Errors from "../Errors/LoginErrors";
import { useForm, type SubmitHandler } from "react-hook-form";

interface FieldValues {
  email: string;
  password: string;
}

const LoginCard = () => {
  const { login, statusCode } = useLogin();
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    login(data);
  };

  return (
    <form
      className="bg-white flex flex-col max-w-[450px] w-full rounded-lg border-2 border-slate-800 border-3d"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-center w-full text-3xl font-extrabold text-slate-800 p-5">
        <h1>Login</h1>
      </div>
      <div className="flex flex-col gap-4 w-full px-5">
        <div>
          <Input type="email" label="Email" {...register("email")} />
        </div>
        <div>
          <Input type="password" label="Password" {...register("password")} />
        </div>
        <div className="pt-4">
          <Button color="accent" wFull type="submit">
            Login
          </Button>
        </div>
      </div>
      <div className="pt-2">{statusCode && <Errors>{statusCode}</Errors>}</div>
      <div className="max-w-[400px] w-full flex justify-center pt-1 pb-2 text-gray-700">
        <p>
          Don't have an Account?{" "}
          <a href="/auth/register" className="underline">
            Register
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginCard;
