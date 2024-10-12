import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./components/Theme";
import "./index.css"
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <HashRouter>
      <Theme>
        <App />
      </Theme>
    </HashRouter>
  </StrictMode>
);
