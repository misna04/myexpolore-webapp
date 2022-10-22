import React from "react"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import Layout from "./layouts/VerticalLayout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    }
])

export default router
