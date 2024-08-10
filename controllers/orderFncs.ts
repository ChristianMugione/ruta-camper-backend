
import { Request, Response } from "express";
import Orders from "../models/orderModel";
import mongoose, { ObjectId, Types } from "mongoose";

//function getOrders
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Orders.find();
    res.json({ orders });
  } catch (error) {
    console.log(error);
  }
};

//function addOrder
export const addOrder = async (req: Request, res: Response) => {
  const body = req.body;
  const userId = new Types.ObjectId(req.body.userId);
  const newOrder = { ...body, userId: userId };
  try {
    const order = await Orders.create(newOrder);
    res.json({ message: "Ok", info: order });
  } catch (error) {
    console.log(error, newOrder);
  }
}