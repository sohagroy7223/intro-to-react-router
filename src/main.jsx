import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Root/Home/Home.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import Laptop from "./Laptop/Laptop.jsx";
import Books from "./Components/Books/Books.jsx";
import Users from "./Components/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptop", Component: Laptop },
      { path: "books", Component: Books },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
    ],
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
