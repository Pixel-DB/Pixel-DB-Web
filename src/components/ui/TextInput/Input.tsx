import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type:
    | "email"
    | "password"
    | "firstName"
    | "lastName"
    | "username"
    | "text"
    | "file";
  label?: string;
  accept?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, name, label, accept, ...props }, ref) => {
    const placeholderText = {
      email: "john.doe@gmail.com",
      password: "Please enter your password",
      firstName: "John",
      lastName: "Doe",
      username: "john_doe123",
      text: "Enter text here",
      file: "Choose file",
    };

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label htmlFor={name} className="text-slate-800">
            {label}
          </label>
        )}
        <input
          ref={ref}
          name={name}
          type={
            type === "firstName" || type === "lastName" || type === "username"
              ? "text"
              : type
          }
          accept={accept}
          className="border-2 border-secondary focus:outline focus:outline-secondary rounded p-2 w-full file:rounded-md file:border-none file:py-1 file:px-2 file:bg-highlight file:text-black file:cursor-pointer file:text-md file:font-bold text-gray-700"
          placeholder={placeholderText[type]}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
