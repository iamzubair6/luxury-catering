import Loader from "@Components/Shared/Loader";
import MainLayout from "@Layout/MainLayout";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
//page imports
const LandingPage = lazy(() => import("@Pages/LandingPage/LandingPage"));

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
        {
          path: "about",
          element: <LandingPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
