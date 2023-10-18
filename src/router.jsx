import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { useMainContext } from "./hooks/useMainContext";

import ClientsPage from "./pages/ClientPage";
import CobrancasPage from "./pages/CobrancasPage";
import ClientDetail from "./pages/ClientDetail";

function ProtectRoutes({ redirectTo }) {
  const { userLog } = useMainContext();
  return userLog.token ? <Outlet /> : <Navigate to="/" replace />;
}

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route element={<ProtectRoutes redirectTo="/" />}>
        <Route path="/home" element={<Home />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/client-detail/:id" element={<ClientDetail />} />
        <Route path="/cobrancas" element={<CobrancasPage />} />
      </Route>
    </Routes>
  );
}
