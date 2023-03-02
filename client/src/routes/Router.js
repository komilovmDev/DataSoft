import { Children } from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path:':portfolio',
                element: <Portfolio/>
            }
        ]
    }
])

export default router