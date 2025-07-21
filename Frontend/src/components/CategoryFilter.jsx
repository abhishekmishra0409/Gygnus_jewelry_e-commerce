export default function CategoryFilter({ selectedCategory, setSelectedCategory }) {
    const categories = [
        { value: 'all', label: 'All Jewelry', icon: '💎' },
        { value: 'necklace', label: 'Necklaces', icon: '📿' },
        { value: 'ring', label: 'Rings', icon: '💍' },
        { value: 'earring', label: 'Earrings', icon: '✨' },
        { value: 'bracelet', label: 'Bracelets', icon: '🖇️' },
    ];

    return (
        <div className="mb-12">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Shop by Category</h3>
            <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                    <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`flex items-center px-5 py-3 rounded-lg text-sm font-medium transition-all
                            ${selectedCategory === category.value
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
                    >
                        <span className="mr-2 text-lg">{category.icon}</span>
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
    );
}