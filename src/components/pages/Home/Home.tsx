
import Discover from "@/components/Discover/Discover";
import Testimonials from "@/components/Testimonials/Testimonials";
import FaqSection from "@/components/FAQ/FAQSection";
import BestSellingProducts from "@/components/BestSellingProducts/BestSellingProducts";
import BannerSection from "@/components/Header/BannerSection/BannerSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
const Home = () => {
    return (
        <div className="bg-black">
            <BannerSection />
            <BestSellingProducts />
            <Discover />
            <Testimonials />
            <FeaturesSection />

            <FaqSection />
        </div>
    );
};

export default Home;