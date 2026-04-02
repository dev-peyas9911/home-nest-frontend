
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])