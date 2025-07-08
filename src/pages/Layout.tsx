import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Alert from "@/components/ui/Alert/Alert";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
        <Alert>This Service is still under Production</Alert>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
