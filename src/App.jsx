import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./ui/Layout";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { Dashboard } from "@mui/icons-material";
import ProductDetails from "./pages/ProductDetails";

const routes = [
  {
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Login />,
      // },
      {
        path: "/",
        // element: <Products />,
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "/products/:productId",
      //   element: <ProductDetails />,
      // },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

export default function App() {
  return <RouterProvider router={router} />;
}
