"use strict";
//middleware function
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const auth_1 = require("./auth");
const middleware = (req, res, next) => {
    const token = req.headers.token;
    const payload = (0, auth_1.decodeToken)(token);
    if (!payload) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const { id, role } = payload;
    req.body = { id, role };
    next();
};
exports.middleware = middleware;
