import MainLayout from "@/mainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/pages/Home/Home";
import ProductManagement from "@/components/pages/ProductManagement/ProductMangement";
import CreateProduct from "@/components/pages/ProductManagement/CreateProducts";
import UpdateProduct from "@/components/pages/ProductManagement/UpdateProduct";
import AboutUs from "@/components/pages/AboutUs/AboutUs";
import NotFound from "@/components/NotFound/NotFound";
import ProductDetails from "@/components/ProductDetails/ProductsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
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
            {
                path: '/products-details/:id',
                element: <ProductDetails />
            },
        ]
    }
])
export default router;