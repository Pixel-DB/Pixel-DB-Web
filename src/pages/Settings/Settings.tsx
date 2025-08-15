import useUser from "@/hooks/useUser";
import "../../App.css";

const Settings = () => {
  const { userData } = useUser();

  return (
    <div className="px-7 py-4 border-3d border-2 border-gray-700 rounded-md text-2xl font-bold my-10">
      Welcome, {userData?.Username}
    </div>
  );
};

export default Settings;
