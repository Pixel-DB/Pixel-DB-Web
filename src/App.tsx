import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PixelArt from "./pages/PixelArt";
import PixelArtDetail from "./pages/PixelArtDetail";
import PixelArtUpload from "./pages/PixelArtUpload";
import SettingsProfil from "./pages/Settings/SettingsProfil";
import SettingsLayout from "./pages/Settings/SettingsLayout";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="/pixelart" element={<PixelArt />} />
          <Route path="/pixelart/:id" element={<PixelArtDetail />} />
          <Route path="/pixelart/upload" element={<PixelArtUpload />} />
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<Settings />} />
            <Route path="profil" element={<SettingsProfil />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
