interface Props {
  type: "email" | "password" | "firstName" | "lastName" | "username";
  name: string;
  label?: string;
}

const Input = ({ type, name, label }: Props) => {
  const placeholderText = {
    email: "john.doe@gmail.com",
    password: "Please enter your password",
    firstName: "John",
    lastName: "Doe",
    username: "john_doe123",
  };

  return (
    <form>
      <label htmlFor={name} className="text-slate-800">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="border-2 border-secondary focus:outline focus:outline-secondary rounded p-2  max-w-[400px] w-full "
        placeholder={placeholderText[type]}
      />
    </form>
  );
};

export default Input;
