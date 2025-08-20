import "../../../App.css";

interface Props {
  name: string;
  count?: number;
  color?: string;
}

const StatsBox = ({ name, color = "white", count = 0 }: Props) => {
  return (
    <div
      className={`w-64 h-32 bg-${color} rounded-lg flex flex-col gap-1 items-center justify-center border-3d border-2 border-slate-800`}
    >
      <h2 className="text-4xl font-bold">{count}</h2>
      <h1 className="text-md font-bold text-gray-700">{name}</h1>
    </div>
  );
};

export default StatsBox;
