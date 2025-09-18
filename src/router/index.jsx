import * as React from "react";
import * as ReactDom from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Auth/Login";
import Contact from "../pages/Contact/Contact";
import Main from "../pages/Contact/Main/Main";
import Extra from "../pages/Contact/Extra/Extra";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/people",
                element: <Contact/>,
                children: [
                    {
                        path: "main",
                        element: <Main/>
                    },
                    {
                        path: "extra",
                        element: <Extra/>
                    }
                ]
            }
        ]
    },,
    {
         path: "/login",
        element: <Login/>,
    }
])

export default router;