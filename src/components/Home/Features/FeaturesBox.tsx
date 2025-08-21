import "@/App.css";

interface Props {
  title: string;
  subtitle: string;
  color: string;
}

const FeaturesBox = ({ title, subtitle, color }: Props) => {
  return (
    <div
      className={`bg-${color} w-80 h-48 border-3d border-2 border-slate-800 rounded-lg`}
    >
      <div className="flex flex-col gap-1 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2
          className="text-md text-gray-700 font-bold p-2
        "
        >
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default FeaturesBox;
