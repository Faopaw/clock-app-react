import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Clock from "./App";
import Startbutton from "./Startbutton";
// import Stopbutton from "./Stopbutton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Clock />
    <Startbutton />
  </React.StrictMode>
);