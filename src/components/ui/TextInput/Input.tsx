import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "email" | "password" | "firstName" | "lastName" | "username";
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type, name, label, ...props }, ref) => {
    const placeholderText = {
      email: "john.doe@gmail.com",
      password: "Please enter your password",
      firstName: "John",
      lastName: "Doe",
      username: "john_doe123",
    };

    return (
      <div className="flex flex-col gap-1">
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
          className="border-2 border-secondary focus:outline focus:outline-secondary rounded p-2 w-full"
          placeholder={placeholderText[type]}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
