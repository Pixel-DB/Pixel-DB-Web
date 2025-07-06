import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Alert from "@/components/ui/Alert/Alert";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center">
        <Banner />
      </div>
      <Alert>This Service is still under Production</Alert>
      <Footer />
    </div>
  );
};

export default Home;
