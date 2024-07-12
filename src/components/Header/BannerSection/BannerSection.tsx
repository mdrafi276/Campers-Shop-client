import { HeroSection } from '@/components/Hero/Hero';
import { CardContent } from '@/components/ui/card';

const BannerSection = () => {
    return (
        <div className='bg-black lg:pt-10 pt-5'>
            <div className='flex justify-center gap-3 lg:gap-5 items-center'>
                <div className='w-[560px] '>
                    <HeroSection />
                </div>
                <div className='w-[340px]'>
                    <CardContent className="  lg:pb-14 bg-image flex flex-col rounded-[15px] hover:rounded-[15px] items-end justify-end  h-[499px]  p-0">
                        <div className='pb-3'>
                            <h1 className='text-sm text-center text-black bg-[#e1e1e197] rounded-[15px] py-2 px-4'>Form our MAG</h1>
                        </div>
                        <div className=''>
                            <h1 className="text-white font-bold text-sm lg:text-[24px] ">The best gifts to </h1>

                            <h1 className="text-white font-bold text-sm lg:text-[24px]  pt-[2px]"> impress any brew geek.</h1>
                        </div>
                    </CardContent>
                </div>
                <div className='w-[340px]'>
                    <CardContent className="flex rounded-[15px] hover:rounded-[15px] items-center justify-center h-[499px]  p-0">
                        <img className="h-full rounded-[15px] hover:rounded-[15px] w-full object-cover " src="https://thegadgetflow.com/wp-content/uploads/2024/07/East-Oak-Rotomolded-Hard-Cooler-02.jpg" alt="" />
                    </CardContent>
                </div>
            </div>

        </div>
    );
};

export default BannerSection;