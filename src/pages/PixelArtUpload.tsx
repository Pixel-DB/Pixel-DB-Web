import Button from "@/components/ui/Button/Button";
import TextArea from "@/components/ui/TextArea/TextArea";
import Input from "@/components/ui/TextInput/Input";
import useUploadPixelArt from "@/hooks/useUploadPixelArt";

const PixelArtUpload = () => {
  const { uploadPixelArt } = useUploadPixelArt("hallo");
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  uploadPixelArt();

  return (
    <div className="flex justify-center items-center p-16">
      <div className="border-3d border-2 border-slate-800 rounded-md max-w-[800px] w-full flex flex-col">
        <h1 className="w-full text-2xl text-left font-bold p-4">
          Upload PixelArt
        </h1>
        <form
          className="flex flex-col gap-4 p-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row gap-4">
            <Input type="text" label="Name" />
            <Input type="text" label="Author" />
          </div>
          <TextArea
            placeholder="Enter Description here"
            label="Description"
            rows={6}
          />
          <div className="flex flex-row gap-4 w-1/2">
            <Input type="file" accept="image/png" label="Upload Pixel Art" />
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
    </div>
  );
};

export default PixelArtUpload;
