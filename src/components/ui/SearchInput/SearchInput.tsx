import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
}

const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ name, label, placeholder, ...props }, ref) => {
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
          type={"text"}
          className="border-2 border-secondary focus:outline focus:outline-secondary rounded p-2 w-full file:rounded-md file:border-none file:py-1 file:px-2 file:bg-highlight file:text-black file:cursor-pointer file:text-md file:font-bold text-gray-700"
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

export default SearchInput;
