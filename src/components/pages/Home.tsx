import Navbar from "../Header/Navbar";
import { HeroSection } from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>

            <Navbar />
            <HeroSection />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;