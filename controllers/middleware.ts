//middleware function

import { Request, Response, NextFunction } from "express";
import { decodeToken } from "./auth";

export const middleware = (req: Request, res: Response, next: NextFunction) => {

    const message = `Middleware: req.method: ${req.method}, req.url: ${req.url}`;
    console.log(message);
    const token = req.headers.token as string;

    const decoded: any = decodeToken(token!); //todo, make it not any

    console.log(decoded._doc.name);
    
    // if (req.headers.authorization !== "admin") {
    //   console.log("no");
    //   res.status(401).json({ message: "Unauthorized"});
    //   return;
    
    // }
    next();
};


