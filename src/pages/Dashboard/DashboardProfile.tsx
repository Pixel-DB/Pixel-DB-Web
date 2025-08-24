import "../../App.css";
import Input from "@/components/ui/TextInput/Input";
import Button from "@/components/ui/Button/Button";
import useUpdateUser from "@/hooks/useUpdateUser";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useUserContext } from "@/context/UserContext";

interface FieldValues {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

const DashboardProfile = () => {
  const { user } = useUserContext();
  const { updateUser } = useUpdateUser();
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    updateUser(data);
  };

  return (
    <div className="flex-col gap-4 max-w-[700px] w-full px-4 py-4 border-3d border-2 border-gray-700 rounded-md my-10 mx-1 bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="w-full text-left text-2xl font-bold">
          Profile Settings
        </h1>
        <div className="pt-5 flex-col space-y-4 w-full flex items-start">
          <div className="flex flex-row items-center space-x-4">
            <img
              className="rounded-md"
              src={`https://ui-avatars.com/api/?background=16a34a&name=${user?.FirstName}+${user?.LastName}&size=100`}
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">
                {user?.FirstName} {user?.LastName}
              </h1>
              <h1 className="text-xl">{user?.Username}</h1>
              <h1 className="text-sm text-gray-700">{user?.ID}</h1>
            </div>
          </div>
          <Input
            type="email"
            placeholder={user?.Email}
            label="Edit email"
            {...register("email")}
          />
          <Input
            type="username"
            placeholder={user?.Username}
            label="Edit username"
            {...register("username")}
          />
          <div className="flex flex-row w-full space-x-4">
            <Input
              type="firstName"
              placeholder={user?.FirstName}
              label="Edit first name"
              {...register("firstName")}
            />
            <Input
              type="lastName"
              placeholder={user?.LastName}
              label="Edit last name"
              {...register("lastName")}
            />
          </div>
          <Input
            type="password"
            placeholder="Enter your new password"
            label="Change password"
            {...register("password")}
          />
        </div>
        <div className="w-full flex justify-end pt-5">
          <Button sm color="amber" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DashboardProfile;
