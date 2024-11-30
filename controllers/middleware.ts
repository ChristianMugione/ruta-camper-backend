//middleware function

import { Request, Response, NextFunction } from "express";
import { decodeToken } from "./auth";
import { JwtPayload } from "jsonwebtoken";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.headers.token as string;

    const payload: JwtPayload = decodeToken(token!); 

    if (!payload) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const { id, role } = payload;
    req.body = { id, role };

    next();
};


