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
import AccountSetting from "./pages/AccountSetting";
import ForgotPassword from "./ui/ForgotPassword";
import ResetPassword from "./ui/ResetPassword";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const routes = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignupForm /> },
      { path: "/ForgotPassword", element: <ForgotPassword /> },
      { path: "/resetPassword", element: <ResetPassword /> },

      {
        path: "/profile",
        element: <UserProfile />,
      },

      { path: "/account", element: <AccountSetting /> },
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
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthProvider>
          <ShopProvider>
            <Toaster />
            <RouterProvider router={router} />;
          </ShopProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
