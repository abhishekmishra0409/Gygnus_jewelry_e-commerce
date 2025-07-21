import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function JewelryHeroSection() {
    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6">
                {/* Left - Main Banner (Swiper slides) */}
                <div className="lg:w-2/3 w-full">
                    <div className="relative overflow-hidden rounded-lg">
                        <Swiper
                            className="w-full"
                            spaceBetween={30}
                            pagination={{clickable: true}}
                            autoplay={{delay: 5000, disableOnInteraction: false}}
                            modules={[Pagination, Autoplay]}
                        >
                            {/* Slide 1 - Diamond Collection */}
                            <SwiperSlide>
                                <div
                                    className="bg-[#F5F0FF] rounded-lg p-10 flex flex-col justify-center min-h-[400px]"
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-no-repeat bg-contain bg-right"
                                         style={{backgroundImage: "url(photo-1605100804763-247f67b3557e-removebg-preview.png)"}}>
                                    </div>
                                    <div className="relative z-10 max-w-[60%]">
                                        <span className="uppercase text-sm text-purple-600">Limited Time Offer</span>
                                        <h2 className="text-3xl font-bold mt-4 text-[#2E1B4B]">Summer Collection</h2>
                                        <h1 className="text-4xl font-extrabold text-[#2E1B4B] mb-4">Diamond Jewelry</h1>
                                        <p className="text-sm text-gray-600">
                                            Discover our exquisite diamond collection handcrafted by master jewelers.
                                            Each piece tells a unique story of elegance.
                                        </p>
                                        <div className="mt-6 flex gap-4">
                                            <a href="/shop"
                                               className="bg-purple-600 text-white px-5 py-2 rounded font-semibold hover:bg-purple-700">
                                                Shop Collection
                                            </a>
                                            <a href="/diamonds" className="text-purple-700 hover:text-purple-900">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 - Gold Special */}
                            <SwiperSlide>
                                <div
                                    className="bg-[#FFF8E6] rounded-lg p-10 flex flex-col justify-center min-h-[400px]"
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-no-repeat bg-contain bg-right"
                                         style={{backgroundImage: "url(photo-1599643478518-a784e5dc4c8f-removebg-preview.png)"}}>
                                    </div>
                                    <div className="relative z-10 max-w-[60%]">
                                        <span className="uppercase text-sm text-amber-600">Exclusive Offer</span>
                                        <h2 className="text-3xl font-bold mt-4 text-[#5E4200]">Up to 40% Off</h2>
                                        <h1 className="text-4xl font-extrabold text-[#5E4200] mb-4">Gold Masterpieces</h1>
                                        <p className="text-sm text-gray-600">
                                            Our 18K gold collection combines timeless beauty with modern design.
                                            Limited stock available at these special prices.
                                        </p>
                                        <div className="mt-6 flex gap-4">
                                            <a href="/gold"
                                               className="bg-amber-500 text-white px-5 py-2 rounded font-semibold hover:bg-amber-600">
                                                View Gold Items
                                            </a>
                                            <a href="/gold-guide" className="text-amber-700 hover:text-amber-900">
                                                Gold Guide
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 3 - Wedding Collection */}
                            <SwiperSlide>
                                <div
                                    className="bg-[#E6F3FF] rounded-lg p-10 flex flex-col justify-center min-h-[400px]"
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-no-repeat bg-contain bg-right"
                                         style={{backgroundImage: "url(photo-1602173574767-37ac01994b2a-removebg-preview.png)"}}>
                                    </div>
                                    <div className="relative z-10 max-w-[60%]">
                                        <span className="uppercase text-sm text-blue-600">New Arrivals</span>
                                        <h2 className="text-3xl font-bold mt-4 text-[#0D3B66]">Bridal Collection</h2>
                                        <h1 className="text-4xl font-extrabold text-[#0D3B66] mb-4">Wedding Jewelry</h1>
                                        <p className="text-sm text-gray-600">
                                            Celebrate your love story with our stunning bridal collection.
                                            Expertly crafted rings, necklaces and earrings.
                                        </p>
                                        <div className="mt-6 flex gap-4">
                                            <a href="/wedding"
                                               className="bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-700">
                                                Explore Bridal Sets
                                            </a>
                                            <a href="/appointment" className="text-blue-700 hover:text-blue-900">
                                                Consultation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* Right - Small Banners */}
                <div className="lg:w-1/3 w-full flex flex-col gap-6">
                    {/* Banner 1 - Personalized Jewelry */}
                    <div className="bg-[#FEF2F5] rounded-lg p-6 relative overflow-hidden min-h-[190px]">
                        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-no-repeat bg-contain bg-right"
                             style={{backgroundImage: "url(photo-1535632066927-ab7c9ab60908-removebg-preview.png)"}}>
                        </div>
                        <div className="relative z-10 max-w-[60%]">
                            <span className="uppercase text-pink-600 text-sm font-semibold">
                              Custom Designs
                            </span>
                            <h4 className="text-lg font-semibold mt-2 mb-2 text-[#5C1A37]">Personalized Jewelry</h4>
                            <p className="text-sm text-gray-600">Create your unique piece.</p>
                            <div className="mt-4">
                                <a href="/custom"
                                   className="bg-pink-600 text-white px-4 py-2 rounded font-semibold hover:bg-pink-700">
                                    Design Yours
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Banner 2 - Pearl Special */}
                    <div className="bg-[#F0F7F4] rounded-lg p-6 relative overflow-hidden min-h-[190px]">
                        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-no-repeat bg-contain bg-right"
                             style={{backgroundImage: "url(julie-sd-akKnxLiN1jQ-unsplash-removebg-preview.png)"}}>
                        </div>
                        <div className="relative z-10 max-w-[60%]">
                            <span className="uppercase text-teal-600 text-sm font-semibold">Luxury Pearls</span>
                            <h4 className="text-lg font-semibold mt-2 mb-2 text-[#1A5C4B]">Pearl Collection</h4>
                            <p className="text-sm text-gray-600">Timeless elegance.</p>
                            <div className="mt-4">
                                <a href="/pearls"
                                   className="bg-teal-600 text-white px-4 py-2 rounded font-semibold hover:bg-teal-700">
                                    View Pearls
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JewelryHeroSection;