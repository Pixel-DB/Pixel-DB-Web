import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex items-center justify-center">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
