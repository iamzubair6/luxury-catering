import Footer from "@Components/Shared/Footer";
import Header from "@Components/Shared/Header";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();
  // Scroll-to-top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow h-full px-[20px] lg:px-[60px] py-[30px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
