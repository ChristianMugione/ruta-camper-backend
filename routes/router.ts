import { Router } from "express";
import { addProduct,  getFeaturedProducts,  getProductList } from "../controllers/productsFncs";

const router = Router();

router.get("/productlist", getProductList);
router.get("/featuredproducts", getFeaturedProducts);
router.post("/addproduct", addProduct);

router.get("/", (req, res) => {
  res.send("Backend of Ruta Camper");
});

export default router;