import Button from "../ui/Button/Button";
import "./DetailBox.css";

interface Props {
  Name?: string;
  Description?: string;
  CreatedAt?: string;
  ID?: string;
}

const DetailBox = ({ Name, Description, CreatedAt, ID }: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-4 w-full max-w-[500px] p-8 border-3d rounded-lg border-slate-800 border-2">
        <div className="text-2xl w-full text-left font-bold">{Name}</div>
        <div className="flex flex-row gap-4 border-b-2 border-dotted pb-4 mb-5 border-gray-700">
          <Button wFull color="blue">
            Save
          </Button>
          <Button wFull color="green">
            Share
          </Button>
          <Button wFull color="amber">
            Download
          </Button>
        </div>
        <div className="w-full text-left">{Description}</div>
        <div className="w-full text-left">{CreatedAt}</div>
        <div className="w-full text-left text-xs text-gray-700 font-bold">
          {ID}
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
