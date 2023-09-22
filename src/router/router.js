// React Router Paths

import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Quiz from "../components/Quiz";
import Result from "../components/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

export default router;
