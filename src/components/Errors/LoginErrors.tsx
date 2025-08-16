import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  children: React.ReactNode;
  onSuccess?: string;
}

const Errors = ({ children, onSuccess = "/" }: Props) => {
  const navigate = useNavigate();
  const notify = () => toast("Successfully logged in!");

  useEffect(() => {
    if (children === 200) {
      navigate(onSuccess);
      notify();
    }
  });

  if (children == 400) {
    return <div className="text-red-500">Invalid username or password</div>;
  } else {
    return <div className="text-red-500">Error: {children}</div>;
  }
};

export default Errors;
