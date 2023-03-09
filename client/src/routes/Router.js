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
        path: 'Service' ,
        element: <Service/>
    },
    {
        path: 'Portfolio' ,
        element: <Portfolio/>
    },
    {
        path: 'faq' ,
        element: <Faq/>
    }
])

export default router