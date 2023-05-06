import ReactDOM from "react-dom/client";
import RecipeApp from "./RecipeApp";
import React from "react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeApp />
    </BrowserRouter>
  </React.StrictMode>
);
