import React from "react";
import { createRoot } from "react-dom";
import App from "./pages/App";
import "./index.css"; // Importe os estilos do seu aplicativo, se necessário

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
