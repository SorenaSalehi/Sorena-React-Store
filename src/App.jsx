import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";

import { ShopProvider } from "./context/ShopContext";
import { AuthProvider } from "./context/AuthProvider";
import { createTheme, ThemeProvider } from "@mui/material";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeProvider";

// Lazy-loaded components
const Layout = React.lazy(() => import("./ui/Layout"));
const Products = React.lazy(() => import("./pages/Products"));
const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const ShoppingBasket = React.lazy(() => import("./pages/ShoppingBasket"));
const UserProfile = React.lazy(() => import("./pages/UserProfile"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const SignupForm = React.lazy(() => import("./ui/SignupForm"));
const ErrorFallback = React.lazy(() => import("./ui/ErrorFallback"));
const AccountSetting = React.lazy(() => import("./pages/AccountSetting"));
const ForgotPassword = React.lazy(() => import("./ui/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./ui/ResetPassword"));
const MainFallback = React.lazy(() => import("./ui/MainFallback"));

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
      { path: "/forgotPassword", element: <ForgotPassword /> },
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
  const { isDarkMode } = useDarkMode();

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <Suspense fallback={<MainFallback />}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AuthProvider>
            <ShopProvider>
              <Toaster />
              <RouterProvider router={router} />;
            </ShopProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Suspense>
  );
}
