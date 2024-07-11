import Error from "@/components/Error";
import MainLayout from "@/mainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/pages/Home/Home";
import ProductManagement from "@/components/pages/ProductManagement/ProductMangement";
import CreateProduct from "@/components/pages/ProductManagement/CreateProducts";
import UpdateProduct from "@/components/pages/ProductManagement/UpdateProduct";
import AboutUs from "@/components/pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product-management',
                element: <ProductManagement />
            },
            {
                path: '/create-product',
                element: <CreateProduct />
            },
            {
                path: '/update-product/:id',
                element: <UpdateProduct />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
        ]
    }
])
export default router;