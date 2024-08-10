"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsFncs_1 = require("../controllers/productsFncs");
const userFncs_1 = require("../controllers/userFncs");
const auth_1 = require("../controllers/auth");
const orderFncs_1 = require("../controllers/orderFncs");
const router = (0, express_1.Router)();
router.get("/", ({}, res) => {
    res.send("Backend of Ruta Camper");
});
router.get("/productlist", productsFncs_1.getProductList);
router.get("/featuredproducts", productsFncs_1.getFeaturedProducts);
router.post("/login", userFncs_1.userLogin);
router.get("/userlist", userFncs_1.getUserList);
router.post("/adduser", userFncs_1.createUser);
router.get("/verifytoken/:token", auth_1.verifyToken);
// middleware
// router.use(middleware);
// PRODUCTS
router.post("/addproduct", productsFncs_1.addProduct);
router.put("/updateproduct/:id", productsFncs_1.updateProduct);
router.delete("/deleteproduct/:id", productsFncs_1.deleteProduct);
// USERS
router.delete("/deleteuser/:id", userFncs_1.deleteUser);
// ORDERS
router.get("/orders/:userId", orderFncs_1.getOrders);
router.post("/order", orderFncs_1.addOrder);
exports.default = router;
