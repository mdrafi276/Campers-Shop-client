import Error from "@/components/Error";
import Home from "@/components/pages/Home";
import MainLayout from "@/mainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])
export default router;