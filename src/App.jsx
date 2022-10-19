import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Grommet } from "grommet";

import theme from "./theme"

import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    // errorElement: <ErrorPage />,
  },
]);

const App = () => (
  <Grommet theme={theme}>
    <RouterProvider router={router} />
  </Grommet>
);

export default App;
