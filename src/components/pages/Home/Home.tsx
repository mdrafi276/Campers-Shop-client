
import Navbar from "@/components/Header/Navbar";
import Footer from "../Footer/Footer";
import { HeroSection } from "@/components/Hero/Hero";
import Discover from "@/components/Discover/Discover";
import Testimonials from "@/components/Testimonials/Testimonials";

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