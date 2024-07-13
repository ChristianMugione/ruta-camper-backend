import { Response, Router } from "express";
import { 
  addProduct, 
  getFeaturedProducts, 
  getProductList, 
  updateProduct,
  deleteProduct 
} from "../controllers/productsFncs";
import { middleware } from "../controllers/middleware";

const router = Router();

router.get("/", ({}, res: Response) => {
  res.send("Backend of Ruta Camper");
});

router.get("/productlist", getProductList);
router.get("/featuredproducts", getFeaturedProducts);

// middleware
router.use(middleware);

router.post("/addproduct", addProduct);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);


export default router;