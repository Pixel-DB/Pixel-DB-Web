import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  onSuccess?: string;
}

const Errors = ({ children, onSuccess = "/auth/login" }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (children === 200) {
      navigate(onSuccess);
    }
  });

  if (children == 409) {
    return <div className="text-red-500">Email/Username already taken!</div>;
  } else {
    return <div className="text-red-500">Error: {children}</div>;
  }
};

export default Errors;
