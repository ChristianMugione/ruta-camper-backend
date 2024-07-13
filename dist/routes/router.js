"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsFncs_1 = require("../controllers/productsFncs");
const middleware_1 = require("../controllers/middleware");
const router = (0, express_1.Router)();
router.get("/", ({}, res) => {
    res.send("Backend of Ruta Camper");
});
router.get("/productlist", productsFncs_1.getProductList);
router.get("/featuredproducts", productsFncs_1.getFeaturedProducts);
// middleware
router.use(middleware_1.middleware);
router.post("/addproduct", productsFncs_1.addProduct);
router.put("/updateproduct/:id", productsFncs_1.updateProduct);
router.delete("/deleteproduct/:id", productsFncs_1.deleteProduct);
exports.default = router;
