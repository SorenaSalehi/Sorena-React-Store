import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./ui/Layout";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import ShoppingBasket from "./pages/ShoppingBasket";
import UserProfile from "./pages/UserProfile";
import Wishlist from "./pages/Wishlist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ShopProvider } from "./context/ShopContext";
import { Toaster } from "react-hot-toast";
import SignupForm from "./ui/SignupForm";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedPage from "./pages/ProtectedPage";
import QuestPage from "./pages/GuestPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const routes = [
  {
    element: (
      <ProtectedPage>
        <Layout />
      </ProtectedPage>
    ),
    children: [
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
        path: "/product/:productId",
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
      { path: "/login", element: <Login /> },
      { path: "/guest", element: <QuestPage /> },
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
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ShopProvider>
            <Toaster />
            <RouterProvider router={router} />;
          </ShopProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
