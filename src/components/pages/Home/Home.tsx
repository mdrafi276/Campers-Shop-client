
import Discover from "@/components/Discover/Discover";
import Testimonials from "@/components/Testimonials/Testimonials";
import FaqSection from "@/components/FAQ/FAQSection";
import BestSellingProducts from "@/components/BestSellingProducts/BestSellingProducts";
import BannerSection from "@/components/Header/BannerSection/BannerSection";
const Home = () => {
    return (
        <div className="bg-black">
            <BannerSection />
            <BestSellingProducts />
            <Discover />
            <Testimonials />
            <FaqSection />
        </div>
    );
};

export default Home;