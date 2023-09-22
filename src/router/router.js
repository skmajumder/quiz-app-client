import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// * Import components using dynamic import and React.lazy
const Main = lazy(() => import("../components/Main"));
const Quiz = lazy(() => import("../components/Quiz"));
const Result = lazy(() => import("../components/Result"));

// * Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/quiz",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Quiz />
      </Suspense>
    ),
  },
  {
    path: "/result",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Result />
      </Suspense>
    ),
  },
]);

export default router;
