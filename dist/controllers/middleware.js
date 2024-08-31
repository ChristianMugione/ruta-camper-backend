"use strict";
//middleware function
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const auth_1 = require("./auth");
const middleware = (req, res, next) => {
    const message = `Middleware: req.method: ${req.method}, req.url: ${req.url}`;
    console.log(message);
    const token = req.headers.token;
    const decoded = (0, auth_1.decodeToken)(token); //todo, make it not any
    console.log("Decoded name:", decoded._doc.name);
    // if (req.headers.authorization !== "admin") {
    //   console.log("no");
    //   res.status(401).json({ message: "Unauthorized"});
    //   return;
    // }
    next();
};
exports.middleware = middleware;
