import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <div className="bg-gradient-to-br h-full lg:pt-4 from-[#000000] via-[#000000] to-[#6d0082]">
                <div className=' lg:mt-10'>
                    <h1 className='text-white font-mono text-[19px] text-center  md:text-[40px] '>About Us
                    </h1>
                    <section className="text-gray-600 body-font h-full   lg:h-[500px]">
                        <div className="container mx-auto flex md:flex-col px-5 md:pt-10 lg:flex-row justify-center lg:gap-0 md:gap-8 flex-col items-center">
                            <div className="lg:w-[800px] md:w-[600px]   w-full mb-10 md:mb-0">
                                {/* <img className='' src="https://i.ibb.co/1X3GJD0/d.jpg" alt="" /> */}
                                <video autoPlay muted loop src="https://adventureshop.mt/cdn/shop/videos/c/vp/5e5b66297db847fd93978ed0b4342459/5e5b66297db847fd93978ed0b4342459.HD-1080p-7.2Mbps-29368979.mp4?v=0"></video>
                            </div>
                            <div className="lg:flex-grow md:w-[700px] lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium selection:text-black selection:bg-white text-white ">Our Mission

                                </h1>
                                <p className="mb-8 leading-relaxed selection:text-black text-white selection:font-bold selection:bg-white text-[12px] lg:text-[16px] ">At Advanture shop, we're more than just an online shoe store – we're your trusted partner in all things wearings. With a passion for innovation and a commitment to excellence.

                                </p>
                                <div className="flex justify-center items-center">
                                    <Link to='/products'>
                                        <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 text-center focus:outline-none hover:bg-red-500 mx-auto rounded w-full text-lg">See More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="bg-gradient-to-bl lg:pt-20 lg:min-h-screen  from-[#000000] via-[#000000] to-[#6d0082]">
                <div className=' lg:mt-10'>
                    <h1 className='text-white font-mono text-[19px] text-center  md:text-[40px] '>
                    </h1>
                    <section className="text-gray-600 body-font h-full   lg:h-[700px]">
                        <div className="container mx-auto flex lg:flex-row-reverse md:flex-col px-5 md:pt-10  justify-center lg:gap-0 md:gap-8 flex-col items-center">
                            <div className="lg:w-[700px] md:w-[600px]   w-full mb-10 md:mb-0">
                                <img className=' size-[600px]' src="https://cdn.prod.website-files.com/66312dcf103b5edc9ccc1113/66374a7e6cd3b28daedf2813_irene-kredenets-dwKiHoqqxk8-unsplash-p-800.jpg" alt="" />

                            </div>
                            <div className="lg:flex-grow md:w-[700px] lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium selection:text-black selection:bg-white text-white ">We have impactful numbers


                                </h1>
                                <p className="mb-8 leading-relaxed selection:text-black text-white selection:font-bold selection:bg-white text-[12px] lg:text-[16px] ">ng eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. With a passion for innovation and a commitment to excellence.

                                </p>
                                <div className="flex justify-center items-center">
                                    <Link to='/products'>
                                        <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 text-center focus:outline-none hover:bg-red-500 mx-auto rounded w-full text-lg">See More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>

    );
};

export default AboutUs;