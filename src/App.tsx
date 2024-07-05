// const LandingPage = lazy(() => import("@Pages/LandingPage/LandingPage"));
import LandingPage from "@Pages/LandingPage/LandingPage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
