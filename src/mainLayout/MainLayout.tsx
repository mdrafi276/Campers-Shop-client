import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="bg-[#0E0E0E]">
            <Outlet />
        </div>
    );
};

export default MainLayout;