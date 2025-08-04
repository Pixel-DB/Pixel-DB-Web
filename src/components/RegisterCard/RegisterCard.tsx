import "./RegisterCard.css";
import Input from "../ui/TextInput/Input";
import Button from "../ui/Button/Button";
import Errors from "../Errors/RegisterErrors";
import { useForm, type SubmitHandler } from "react-hook-form";
import useRegister from "@/hooks/useRegister";

interface FieldValues {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
}

const RegisterCard = () => {
  const { register: registerUser, statusCode } = useRegister();
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => registerUser(data);

  return (
    <form
      className="bg-white flex flex-col max-w-[450px] w-full rounded-lg border-2 border-slate-800 border-3d"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-center w-full text-3xl font-extrabold text-slate-800 p-5">
        <h1>Register</h1>
      </div>
      <div className="flex flex-col gap-4 w-full px-5">
        <div>
          <Input
            type="email"
            label="Email"
            {...registerForm("email", {
              required: true,
              minLength: 3,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {errors.email?.type === "minLength" && (
            <p className="text-red-500">Email must be longer</p>
          )}
        </div>
        <div>
          <Input
            type="username"
            label="Username"
            {...registerForm("username", { required: true, minLength: 3 })}
          />
          {errors.username?.type === "required" && (
            <p className="text-red-500">Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-red-500">Username must be longer</p>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <Input
              type="firstName"
              label="Firstname"
              {...registerForm("firstName", { required: true, minLength: 3 })}
            />
            {errors.firstName?.type === "required" && (
              <p className="text-red-500">Firstname is required</p>
            )}
            {errors.firstName?.type === "minLength" && (
              <p className="text-red-500">Firstname must be longer</p>
            )}
          </div>
          <div>
            <Input
              type="lastName"
              label="Lastname"
              {...registerForm("lastName", { required: true, minLength: 3 })}
            />
            {errors.lastName?.type === "required" && (
              <p className="text-red-500">Lastname is required</p>
            )}
            {errors.lastName?.type === "minLength" && (
              <p className="text-red-500">Lastname must be longer</p>
            )}
          </div>
        </div>
        <div>
          <Input
            type="password"
            label="Password"
            {...registerForm("password", { required: true, minLength: 3 })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">Password must be longer</p>
          )}
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
