import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router";
import "./styles/index.css";
import "./styles/form.css";
import "./styles/button.css";
import "./styles/@midia.css";
import "./styles/input.css";
import { MainContextProvider } from "./context/MainContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </React.StrictMode>
  </MainContextProvider>
);
