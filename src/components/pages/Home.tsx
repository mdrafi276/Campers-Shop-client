import Discover from "../Discover/Discover";
import Navbar from "../Header/Navbar";
import { HeroSection } from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div>

            <Navbar />
            <HeroSection />
            <Discover />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;