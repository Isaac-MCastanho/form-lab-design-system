import "./styles/global.css";

import { Theme } from "./Theme/Theme";
import { MainRoutes } from "./Routers/routes";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}
