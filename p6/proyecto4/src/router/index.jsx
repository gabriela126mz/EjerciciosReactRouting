import { createBrowserRouter } from "react-router-dom";
import Layout from '../views/Layout';
import NotFound from "../views/NotFound";
import Profile from "../views/Profile";
import Products from "../views/Products";
import ProductDetails from "../views/ProductDetails";
import ProductComments from "../components/ProductComments";
import ProductRatings from "../components/ProductRatings";
import Login from "../views/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../views/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                children: [
                { path: "/", element: <Home /> },
                {
                    path: "/products",
                    element: <Products />,
                },
                {
                path: "/products/:productId", 
                element: (
                <ProtectedRoute>
                    <ProductDetails />
                </ProtectedRoute>
                ),
                    children: [
                        { path: "comments", element: <ProductComments /> }, 
                        { path: "ratings", element: <ProductRatings /> },
                    ],
                },
                { path: "/profile", element: <Profile /> },
                { path: "/login", element: <Login /> },
            ],
        },
    ],
    },

    { path:"*" ,element: <NotFound /> },
    ]);