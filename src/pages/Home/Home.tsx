import AboutUsContainer from "@/components/Home/AboutUs/AboutUsContainer";
import HeroSection from "@/components/Home/Banner/Banner";
import FeaturesContainer from "@/components/Home/Features/FeaturesContainer";
import StatsContainer from "@/components/Home/Stats/StatsContainer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full">
        <HeroSection />
      </div>
      <div className="flex flex-col">
        <FeaturesContainer />
        <AboutUsContainer />
        <StatsContainer />
      </div>
    </div>
  );
};

export default Home;
