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
exports.addOrder = exports.getOrders = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const mongoose_1 = require("mongoose");
//function getOrders
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.params.userId: ", req.params.userId);
    console.log("req.headers.token: ", req.headers.token);
    const userId = new mongoose_1.Types.ObjectId(req.params.userId);
    console.log("userId: ", userId);
    try {
        //get orders by userId
        const orders = yield orderModel_1.default.find({ userId });
        console.log(orders);
        res.json({ orders });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOrders = getOrders;
//function addOrder
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const userId = new mongoose_1.Types.ObjectId(req.body.userId);
    const newOrder = Object.assign(Object.assign({}, body), { userId: userId });
    try {
        const order = yield orderModel_1.default.create(newOrder);
        res.json({ message: "Ok", info: order });
    }
    catch (error) {
        console.log(error, newOrder);
    }
});
exports.addOrder = addOrder;
