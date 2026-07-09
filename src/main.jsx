import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { Fragment } from "react";

createRoot(document.getElementById("root")).render(
  <Fragment>
    <App />
    <Toaster toastOptions={{duration:2000}}/>
  </Fragment>
);
