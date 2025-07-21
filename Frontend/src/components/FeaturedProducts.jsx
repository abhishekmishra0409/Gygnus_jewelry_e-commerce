import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

export default function FeaturedProducts({ excludeId }) {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const res = await axios.get('https://gygnus-jewelry-e-commerce.onrender.com/api/products?featured=true');
                // Filter out the current product if excludeId is provided
                const filteredProducts = excludeId
                    ? res.data.filter(product => product._id !== excludeId)
                    : res.data;
                setFeaturedProducts(filteredProducts);
            } catch (err) {
                console.error(err);
            }
        };
        fetchFeaturedProducts();
    }, [excludeId]);

    if (featuredProducts.length === 0) return null;

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                // navigation
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4
                    }
                }}
                className="py-4 px-2"
            >
                {featuredProducts.map(product => (
                    <SwiperSlide key={product._id} className="pb-10">
                        <div className="mx-2">
                            <ProductCard product={product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/*/!* Custom navigation buttons *!/*/}
            {/*<div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full left-0 z-10 pointer-events-none">*/}
            {/*    <button className="swiper-button-prev-jewelry bg-white p-3 rounded-full shadow-lg pointer-events-auto hover:bg-gray-100 transition">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*    <button className="swiper-button-next-jewelry bg-white p-3 rounded-full shadow-lg pointer-events-auto hover:bg-gray-100 transition">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
}