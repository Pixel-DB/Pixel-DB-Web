interface Props {
  name: string;
}

const StatsBox = ({ name }: Props) => {
  return <div className="w-64 h-48 bg-red-500">{name}</div>;
};

export default StatsBox;
