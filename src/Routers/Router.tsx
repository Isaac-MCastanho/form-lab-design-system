import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About } from "../pages/About";
import { Community } from "../pages/Community";
import { CreateAnAccount } from "../pages/CreateAnAccount";
import { Home } from "../pages/Home";
import { SignIn } from "./../pages/SignIn/index";
import { Theme } from "./../Theme/Theme";

// export const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Theme />,

//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "community",
//         element: <Community />,
//       },
//       {
//         path: "signin",
//         element: <SignIn />,
//       },
//       {
//         path: "createanaccount",
//         element: <CreateAnAccount />,
//       },
//     ],
//   },
// ]);
export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Theme />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="community" element={<Community />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="createanaccount" element={<CreateAnAccount />} />
    </Route>
  )
);
