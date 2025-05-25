import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Movie from "./pages/Movie";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Action from "./pages/Action";
import Comedy from "./pages/Comedy";
import Drama from "./pages/Drama";
import Fictional from "./pages/fictional";
import Scary from "./pages/scary";
import Help from "./pages/Help";
import About from "./pages/About";

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
    path: "/Action",
    element: <Action />,
  },
  {
    path: "/Comedy",
    element: <Comedy />,
  },
  {
    path: "/Drama",
    element: <Drama />,
  },
  {
    path: "/Fictional",
    element: <Fictional />,
  },
  {
    path: "/Scary",
    element: <Scary />,
  },
  {
    path: "/Help",
    element: <Help />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);
