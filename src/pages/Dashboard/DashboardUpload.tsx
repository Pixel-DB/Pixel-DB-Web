import Button from "@/components/ui/Button/Button";
import TextArea from "@/components/ui/TextArea/TextArea";
import Input from "@/components/ui/TextInput/Input";
import useUploadPixelArt from "@/hooks/useUploadPixelArt";
import { useForm, type SubmitHandler } from "react-hook-form";

interface FieldValues {
  Title: string;
  Author: string;
  Description: string;
  UploadPixelArt: FileList;
}

const DashboardUpload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const { uploadPixelArt } = useUploadPixelArt();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    uploadPixelArt({
      Title: data.Title,
      Description: data.Description,
      UploadPixelArt: data.UploadPixelArt,
    });
  };

  return (
    <div className="flex justify-center items-center my-10 mx-1 border-3d border-2 border-slate-800 rounded-md max-w-[700px] w-full flex-col bg-white">
      <h1 className="w-full text-2xl text-left font-bold p-4">
        Upload PixelArt
      </h1>
      <form
        className="flex flex-col gap-4 p-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row gap-4">
          <div>
            <Input
              type="text"
              label="Title"
              {...register("Title", {
                required: true,
              })}
            />
            {errors.Title?.type === "required" && (
              <p className="text-red-500">Title is required</p>
            )}
          </div>
          <Input type="text" label="Author" {...register("Author")} />
        </div>
        <div className="flex flex-col">
          <TextArea
            placeholder="Enter Description here"
            label="Description"
            rows={6}
            {...register("Description", {
              required: true,
            })}
          />
          {errors.Description?.type === "required" && (
            <p className="text-red-500">Descrption is required</p>
          )}
        </div>
        <div className="flex flex-row gap-4 w-1/2">
          <div>
            <Input
              type="file"
              accept="image/png"
              label="Upload Pixel Art"
              {...register("UploadPixelArt", {
                required: true,
              })}
            />
            {errors.UploadPixelArt?.type === "required" && (
              <p className="text-red-500">Pixel Art is required</p>
            )}
          </div>
        </div>
        <div className="flex flex-row-reverse w-full justify-between pt-6">
          <Button wFull color="green" sm type="submit">
            Submit
          </Button>
          <Button wFull color="accent" sm>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DashboardUpload;
