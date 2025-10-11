import React from "react";
import { createBrowserRouter } from "react-router";
import ROOT from "../pages/Root/ROOT";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import AppDetails from "../pages/AppDetails";
import AllApps from "../pages/AllApps";
import AppNotFound from "../pages/Error/AppNotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: ROOT,
    errorElement: <ErrorPage />,
    
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        index: true,
        path: "/allapps",
        Component: AllApps,
      },
      {
        path: "/appdetails/:id",
        Component:AppDetails,
      },
      {
        path: "/appnotfound",
        Component: AppNotFound, // custom “not found” for app search
      },
  
     
    ],
  },
]);
