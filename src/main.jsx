import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={ErrorBoundaryPage}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
