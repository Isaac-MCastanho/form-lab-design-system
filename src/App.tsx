import { RouterProvider } from "react-router-dom";
import "./styles/global.css";
import { Router } from "./Routers/Router";

export function App() {
  return <RouterProvider router={Router} />;
}
