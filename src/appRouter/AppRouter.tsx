import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { LoginPage } from "../components/LoginPage";
import { Main } from "../components/Main";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/main" />} />
    </Routes>
  );
};
