import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  onSuccess?: string;
}

const Errors = ({ children, onSuccess = "/" }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (children === 200) {
      navigate(onSuccess);
    }
  });

  if (children == 401) {
    return <div className="text-red-600">Invalid username or password</div>;
  } else {
    return <div className="text-red-600">Error: {children}</div>;
  }
};

export default Errors;
