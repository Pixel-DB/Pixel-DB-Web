import Banner from "@/components/Banner/Banner";
import useUser from "@/hooks/useUser";

const Home = () => {
  const { userData } = useUser();
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <Banner />
      </div>
      <div>{userData?.Email}</div>
    </div>
  );
};

export default Home;
