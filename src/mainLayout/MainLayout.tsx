import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/pages/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="  bg-[#0E0E0E] max-w-screen-2xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;