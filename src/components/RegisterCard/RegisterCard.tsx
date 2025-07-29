import { useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/TextInput/Input";
import useLogin from "@/hooks/useLogin";
import Errors from "../Errors/Errors";

const RegisterCard = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
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
        <h1>Register</h1>
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
            type="username"
            name="Username"
            label="Username"
            onInput={(val) => handleChange("username", val)}
          />
        </div>
        <div className="flex flex-row max-w-[400px] w-full gap-2">
          <Input
            type="firstName"
            name="firstName"
            label="First Name"
            onInput={(val) => handleChange("firstName", val)}
          />
          <Input
            type="lastName"
            name="lastName"
            label="Last Name"
            onInput={(val) => handleChange("lastName", val)}
          />
        </div>
        <div>
          <Input
            type="password"
            name="Password"
            label="Password"
            onInput={(val) => handleChange("password", val)}
          />
        </div>
        <div>
          <Input
            type="password"
            name="ConfirmPassword"
            label="Confirm Password"
          />
        </div>
        <div className="pt-4">
          <Button color="accent" wFull type="submit">
            Register
          </Button>
        </div>
      </div>
      <div className="pt-2">
        {statusCode && <Errors onSuccess="/">{statusCode}</Errors>}
      </div>
      <div className="max-w-[400px] w-full flex justify-center pt-3 pb-2 text-gray-700">
        <p>
          Already have an Account?{" "}
          <a href="/auth/login" className="underline">
            Login
          </a>
        </p>
      </div>
    </form>
  );
};

export default RegisterCard;
