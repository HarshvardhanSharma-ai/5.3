const mongoose = require('mongoose');
const VariantSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
        trim: true,
    },
    size: {
        type: String,
        required: true,
        enum: ['S', 'M', 'L', 'XL', 'One Size'] 
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    }
}, { _id: false }); 


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

    variants: [VariantSchema], 
    
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

const ProductCatalog = mongoose.model('ProductCatalog', ProductSchema, 'products'); 

module.exports = ProductCatalog;
