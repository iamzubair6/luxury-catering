import Footer from "@Components/Shared/Footer";
import Header from "@Components/Shared/Header";
import SEO from "@Components/Shared/SEO";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      <SEO description="For the first time in Bangladesh, Luxury Catering presents to you a complete modern Catering solution consisting of Your Events: A complete catering solution." />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow h-full px-[20px] lg:px-[60px] py-[30px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
