interface Props {
  type: "email" | "password";
  name: string;
  label?: string;
}

const Input = ({ type, name, label }: Props) => {
  return (
    <form>
      <label htmlFor={name} className="text-slate-800">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="border-2 border-secondary focus:outline focus:outline-secondary rounded p-2  max-w-[400px] w-full "
        placeholder={
          type === "email" ? "example@email.com" : "Please enter your password"
        }
      />
    </form>
  );
};

export default Input;
