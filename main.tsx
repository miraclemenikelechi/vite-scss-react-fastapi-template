import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./client/App";
import "./client/assets/index.css";
import "./client/assets/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
