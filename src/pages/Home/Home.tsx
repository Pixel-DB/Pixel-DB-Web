import Banner from "@/components/Home/Banner/Banner";
import FeaturesContainer from "@/components/Home/Features/FeaturesContainer";
import StatsContainer from "@/components/Home/Stats/StatsContainer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full">
        <Banner />
      </div>
      <div className="flex flex-col gap-64">
        <FeaturesContainer />
        <StatsContainer />
      </div>
    </div>
  );
};

export default Home;
