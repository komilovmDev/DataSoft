import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import router from "./routes/Router";


export default function App() {
    
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}