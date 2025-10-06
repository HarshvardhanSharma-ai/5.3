// models/ProductCatalog.js
const mongoose = require('mongoose');

// --- 1. Define the Nested Schema (Variant) ---
const VariantSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
        trim: true,
    },
    size: {
        type: String,
        required: true,
        enum: ['S', 'M', 'L', 'XL', 'One Size'] // Restrict size options
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    }
}, { _id: false }); // Optional: Prevents Mongoose from creating an _id for each subdocument

// --- 2. Define the Main Schema (Product) ---
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        enum: ['T-Shirts', 'Footwear', 'Accessories', 'Electronics']
    },
    // The key to nesting: define 'variants' as an array of VariantSchema objects
    variants: [VariantSchema], 
    
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

const ProductCatalog = mongoose.model('ProductCatalog', ProductSchema, 'products'); // 'products' is the collection name
module.exports = ProductCatalog;