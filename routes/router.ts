import { Response, Router } from "express";
import { 
  addProduct, 
  getFeaturedProducts, 
  getProductList, 
  updateProduct,
  deleteProduct 
} from "../controllers/productsFncs";
import { middleware } from "../controllers/middleware";
import { createUser, deleteUser, getUserList, userLogin } from "../controllers/userFncs";
import { verifyToken } from "../controllers/auth";
import { addOrder, getOrders } from "../controllers/orderFncs";

const router = Router();

router.get("/", ({}, res: Response) => {
  res.send("Backend of Ruta Camper");
});

router.get("/productlist", getProductList);
router.get("/featuredproducts", getFeaturedProducts);

router.post("/login", userLogin)
router.get("/userlist", getUserList);
router.post("/adduser", createUser);
router.get("/verifytoken/:token", verifyToken);

// middleware
// router.use(middleware);

// PRODUCTS
router.post("/addproduct", addProduct);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);

// USERS
router.delete("/deleteuser/:id", deleteUser);

// ORDERS
router.get("/orders/:userId", getOrders);
router.post("/order", addOrder);

export default router;