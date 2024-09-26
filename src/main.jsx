import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Caesar from "./pages/Caesar.jsx";
import NavBar from "./NavBar.jsx";
import DES from "./pages/DES.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "caesar",
    element: <Caesar />,
  },
  {
    path: "des",
    element: <DES />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </StrictMode>
);
