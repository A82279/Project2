const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    
    },
    brand: {
        type: String,
        required: true,
    
    },
    quantity: {
        type: String,
        required: true, 
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;