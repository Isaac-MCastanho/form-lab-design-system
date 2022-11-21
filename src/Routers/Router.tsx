import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Community } from "../pages/Community";
import { CreateAnAccount } from "../pages/CreateAnAccount";
import { Home } from "../pages/Home";
import { SignIn } from "./../pages/SignIn/index";
import { Theme } from "./../Theme/Theme";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Theme />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "createanaccount",
        element: <CreateAnAccount />,
      },
    ],
  },
]);
