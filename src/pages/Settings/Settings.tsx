import SettingsSideBar from "@/components/Settings/SettingsSideBar";

const Settings = () => {
  return (
    <div className="flex h-full w-full">
      <aside className="max-w-[200px] w-full shadow-xl/30 h-screen mr-2">
        <SettingsSideBar />
      </aside>
      <div className="w-full">Settings Content</div>
    </div>
  );
};

export default Settings;
