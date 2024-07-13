//middleware function

import { Request, Response, NextFunction } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  
    const message = `Middleware: req.method: ${req.method}, req.url: ${req.url}`;
    console.log(message);
    console.log(req.headers);
    // res.locals.message = message;
    if (req.headers.authorization !== "admin") {
      console.log("no");
      res.status(401).json({ message: "Unauthorized"});
      return;
      
    }
    next();
};


