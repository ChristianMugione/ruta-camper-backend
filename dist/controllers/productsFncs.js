"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getFeaturedProducts = exports.getProductList = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
/**
 * Retrieves the list of products from the database and sends it as a JSON response.
 *
 * @param {Object} req - The request object (unused in this function).
 * @param {Response} res - The response object used to send the JSON response.
 * @return {Promise<void>} - A promise that resolves when the products are retrieved and sent in the response.
 */
const getProductList = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({}, res) {
    try {
        const products = yield productModel_1.default.find();
        res.json({ products });
        console.log(products);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProductList = getProductList;
const getFeaturedProducts = (_b, res_2) => __awaiter(void 0, [_b, res_2], void 0, function* ({}, res) {
    try {
        const products = yield productModel_1.default.find({ featured: true });
        res.json({ products });
        console.log(products);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getFeaturedProducts = getFeaturedProducts;
/**
 * Adds a new product to the database.
 *
 * @param {Request} req - The request object containing the product data.
 * @param {Response} res - The response object used to send the created product.
 */
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const product = yield productModel_1.default.create(body);
        res.json({ product });
        console.log(product);
    }
    catch (error) {
        console.log(error);
    }
});
exports.addProduct = addProduct;
