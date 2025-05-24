import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Movie from "./pages/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);
