import { DashboardAdminRole } from "@/components/Dashboard/DashboardAdminRole";
import ProfilePicture from "@/components/ui/ProfilePicture/ProfilePicture";
import useUserList from "@/hooks/useUserList";

const DashboardAdminUsers = () => {
  const { UserData } = useUserList();

  return (
    <div className="flex-col gap-4 max-w-[350px] sm:max-w-[550px] lg:max-w-[900px] xl:max-w-[1100px] w-full px-4 py-4 border-3d border-2 border-gray-700 rounded-md my-10 bg-white h-full">
      <h1 className="w-full text-left text-2xl font-bold">User Moderation</h1>
      <div className="overflow-x-auto rounded-xl relative w-full border-x-1 border-gray-100">
        <table className="table-fixed border-collapse min-w-[950px]">
          <thead className="bg-gray-100">
            <tr className="text-left uppercase font-bold p-5 text-sm">
              <th className="py-2 px-2 w-24">Profile Picture</th>
              <th className="py-2 px-2 w-32">Username</th>
              <th className="py-2 px-2 w-48">Email</th>
              <th className="py-2 px-2 w-36">Name</th>
              <th className="py-2 px-2 w-16">Role</th>
              <th className="py-2 px-2 w-40">ID</th>
            </tr>
          </thead>
          <tbody>
            {UserData?.Data.items.map((item) => (
              <tr className="border-b-1 border-gray-100 text-sm" key={item.ID}>
                <td className="py-2 px-2 items-center">
                  <ProfilePicture size={64}>{item.Username}</ProfilePicture>
                </td>
                <td className="py-2 px-2">{item.Username}</td>
                <td className="py-2 px-2">{item.Email}</td>
                <td className="py-2 px-2">
                  {item.FirstName} {item.LastName}
                </td>
                <td className="py-2 px-2">
                  <DashboardAdminRole>{item.Role}</DashboardAdminRole>
                </td>
                <td className="py-2 px-2 text-sm text-text-secondary font-mono">
                  {item.ID}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAdminUsers;
