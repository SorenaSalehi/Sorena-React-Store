import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./ui/Layout";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./ui/ProductDetails";

const routes = [
  {
    element: <Layout />,
    children: [
      // {
      // path: "/",
      //   element: <Login />,
      // },
      {
        index: true,
        element: <Products />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "product/details",
        element: <ProductDetails />,
      },
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
