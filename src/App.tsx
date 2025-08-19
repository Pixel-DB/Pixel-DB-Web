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

function App() {
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
