import React from "react"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import Layout from "./layouts/VerticalLayout"
import FormPage from "./form/"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    },
    {
        path: "/app/form",
        element: <FormPage />
    }
])

export default router
