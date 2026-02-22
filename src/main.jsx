import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>welcome to my react project </div>,
  },
  {
    path: "about",
    element: <div>here about my self</div>,
  },
  {
    path: "contact",
    element: <div>contact me for more</div>,
  },
  {
    path: "/Blogs",
    element: <div>for more for this page</div>,
  },
  {
    path: "/app",
    Component: App,
  },
  {
    path: "app2",
    // element: <App></App>,
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
