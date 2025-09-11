import CountUp from "react-countup";
import "../../../App.css";
import { useInView } from "react-intersection-observer";

interface Props {
  name: string;
  count?: number;
  color?: string;
}

const StatsBox = ({ name, color = "white", count = 0 }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`w-64 h-32 bg-${color} rounded-lg flex flex-col gap-1 items-center justify-center border-3d border-2 border-slate-800`}
    >
      <h2 className="text-4xl font-bold">
        <CountUp end={count} separator="." start={inView ? undefined : 0}>
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
      </h2>
      <h1 className="text-md font-bold text-gray-700">{name}</h1>
    </div>
  );
};

export default StatsBox;
