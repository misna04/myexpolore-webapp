import React from "react"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import FormPage from "../form"

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>
    },
    {
        path: "/app/form",
        element: <FormPage />
    }
])

export default router
