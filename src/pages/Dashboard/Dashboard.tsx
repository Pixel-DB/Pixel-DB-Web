import { useUserContext } from "@/context/UserContext";
import "../../App.css";

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <div className="px-7 py-4 border-3d border-2 border-gray-700 rounded-md text-2xl font-bold my-10">
      Welcome, {user?.Username}
    </div>
  );
};

export default Dashboard;
