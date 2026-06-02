import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import CollectionPage from "../pages/collectionpage/CollectionPage";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";

export default function AppRouter({ products }) {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/collection" element={<CollectionPage products={products} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
