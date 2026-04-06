
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
import Contact from "../pages/Contact";
import PropertyDetails from "../pages/PropertyDetails";
import NotFound from "../pages/NotFound";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        errorElement: <NotFound></NotFound>,
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
                path: 'properties/:id',
                element: <PropertyDetails></PropertyDetails>
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
                path: 'contact',
                element: <Contact></Contact>
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