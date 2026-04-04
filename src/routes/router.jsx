
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AllProperties from "../pages/AllProperties";
import AddProperty from "../pages/AddProperty";
import MyProperties from "../pages/MyProperties";
import MyRatings from "../pages/MyRatings";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'all-properties',
                element: <AllProperties></AllProperties>
            },
            {
                path: 'add-property',
                element: <PrivateRoute><AddProperty></AddProperty></PrivateRoute>
            },
            {
                path: 'my-properties',
                element: <PrivateRoute><MyProperties></MyProperties></PrivateRoute>
            },
            {
                path: 'my-ratings',
                element: <PrivateRoute><MyRatings></MyRatings></PrivateRoute>
            },
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