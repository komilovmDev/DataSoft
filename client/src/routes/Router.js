import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
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
        path:'About' ,
        element: <About/>
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
    },
    {
        path: 'contact' ,
        element: <Contact/>
    }
])

export default router