import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './routes/Layout/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import { Route } from 'react-router'
import HomePage from './routes/Homepage/HomePage.jsx'
import CreatePage from './routes/CreatePage/CreatePage.jsx'
import PostPage from './routes/PostPage/PostPage.jsx'
import SearchPage from './routes/SearchPage/SearchPage.jsx'
import ProfilePage from './routes/ProfilePage/ProfilePage.jsx'
import AuthPage from './routes/AuthPage/AuthPage.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/create' element={<CreatePage/>}/>
                <Route path='/pin/:id' element={<PostPage/>}/>
                <Route path='/search' element={<SearchPage/>}/>
                <Route path='/:username' element={<ProfilePage/>}/>   
            </Route>
            <Route path='/auth'element={<AuthPage/>}/> 
        </>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
