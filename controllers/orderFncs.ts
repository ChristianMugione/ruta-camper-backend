
import { Request, Response } from "express";
import Orders from "../models/orderModel";
import mongoose, { ObjectId, Types } from "mongoose";
import { log } from "console";

//function getOrders
export const getOrders = async (req: Request, res: Response) => {
  console.log("req.params.userId: ", req.params.userId);
  console.log("req.headers.token: ", req.headers.token);
  
  const userId = new Types.ObjectId(req.params.userId);

  console.log("userId: ", userId);

  try {
    //get orders by userId
    const orders = await Orders.find({ userId });
    console.log(orders);    
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
    res.json({ message: "Error", info: error });
  }
}