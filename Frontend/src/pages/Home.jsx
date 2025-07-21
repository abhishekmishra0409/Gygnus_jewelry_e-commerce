import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryFilter from '../components/CategoryFilter';
import HeroSection from "../components/HeroSection.jsx";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://gygnus-jewelry-e-commerce.onrender.com/api/products');
                setProducts(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Featured Products with Swiper */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Featured Products Section */}
                <div className="bg-gradient-to-b from-white to-gray-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Featured Collection</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Discover our handpicked selection of exquisite jewelry pieces
                            </p>
                        </div>
                        <FeaturedProducts excludeId={null} />
                    </div>
                </div>
            </div>

            {/* Main Product Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {/* Category Filter with improved design */}
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                {/* Loading State */}
                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : (
                    <>
                        {/* Category Title */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
                            {selectedCategory === 'all' ? 'All Jewelry' : `${selectedCategory}s`}
                        </h2>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {filteredProducts.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <h3 className="text-xl font-medium text-gray-700">No products found in this category</h3>
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                                >
                                    View All Jewelry
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}