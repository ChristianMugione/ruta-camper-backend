"use strict";
//middleware function
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const middleware = (req, res, next) => {
    const message = `Middleware: req.method: ${req.method}, req.url: ${req.url}`;
    console.log(message);
    console.log(req.headers);
    // res.locals.message = message;
    if (req.headers.authorization !== "admin") {
        console.log("no");
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    next();
};
exports.middleware = middleware;
