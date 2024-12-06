import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
dotenv.config();

const generateJWT = (userData: any) => {
  const { JWT_SECRET } = process.env;
  console.log("typeof userData: ", typeof userData);
  
  const token = jwt.sign(userData, JWT_SECRET!, { expiresIn: '30d' });
  return token;
}

const verifyToken = async (req: Request, res: Response) => {
  const token = req.params.token;
  
  const { JWT_SECRET } = process.env;
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET!) as JwtPayload;
    console.log("decoded: ", decoded);
    
    res.json({ message: decoded}); 
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

export const decodeToken = (token: string) => {
  const { JWT_SECRET } = process.env;
  
  return jwt.verify(token, JWT_SECRET!) as JwtPayload;
}

export { generateJWT, verifyToken }