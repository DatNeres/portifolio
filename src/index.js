import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./Routes/App.js";
import Error404 from "./Routes/Error404.js";
import AppBlog from "./Components/App/Main/AppBlog.js";
import DownloadPage from "./Routes/DownloadPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "Blog",
    element: <AppBlog />,
  },
  {
    path: "ShieldRSA",
    element: <DownloadPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
