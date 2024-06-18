"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: false
    },
    images: {
        type: [String],
        required: false
    },
    featured: {
        type: Boolean,
        required: true
    }
});
const Products = (0, mongoose_1.model)("Products", ProductSchema);
exports.default = Products;
