import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Faq from '../pages/faqs/Faq'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Service from '../pages/Service'

const router = createBrowserRouter([
    {
        path: '/' ,
        element: <Home/>
    },
    {
        path: 'services' ,
        element: <Service/>
    },
    {
        path: 'portfolio' ,
        element: <Portfolio/>
    },
    {
        path: 'faq' ,
        element: <Faq/>
    }
])

export default router