import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import MainPage from "./pages/main";
import AuthPage from "./pages/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/admin",
      },
      {
        path: "/auth",
        element: <AuthPage />,
        children: [
          {
            path: "login",
          },
          {
            path: "register",
          },
        ],
      },
    ],
  },
]);

export default router;
