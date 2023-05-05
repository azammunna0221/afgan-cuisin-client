import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import ChefInfo from './components/ChefInfo/ChefInfo.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/chefInfo/:id",
        element: <ChefInfo></ChefInfo>,
        loader: ({params})=> fetch(`http://localhost:5000/chefInfo/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
