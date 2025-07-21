import Product from "../models/Product.js";

// Get all products (optional: filter featured)
export const getProducts = async (req, res) => {
    try {
        const { featured } = req.query;
        const filter = featured ? { featured: true } : {};
        const products = await Product.find(filter);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get single product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Create a new product (Admin-only in real apps)
export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: "Invalid data" });
    }
};

// Update a product (e.g., toggle 'featured')
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Returns updated product
        );
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: "Invalid data" });
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};