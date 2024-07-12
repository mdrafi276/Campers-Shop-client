
import { HeroSection } from "@/components/Hero/Hero";
import Discover from "@/components/Discover/Discover";
import Testimonials from "@/components/Testimonials/Testimonials";
import FaqSection from "@/components/FAQ/FAQSection";
import BestSellingProducts from "@/components/BestSellingProducts/BestSellingProducts";
const Home = () => {
    return (
        <div>
            <HeroSection />
            <BestSellingProducts />
            <Discover />
            <Testimonials />
            <FaqSection />
        </div>
    );
};

export default Home;