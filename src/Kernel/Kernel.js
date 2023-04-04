import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layouts/MainLayout/MainLayout";
import { HomePage } from "./Pages/HomePage/HomePage";
import { PageNotFoundPage } from "./Pages/PageNotFound/PageNotFound";

export const Kernel = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
};
