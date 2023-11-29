import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
