import Error from "@/components/Error";
import MainLayout from "@/mainLayout/MainLayout";
import { Home } from "lucide-react";
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