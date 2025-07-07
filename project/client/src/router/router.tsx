import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";
import Categories from "../pages/Categories";
import Auth from "../pages/Auth";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "transactions",
        element: <Transactions/>,
      },
      {
        path: 'categories',
        element: <Categories/>,
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'auth',
        element: <Auth/>,
      },
    ],
  },
]);
