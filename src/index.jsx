import React from "react";
import createRoot from "react-dom";
import "./index.css";
import Home from "./components/Home";

createRoot.render(
  <>
    <Home />
  </>,
  document.getElementById("root")
);
