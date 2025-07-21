import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FeaturedProducts from '../components/FeaturedProducts';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://gygnus-jewelry-e-commerce.onrender.com/api/products/${id}`);
                setProduct(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    if (!product) {
        return <div className="text-center py-12">Product not found</div>;
    }

    return (
        <div className="bg-gray-50">
            {/* Product Detail Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Product Image */}
                    <div className="md:w-1/2">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="md:w-1/2">
                        <div className="sticky top-8">
                            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                            <p className="text-2xl text-purple-600 mt-2">${product.price.toFixed(2)}</p>

                            <div className="mt-4 flex items-center gap-2">
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
                                    ${product.featured ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                                    {product.category}
                                </span>
                                {product.featured && (
                                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

                            <div className="mt-8 space-y-4">
                                <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="w-full px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                                    Add to Wishlist
                                </button>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                                <div className="mt-4 space-y-2">
                                    <p className="text-sm text-gray-600"><span className="font-medium">Material:</span> {product.material || '18K Gold'}</p>
                                    <p className="text-sm text-gray-600"><span className="font-medium">Stone:</span> {product.stone || 'Diamond'}</p>
                                    <p className="text-sm text-gray-600"><span className="font-medium">Size:</span> {product.size || 'Adjustable'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="bg-gradient-to-b from-white to-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">You May Also Like</h2>
                        <p className="text-gray-600">Discover similar jewelry pieces</p>
                    </div>
                    <FeaturedProducts excludeId={product._id} />
                </div>
            </div>
        </div>
    );
}