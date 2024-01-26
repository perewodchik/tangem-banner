import { createBrowserRouter } from "react-router-dom";

import { BlackFridayPageConnector, MainPageConnector } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageConnector />,
  },
  {
    path: "/blackfriday",
    element: <BlackFridayPageConnector />,
  },
]);
