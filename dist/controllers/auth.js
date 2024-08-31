"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateJWT = exports.decodeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generateJWT = (userData) => {
    const { JWT_SECRET } = process.env;
    console.log("typeof userData: ", typeof userData);
    const token = jsonwebtoken_1.default.sign(userData, JWT_SECRET, { expiresIn: '30d' });
    return token;
};
exports.generateJWT = generateJWT;
const verifyToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.params.token;
    const { JWT_SECRET } = process.env;
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        res.json({ message: decoded });
    }
    catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
});
exports.verifyToken = verifyToken;
const decodeToken = (token) => {
    const { JWT_SECRET } = process.env;
    // console.log("---------------", JWT_SECRET);
    return jsonwebtoken_1.default.verify(token, JWT_SECRET);
};
exports.decodeToken = decodeToken;
