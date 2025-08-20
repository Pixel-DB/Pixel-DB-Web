import Banner from "@/components/Home/Banner/Banner";
import StatsBox from "@/components/Home/Stats/StatsBox";
import useData from "@/hooks/useData";

const Home = () => {
  const { data } = useData();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full">
        <Banner />
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
    </div>
  );
};

export default Home;
