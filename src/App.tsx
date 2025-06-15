import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="h-[90vh] text-7xl font-extrabold content-center text-center">
        PixelDB Placeholder
      </h1>
      <Footer />
    </>
  );
}

export default App;
