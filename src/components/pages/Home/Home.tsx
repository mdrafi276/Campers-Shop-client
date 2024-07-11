
import Footer from "../Footer/Footer";
import { HeroSection } from "@/components/Hero/Hero";
import Discover from "@/components/Discover/Discover";
import Testimonials from "@/components/Testimonials/Testimonials";
import FaqSection from "@/components/FAQ/FAQSection";

const Home = () => {
    return (
        <div>

            <HeroSection />
            <FaqSection />
            <Discover />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;