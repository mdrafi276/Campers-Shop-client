import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

const routes = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/products",
        name: "Products",
    },
    {
        path: "/about",
        name: "About Us",
    },
];

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className='text-white'>
                <Button className="text-xl font-medium text-gray-200 bg-transparent p-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </Button>
            </SheetTrigger>

            <SheetContent side={"left"} className="bg-[#2d0041]">
                <SheetHeader className="text-left mb-5">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                </SheetHeader>
                <div className="flex flex-col space-y-2">
                    {routes.map((route) => (
                        <SheetClose asChild>
                            <NavLink
                                key={route.path}
                                className={({ isActive }) =>
                                    ` text-lg font-medium text-white hover:text-red-600 py-3 hover:border-b-2 hover:border-red-600 ${isActive ? "text-red-600" : ""
                                    }`
                                }
                                to={route.path}
                            >
                                {route.name}
                            </NavLink>
                        </SheetClose>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
