import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Router } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import { Route } from 'react-router'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>

        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
