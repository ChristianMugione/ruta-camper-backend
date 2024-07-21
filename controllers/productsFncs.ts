import { Request, Response } from "express";
import Products, { IProduct } from "../models/productModel"

/**
 * Retrieves the list of products from the database and sends it as a JSON response.
 *
 * @param {Object} req - The request object (unused in this function).
 * @param {Response} res - The response object used to send the JSON response.
 * @return {Promise<void>} - A promise that resolves when the products are retrieved and sent in the response.
 */
export const getProductList = async ({}, res: Response) => {
  try {
    const products = await Products.find();
    res.json({products});
  } catch (error) {
    console.log(error);
  }
}

export const getFeaturedProducts = async ({}, res: Response) => {
  try {
    const products = await Products.find({featured: true});
    res.json({products});
  } catch (error) {
    console.log(error);
  }
}

/**
 * Adds a new product to the database.
 *
 * @param {Request} req - The request object containing the product data.
 * @param {Response} res - The response object used to send the created product.
 */
export const addProduct = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const product = await Products.create(body);
    res.json({ message: "Ok", info: product});
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const product = await Products.findByIdAndUpdate(id, body);
    res.json({ message: "Ok", info: product});
  } catch (error) {
    console.log(error);
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await Products.findByIdAndDelete(id);
    res.json({ message: "Ok", info: product});
  } catch (error) {
    res.json({ message: "Error", info: error});
    console.log(error);
  }
}