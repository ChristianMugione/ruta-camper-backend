import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcryptjs";
import { generateJWT } from "./auth";

export const getUserList = async ({}, res: Response) => {
  try {
    const users = await User.find();
    res.json({users});
    console.log(users);
    
  } catch (error) {
    console.log(error);
  }
}

export const userLogin = async (req: Request, res: Response) => {
  const { usuario, password } = req.body;
  const user = usuario;
  console.log("Login: ", req.body);
  try {
    const userData = await User.findOne({ name: usuario });
    if (!userData) {
      console.log("User not found");
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //create token and send
    const userDataPlain = { ...userData };
    const token = generateJWT(userDataPlain);
    console.log(token);
  
    // Function generateJWT
    

    res.json({ message: "Login successful", token: token, userId: userData._id });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  console.log("Create User: ", req.body);
  
  const body = req.body;
  if (body.role === "") body.role = "user";
  
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;

  console.log("User created: ", body);
  try {
    const user = await User.create(body);
    res.json({ message: "Ok", info: user });
  } catch (error) {
    console.log(error);
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log("ID: ", id);
  
  try {
    const user = await User.findByIdAndDelete(id);
    res.json({ message: "Ok", info: user });
  } catch (error) {
    res.json({ message: "Error", info: error });
  }
};