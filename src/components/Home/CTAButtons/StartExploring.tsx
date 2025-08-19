import Button from "@/components/ui/Button/Button";
import { NavLink } from "react-router-dom";

const StartExploring = () => {
  return (
    <Button color="amber" wFull>
      <NavLink to="/pixelart">
        <span>Start Exploring</span>
      </NavLink>
    </Button>
  );
};

export default StartExploring;
