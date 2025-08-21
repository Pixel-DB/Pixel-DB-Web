import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PixelArt from "./pages/PixelArt";
import PixelArtDetail from "./pages/PixelArtDetail";
import DashboardProfile from "./pages/Dashboard/DashboardProfile";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./security/ProtectedRoute";
import DashboardUpload from "./pages/Dashboard/DashboardUpload";
import DashboardSettings from "./pages/Dashboard/DashboardSettings";
import useUser from "./hooks/useUser";
import { useUserContext } from "./context/UserContext";
import { useEffect } from "react";
import { InfoToast } from "./utils/toast";

function App() {
  const { userData } = useUser();
  const { setUser } = useUserContext();

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData, setUser]);

  useEffect(() => {
    InfoToast("This Service is still under Production", {
      autoClose: false,
      closeOnClick: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="pixelart" element={<PixelArt />} />
          <Route path="pixelart/:id" element={<PixelArtDetail />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="upload" element={<DashboardUpload />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
