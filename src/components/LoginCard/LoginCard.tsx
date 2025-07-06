import "./LoginCard.css";
import Input from "../ui/TextInput/Input";

const LoginCard = () => {
  return (
    <div className="bg-white flex flex-col max-w-[450px] w-full max-h-[500px] h-full rounded-lg border-2 border-slate-800 border-3d">
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
      </div>
    </div>
  );
};

export default LoginCard;
