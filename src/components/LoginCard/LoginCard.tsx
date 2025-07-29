import "./LoginCard.css";
import Input from "../ui/TextInput/Input";
import Button from "../ui/Button/Button";
import { useState } from "react";
import useLogin from "@/hooks/useLogin";
import Errors from "../Errors/Errors";

const LoginCard = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login, statusCode } = useLogin();

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(form);
  };

  return (
    <form
      className="bg-white flex flex-col max-w-[450px] w-full rounded-lg border-2 border-slate-800 border-3d"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center w-full text-3xl font-extrabold text-slate-800 p-5">
        <h1>Login</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Input
            type="email"
            name="email"
            label="Email"
            onInput={(val) => handleChange("email", val)}
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            label="Password"
            onInput={(val) => handleChange("password", val)}
          />
        </div>
        <div className="pt-4">
          <Button color="accent" wFull type="submit">
            Login
          </Button>
        </div>
      </div>
      <div className="pt-2">
        {statusCode && <Errors onSuccess="/">{statusCode}</Errors>}
      </div>
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
