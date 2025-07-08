import { useRef } from "react";

interface Props {
  type: "email" | "password" | "firstName" | "lastName" | "username";
  name: string;
  label?: string;
  onInput: (value: string) => void;
}

const Input = ({ type, name, label, onInput }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const placeholderText = {
    email: "john.doe@gmail.com",
    password: "Please enter your password",
    firstName: "John",
    lastName: "Doe",
    username: "john_doe123",
  };

  return (
    <>
      <label htmlFor={name} className="text-slate-800">
        {label}
      </label>
      <input
        ref={ref}
        name={name}
        type={type}
        className="border-2 border-secondary focus:outline focus:outline-secondary rounded p-2  max-w-[400px] w-full "
        placeholder={placeholderText[type]}
        onChange={() => onInput(ref.current?.value || "")}
      />
    </>
  );
};

export default Input;
