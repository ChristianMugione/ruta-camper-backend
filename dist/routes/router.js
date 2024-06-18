"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsFncs_1 = require("../controllers/productsFncs");
const router = (0, express_1.Router)();
router.get("/productlist", productsFncs_1.getProductList);
router.get("/featuredproducts", productsFncs_1.getFeaturedProducts);
router.post("/addproduct", productsFncs_1.addProduct);
router.get("/", (req, res) => {
    res.send("Backend of Ruta Camper");
});
exports.default = router;
