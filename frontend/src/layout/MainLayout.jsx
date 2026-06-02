import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
