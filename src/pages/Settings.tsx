import SettingsSideBar from "@/components/Settings/SettingsSideBar";

const Settings = () => {
  return (
    <div className="flex h-full w-full">
      <aside className="max-w-[200px] w-full">
        <SettingsSideBar />
      </aside>
      <div className="bg-green-400 w-full">Settings Content</div>
    </div>
  );
};

export default Settings;
