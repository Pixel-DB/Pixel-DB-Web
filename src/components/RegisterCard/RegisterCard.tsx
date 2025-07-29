import Button from "../ui/Button/Button";
import Input from "../ui/TextInput/Input";

const RegisterCard = () => {
  return (
    <div className="bg-white flex flex-col max-w-[450px] w-full rounded-lg border-2 border-slate-800 border-3d">
      <div className="flex justify-center w-full text-3xl font-extrabold text-slate-800 p-5">
        <h1>Register</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Input type="email" name="email" label="Email" />
        </div>
        <div>
          <Input type="username" name="Username" label="Username" />
        </div>
        <div className="flex flex-row max-w-[400px] w-full gap-2">
          <Input type="firstName" name="firstName" label="First Name" />
          <Input type="lastName" name="lastName" label="Last Name" />
        </div>
        <div>
          <Input type="password" name="Password" label="Password" />
        </div>
        <div>
          <Input
            type="password"
            name="ConfirmPassword"
            label="Confirm Password"
          />
        </div>
        <div className="pt-4">
          <Button color="accent" wFull>
            Register
          </Button>
        </div>
      </div>
      <div className="max-w-[400px] w-full flex justify-center pt-3 pb-2 text-gray-700">
        <p>
          Already have an Account?{" "}
          <a href="/auth/login" className="underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;
