import Button from "@/components/ui/Button/Button";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <Button color="green" wFull>
      <NavLink to="/auth/register">
        <span>Register</span>
      </NavLink>
    </Button>
  );
};

export default Register;
