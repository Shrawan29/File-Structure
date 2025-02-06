import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";// Import the custom Layout component
import Signup from "./components/Auth/Signup.jsx";
import Login from "./components/Auth/Login.jsx";
import Home from "./components/Home/Home.jsx";
import SalesTrends from "./components/SalesTrends/SalesTrends.jsx";
import InventoryForecast from "./components/InventoryForecast/InventoryForecast.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/SalesTrends",
        element: <SalesTrends />
      },
      {
        path:"/InventoryForecast",
        element: <InventoryForecast />
      }
    ]
  },
  {
  path: "/login",
  element: <Login />
  },
  {
    path:"/signup",
    element: <Signup />
  },
  {
    path:"/SalesTrends",
    element: <SalesTrends />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);