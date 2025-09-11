import useUserList from "@/hooks/useUserList";

const DashboardAdminUsers = () => {
  const { UserData } = useUserList();

  return (
    <div className="flex flex-col gap-4 px-4 py-4 border-3d border-2 border-gray-700 rounded-md my-10 bg-white h-full max-w-[1200px]">
      <h1 className="w-full text-left text-2xl font-bold">User Moderation</h1>
      <div className="overflow-x-auto rounded-xl relative">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-left uppercase font-bold p-5">
              <th className="py-2 px-2 w-48">Username</th>
              <th className="py-2 px-2 w-48">Email</th>
              <th className="py-2 px-2 w-48">Name</th>
              <th className="py-2 px-2 w-48">Role</th>
              <th className="py-2 px-2 w-48">ID</th>
            </tr>
          </thead>
          <tbody>
            {UserData?.Data.items.map((item) => (
              <tr
                className="border-b-1 border-gray-200 text-base"
                key={item.ID}
              >
                <td className="py-2 px-2">{item.Username}</td>
                <td className="py-2 px-2">{item.Email}</td>
                <td className="py-2 px-2">
                  {item.FirstName} {item.LastName}
                </td>
                <td className="py-2 px-2">{item.Role}</td>
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
