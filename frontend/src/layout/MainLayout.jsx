import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="bottom-left" autoClose={3000} limit={3} />
    </>
  );
};

export default MainLayout;
