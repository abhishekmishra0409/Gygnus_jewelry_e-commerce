import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// GET /api/products (all products)
// GET /api/products?featured=true (only featured products)
router.get("/", getProducts);

// GET /api/products/:id (single product)
router.get("/:id", getProductById);

// POST /api/products (create)
router.post("/", createProduct);

// PUT /api/products/:id (update)
router.put("/:id", updateProduct);

// DELETE /api/products/:id (delete)
router.delete("/:id", deleteProduct);

export default router;