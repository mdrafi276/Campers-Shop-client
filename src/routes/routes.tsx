import Error from "@/components/Error";
import MainLayout from "@/mainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/pages/Home/Home";
import ProductManagement from "@/components/pages/ProductManagement/ProductMangement";

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
            }
        ]
    }
])
export default router;