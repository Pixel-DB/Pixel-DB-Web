import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  onSuccess?: string;
}

const Errors = ({ children }: Props) => {
  useEffect(() => {
    if (children === 200) {
    }
  });

  if (children == 400) {
    return <div className="text-red-500">Invalid username or password</div>;
  } else {
    return <div className="text-red-500">Error: {children}</div>;
  }
};

export default Errors;
