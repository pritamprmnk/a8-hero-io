
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ROOT from "../pages/Root/ROOT";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:ROOT,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            Component:Home
        }
    ]
    
  },
]);
