import { Link } from 'react-router-dom';
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product }) {
    return (
        <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-100">
            <div className="relative">
                <Link to={`/products/${product._id}`}>
                    {/* Product Image */}
                    <div className="aspect-square overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-2">
                        {product.featured && (
                            <span className="px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                                Featured
                            </span>
                        )}
                    </div>
                </Link>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col items-end space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                        <HeartIcon className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <Link to={`/products/${product._id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
                    <div className="flex items-center mt-1 space-x-2">
                        <p className="text-lg font-medium text-purple-600">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                    <span className={`inline-block px-3 py-1 mt-2 text-xs font-medium rounded-full 
                        ${product.featured ? 'bg-purple-50 text-purple-700' : 'bg-gray-50 text-gray-700'}`}>
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                </Link>

                {/* Quick Add to Cart */}
                <button className="mt-4 w-full py-2 bg-white border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors hidden group-hover:block">
                    Quick Add
                </button>
            </div>
        </div>
    );
}