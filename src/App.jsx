import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./ui/Layout";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import ShoppingBasket from "./pages/ShoppingBasket";
import UserProfile from "./pages/UserProfile";
import CurrentOrders from "./pages/CurrentOrders";
import Delivered from "./pages/Delivered";
import Wishlist from "./pages/Wishlist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

const routes = [
  {
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Login />,
      // },
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/:profile",
        element: <UserProfile />,
      },
      {
        path: "/product/details",
        element: <ProductDetails />,
      },
      {
        path: "/shoppingBasket",
        element: <ShoppingBasket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      { path: "/currentOrders", element: <CurrentOrders /> },
      { path: "/delivered", element: <Delivered /> },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}
