import { Router } from "express";
import { addProduct,  getFeaturedProducts,  getProductList } from "../controllers/productsFncs";

const router = Router();

router.get("/productlist", getProductList);
router.get("/featuredproducts", getFeaturedProducts);
router.post("/addproduct", addProduct);

export default router;