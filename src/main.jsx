import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/jetbrains-mono";

// AOS init
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 800, easing: "ease-in-out", once: true });

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
