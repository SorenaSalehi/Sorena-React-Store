import React from "react";

export default function ErrorBoundaryPage({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went Wrong!!</p>
      <h1>{error.message}</h1>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}
