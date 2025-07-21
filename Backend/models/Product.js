import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    category: {
        type: String,
        enum: ["necklace", "ring", "earring", "bracelet"],
        required: true,
    },
    image: {
        type: String,
        default: "https://i.etsystatic.com/23931774/r/isla/bbfa78/64729291/isla_500x500.64729291_m5ypok5x.jpg",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Product", productSchema);