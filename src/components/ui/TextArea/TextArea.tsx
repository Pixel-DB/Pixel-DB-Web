import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  rows?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ type, name, label, rows, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full h-full">
        {label && (
          <label htmlFor={name} className="text-slate-800">
            {label}
          </label>
        )}
        <textarea
          rows={rows || 10}
          ref={ref}
          name={name}
          className="border-2 border-secondary focus:outline focus:outline-secondary rounded p-2 w-full"
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

export default TextArea;
