import Banner from "@/components/Home/Banner/Banner";
import StatsContainer from "@/components/Home/Stats/StatsContainer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full">
        <Banner />
      </div>
      <div>
        <StatsContainer />
      </div>
    </div>
  );
};

export default Home;
