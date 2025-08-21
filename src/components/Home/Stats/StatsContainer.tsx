import useData from "@/hooks/useData";
import StatsBox from "./StatsBox";

const StatsContainer = () => {
  const { data } = useData();

  return (
    <section
      id="about"
      className="bg-amber-200 flex w-full flex-col p-5 gap-5 border-y-2 border-gray-500"
    >
      <div className="text-center">
        <h1 className="text-4xl text-black font-bold">
          Our Journey in Numbers
        </h1>
        <h2 className="text-gray-500 text-base">
          Tracking users, requests, and creative milestones
        </h2>
      </div>
      <div className="grid grid-cols-4  max-w-[1200px] w-full mx-auto m-5">
        <StatsBox name="Users" color="accent" count={data?.TotalUsers} />
        <StatsBox
          name="Total Requests"
          color="amber-500"
          count={data?.TotalRequests}
        />
        <StatsBox
          name="Pixel arts"
          color="secondary"
          count={data?.TotalPixelArts}
        />
        <StatsBox
          name="Github Stars"
          color="green-500"
          count={data?.TotalGithubStars}
        />
      </div>
    </section>
  );
};

export default StatsContainer;
