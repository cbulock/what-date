import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Grommet } from "grommet";

import theme from "./theme"

import Index from "./pages/Index";
import Month from "./pages/Month";
import Year from "./pages/Year";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/month",
    element: <Month />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/year",
    element: <Year />,
    // errorElement: <ErrorPage />,
  },
]);

const App = () => (
  <Grommet theme={theme}>
    <RouterProvider router={router} />
  </Grommet>
);

export default App;
