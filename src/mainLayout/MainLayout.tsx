import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=" min-h-[2000px] bg-[#0E0E0E]">
            <Outlet />
        </div>
    );
};

export default MainLayout;