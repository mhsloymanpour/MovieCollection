import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Movie from "./pages/Movie";
import Signup from "./pages/Signup";
import Login from "./pages/login";

import Help from "./pages/Help";
import About from "./pages/About";
import Genre from "./pages/Genre";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/Signin",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/contact",
    element: <Help />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/:genre/:id",
    element: <Genre />,
  },
]);
